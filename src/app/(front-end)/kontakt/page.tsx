'use client';

import type React from 'react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Send, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import HeaderSection from '@/components/header-section';
import { z } from 'zod';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    // Step 1: Personal Information
    name: z.string().min(1, { message: 'Name ist erforderlich' }),
    email: z.string().email({ message: 'Gültige E-Mail-Adresse erforderlich' }),
    phone: z.string().optional(),

    // Step 2: Business Information
    companyName: z.string().optional(),
    industry: z.string().optional(),
    businessSize: z.string().optional(),

    // Step 3: Current Infrastructure
    hasWebsite: z.string().min(1, { message: 'Bitte auswählen' }),
    websiteUrl: z.string().optional(),
    currentMarketing: z.array(z.string()).optional().default([]),

    // Step 4: Project Details
    projectType: z.array(z.string()).min(1, { message: 'Bitte mindestens eine Option auswählen' }),
    timeline: z.string().min(1, { message: 'Zeitrahmen ist erforderlich' }),
    budget: z.string().min(1, { message: 'Budget ist erforderlich' }),

    // Step 5: Additional Information
    message: z.string().min(1, { message: 'Nachricht ist erforderlich' }),
    howDidYouHear: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const methods = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            companyName: '',
            industry: '',
            businessSize: '',
            hasWebsite: '',
            websiteUrl: '',
            currentMarketing: [],
            projectType: [],
            timeline: '',
            budget: '',
            message: '',
            howDidYouHear: '',
        },
    });

    const { control, handleSubmit: hookFormSubmit, trigger, formState: { errors }, watch, setValue } = methods;

    const hasWebsite = watch('hasWebsite');

    const handleCheckboxChange = (field: 'currentMarketing' | 'projectType', value: string) => {
        const currentValues = watch(field);
        if (currentValues.includes(value)) {
            setValue(field, currentValues.filter(item => item !== value));
        } else {
            setValue(field, [...currentValues, value]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (currentStep < steps.length - 1) {
                nextStep();
            } else {
                hookFormSubmit(onSubmit)();
            }
        }
    };

    const nextStep = async () => {
        const fieldsToValidate = getFieldsToValidateForStep(currentStep);
        const isValid = await trigger(fieldsToValidate);

        if (isValid && currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            window.scrollTo(0, 0);
        }
    };

    const getFieldsToValidateForStep = (step: number): Array<keyof FormData> => {
        switch (step) {
            case 0:
                return ['name', 'email'];
            case 1: 
                return [];
            case 2:
                return ['hasWebsite'];
            case 3:
                return ['projectType', 'timeline', 'budget'];
            case 4:
                return ['message'];
            default:
                return [];
        }
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        // TODO: Add Form Submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log('Form submitted:', data);
        
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const steps = [
        {
            title: 'Persönliche Informationen',
            description: 'Erzählen Sie uns ein wenig über sich',
            fields: (
                <div className='space-y-6'>
                    <div>
                        <Label htmlFor='name' className="mb-2 block">Name *</Label>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    id='name'
                                    placeholder='Ihr vollständiger Name'
                                    {...field}
                                    className={errors.name ? 'border-red-500' : ''}
                                    onKeyDown={handleKeyDown}
                                />
                            )}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor='email' className="mb-2 block">E-Mail *</Label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    id='email'
                                    type='email'
                                    placeholder='ihre-email@beispiel.de'
                                    {...field}
                                    className={errors.email ? 'border-red-500' : ''}
                                    onKeyDown={handleKeyDown}
                                />
                            )}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor='phone' className="mb-2 block">Telefonnummer</Label>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    id='phone'
                                    placeholder='+49 123 456789'
                                    {...field}
                                    onKeyDown={handleKeyDown}
                                />
                            )}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: 'Unternehmensinformationen',
            description: 'Erzählen Sie uns über Ihr Unternehmen',
            fields: (
                <div className='space-y-6'>
                    <div>
                        <Label htmlFor='companyName' className="mb-2 block">Unternehmensname</Label>
                        <Controller
                            name="companyName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    id='companyName'
                                    placeholder='Name Ihres Unternehmens'
                                    {...field}
                                    onKeyDown={handleKeyDown}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <Label htmlFor='industry' className="mb-2 block">Branche</Label>
                        <Controller
                            name="industry"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Wählen Sie Ihre Branche' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='technology'>Technologie</SelectItem>
                                        <SelectItem value='healthcare'>Gesundheitswesen</SelectItem>
                                        <SelectItem value='finance'>Finanzen</SelectItem>
                                        <SelectItem value='education'>Bildung</SelectItem>
                                        <SelectItem value='retail'>Einzelhandel</SelectItem>
                                        <SelectItem value='manufacturing'>Fertigung</SelectItem>
                                        <SelectItem value='services'>Dienstleistungen</SelectItem>
                                        <SelectItem value='other'>Andere</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>
                    <div>
                        <Label htmlFor='businessSize' className="mb-2 block">Unternehmensgröße</Label>
                        <Controller
                            name="businessSize"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className='flex flex-col space-y-1'
                                >
                                    <div className='flex items-center space-x-2'>
                                        <RadioGroupItem value='1-10' id='size-1' />
                                        <Label htmlFor='size-1'>1-10 Mitarbeiter</Label>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <RadioGroupItem value='11-50' id='size-2' />
                                        <Label htmlFor='size-2'>11-50 Mitarbeiter</Label>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <RadioGroupItem value='51-200' id='size-3' />
                                        <Label htmlFor='size-3'>51-200 Mitarbeiter</Label>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <RadioGroupItem value='201+' id='size-4' />
                                        <Label htmlFor='size-4'>201+ Mitarbeiter</Label>
                                    </div>
                                </RadioGroup>
                            )}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: 'Aktuelle Infrastruktur',
            description: 'Erzählen Sie uns über Ihre bestehende Online-Präsenz',
            fields: (
                <div className='space-y-6'>
                    <div>
                        <Label className="mb-2 block">Haben Sie bereits eine Website? *</Label>
                        <Controller
                            name="hasWebsite"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className='flex flex-col space-y-1 mt-2'
                                >
                                    <div className='flex items-center space-x-2'>
                                        <RadioGroupItem value='yes' id='website-yes' />
                                        <Label htmlFor='website-yes'>Ja</Label>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <RadioGroupItem value='no' id='website-no' />
                                        <Label htmlFor='website-no'>Nein</Label>
                                    </div>
                                </RadioGroup>
                            )}
                        />
                        {errors.hasWebsite && <p className="text-red-500 text-sm mt-1">{errors.hasWebsite.message}</p>}
                    </div>

                    {hasWebsite === 'yes' && (
                        <div>
                            <Label htmlFor='websiteUrl' className="mb-2 block">Website URL</Label>
                            <Controller
                                name="websiteUrl"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        id='websiteUrl'
                                        placeholder='https://www.ihre-website.de'
                                        {...field}
                                        onKeyDown={handleKeyDown}
                                    />
                                )}
                            />
                        </div>
                    )}

                    <div>
                        <Label className='mb-2 block'>Welche Marketing-Tools nutzen Sie bereits?</Label>
                        <div className='space-y-2'>
                            {[
                                { id: 'analytics', label: 'Google Analytics' },
                                { id: 'ads', label: 'Google Ads' },
                                { id: 'social', label: 'Social Media Marketing' },
                                { id: 'email', label: 'E-Mail Marketing' },
                                { id: 'seo', label: 'SEO' },
                                { id: 'none', label: 'Keine' },
                            ].map((item) => (
                                <div key={item.id} className='flex items-center'>
                                    <input
                                        type='checkbox'
                                        id={item.id}
                                        className='h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary'
                                        checked={watch('currentMarketing').includes(item.id)}
                                        onChange={() => handleCheckboxChange('currentMarketing', item.id)}
                                    />
                                    <Label htmlFor={item.id} className='ml-2'>
                                        {item.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Projektdetails',
            description: 'Erzählen Sie uns über Ihr Projekt',
            fields: (
                <div className='space-y-6'>
                    <div>
                        <Label className='mb-2 block'>An welchen Dienstleistungen sind Sie interessiert? *</Label>
                        <div className='space-y-2'>
                            {[
                                { id: 'web-design', label: 'Webdesign' },
                                { id: 'web-development', label: 'Webentwicklung' },
                                { id: 'seo-optimization', label: 'SEO-Optimierung' },
                                { id: 'online-marketing', label: 'Online-Marketing' },
                                { id: 'content-creation', label: 'Content-Erstellung' },
                                { id: 'consulting', label: 'Beratung' },
                            ].map((item) => (
                                <div key={item.id} className='flex items-center'>
                                    <input
                                        type='checkbox'
                                        id={item.id}
                                        className='h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary'
                                        checked={watch('projectType').includes(item.id)}
                                        onChange={() => handleCheckboxChange('projectType', item.id)}
                                    />
                                    <Label htmlFor={item.id} className='ml-2'>
                                        {item.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                        {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor='timeline' className="mb-2 block">Zeitrahmen *</Label>
                        <Controller
                            name="timeline"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className={errors.timeline ? 'border-red-500' : ''}>
                                        <SelectValue placeholder='Wann möchten Sie starten?' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='immediately'>Sofort</SelectItem>
                                        <SelectItem value='1-month'>Innerhalb eines Monats</SelectItem>
                                        <SelectItem value='3-months'>In 1-3 Monaten</SelectItem>
                                        <SelectItem value='6-months'>In 3-6 Monaten</SelectItem>
                                        <SelectItem value='exploring'>Ich erkunde nur Optionen</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor='budget' className="mb-2 block">Budget *</Label>
                        <Controller
                            name="budget"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className={errors.budget ? 'border-red-500' : ''}>
                                        <SelectValue placeholder='Ihr ungefähres Budget' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='under-2k'>Unter 2.000 €</SelectItem>
                                        <SelectItem value='2k-5k'>2.000 € - 5.000 €</SelectItem>
                                        <SelectItem value='5k-10k'>5.000 € - 10.000 €</SelectItem>
                                        <SelectItem value='10k-20k'>10.000 € - 20.000 €</SelectItem>
                                        <SelectItem value='over-20k'>Über 20.000 €</SelectItem>
                                        <SelectItem value='not-sure'>Noch nicht sicher</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
                    </div>
                </div>
            ),
        },
        {
            title: 'Zusätzliche Informationen',
            description: 'Teilen Sie uns weitere Details mit',
            fields: (
                <div className='space-y-6'>
                    <div>
                        <Label htmlFor='message' className="mb-2 block">Ihre Nachricht *</Label>
                        <Controller
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <Textarea
                                    id='message'
                                    placeholder='Beschreiben Sie Ihr Projekt oder Ihre Anfrage im Detail...'
                                    className={`min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
                                    {...field}
                                />
                            )}
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor='howDidYouHear' className="mb-2 block">Wie haben Sie von uns erfahren?</Label>
                        <Controller
                            name="howDidYouHear"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Bitte auswählen' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='search'>Suchmaschine (Google, Bing, etc.)</SelectItem>
                                        <SelectItem value='social'>Social Media</SelectItem>
                                        <SelectItem value='referral'>Empfehlung</SelectItem>
                                        <SelectItem value='blog'>Blog oder Artikel</SelectItem>
                                        <SelectItem value='other'>Andere</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <main className='pb-12 md:pb-20'>
            <div className='container px-4 md:px-6 mx-auto max-w-screen-lg'>
                <div className='max-w-3xl mx-auto'>
                    <HeaderSection
                        title='Kontaktieren Sie uns'
                        description='Füllen Sie das Formular aus, und wir melden uns innerhalb von 24 Stunden bei Ihnen.'
                        subtitle='Kontaktformular'
                    />

                    {!isSubmitted ? (
                        <div className='bg-card border border-border/40 rounded-lg shadow-sm overflow-hidden'>
                            {/* Progress Bar */}
                            <div className='w-full bg-muted h-1'>
                                <div
                                    className='bg-secondary h-1 transition-all duration-300'
                                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                                ></div>
                            </div>

                            {/* Step Indicator */}
                            <div className='flex items-center justify-between px-6 py-4 bg-muted/50'>
                                <div className='flex items-center'>
                                    <div className='bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium'>
                                        {currentStep + 1}
                                    </div>
                                    <div className='ml-3'>
                                        <p className='font-medium'>{steps[currentStep].title}</p>
                                        <p className='text-sm text-muted-foreground'>{steps[currentStep].description}</p>
                                    </div>
                                </div>
                                <div className='text-sm text-muted-foreground'>
                                    Schritt {currentStep + 1} von {steps.length}
                                </div>
                            </div>

                            {/* Form Content */}
                            <FormProvider {...methods}>
                                <form onSubmit={hookFormSubmit(onSubmit)} onKeyDown={handleKeyDown}>
                                    <div className='p-6'>
                                        <AnimatePresence mode='wait'>
                                            <motion.div
                                                key={currentStep}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {steps[currentStep].fields}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className='px-6 py-4 bg-muted/30 border-t border-border/40 flex justify-between'>
                                        <Button type='button' variant='outline' onClick={prevStep} disabled={currentStep === 0}>
                                            <ArrowLeft className='mr-2 h-4 w-4' />
                                            Zurück
                                        </Button>

                                        {currentStep < steps.length - 1 ? (
                                            <Button type='button' onClick={nextStep}>
                                                Weiter
                                                <ChevronRight className='ml-2 h-4 w-4' />
                                            </Button>
                                        ) : (
                                            <Button type='submit' disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    <>
                                                        <svg
                                                            className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            fill='none'
                                                            viewBox='0 0 24 24'
                                                        >
                                                            <circle
                                                                className='opacity-25'
                                                                cx='12'
                                                                cy='12'
                                                                r='10'
                                                                stroke='currentColor'
                                                                strokeWidth='4'
                                                            ></circle>
                                                            <path
                                                                className='opacity-75'
                                                                fill='currentColor'
                                                                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                                            ></path>
                                                        </svg>
                                                        Wird gesendet...
                                                    </>
                                                ) : (
                                                    <>
                                                        Absenden
                                                        <Send className='ml-2 h-4 w-4' />
                                                    </>
                                                )}
                                            </Button>
                                        )}
                                    </div>
                                </form>
                            </FormProvider>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className='bg-card border border-border/40 rounded-lg shadow-sm p-8 text-center'
                        >
                            <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                                <Check className='h-8 w-8 text-primary' />
                            </div>
                            <h2 className='text-2xl font-bold mb-2'>Vielen Dank!</h2>
                            <p className='text-muted-foreground mb-6'>
                                Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns innerhalb von 72 Stunden bei Ihnen melden.
                            </p>
                            <Button onClick={() => router.push('/')}>Zurück zur Startseite</Button>
                        </motion.div>
                    )}
                </div>
            </div>
        </main>
    );
}
