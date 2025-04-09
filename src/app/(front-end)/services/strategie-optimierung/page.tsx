'use client';

import { ArrowRight, BarChart2, Globe, Search, Star, MessageSquare, Server, TrendingUp, MapPin, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialProof from '@/components/social-proof';
import Blog from '@/components/blog';
import Subservices from '@/components/subservices';
import HeaderSection from '@/components/header-section';

export default function StrategieOptimierung() {
    const subServices = [
        {
            icon: Globe,
            title: 'Websiteoptimierung',
            description:
                'Nach einer ausführlichen Analyse Ihrer Zielgruppe und einer Analyse der erfolgreichsten Keywords kann ich Ihre Webseite auf den höchstmöglichen Erfolg optimieren.',
        },
        {
            icon: MessageSquare,
            title: 'Social-Media-Ads',
            description:
                'Wenn sich Ihre Zielgruppe auf Social-Media-Plattformen wie Facebook, Instagram, TikTok o.ä. befindet helfe ich Ihnen umsetzende und umwerfenden Werbungen auf diesen Plattformen zu schalten.',
        },
        {
            icon: Search,
            title: 'Google-Ads',
            description:
                'Sie möchten Ihre Zielgruppe direkt mit dem ersten Ergebnis abholen? Ich setze für Sie günstige und erfolgreiche Google-Ads für einen höheren Traffic zu Ihrer Webseite um.',
        },
        {
            icon: BarChart2,
            title: 'SEO',
            description:
                'Wenn organische Nutzer Ihre Webseite nicht finden, dann können Sie auch nicht zu Ihren Kunden werden. Ich optimiere Ihr Ranking auf Google damit Sie mehr potenzielle Kunden erreichen können.',
        },
        {
            icon: Star,
            title: 'Rezensionsstrategie',
            description:
                '85 % aller Nutzer geben an von Rezensionen in Ihrer Kaufentscheidung beeinflusst zu werden. Ich zeige Ihnen wie sie mehr und qualitativere Rezensionen von Ihren Kunden erhalten.',
        },
        {
            icon: ArrowRight,
            title: 'Noch viel mehr!',
            description:
                'Es gibt unzählige Werkzeuge im Online-Marketing welche letztendlich für mehr Umsatz in Ihrem Unternehmen sorgen. Kontaktieren Sie mich noch heute für einen effektiveren Online-Auftritt.',
        },
    ];

    const websiteServices = [
        {
            icon: BarChart2,
            title: 'On-Page-SEO',
            description: 'Page-Load-Time-, Content- und Keyword-Optimierung sowie Metadaten gewährleisten bestmögliches Google-Ranking.',
        },
        {
            icon: Server,
            title: 'Technisches-SEO',
            description:
                'SEO bedeutet auch die richtige Umsetzung von Verschlüsselungen, dem Server, der richtigen Komprimierung von Bilder und der Barrierefreieheit.',
        },
        {
            icon: TrendingUp,
            title: 'Conversion-prozess',
            description:
                'Ist der Conversion-Prozess wirklich 1:1? Ich finde heraus, wo potentielle Kunden verloren gehen und behebe entsprechende Lücken.',
        },
        {
            icon: MapPin,
            title: 'Local-SEO',
            description:
                'Mobiles Browsen ist Gegenwart und Zukunft. Ihr Unternehmen sollte deshalb in so vielen Karten und Branchenbüchern wie möglich zu finden sein.',
        },
        {
            icon: Search,
            title: 'Keyword Research',
            description:
                'Um so viele Menschen wie möglich zu erreichen, ist es wichtig, dass ihre Webseite unter den meistgesuchten Stichwörtern für Ihre Branche auftucht.',
        },
        {
            icon: MoreHorizontal,
            title: 'Noch viel mehr!',
            description:
                'Strategieoptimierung kann, je nach Fokus, verschiedenste Form annehmen. Deshalb stimmen wir Sie zusammen auf Ihre individuellen Bedürfnisse ab und erzielen auf diese Weise beste Ergebnisse!',
        },
    ];

    return (
        <main>
            {/* Hero Section */}
            <HeaderSection
                subtitle='STRATEGIEOPTIMIERUNG'
                title='Ihr Online-Auftritt darf nicht nur gut aussehen.'
                description='Ich helfe Ihnen, aus Ihrem Online-Auftritt einen geschäftlichen Mehrwert zu ziehen. Dabei optimiere ich, mit Ihnen zusammen, die Ergebnisse, die aus Ihrem Online-Auftritt hervorgehen, damit Sie mehr Sign-ups, Demos oder Verkäufe erzielen.'
                buttons={[
                    {
                        text: 'Kontakt aufnehmen',
                        icon: ArrowRight,
                    },
                    {
                        text: 'Referenzen ansehen',
                        variant: 'link',
                    },
                ]}
            />

            {/* Subservices Section */}
            <Subservices services={subServices} />

            {/* Social Proof Section */}
            <SocialProof />

            <HeaderSection
                headerType='h2'
                subtitle='WEBSITE-OPTIMIERUNG'
                title='Ihre Webseite sollte nicht nur gut aussehen.'
                description='Ich optimiere Ihre Webseite, um mehr Besucher in Kunden zu verwandeln.'
            />
            {/* Website Services Section */}
            <Subservices services={websiteServices} />

            {/* CTA Section */}
            <section className='w-full py-12 md:py-24 bg-secondary text-secondary-foreground'>
                <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between'>
                        <div className='space-y-4 md:w-2/3'>
                            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Bereit, Ihren Online-Auftritt zu 📈?</h2>
                            <p className='text-xl text-primary-foreground/80'>
                                Lassen Sie uns gemeinsam eine Strategie entwickeln, die Ihren Geschäftserfolg nachhaltig steigert.
                            </p>
                        </div>
                        <div className='md:w-1/3 flex justify-center md:justify-end'>
                            <Button size='lg' variant='default' className='group'>
                                Jetzt Beratungsgespräch vereinbaren
                                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <Blog />
        </main>
    );
}
