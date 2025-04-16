import type { Metadata } from 'next';
import '@/styles/globals.css';
import dynamic from 'next/dynamic';
import { PHProvider } from '@/providers/posthog-provider';
import Banner from '@/components/cookie-banner';
const PostHogPageView = dynamic(() => import('@/components/PostHogPageView'), {
    ssr: false,
});

export const metadata: Metadata = {
    title: 'Webdesignify',
    description: 'Webdesign und Webentwicklung für kleine und mittlere Unternehmen',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <PHProvider>
                    <PostHogPageView />
                    {children}
                    <Banner />
                </PHProvider>
            </body>
        </html>
    );
}
