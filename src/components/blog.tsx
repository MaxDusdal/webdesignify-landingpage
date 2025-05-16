'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Blog, Media } from '../../payload-types';

export default function Blog() {
    const blogRef = useRef<HTMLDivElement>(null);
    const [posts, setPosts] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fetch blog posts from Payload CMS
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/blog?limit=2&sort=-date');
                const data = await response.json();

                if (data.docs && Array.isArray(data.docs)) {
                    setPosts(data.docs);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        if (!blogRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(blogRef.current);

        return () => {
            if (blogRef.current) {
                observer.unobserve(blogRef.current);
            }
        };
    }, []);

    return (
        <section id='blog' className='w-full pt-12 md:pt-24 bg-background/50' ref={blogRef}>
            <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
                    <div className='space-y-2 mb-6 md:mb-0'>
                        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Letzte Beiträge</h2>
                        <p className='max-w-[500px] text-muted-foreground'>
                            Gedanken, Tipps und Erkenntnisse zum Webentwicklung und digitalen Marketing
                        </p>
                    </div>
                    <Button variant='outline' className='group' asChild>
                        <Link href='/blog'>
                            Alle Beiträge
                            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                        </Link>
                    </Button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
                    {isLoading
                        ? // Loading skeleton
                          Array.from({ length: 2 }).map((_, index) => (
                              <div key={`skeleton-${index}`} className='animate-pulse rounded-lg overflow-hidden border border-border/40 bg-card'>
                                  <div className='h-[200px] w-full bg-muted'></div>
                                  <div className='p-6 space-y-4'>
                                      <div className='h-6 bg-muted rounded w-3/4'></div>
                                      <div className='h-4 bg-muted rounded w-full'></div>
                                      <div className='h-4 bg-muted rounded w-full'></div>
                                      <div className='h-4 bg-muted rounded w-2/3'></div>
                                      <div className='pt-4 border-t border-border/40 flex gap-3'>
                                          <div className='h-4 bg-muted rounded w-1/4'></div>
                                          <div className='h-4 bg-muted rounded w-1/4'></div>
                                          <div className='h-4 bg-muted rounded w-1/4'></div>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : posts.map((post, index) => (
                              <Link
                                  key={post.id}
                                  href={`/blog/${post.slug}`}
                                  className={`group relative flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card shadow-sm transition-all duration-500 hover:shadow-md  hover:translate-y-[-4px] ${
                                      isVisible ? `animate-fade-in-${index + 1}` : 'opacity-0'
                                  }`}
                              >
                                  <div className='relative h-[200px] w-full overflow-hidden'>
                                      <Image
                                          src={(post.image as Media)?.url || '/placeholder.svg'}
                                          alt={post.title}
                                          fill
                                          className='object-cover transition-transform duration-500 group-hover:scale-105'
                                      />
                                      <div className='absolute top-4 left-4'>
                                          <Badge variant='secondary' className='bg-primary text-primary-foreground'>
                                              {post.category}
                                          </Badge>
                                      </div>
                                  </div>

                                  <div className='flex flex-col flex-grow p-6'>
                                      <h3 className='text-xl font-bold mb-2 group-hover:text-secondary transition-colors'>{post.title}</h3>
                                      <p className='text-muted-foreground mb-4 flex-grow'>{post.excerpt}</p>

                                      <div className='flex items-center text-sm text-muted-foreground mt-auto pt-4 border-t border-border/40'>
                                          <div className='flex items-center mr-4'>
                                              <Calendar className='h-4 w-4 mr-1' />
                                              {new Date(post.date).toLocaleDateString('de-DE', {
                                                  day: '2-digit',
                                                  month: '2-digit',
                                                  year: 'numeric',
                                              })}
                                          </div>
                                          {post.readTime && (
                                              <div className='flex items-center'>
                                                  <Clock className='h-4 w-4 mr-1' />
                                                  {post.readTime} min Lesezeit
                                              </div>
                                          )}
                                      </div>
                                  </div>
                              </Link>
                          ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) translateY(0);
                    }
                }

                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) translateY(0);
                    }
                }

                .animate-fade-in-1 {
                    animation: fadeInLeft 0.6s ease-out forwards;
                }

                .animate-fade-in-2 {
                    animation: fadeInRight 0.6s ease-out 0.2s forwards;
                }
            `}</style>
        </section>
    );
}
