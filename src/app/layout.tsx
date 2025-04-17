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
            <head>
                <link rel='icon' href='/favicon/favicon-32x32.png' />
                <link rel='icon' href='/favicon/favicon-16x16.png' />
                <link rel='apple-touch-icon' href='/favicon/apple-touch-icon.png' />
                <link rel='icon' href='/favicon/android-chrome-192x192.png' />
                <link rel='icon' href='/favicon/android-chrome-512x512.png' />
                <link rel='manifest' href='/favicon/site.webmanifest' />
            </head>
            <body>
                <PostHogProvider>
                    {children}
                    <Banner />
                </PostHogProvider>
            </body>
        </html>
    );
}
