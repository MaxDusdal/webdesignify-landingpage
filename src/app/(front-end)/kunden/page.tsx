import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Projects() {
    const projects = [
        {
            id: 'restaurant-bergblick',
            title: 'Restaurant Bergblick',
            subtitle: 'Digitale Transformation & Custom Booking System',
            image: '/placeholder.svg?height=600&width=800',
            description:
                'Komplettes Redesign einer Restaurant-Website mit maßgeschneidertem Tischreservierungssystem, das die Effizienz steigerte und die Online-Sichtbarkeit verdoppelte.',
            tags: ['Webdesign', 'Custom Software', 'SEO'],
        },
        {
            id: 'tech-startup',
            title: 'TechVision Startup',
            subtitle: 'SaaS Platform & Dashboard',
            image: '/placeholder.svg?height=600&width=800',
            description:
                'Entwicklung einer modernen SaaS-Plattform mit responsivem Dashboard für ein Tech-Startup, das die Nutzerbindung um 87% steigerte.',
            tags: ['Web App', 'UI/UX', 'Frontend'],
        },
        {
            id: 'ecommerce',
            title: 'ModeSphere',
            subtitle: 'E-Commerce Platform Redesign',
            image: '/placeholder.svg?height=600&width=800',
            description:
                'Vollständiges Redesign eines E-Commerce-Shops mit optimierter Customer Journey, was zu einer Steigerung der Konversionsrate um 143% führte.',
            tags: ['E-Commerce', 'UX Design', 'Performance'],
        },
    ];

    return (
        <main className='py-16 md:py-24'>
            <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                <div className='mb-12 text-center'>
                    <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Projekte</h1>
                    <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
                        Entdecken Sie meine erfolgreich umgesetzten Projekte und Fallstudien aus verschiedenen Branchen
                    </p>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projekte/${project.id}`}
                            className='group flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card transition-all duration-200 hover:shadow-md hover:border-primary/20 hover:translate-y-[-4px]'
                        >
                            <div className='relative h-[200px] overflow-hidden'>
                                <Image
                                    src={project.image || '/placeholder.svg'}
                                    alt={project.title}
                                    fill
                                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                                />
                                <div className='absolute top-4 left-4 flex gap-2 flex-wrap'>
                                    {project.tags.map((tag, i) => (
                                        <Badge key={i} variant='secondary' className='bg-primary/80 text-primary-foreground'>
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className='flex-1 p-6'>
                                <h2 className='text-xl font-bold mb-1 group-hover:text-primary transition-colors'>{project.title}</h2>
                                <p className='text-sm text-muted-foreground mb-4'>{project.subtitle}</p>
                                <p className='text-muted-foreground mb-4'>{project.description}</p>

                                <div className='mt-auto pt-4 flex items-center text-primary font-medium text-sm'>
                                    Fallstudie ansehen
                                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className='mt-16 text-center'>
                    <h2 className='text-2xl font-bold mb-4'>Haben Sie ein Projekt im Sinn?</h2>
                    <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                        Lassen Sie uns gemeinsam Ihr nächstes digitales Projekt zum Leben erwecken. Ich freue mich auf Ihre Herausforderungen!
                    </p>
                    <Button size='lg' asChild>
                        <Link href='/contact'>Projekt besprechen</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
