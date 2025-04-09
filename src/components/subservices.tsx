import { LucideIcon } from 'lucide-react';

interface SubService {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface SubservicesProps {
    services: SubService[];
}

export default function Subservices({ services }: SubservicesProps) {
    return (
        <section className='w-full'>
            <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className='flex flex-col h-full rounded-lg p-6 transform transition-transform duration-500 ease-in-out opacity-0'
                                style={{ animation: `fadeInUp 0.5s forwards ${0.5 + index * 0.05}s` }}
                            >
                                <div className='mb-4 rounded-full bg-secondary/10 p-3 w-12 h-12 flex items-center justify-center'>
                                    <Icon className='h-6 w-6 text-secondary' />
                                </div>

                                <h3 className='text-xl font-bold mb-2'>{service.title}</h3>

                                <p className='text-muted-foreground'>{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(70px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
} 