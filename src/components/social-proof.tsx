import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// ClientLogo Component
function ClientLogo({ src, alt, opacity = 80 }: { src: string; alt: string; opacity?: number }) {
    return (
        <div className='flex items-center justify-center p-4'>
            <Image
                src={src}
                alt={alt}
                width={120}
                height={40}
                className={`h-8 md:h-10 w-auto object-contain opacity-${opacity}`}
            />
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
}: {
    imageSrc: string;
    altText: string;
    name: string;
    position: string;
    quote: string;
}) {
    return (
        <div className='flex flex-col gap-4 rounded-lg border border-border/40 bg-card p-6 shadow-sm'>
            <div className='flex items-center gap-4'>
                <Image src={imageSrc} alt={altText} width={60} height={60} className='rounded-full object-cover w-12 h-12' />
                <div>
                    <h3 className='font-semibold'>{name}</h3>
                    <p className='text-sm text-muted-foreground'>{position}</p>
                </div>
            </div>
            <blockquote className='text-muted-foreground'>{quote}</blockquote>
        </div>
    );
}

export default function SocialProof() {
    const clientLogos = [
        { src: '/client-logo/hardys.png?height=40&width=120', alt: 'Hardys Logo', opacity: 80 },
        { src: '/client-logo/elzgarten.png?height=40&width=120', alt: 'Elzgarten Logo', opacity: 80 },
        { src: '/client-logo/hwerk.png?height=40&width=120', alt: 'H-Werk Logo', opacity: 70 },
        { src: '/client-logo/h-r-e.png?height=40&width=120', alt: 'H-R-E Logo', opacity: 80 },
    ];

    return (
        <section className='w-full py-12 md:py-24 bg-background'>
            <div className='container px-4 md:px-6 mx-auto max-w-screen-xl'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Kundenstimmen</h2>
                        <p className='max-w-[700px] text-muted-foreground md:text-xl'>
                            Die Kundenstimmen unserer Kunden, die uns mit ihren positiven Erfahrungen belohnen.
                        </p>
                    </div>  
                </div>

                {/* Client Logos */}
                <div className='mx-auto flex flex-wrap justify-center gap-8 md:gap-12 py-8 md:py-12 opacity-80'>
                    {clientLogos.map((logo, index) => (
                        <ClientLogo key={index} src={logo.src} alt={logo.alt} opacity={logo.opacity} />
                    ))}
                </div>

                {/* Testimonials */}
                <div className='grid gap-8 md:grid-cols-3 md:gap-12 pt-8'>
                    <Testimonial
                        imageSrc='/placeholder.svg?height=60&width=60'
                        altText='Heinrich Dimura'
                        name='Heinrich Dimura'
                        position='Gastronom, Elzgarten & Hardys'
                        quote='Duis do adipisicing ipsum minim laborum ullamco minim irure velit amet quis ad. Exercitation cupidatat nostrud consequat sint.'
                    />
                    <Testimonial
                        imageSrc='/social-proof/kevin-rueb.jpeg?height=60&width=60'
                        altText='Kevin Rüb'
                        name='Kevin Rüb'
                        position='Geschäftsführer, H-R-E'
                        quote='Schnelle, unkomplizierte Abwicklung bei gutem Preis-Leistungs-Verhältnis. Wir sind sehr zufrieden mit dem Kundenservice. Klare Empfehlung!'
                    />
                    <Testimonial
                        imageSrc='/social-proof/elina-dusdal.jpeg?height=60&width=60'
                        altText='Elina Dusdal'
                        name='Elina Dusdal'
                        position='Geschäftsführerin, H-Werk'
                        quote='Als Friseurin habe ich weder die Expertise noch die Zeit um mich um meine Website oder sozialen Medien zu kümmern. Demnach ist es eine große Erleichterung, dass Max sich professionell um alles kümmert und meine Kunden stets informiert bleiben.'
                    />
                </div>

                {/* CTA */}
                <div className='flex justify-center mt-12'>
                    <Link href='#portfolio'>
                        <Button variant='outline' className='group'>
                            Case Studies
                            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
