import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function SocialProof() {
    return (
        <section className='w-full py-12 md:py-24 bg-background'>
            <div className='container px-4 md:px-6 mx-auto max-w-screen-xl'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Kundenstimmen</h2>
                        <p className='max-w-[700px] text-muted-foreground md:text-xl'>
                            Die Kundenstimmen unserer Kunden, die uns mit ihren positiven Erfahrungen belohnen.
                        </p>
                    </div>
                </div>

                {/* Client Logos */}
                <div className='mx-auto flex flex-wrap justify-center gap-8 md:gap-12 py-8 md:py-12 opacity-80'>
                    <div className='flex items-center justify-center p-4'>
                        <Image
                            src='/client-logo/hardys.png?height=40&width=120'
                            alt='Client Logo 1'
                            width={120}
                            height={40}
                            className='h-8 md:h-10 w-auto object-contain opacity-80'
                        />
                    </div>
                    <div className='flex items-center justify-center p-4'>
                        <Image
                            src='/client-logo/elzgarten.png?height=40&width=120'
                            alt='Client Logo 2'
                            width={120}
                            height={40}
                            className='h-8 md:h-10 w-auto object-contain opacity-80'
                        />
                    </div>
                    <div className='flex items-center justify-center p-4'>
                        <Image
                            src='/client-logo/hwerk.png?height=40&width=120'
                            alt='Client Logo 3'
                            width={120}
                            height={40}
                            className='h-8 md:h-10 w-auto object-contain opacity-70'
                        />
                    </div>
                    <div className='flex items-center justify-center p-4'>
                        <Image
                            src='/client-logo/h-r-e.png?height=40&width=120'
                            alt='Client Logo 4'
                            width={120}
                            height={40}
                            className='h-8 md:h-10 w-auto object-contain opacity-80'
                        />
                    </div>
                </div>

                {/* Testimonials */}
                <div className='grid gap-8 md:grid-cols-3 md:gap-12 pt-8'>
                    {/* Testimonial 1 */}
                    <div className='flex flex-col gap-4 rounded-lg border border-border/40 bg-card p-6 shadow-sm'>
                        <div className='flex items-center gap-4'>
                            <Image
                                src='/placeholder.svg?height=60&width=60'
                                alt='Sarah Johnson'
                                width={60}
                                height={60}
                                className='rounded-full object-cover'
                            />
                            <div>
                                <h3 className='font-semibold'>Heinrich Dimura</h3>
                                <p className='text-sm text-muted-foreground'>Gastronom, Elzgarten & Hardys</p>
                            </div>
                        </div>
                        <blockquote className='text-muted-foreground'>
                            Duis do adipisicing ipsum minim laborum ullamco minim irure velit amet quis ad. Exercitation cupidatat nostrud consequat
                            sint.
                        </blockquote>
                    </div>

                    {/* Testimonial 2 */}
                    <div className='flex flex-col gap-4 rounded-lg border border-border/40 bg-card p-6 shadow-sm'>
                        <div className='flex items-center gap-4'>
                            <Image
                                src='/placeholder.svg?height=60&width=60'
                                alt='Michael Chen'
                                width={60}
                                height={60}
                                className='rounded-full object-cover'
                            />
                            <div>
                                <h3 className='font-semibold'>Michael Chen</h3>
                                <p className='text-sm text-muted-foreground'>Kevin Rüb, Geschäftsführer, H-R-E</p>
                            </div>
                        </div>
                        <blockquote className='text-muted-foreground'>
                            Duis do adipisicing ipsum minim laborum ullamco minim irure velit amet quis ad. Exercitation cupidatat nostrud consequat
                            sint.{' '}
                        </blockquote>
                    </div>

                    {/* Testimonial 3 */}
                    <div className='flex flex-col gap-4 rounded-lg border border-border/40 bg-card p-6 shadow-sm'>
                        <div className='flex items-center gap-4'>
                            <Image
                                src='/placeholder.svg?height=60&width=60'
                                alt='Emma Rodriguez'
                                width={60}
                                height={60}
                                className='rounded-full object-cover'
                            />
                            <div>
                                <h3 className='font-semibold'>Elina Dusdal</h3>
                                <p className='text-sm text-muted-foreground'>Geschäftsführerin, H-Werk</p>
                            </div>
                        </div>
                        <blockquote className='text-muted-foreground'>
                            Duis do adipisicing ipsum minim laborum ullamco minim irure velit amet quis ad. Exercitation cupidatat nostrud consequat
                            sint.
                        </blockquote>
                    </div>
                </div>

                {/* CTA */}
                <div className='flex justify-center mt-12'>
                    <Link href='#portfolio'>
                        <Button variant='outline' className='group'>
                            Case Studies
                            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
