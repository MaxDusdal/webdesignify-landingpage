import Link from 'next/link';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className='border-t border-border/40 bg-background'>
            <div className='container px-4 md:px-6 py-12 mx-auto max-w-screen-lg'>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <div className='relative h-8 w-8 overflow-hidden rounded-md bg-secondary'>
                                <div className='absolute inset-0 flex items-center text-xs  justify-center text-secondary-foreground font-bold'>WD</div>
                            </div>
                            <span className='font-semibold text-xl'>Webdesignify</span>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                            Digitale Lösungen, die dein Unternehmen voranbringen.
                        </p>
                        <div className='flex space-x-4'>
                            <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                <Github className='h-5 w-5' />
                                <span className='sr-only'>GitHub</span>
                            </Link>
                            <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                <Linkedin className='h-5 w-5' />
                                <span className='sr-only'>LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-lg font-medium'>Services</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Web Design
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Custom Web Applications
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    E-commerce Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    SEO Optimization
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-lg font-medium'>Resources</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
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
                                <span className='text-muted-foreground'>hallo@webdesignify.com</span>
                            </li>
                        </ul>
                        <div className='pt-4'>
                            <Link
                                href='#contact'
                                className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                            >
                                Get in Touch
                            </Link>
                        </div>
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
