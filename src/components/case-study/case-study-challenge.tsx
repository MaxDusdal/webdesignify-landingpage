'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { XSquare } from 'lucide-react';
import { CaseStudy, Media } from '../../../payload-types';

export default function CaseStudyChallenge({ caseStudy }: { caseStudy: CaseStudy }) {
    const challengeRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(challengeRef, { once: true, amount: 0.2 });

    const image = caseStudy.challenge?.imageGroup?.image as Media;

    return (
        <section className='w-full py-16 md:py-24 bg-background/50'>
            <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto'>
                    <motion.div
                        ref={challengeRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className='flex flex-col space-y-6'
                    >
                        <h2 className='text-3xl font-bold tracking-tighter'>Die Herausforderung</h2>

                        <p className='text-muted-foreground'>{caseStudy.challenge?.description}</p>

                        <ul className='space-y-4'>
                            {caseStudy.challenge?.challenges?.map((challenge, index) => (
                                <li key={index} className='flex items-start'>
                                    <XSquare className='h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0' />
                                    <span>{challenge.text}</span>
                                </li>
                            ))}
                        </ul>

                        <p className='text-muted-foreground'>{caseStudy.challenge?.summary}</p>
                    </motion.div>

                    {image && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='relative h-[400px] md:h-[500px] overflow-hidden rounded-lg border border-border/40'
                        >
                            <Image
                                src={image?.url || 'placeholder.svg?height=1080&width=1920'}
                                alt={image?.alt || 'placeholder'}
                                fill
                                className='object-cover'
                            />
                            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                                <span className='text-white font-medium'>{caseStudy.challenge?.imageGroup?.imageDescription}</span>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
