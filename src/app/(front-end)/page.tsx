import Blog from '@/components/sections/blog';
import FAQSection from '@/components/sections/faq-section';
import { Metadata } from 'next';
import Projects from '@/components/sections/projects';
import Hero from '@/components/sections/hero';
import Differentiators from '@/components/sections/differentiators';
import SocialProof from '@/components/sections/social-proof';
import Services from '@/components/sections/services';

export const metadata: Metadata = {
    title: 'Online-Marketing und Web-Apps aus Mannheim - Webdesignify',
    description: 'Ob Online-Präsenz, Kundenportal oder interne App - ich entwickle digitale Lösungen, die auf Ihre Unternehmensziele einzahlen.',
};

export default function Home() {
    return (
        <>
            <Hero />
            <SocialProof />
            <Services />
            <Differentiators />
            <Projects />
            <FAQSection />
            <Blog />
        </>
    );
}
