'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import HeaderSection from '@/components/header-section';

export default function Differentiators() {
    const cardRef = useRef<HTMLDivElement>(null);
    const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });
    const diffRef = useRef<HTMLDivElement>(null);
    const isDiffInView = useInView(diffRef, { once: true, amount: 0.2 });

    const differentiators = [
        {
            title: 'Höheres Ranking bei Suchmaschinen',
            description:
                'Jede Webseite wird vollständig SEO-optimiert entwickelt. Mit professionellen Tools prüfe ich technische und inhaltliche Faktoren, um Ihre maximale Sichtbarkeit online zu gewährleisten.',
        },
        {
            title: 'Geschäftswertorientierte Lösungen',
            description:
                'Ich erstelle keine Webseiten aus rein ästhetischen Gründen. Mein Fokus liegt auf messbarem Mehrwert für Ihr Unternehmen - attraktives Design ist dabei selbstverständlich.',
        },
        {
            title: 'Optimierte Darstellung auf allen Geräten',
            description:
                'Von Smartphones bis Desktop - jede Webseite wird individuell für alle Bildschirmgrößen optimiert und manuell getestet, um ein nahtloses Nutzererlebnis zu garantieren.',
        },
        {
            title: 'Maßgeschneidertes Design',
            description:
                'Keine vorgefertigten Templates, sondern individuelle Gestaltung. Ihr einzigartiges Unternehmen verdient eine einzigartige Webseite, die perfekt zu Ihrer Marke passt.',
        },
        {
            title: 'Keine Vorkenntnisse erforderlich',
            description:
                'Sie können sich auf Ihr Kerngeschäft konzentrieren, während ich die technischen Aspekte übernehme. Ihre Webpräsenz wird professionell gestaltet - ohne dass Sie sich einarbeiten müssen.',
        },
        {
            title: 'Volle Kontrolle über Ihre Webseite',
            description:
                'Mit einem benutzerfreundlichen Content-Management-System behalten Sie die volle Kontrolle und können Inhalte einfach selbst aktualisieren, sobald die Seite live ist.',
        },
    ];

    return (
        <section id='about' className='w-full py-12 md:py-24 bg-secondary text-secondary-foreground'>
            <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='flex flex-col items-center justify-center space-y-4 text-center'
                >
                    <HeaderSection
                        headerType='h2'
                        title='Warum mit mir arbeiten?'
                        description='Eine strategisch entwickelte Webseite, die Ihre Unternehmensziele aktiv unterstützt'
                        variant='secondary'
                    />
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
                    {/* Business Card Section - 1/3 width on desktop */}
                    <div ref={cardRef} className='flex flex-col items-center justify-center'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isCardInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.7 }}
                            className='relative w-[280px] bg-gradient-to-br from-secondary-foreground/10 to-secondary-foreground/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-accent/10'
                        >
                            <div className='flex flex-col items-center justify-center p-6 text-center'>
                                <div className='relative w-24 h-24 mb-4 overflow-hidden rounded-full border-2 border-accent/30'>
                                    <Image
                                        src='/images/max_dusdal.jpg'
                                        alt='Profile Photo'
                                        width={96}
                                        height={96}
                                        className='object-cover w-full h-full object-center'
                                    />
                                </div>

                                <h3 className='text-xl font-bold mb-1'>Max Dusdal</h3>
                                <p className='text-sm text-primary-foreground/70 mb-4'>Webentwickler</p>

                                <div className='w-full space-y-3'>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <Mail className='h-4 w-4 text-accent' />
                                        <span>hi@webdesignify.de</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <Phone className='h-4 w-4 text-accent' />
                                        <span>+49 174 525 9553</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Differentiators Section - 2/3 width on desktop */}
                    <div ref={diffRef} className='lg:col-span-2'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {differentiators.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className='flex gap-4'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isDiffInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className='mt-1 flex-shrink-0'>
                                        <motion.div
                                            className='rounded-full bg-accent/20 p-1'
                                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--accent)/0.3)' }}
                                        >
                                            <CheckCircle className='h-5 w-5 text-accent' />
                                        </motion.div>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-lg mb-1'>{item.title}</h4>
                                        <p className='text-primary-foreground/70    '>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
