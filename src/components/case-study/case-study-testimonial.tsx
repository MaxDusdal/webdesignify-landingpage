'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { CaseStudy, Media } from '../../../payload-types';

export default function CaseStudyTestimonial({ caseStudy }: { caseStudy: CaseStudy }) {
    const testimonialRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(testimonialRef, { once: true, amount: 0.4 });
    const image = caseStudy.testimonial?.author?.image as Media;

    return (
        <section ref={testimonialRef} className='w-full py-16 md:py-24 bg-background'>
            <div className='container px-4 md:px-6 mx-auto max-w-5xl'>
                <div className='max-w-4xl mx-auto'>
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7 }}
                        className='relative rounded-xl bg-secondary/5 p-8 md:p-10'
                    >
                        <div className='absolute top-4 left-4 text-primary/30'>
                            <Quote className='h-12 w-12' />
                        </div>

                        <div className='relative z-10'>
                            <p className='text-xl md:text-2xl italic text-foreground leading-relaxed mb-6'>{caseStudy.testimonial?.quote}</p>

                            <div className='flex items-center'>
                                {image && (
                                    <div className='relative w-16 h-16 rounded-full overflow-hidden mr-4'>
                                        <Image
                                            src={image.url || '/placeholder.svg?height=200&width=200'}
                                            alt={image.alt || 'Stefan Meyer'}
                                            fill
                                            className='object-cover'
                                        />
                                    </div>
                                )}
                                <div>
                                    <div className='font-semibold text-foreground'>{caseStudy.testimonial?.author?.name}</div>
                                    <div className='text-sm text-muted-foreground'>{caseStudy.testimonial?.author?.title}</div>
                                </div>
                            </div>
                        </div>
                    </motion.blockquote>
                </div>
            </div>
        </section>
    );
}
