'use client';

import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ButtonProps {
    text: string;
    variant?: 'default' | 'link';
    icon?: LucideIcon;
    onClick?: () => void;
}

interface HeaderSectionProps {
    title: string;
    subtitle?: string;
    description?: string;
    buttons?: ButtonProps[];
    animate?: boolean;
    className?: string;
    headerType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function HeaderSection({
    headerType = 'h1',
    title,
    subtitle,
    description,
    buttons,
    animate = true,
    className = '',
}: HeaderSectionProps) {
    const HeaderTag = headerType;
    return (
        <section className={`w-full py-8 md:py-12 lg:py-16 ${className}`}>
            <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                <div className='flex flex-col items-center text-center max-w-3xl mx-auto'>
                    {subtitle && (
                        <p
                            className='text-sm md:text-base font-black uppercase font-stretch-200% text-black mb-2 transform transition-transform duration-500 ease-in-out opacity-0'
                            style={animate ? { animation: `fadeInUp 0.5s forwards 0.1s` } : undefined}
                        >
                            {subtitle}
                        </p>
                    )}
                    <HeaderTag
                        className='text-3xl md:text-5xl font-extrabold tracking-tighter text-secondary mb-4 transform transition-transform duration-500 ease-in-out opacity-0'
                        style={animate ? { animation: `fadeInUp 0.5s forwards 0.2s` } : undefined}
                    >
                        {title}
                    </HeaderTag>
                    {description && (
                        <p
                            className='text-lg md:text-xl mb-8 font-light transform transition-transform duration-500 ease-in-out opacity-0'
                            style={animate ? { animation: `fadeInUp 0.5s forwards 0.3s` } : undefined}
                        >
                            {description}
                        </p>
                    )}
                    {buttons && buttons.length > 0 && (
                        <div
                            className='flex flex-col sm:flex-row gap-4 transform transition-transform duration-500 ease-in-out opacity-0'
                            style={animate ? { animation: `fadeInUp 0.5s forwards 0.4s` } : undefined}
                        >
                            {buttons.map((button, index) => {
                                const Icon = button.icon;
                                return (
                                    <Button
                                        key={index}
                                        size='lg'
                                        variant={button.variant || 'default'}
                                        className={button.icon ? 'group' : ''}
                                        onClick={button.onClick}
                                    >
                                        {button.text}
                                        {Icon && <Icon className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />}
                                    </Button>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            {animate && (
                <style jsx>{`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            )}
        </section>
    );
} 