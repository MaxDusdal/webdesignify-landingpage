
import Blog from '@/components/blog';
import FAQSection from '@/components/faq-section';
import { Metadata } from 'next';
import Projects from '@/components/projects';

export const metadata: Metadata = {
    title: 'Online-Marketing und Web-Apps aus Mannheim - Webdesignify',
    description: 'Ob Online-Präsenz, Kundenportal oder interne App - ich entwickle digitale Lösungen, die auf Ihre Unternehmensziele einzahlen.',
};

export default function Home() {
    return (
        <>
            <Projects />        
            <FAQSection />
            <Blog />
        </>
    );
}
