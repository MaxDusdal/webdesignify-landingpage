'use client';

import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
    variant?: 'default' | 'secondary';
    align?: 'center' | 'left';
}

export default function HeaderSection({
    headerType = 'h1',
    title,
    subtitle,
    description,
    buttons,
    animate = true,
    className = '',
    variant = 'default',
    align = 'center',
}: HeaderSectionProps) {
    const HeaderTag = headerType;
    
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    };
    
    return (
        <section className={cn(`w-full py-4 md:py-4 lg:py-8`, className)}>
            <div className='container  mx-auto max-w-7xl'>
                <div className={cn(
                    'flex flex-col max-w-3xl', 
                    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
                )}>
                    {subtitle && (
                        <motion.p
                            className={cn(
                                'text-sm md:text-base font-black uppercase font-stretch-200% mb-2',
                                variant === 'default' ? 'text-black' : 'text-secondary-foreground'
                            )}
                            initial={animate ? "hidden" : "visible"}
                            animate="visible"
                            variants={fadeInUp}
                            custom={1}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                    <motion.div
                        initial={animate ? "hidden" : "visible"}
                        animate="visible" 
                        variants={fadeInUp}
                        custom={2}
                    >
                        <HeaderTag className={cn(
                            'text-3xl md:text-5xl font-extrabold tracking-tighter mb-4',
                            variant === 'default' ? 'text-secondary' : 'text-secondary-foreground'
                        )}>
                            {title}
                        </HeaderTag>
                    </motion.div>
                    {description && (
                        <motion.p
                            className={cn(
                                'text-lg md:text-xl',
                                variant === 'default' ? 'font-light' : 'text-secondary-foreground/90'
                            )}
                            initial={animate ? "hidden" : "visible"}
                            animate="visible"
                            variants={fadeInUp}
                            custom={3}
                        >
                            {description}
                        </motion.p>
                    )}
                    {buttons && buttons.length > 0 && (
                        <motion.div
                            className='flex flex-col sm:flex-row gap-4 mt-8'
                            initial={animate ? "hidden" : "visible"}
                            animate="visible"
                            variants={fadeInUp}
                            custom={4}
                        >
                            {buttons.map((button, index) => {
                                const Icon = button.icon;
                                return (
                                    <Button
                                        key={index}
                                        size='lg'
                                        variant={button.variant || (variant === 'secondary' ? 'link' : 'default')}
                                        className={button.icon ? 'group' : ''}
                                        onClick={button.onClick}
                                    >
                                        {button.text}
                                        {Icon && <Icon className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />}
                                    </Button>
                                );
                            })}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
} 