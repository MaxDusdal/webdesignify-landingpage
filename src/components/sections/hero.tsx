import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Layout, Zap } from 'lucide-react';
import { MyLottieComponentDynamic } from '../hero-lottie';
import Link from 'next/link';
export default function Hero() {
    return (
        <section className='relative overflow-hidden py-8 md:py-16 lg:py-32 bg-secondary text-secondary-foreground'>
            <div className='container px-4 md:px-6 mx-auto max-w-screen-xl'>
                <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center '>
                    <div className='flex flex-col gap-6 lg:order-first order-last'>
                        <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
                            <span className='text-accent'>Digitale Lösungen,</span> die Ihr Unternehmen voranbringen.
                        </h1>
                        <p className='text-xl text-secondary-foreground/80'>
                            Ob Online-Präsenz, Kundenportal oder interne App – ich entwickle digitale Lösungen, die auf Ihre Unternehmensziele
                            einzahlen.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 mt-2'>
                            <Button size='lg' className='group' asChild>
                                <Link href='/kontakt'>
                                    Lassen Sie uns über Ihr Projekt reden
                                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                                </Link>
                            </Button>
                        </div>

                        <div className='flex flex-wrap gap-6 mt-4'>
                            <div className='flex items-center gap-2'>
                                <Layout className='h-5 w-5 text-accent' />
                                <span className='text-sm font-medium'>Webdesign</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Code className='h-5 w-5 text-accent' />
                                <span className='text-sm font-medium'>Webentwicklung</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Zap className='h-5 w-5 text-accent' />
                                <span className='text-sm font-medium'>Softwareentwicklung</span>
                            </div>
                        </div>
                    </div>

                    <div className='relative lg:h-[400px] w-[100vw] lg:w-full flex items-center justify-center -ml-4'>
                        <MyLottieComponentDynamic />
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className='absolute top-1/2 left-0 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl'></div>
            <div className='absolute bottom-0 right-0 h-96 w-96 translate-y-1/2 translate-x-1/4 rounded-full bg-accent/10 blur-3xl'></div>
        </section>
    );
}
