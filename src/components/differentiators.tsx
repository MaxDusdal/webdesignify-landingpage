'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Phone, CheckCircle } from 'lucide-react';

export default function Differentiators() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isHovering) return;

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        setMousePosition({ x: rotateY, y: rotateX });
    };

    // Reset rotation when not hovering
    useEffect(() => {
        if (!isHovering) {
            const timer = setTimeout(() => {
                setMousePosition({ x: 0, y: 0 });
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isHovering]);

    const differentiators = [
        {
            title: 'Höheres Ranking',
            description:
                'Alle Webseiten werden Suchmaschinen-optimiert. Mit externen Tools erfolgt die Prüfung technischer Umsetzung und inhaltsbasiertem SEO für maximale Sichtbarkeit.',
        },
        {
            title: 'Besseres Ergebnis',
            description:
                'Meine Webseiten werden von Grund auf mit dem Fokus erstellt, einen geschäftlichen Mehrwert für Ihr Unternehmen zu bieten und dabei auch noch gut auszusehen.',
        },
        {
            title: 'Auf allen Geräten perfekt',
            description:
                'Ich passe Webseiten an alle Geräte an und überprüfe diese im Nachhinein von Hand, damit Ihre Webseite reibungslos auf allen Geräten läuft.',
        },
        {
            title: 'Abgestimmtes Design',
            description:
                'Ich erstelle für Sie eine von Hand gefertigte Webseite und arbeite dabei nicht mit Vorlagen. So kann ich eine an Ihre Wünsche angepasste Webseite erstellen.',
        },
        {
            title: 'Kein Vorwissen von Ihnen',
            description:
                'Es gibt keinen Grund zur Sorge, wenn Sie noch keine Erfahrung im Bereich Online-Marketing sammeln konnten. Ich kümmere mich um Ihren Online-Auftritt, während Sie weiter die Geschäfte leiten.',
        },
        {
            title: 'Es ist Ihre Webseite',
            description:
                'Dank dem Content-Management-System haben Sie immer Zugriff auf Ihre Webseite und können Inhalte selbst bearbeiten, veröffentlichen oder löschen.',
        },
    ];

    return (
        <section id='about' className='w-full py-12 md:py-24 bg-secondary text-secondary-foreground'>
            <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Warum mit mir arbeiten?</h2>
                        <p className='max-w-[700px] text-primary-foreground/80 md:text-xl'>
                            Eine Webseite, die Ihre Bedürfnisse und Ihre Ziele erfüllt
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
                    {/* 3D Business Card Section - 1/3 width on desktop */}
                    <div className='flex flex-col items-center justify-center perspective'>
                        <div
                            className='business-card-container'
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            style={{
                                transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                                transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                            }}
                        >
                            <div className='business-card-front'>
                                <div className='business-card-content'>
                                    <div className='relative w-24 h-24 mb-4 overflow-hidden rounded-full border-2 border-accent/30'>
                                        <Image
                                            src='/placeholder.svg?height=96&width=96'
                                            alt='Profile Photo'
                                            width={96}
                                            height={96}
                                            className='object-cover'
                                        />
                                    </div>

                                    <h3 className='text-xl font-bold mb-1'>Max Dusdal</h3>
                                    <p className='text-sm text-primary-foreground/70 mb-4'>Web Designer & Developer</p>

                                    <div className='w-full space-y-2'>
                                        <div className='flex items-center gap-2 text-xs'>
                                            <Mail className='h-4 w-4 text-accent' />
                                            <span>hello@webdesignify.de</span>
                                        </div>
                                        <div className='flex items-center gap-2 text-xs'>
                                            <Phone className='h-4 w-4 text-accent' />
                                            <span>+49 123 456 7890</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='business-card-back'>
                                <div className='business-card-content'>
                                    <div className='logo mb-3'>
                                        <div className='relative h-10 w-10 overflow-hidden rounded-md bg-accent/20'>
                                            <div className='absolute inset-0 flex items-center justify-center text-accent font-bold'>W</div>
                                        </div>
                                    </div>
                                    <p className='text-xs text-primary-foreground/80 mb-4'>
                                        Mit über 8 Jahren Erfahrung in der Entwicklung von digitalen Lösungen, die das Wachstum Ihres Unternehmens fördern.
                                    </p>
                                    <div className='text-xs text-accent'>webdesignify.de</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Differentiators Section - 2/3 width on desktop */}
                    <div className='lg:col-span-2'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {differentiators.map((item, index) => (
                                <div key={index} className='flex gap-4'>
                                    <div className='mt-1 flex-shrink-0'>
                                        <div className='rounded-full bg-accent/20 p-1'>
                                            <CheckCircle className='h-5 w-5 text-accent' />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-lg mb-1'>{item.title}</h4>
                                        <p className='text-primary-foreground/80'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='mt-8 p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm'>
                            <h3 className='text-xl font-bold mb-3'>My Approach</h3>
                            <ul className='space-y-3'>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-1 flex-shrink-0 rounded-full bg-accent/20 p-1'>
                                        <CheckCircle className='h-4 w-4 text-accent' />
                                    </div>
                                    <span>Eine individuelle Lösung für Ihre Bedürfnisse</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-1 flex-shrink-0 rounded-full bg-accent/20 p-1'>
                                        <CheckCircle className='h-4 w-4 text-accent' />
                                    </div>
                                    <span>Eine individuelle Lösung für Ihre Bedürfnisse</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <div className='mt-1 flex-shrink-0 rounded-full bg-accent/20 p-1'>
                                        <CheckCircle className='h-4 w-4 text-accent' />
                                    </div>
                                    <span>Eine individuelle Lösung für Ihre Bedürfnisse</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective {
                    perspective: 1000px;
                    padding: 20px;
                }

                .business-card-container {
                    width: 280px;
                    height: 340px;
                    position: relative;
                    transform-style: preserve-3d;
                    cursor: pointer;
                    will-change: transform;
                }

                .business-card-front,
                .business-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5), 0 5px 10px -7px rgba(0, 0, 0, 0.3);
                }

                .business-card-front {
                    background: linear-gradient(135deg, rgba(255, 240, 220, 0.1) 0%, rgba(255, 240, 220, 0.05) 100%);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 240, 220, 0.1);
                    transform: translateZ(10px);
                }

                .business-card-back {
                    background: linear-gradient(135deg, rgba(255, 240, 220, 0.05) 0%, rgba(255, 240, 220, 0.02) 100%);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 240, 220, 0.05);
                    transform: rotateY(180deg) translateZ(10px);
                }

                .business-card-container:hover .business-card-front {
                    transform: rotateY(-180deg) translateZ(10px);
                }

                .business-card-container:hover .business-card-back {
                    transform: rotateY(0) translateZ(10px);
                }

                .business-card-front,
                .business-card-back,
                .business-card-container:hover .business-card-front,
                .business-card-container:hover .business-card-back {
                    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                }

                .business-card-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    height: 100%;
                    padding: 20px;
                }
            `}</style>
        </section>
    );
}
