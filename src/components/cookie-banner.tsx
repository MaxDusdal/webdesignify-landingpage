// app/banner.js
'use client';
import { useEffect, useState } from 'react';
import { usePostHog } from 'posthog-js/react';
import { Button } from '@/components/ui/button';

export function cookieConsentGiven() {
    if (!localStorage.getItem('cookie_consent')) {
        return 'undecided';
    }
    return localStorage.getItem('cookie_consent');
}

export default function Banner() {
    const [consentGiven, setConsentGiven] = useState('');
    const posthog = usePostHog();

    useEffect(() => {
        // We want this to only run once the client loads
        // or else it causes a hydration error
        setConsentGiven(cookieConsentGiven() ?? 'undecided');
    }, []);

    useEffect(() => {
        if (consentGiven !== '') {
            posthog.set_config({
                persistence: consentGiven === 'yes' ? 'localStorage+cookie' : 'memory',
            });
        }
    }, [consentGiven, posthog]);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookie_consent', 'yes');
        setConsentGiven('yes');
    };

    const handleDeclineCookies = () => {
        localStorage.setItem('cookie_consent', 'no');
        setConsentGiven('no');
    };

    return (
        <>
            {consentGiven === 'undecided' && (
                <div className='fixed bottom-0 left-0 right-0 z-[1000] border-t border-gray-200 bg-white p-4 shadow-lg md:p-6'>
                    <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row'>
                        <p className='text-center text-sm text-gray-600 sm:text-left md:text-base'>
                            Ich nutze Cookies um die Performance meines Web-Auftritts zu messen und zu verbessern. Mit Ihrem Einverständnis erlauben
                            sie mir anonymisierte Daten zu sammeln mit welchen ich dieses Ziel erreichen kann.
                        </p>
                        <div className='flex gap-3'>
                            <Button variant='outline' onClick={handleDeclineCookies}>
                                Ablehnen
                            </Button>
                            <Button onClick={handleAcceptCookies}>Akzeptieren</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
