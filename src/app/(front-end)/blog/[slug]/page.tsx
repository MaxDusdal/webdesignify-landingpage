import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import payloadConfig from '@/app/payload.config';
import { getPayload } from 'payload';
import { PayloadLexicalReactRenderer, PayloadLexicalReactRendererContent } from '@atelier-disko/payload-lexical-react-renderer';
import { customElementRenderers } from '@/lib/lexicalRenderers';
import { RefreshRouteOnSave } from '@/components/refresh-route-on-save';

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const payload = await getPayload({ config: payloadConfig });
    const posts = await payload.find({
        collection: 'blog',
        where: {
            slug: { equals: params.slug },
        },
    });

    const relatedPosts = await payload.find({
        collection: 'blog',
        where: {
            slug: { not_equals: params.slug },
        },
    });

    const postData = posts.docs[0];
    console.log(postData);

    return (
        <main>
            {/* Hero Section */}
            <div className='relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden'>
                <Image src={postData.image?.url ?? '/placeholder.svg'} alt={postData.title} fill className='object-cover' priority />
                <div className='absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent'></div>
            </div>

            <div className='container px-4 md:px-6 -mt-20 relative z-10'>
                <div className='max-w-3xl mx-auto bg-card rounded-lg border border-border/40 shadow-lg p-6 md:p-8 lg:p-10'>
                    <Badge variant='secondary' className='bg-primary text-primary-foreground mb-4'>
                        {postData.category}
                    </Badge>

                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4'>{postData.title}</h1>

                    <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/40'>
                        <div className='flex items-center gap-2'>
                            <div className='relative w-8 h-8 rounded-full overflow-hidden'>
                                <Image
                                    src={postData.author?.image?.url ?? '/placeholder.svg'}
                                    alt={postData.author?.name ?? ''}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <span>{postData.author?.name}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Calendar className='h-4 w-4' />
                            <span>{new Date(postData.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                        </div>
                        {postData.readTime && (
                            <div className='flex items-center gap-1'>
                                <Clock className='h-4 w-4' />
                                <span>{postData.readTime} Minuten Lesezeit</span>
                            </div>
                        )}
                    </div>

                    {/* Blog Content */}
                    <div className='prose prose-lg max-w-none'>
                        <PayloadLexicalReactRenderer
                            content={postData.content as PayloadLexicalReactRendererContent}
                            elementRenderers={customElementRenderers}
                        />
                    </div>

                    {/* Author Bio */}
                    <div className='mt-12 p-6 bg-card rounded-lg border border-border/40 flex flex-col md:flex-row gap-6 items-center md:items-start'>
                        <div className='relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0'>
                            <Image
                                src={postData.author?.image?.url ?? '/placeholder.svg'}
                                alt={postData.author?.name ?? ''}
                                fill
                                className='object-cover'
                            />
                        </div>
                        <div>
                            <h3 className='text-lg font-bold mb-2'>About {postData.author?.name}</h3>
                            <p className='text-muted-foreground mb-4'>{postData.author?.bio}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.docs.length > 0 && (
                <div className='container px-4 md:px-6 py-16'>
                    <div className='max-w-3xl mx-auto'>
                        <h2 className='text-2xl font-bold mb-6'>Weitere Beiträge</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {relatedPosts.docs.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.id}`}
                                    className='group relative flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20'
                                >
                                    <div className='relative h-[140px] w-full overflow-hidden'>
                                        <Image
                                            src={relatedPost.image?.url || '/placeholder.svg'}
                                            alt={relatedPost.title}
                                            fill
                                            className='object-cover transition-transform duration-500 group-hover:scale-105'
                                        />
                                        <div className='absolute top-2 left-2'>
                                            <Badge variant='secondary' className='bg-primary/80 text-primary-foreground text-xs'>
                                                {relatedPost.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className='p-4'>
                                        <h3 className='text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2'>
                                            {relatedPost.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <RefreshRouteOnSave />
        </main>
    );
}
