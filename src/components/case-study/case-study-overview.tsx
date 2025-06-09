'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeaderSection from '@/components/sections/header-section';
import { CaseStudy } from '../../../payload-types';
import { PayloadLexicalReactRenderer, PayloadLexicalReactRendererContent } from '@atelier-disko/payload-lexical-react-renderer';
import { customElementRenderers } from '@/lib/lexicalRenderers';

export default function CaseStudyOverview({ caseStudy }: { caseStudy: CaseStudy }) {
    const overviewRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(overviewRef, { once: true, amount: 0.2 });

    return (
        <section className='w-full py-24 md:py-32 bg-background'>
            <div className='container px-4 md:px-6 mx-auto '>
                <div className='max-w-3xl mx-auto mt-16'>
                    <motion.div ref={overviewRef} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
                        <HeaderSection headerType='h2' align='left' animate={false} title='Projektzusammenfassung' />

                        <PayloadLexicalReactRenderer
                            content={caseStudy.projectSummary?.content as PayloadLexicalReactRendererContent}
                            elementRenderers={{
                                ...customElementRenderers,
                                paragraph: ({ children }) => <p className='text-lg mb-4 text-muted-foreground leading-relaxed'>{children}</p>,
                            }}
                        />

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
                            <div className='space-y-4'>
                                <h3 className='text-xl font-semibold'>Projektzeitraum</h3>
                                <ul className='space-y-2'>
                                    {caseStudy.projectSummary?.timelineItems?.map((item, index) => (
                                        <li key={index} className='flex items-center'>
                                            <div className='h-1.5 w-1.5 rounded-full bg-primary mr-2'></div>
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-xl font-semibold'>Services</h3>
                                <ul className='space-y-2'>
                                    {caseStudy.projectSummary?.serviceItems?.map((item, index) => (
                                        <li key={index} className='flex items-center'>
                                            <div className='h-1.5 w-1.5 rounded-full bg-primary mr-2'></div>
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
