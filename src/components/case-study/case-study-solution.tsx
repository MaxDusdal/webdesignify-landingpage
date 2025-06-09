'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CaseStudy } from '../../../payload-types';
import HeaderSection from '@/components/sections/header-section';
import Link from 'next/link';

export default function CaseStudySolution({ caseStudy }: { caseStudy: CaseStudy }) {
    const solutionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(solutionRef, { once: true, amount: 0.2 });

    // Get the first tab as default if available
    const defaultTabValue = caseStudy.solution?.tabs?.[0]?.value || 'website';

    return (
        <section ref={solutionRef} className='w-full py-16 md:py-24 bg-background'>
            <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                <div className='max-w-5xl mx-auto'>
                    <HeaderSection headerType='h2' title='Unsere Lösung' />

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='flex flex-col space-y-6'
                        >
                            <p className='text-muted-foreground mb-6'>
                                {caseStudy.solution?.description ||
                                    'Wir entwickelten eine umfassende digitale Strategie, die sowohl die Onlinepräsenz als auch die betrieblichen Abläufe des Restaurants revolutionierte.'}
                            </p>

                            <ul className='space-y-4'>
                                {caseStudy.solution?.points?.map((solution, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className='flex items-start'
                                    >
                                        <CheckCircle className='h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0' />
                                        <span>{solution.text}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {caseStudy.inHouseSoftware && (
                                <div className='mt-6 pt-6 border-t border-border/40'>
                                    <h3 className='text-xl font-semibold mb-4'>{caseStudy.inHouseSoftware.title}</h3>
                                    <p className='text-muted-foreground mb-4'>{caseStudy.inHouseSoftware.description}</p>
                                    <ul className='space-y-2 mb-6'>
                                        {caseStudy.inHouseSoftware.points?.map((point, index) => (
                                            <li key={index} className='flex items-center'>
                                                <div className='h-1.5 w-1.5 rounded-full bg-primary mr-2'></div>
                                                <span>{point.text}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {caseStudy.inHouseSoftware.cta?.link && (
                                        <Button className='group' asChild>
                                            <Link href={caseStudy.inHouseSoftware.cta.link} target='_blank'>
                                                {caseStudy.inHouseSoftware.cta.text}
                                                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {caseStudy.solution?.tabs && caseStudy.solution.tabs.length > 0 && (
                                <Tabs defaultValue={defaultTabValue} className='w-full'>
                                    <TabsList className={`grid grid-cols-${caseStudy.solution.tabs.length} mb-8`}>
                                        {caseStudy.solution.tabs.map((tab) => (
                                            <TabsTrigger key={tab.value} value={tab.value}>
                                                {tab.title}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>

                                    {caseStudy.solution.tabs.map((tab) => (
                                        <TabsContent key={tab.value} value={tab.value} className='mt-0'>
                                            <div className='relative h-[400px] overflow-hidden rounded-lg border border-border/40'>
                                                {tab.image && typeof tab.image !== 'number' && tab.image.url && (
                                                    <Image src={tab.image.url} alt={tab.title} fill className='object-cover' />
                                                )}
                                            </div>
                                            <p className='mt-4 text-sm text-muted-foreground'>{tab.description}</p>
                                        </TabsContent>
                                    ))}
                                </Tabs>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
