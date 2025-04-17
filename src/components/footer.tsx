'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import Logo from '@/components/logo';
export default function Footer() {
    const pathname = usePathname();
    const isContactPage = pathname === '/kontakt';

    return (
        <footer
            className={isContactPage ? 'bg-background border-t border-border' : 'relative mt-42 pt-24 md:pt-20 bg-background border-t border-border'}
        >
            {/* CTA Card - Only shown when not on contact page */}
            {!isContactPage && (
                <div className='absolute -top-22 left-1/2 transform -translate-x-1/2 w-full max-w-3xl'>
                    <div className='mx-4 md:mx-6 bg-secondary rounded-lg shadow-xl overflow-hidden'>
                        <div className='relative p-8 md:p-10'>
                            <div className='absolute top-0 right-0 w-40 h-40 bg-secondary-foreground/5 rounded-full translate-x-16 -translate-y-16'></div>
                            <div className='absolute bottom-0 left-0 w-24 h-24 bg-secondary-foreground/5 rounded-full -translate-x-10 translate-y-10'></div>

                            <div className='relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6'>
                                <div className='space-y-2 max-w-lg'>
                                    <h3 className='text-xl md:text-2xl font-bold text-secondary-foreground'>
                                        Bereit für Ihre digitale Transformation?
                                    </h3>
                                    <p className='text-secondary-foreground/80'>
                                        Lassen Sie uns gemeinsam Ihre Online-Präsenz auf das nächste Level bringen.
                                    </p>
                                </div>
                                <Button variant='default' className='group whitespace-nowrap'>
                                    <Link href='/kontakt'>Kontakt aufnehmen</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div
                className={
                    isContactPage ? 'container px-4 md:px-6 py-12 mx-auto max-w-screen-lg' : 'container px-4 md:px-6 py-16 mx-auto max-w-screen-lg'
                }
            >
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='space-y-4'>
                        <Logo />
                        <p className='text-sm text-muted-foreground'>Digitale Lösungen, die Ihr Unternehmen voranbringen.</p>
                        <div className='flex space-x-4'>
                            <Link
                                href='https://github.com/MaxDusdal'
                                target='_blank'
                                className='text-muted-foreground hover:text-foreground transition-colors'
                            >
                                <Github className='h-5 w-5' />
                                <span className='sr-only'>GitHub</span>
                            </Link>
                            <Link
                                href='https://www.linkedin.com/in/maximilian-tim-dusdal-b09b1226b/'
                                target='_blank'
                                className='text-muted-foreground hover:text-foreground transition-colors'
                            >
                                <Linkedin className='h-5 w-5' />
                                <span className='sr-only'>LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-lg font-medium'>Services</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <Link
                                    href='/services/strategie-optimierung'
                                    className='text-muted-foreground hover:text-foreground transition-colors'
                                >
                                    Strategie-Optimierung
                                </Link>
                            </li>
                            <li>
                                <Link href='/services/webdesign' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Webentwicklung
                                </Link>
                            </li>
                            <li>
                                <Link href='/services/it-loesungen' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    IT-Lösungen
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-lg font-medium'>Resourcen</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href='#case-studies' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href='/blog' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href='#faq' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-lg font-medium'>Kontakt</h3>
                        <ul className='space-y-2 text-sm'>
                            <li className='flex items-start gap-2'>
                                <Mail className='h-5 w-5 text-muted-foreground' />
                                <span className='text-muted-foreground'>hi@webdesignify.de</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4'>
                    <p className='text-xs text-muted-foreground'>&copy; {new Date().getFullYear()} Webdesignify.</p>
                    <div className='flex gap-4 text-xs'>
                        <Link href='/impressum' className='text-muted-foreground hover:text-foreground transition-colors'>
                            Impressum
                        </Link>
                        <Link href='/datenschutz' className='text-muted-foreground hover:text-foreground transition-colors'>
                            Datenschutz
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
