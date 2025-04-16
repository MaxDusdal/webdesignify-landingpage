'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CaseStudy } from '../../../payload-types';
import { PayloadLexicalReactRenderer, PayloadLexicalReactRendererContent } from '@atelier-disko/payload-lexical-react-renderer';
import { customElementRenderers } from '@/lib/lexicalRenderers';

export default function CaseStudyConclusion({ caseStudy }: { caseStudy: CaseStudy }) {
    const conclusionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(conclusionRef, { once: true, amount: 0.3 });

    return (
        <section ref={conclusionRef} className='w-full py-16 md:py-24 bg-background/50'>
            <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                <div className='max-w-3xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className='text-center mb-8'
                    >
                        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Fazit</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='prose max-w-none'
                    >
                        <PayloadLexicalReactRenderer
                            content={caseStudy.conclusion.content as PayloadLexicalReactRendererContent}
                            elementRenderers={{
                                ...customElementRenderers,
                                paragraph: ({ children }) => <p className='text-lg leading-relaxed'>{children}</p>,
                            }}
                        />
                        <p className='text-lg leading-relaxed'>
                            Das Projekt Restaurant Bergblick zeigt beispielhaft, wie traditionelle Gastronomie und digitale Innovation erfolgreich
                            kombiniert werden können. Durch strategische digitale Transformation konnten wir nicht nur die Online-Präsenz des
                            Restaurants erheblich verbessern, sondern auch betriebliche Abläufe optimieren und die Kundenzufriedenheit steigern.
                        </p>

                        <p className='text-lg leading-relaxed mt-4'>
                            Besonders das maßgeschneiderte Table Tracking System hat sich als Game-Changer erwiesen. Es automatisiert den
                            Reservierungsprozess, minimiert menschliche Fehler und ermöglicht dem Personal, sich auf das zu konzentrieren, was
                            wirklich wichtig ist: außergewöhnlichen Service für die Gäste.
                        </p>

                        <p className='text-lg leading-relaxed mt-4'>
                            Die messbaren Ergebnisse sprechen für sich: verdoppelte Online-Sichtbarkeit, nahezu verdoppelte Bewertungsrate und
                            drastisch verbesserte betriebliche Effizienz. Dies unterstreicht den Wert einer durchdachten digitalen Strategie auch für
                            traditionelle Branchen wie die Gastronomie.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='mt-10 text-center'
                    >
                        <h3 className='text-xl font-semibold mb-6'>Interesse an einem ähnlichen Projekt?</h3>
                        <Button size='lg' className='group'>
                            Kontaktieren Sie mich
                            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
