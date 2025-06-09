'use client';

import type React from 'react';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const caseStudies = [
        {
            id: 'ecommerce-platform',
            title: 'E-Commerce Platform Redesign & Performance Optimization',
            image: '/case-studies/hardys.jpg?height=600&width=800',
            company: {
                name: 'FashionRetail',
                logo: '/placeholder.svg?height=60&width=120',
            },
            kpis: [
                { value: '+143%', label: 'Conversion Rate Increase' },
                { value: '-52%', label: 'Page Load Time Reduction' },
            ],
            services: ['UX/UI Redesign', 'Performance Optimization', 'Mobile Responsiveness', 'Custom Checkout Flow'],
        },
        {
            id: 'saas-application',
            title: 'SaaS Dashboard & Analytics Platform Development',
            image: '/placeholder.svg?height=600&width=800',
            company: {
                name: 'DataMetrics',
                logo: '/placeholder.svg?height=60&width=120',
            },
            kpis: [
                { value: '+87%', label: 'User Engagement' },
                { value: '4.8/5', label: 'User Satisfaction Rating' },
            ],
            services: ['Custom Dashboard Development', 'Data Visualization', 'User Authentication System', 'Real-time Analytics'],
        },
        {
            id: 'restaurant-website',
            title: 'Restaurant Chain Website & Online Ordering System',
            image: '/placeholder.svg?height=600&width=800',
            company: {
                name: 'GourmetGroup',
                logo: '/placeholder.svg?height=60&width=120',
            },
            kpis: [
                { value: '+218%', label: 'Online Orders' },
                { value: '35K+', label: 'Monthly Active Users' },
            ],
            services: ['Responsive Website Design', 'Online Ordering System', 'Location-based Services', 'Menu Management System'],
        },
        {
            id: 'nonprofit-platform',
            title: 'Nonprofit Organization Digital Platform & Donation System',
            image: '/placeholder.svg?height=600&width=800',
            company: {
                name: 'EcoFoundation',
                logo: '/placeholder.svg?height=60&width=120',
            },
            kpis: [
                { value: '+175%', label: 'Online Donations' },
                { value: '12K+', label: 'New Supporters' },
            ],
            services: ['Website Redesign', 'Donation Processing System', 'Event Management', 'Volunteer Portal'],
        },
    ];

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const swipeDistance = touchEndX.current - touchStartX.current;

        if (swipeDistance > 50) {
            // Swiped right
            setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
        } else if (swipeDistance < -50) {
            // Swiped left
            setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
        }
    };

    const activeCase = caseStudies[activeIndex];

    return (
        <section id='portfolio' className='w-full py-12 md:py-24 bg-background'>
            <div className='container px-4 md:px-6 mx-auto max-w-5xl'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Case Studies</h2>
                        <p className='max-w-[700px] text-muted-foreground md:text-xl'>Real results for real businesses</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mb-8' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    {/* Project Info - 1/4 width on desktop */}
                    <div className='flex flex-col justify-between  p-6'>
                        <div>
                            <div className='space-y-6 mb-8'>
                                {activeCase.kpis.map((kpi, index) => (
                                    <div key={index} className='text-center lg:text-left'>
                                        <div className='text-3xl font-bold text-primary'>{kpi.value}</div>
                                        <div className='text-sm text-muted-foreground'>{kpi.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <h4 className='font-semibold mb-3'>Services Provided:</h4>
                                <ul className='space-y-2'>
                                    {activeCase.services.map((service, index) => (
                                        <li key={index} className='flex items-center gap-2 text-sm'>
                                            <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Case Study Image - 3/4 width on desktop */}
                    <div className='lg:col-span-3 relative group rounded-lg'>
                        <div className='relative w-full h-[300px] md:h-[400px] shadow-xl shadow-black/20 rounded-lg overflow-hidden'>
                            <Image src={activeCase.image || '/placeholder.svg'} alt={activeCase.title} fill className='object-cover rounded-lg' />
                            <div className='absolute inset-0 bg-gradient-to-t from-secondary to-transparent rounded-lg transition-opacity duration-300 opacity-60 group-hover:opacity-100'></div>
                        </div>

                        <div className='absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-250 group-hover:translate-y-[-20px]'>
                            <h3 className='text-xl md:text-2xl font-bold text-white mb-2'>{activeCase.title}</h3>
                            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-white/90 text-sm'>
                                <span>Read More</span>
                                <ArrowRight className='ml-1 h-4 w-4' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-4 md:gap-8 mt-8 flex-wrap'>
                    {caseStudies.map((study, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`relative h-12 w-24 md:h-16 md:w-32 transition-all duration-200 ${
                                activeIndex === index ? 'opacity-100 scale-110' : 'opacity-50 grayscale'
                            }`}
                        >
                            <Image src={study.company.logo || '/placeholder.svg'} alt={study.company.name} fill className='object-contain' />
                        </button>
                    ))}
                </div>
                {/* Company Tabs */}
            </div>
        </section>
    );
}
