import Link from 'next/link';
import { TrendingUp, Globe, Server, MessageCircle } from 'lucide-react';

export default function Services() {
    const services = [
        {
            id: 'strategie-optimierung',
            title: 'Strategie Optimierung',
            description:
                'Sie haben bereits einen Online-Auftritt, aber nutzen das gesamte Potential der digitalen Vermarktung nicht aus? Ich analysiere und optimiere Ihren Online-Auftritt für das bestmögliche Ergebnis.',
            icon: TrendingUp,
        },
        {
            id: 'webdesign',
            title: 'Webseite',
            description:
                'Ich konzipiere, designe und programmiere Ihre Webseite aus einer Hand und sorge dafür, dass ihre Webseite elegant, erfolgreich und nutzerfreundlich ist.',
            icon: Globe,
        },
        {
            id: 'it-loesungen',
            title: 'IT-Lösungen',
            description:
                'Sie benötigen IT-Lösungen für Ihr Unternehmen, wie z. B. Online-Buchungs-Systeme, E-Mail-Server oder auch Softwarelösungen. Ich berate Sie und konzipiere eine Lösung für Sie.',
            icon: Server,
        },
        {
            id: 'beratung',
            link: '/kontakt',
            title: 'Beratung',
            description:
                'Sie möchten von der Reichweite des Online-Marketings profitieren? Ich helfe Ihnen, ich berate Sie und konzipiere professionelle Lösungen genau abgestimmt auf Ihr Anliegen.',
            icon: MessageCircle,
        },
    ];

    return (
        <section id='services' className='w-full py-12 md:py-24 bg-background/50'>
            <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Was ich Ihnen anbiete</h2>
                        <p className='max-w-[700px] text-muted-foreground md:text-xl'>
                            Komplexe digitale Lösungen, die auf Ihre Bedürfnisse abgestimmt sind
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Link key={service.id} href={service.link ?? `/services/${service.id}`} className='group flex flex-col h-full'>
                                <div className='flex flex-col h-full rounded-lg border border-border/40 bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20 hover:translate-y-[-4px]'>
                                    <div className='mb-4 rounded-full bg-secondary p-3 w-12 h-12 flex items-center justify-center'>
                                        <Icon className='h-6 w-6 text-secondary-foreground' />
                                    </div>

                                    <h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>{service.title}</h3>

                                    <p className='text-muted-foreground flex-grow'>{service.description}</p>

                                    <div className='mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center'>
                                        {service.link ? 'Jetzt Beratung vereinbaren' : 'Mehr erfahren'}
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='16'
                                            height='16'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1'
                                        >
                                            <path d='M5 12h14' />
                                            <path d='m12 5 7 7-7 7' />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
