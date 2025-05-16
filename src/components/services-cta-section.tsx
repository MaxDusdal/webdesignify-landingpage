import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServicesCtaSection({ header, description, buttonText }: { header: string, description: string, buttonText: string }) {
    return (
        <section className='w-full py-12 md:py-24 bg-secondary text-secondary-foreground'>
            <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between'>
                    <div className='space-y-4 md:w-2/3'>
                        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>{header}</h2>
                        <p className='text-xl text-primary-foreground/80'>
                            {description}
                        </p>
                    </div>
                    <div className='md:w-1/3 flex justify-center md:justify-end'>
                        <Button size='lg' variant='default' className='group' asChild>
                            <a href="/kontakt">
                                {buttonText}
                                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
