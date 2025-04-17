import { Metadata } from 'next';
import HeaderSection from '@/components/header-section';
import ContactContainer from '@/components/contact/contact-container';

export const metadata: Metadata = {
    title: 'Kontakt - Webdesignify',
    description: 'Kontaktieren Sie mich für eine kostenlose Beratung und ein unverbindliches Angebot.',
};

export default function ContactPage() {
    return (
        <main className='pb-12 md:pb-20'>
            <div className='container px-4 md:px-6 mx-auto max-w-screen-lg'>
                <div className='max-w-3xl mx-auto'>
                    <HeaderSection
                        title='Jetzt Kontakt aufnehmen'
                        description='Füllen Sie das Formular aus, und ich melde mich innerhalb von 48 Stunden bei dir.'
                        subtitle='Kontaktformular'
                    />

                    <ContactContainer />
                </div>
            </div>
        </main>
    );
}
