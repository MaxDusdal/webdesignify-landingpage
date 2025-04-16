'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';
import { cookieConsentGiven } from '@/components/cookie-banner';
export function PHProvider({ children }: { children: React.ReactNode }) {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !process.env.NEXT_PUBLIC_POSTHOG_HOST) {
        throw new Error('NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST must be set');
    }

    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
            person_profiles: 'identified_only',
            capture_pageview: false, // Disable automatic pageview capture, as we capture manually
            capture_pageleave: true,
            persistence: cookieConsentGiven() === 'yes' ? 'localStorage+cookie' : 'memory',
        });
    }, []);

    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
