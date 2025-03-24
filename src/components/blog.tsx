'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Blog() {
    const blogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach((card) => {
            observer.observe(card);
        });

        return () => {
            blogCards.forEach((card) => {
                observer.unobserve(card);
            });
        };
    }, []);

    const featuredPosts = [
        {
            id: 'responsive-design-trends',
            title: '7 Responsive Design Trends That Will Dominate 2023',
            excerpt:
                'Discover the latest responsive design techniques that are reshaping the web development landscape and how you can implement them in your projects.',
            image: '/placeholder.svg?height=400&width=600',
            date: 'June 15, 2023',
            readTime: '6 min read',
            author: 'Max Mustermann',
            category: 'Web Design',
        },
        {
            id: 'seo-for-developers',
            title: 'SEO for Developers: Technical Optimizations That Make a Difference',
            excerpt:
                'Learn how developers can contribute to SEO success through technical optimizations, structured data, and performance improvements.',
            image: '/placeholder.svg?height=400&width=600',
            date: 'May 28, 2023',
            readTime: '8 min read',
            author: 'Max Mustermann',
            category: 'SEO',
        },
    ];

    return (
        <section id='blog' className='w-full py-12 md:py-24 bg-background/50' ref={blogRef}>
            <div className='container px-4 md:px-6'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
                    <div className='space-y-2 mb-6 md:mb-0'>
                        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Letzte Beiträge</h2>
                        <p className='max-w-[500px] text-muted-foreground'>
                            Gedanken, Tipps und Erkenntnisse zum Webentwicklung und digitalen Marketing
                        </p>
                    </div>
                    <Button variant='outline' className='group'>
                        Alle Beiträge
                        <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </Button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
                    {featuredPosts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className={`blog-card group relative flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:translate-y-[-4px] opacity-0 ${
                                index === 0 ? 'translate-x-[-20px]' : 'translate-x-[20px]'
                            }`}
                        >
                            <div className='relative h-[200px] w-full overflow-hidden'>
                                <Image
                                    src={post.image || '/placeholder.svg'}
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
                                <h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>{post.title}</h3>
                                <p className='text-muted-foreground mb-4 flex-grow'>{post.excerpt}</p>

                                <div className='flex items-center text-sm text-muted-foreground mt-auto pt-4 border-t border-border/40'>
                                    <div className='flex items-center mr-4'>
                                        <User className='h-4 w-4 mr-1' />
                                        {post.author}
                                    </div>
                                    <div className='flex items-center mr-4'>
                                        <Calendar className='h-4 w-4 mr-1' />
                                        {post.date}
                                    </div>
                                    <div className='flex items-center'>
                                        <Clock className='h-4 w-4 mr-1' />
                                        {post.readTime}
                                    </div>
                                </div>
                            </div>

                            <div className='absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full'></div>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .blog-card.animate-in {
                    animation: fadeInUp 0.6s ease-out forwards;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) translateX(0);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) translateX(0);
                    }
                }
            `}</style>
        </section>
    );
}
