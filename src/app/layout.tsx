import type { Metadata } from 'next';
import '@/styles/globals.css';
import { PostHogProvider } from '@/providers/posthog-provider';
import Banner from '@/components/cookie-banner';

export const metadata: Metadata = {
    title: 'Webdesignify',
    description: 'Webdesign und Webentwicklung für kleine und mittlere Unternehmen',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='de'>
            <body>
                <PostHogProvider>
                    {children}
                    <Banner />
                </PostHogProvider>
            </body>
        </html>
    );
}
