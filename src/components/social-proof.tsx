import Image from 'next/image';
import { cn } from '@/lib/utils';
import HeaderSection from '@/components/header-section';

// ClientLogo Component
function ClientLogo({ src, alt, opacity = 80 }: { src: string; alt: string; opacity?: number }) {
    return (
        <div className='flex items-center justify-center p-4'>
            <Image src={src} alt={alt} width={120} height={40} className={`h-8 md:h-10 w-auto object-contain opacity-${opacity}`} />
        </div>
    );
}

// Testimonial Component
function Testimonial({
    imageSrc,
    altText,
    name,
    position,
    quote,
    variant = 'default',
}: {
    imageSrc: string;
    altText: string;
    name: string;
    position: string;
    quote: string;
    variant?: 'default' | 'secondary';
}) {
    return (
        <div
            className={cn(
                'flex flex-col gap-4 rounded-lg  p-6',
                variant === 'default' ? '' : 'border-secondary/40 bg-secondary-foreground/10 border  shadow-sm '
            )}
        >
            <div className='flex items-center gap-4'>
                <Image src={imageSrc} alt={altText} width={60} height={60} className='rounded-full object-cover w-12 h-12' />
                <div>
                    <h3 className={cn('font-semibold', variant === 'default' ? '' : 'text-secondary-foreground')}>{name}</h3>
                    <p className={cn('text-sm', variant === 'default' ? 'text-muted-foreground' : 'text-secondary-foreground/80')}>{position}</p>
                </div>
            </div>
            <blockquote className={cn(variant === 'default' ? 'text-muted-foreground' : 'text-secondary-foreground/80')}>{quote}</blockquote>
        </div>
    );
}

export interface SocialProofProps {
    variant?: 'default' | 'secondary';
    showClientLogos?: boolean;
}

export default function SocialProof({ variant = 'default', showClientLogos = true }: SocialProofProps) {
    const clientLogos = [
        { src: '/client-logo/hardys.png?height=40&width=120', alt: 'Hardys Logo', opacity: 80 },
        { src: '/client-logo/elzgarten.png?height=40&width=120', alt: 'Elzgarten Logo', opacity: 80 },
        { src: '/client-logo/hwerk.png?height=40&width=120', alt: 'H-Werk Logo', opacity: 70 },
        { src: '/client-logo/h-r-e.png?height=40&width=120', alt: 'H-R-E Logo', opacity: 80 },
    ];

    return (
        <section className={cn('py-12 md:py-16', variant === 'default' ? 'bg-background' : 'bg-secondary')}>
            <div className='container px-4 md:px-6 mx-auto max-w-screen-xl'>
                <HeaderSection headerType='h2' animate={false} subtitle='Kundenstimmen' title='Was meine Kunden sagen?' variant={variant} />

                {/* Client Logos */}
                {showClientLogos && (
                    <div className='mx-auto flex flex-wrap justify-center gap-8 md:gap-12 opacity-80'>
                        {clientLogos.map((logo, index) => (
                            <ClientLogo key={index} src={logo.src} alt={logo.alt} opacity={logo.opacity} />
                        ))}
                    </div>
                )}

                {/* Testimonials */}
                <div className='grid gap-8 md:grid-cols-3 md:gap-12 pt-8'>
                    <Testimonial
                        imageSrc='/placeholder.svg?height=60&width=60'
                        altText='Heinrich Dimura'
                        name='Heinrich Dimura'
                        position='Gastronom, Elzgarten & Hardys'
                        quote='Duis do adipisicing ipsum minim laborum ullamco minim irure velit amet quis ad. Exercitation cupidatat nostrud consequat sint.'
                        variant={variant}
                    />
                    <Testimonial
                        imageSrc='/social-proof/kevin-rueb.jpeg?height=60&width=60'
                        altText='Kevin Rüb'
                        name='Kevin Rüb'
                        position='Geschäftsführer, H-R-E'
                        quote='Schnelle, unkomplizierte Abwicklung bei gutem Preis-Leistungs-Verhältnis. Wir sind sehr zufrieden mit dem Kundenservice. Klare Empfehlung!'
                        variant={variant}
                    />
                    <Testimonial
                        imageSrc='/social-proof/elina-dusdal.jpeg?height=60&width=60'
                        altText='Elina Dusdal'
                        name='Elina Dusdal'
                        position='Geschäftsführerin, H-Werk'
                        quote='Als Friseurin habe ich weder die Expertise noch die Zeit um mich um meine Website oder sozialen Medien zu kümmern. Demnach ist es eine große Erleichterung, dass Max sich professionell um alles kümmert und meine Kunden stets informiert bleiben.'
                        variant={variant}
                    />
                </div>
            </div>
        </section>
    );
}
