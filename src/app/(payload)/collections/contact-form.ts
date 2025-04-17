import { CollectionConfig } from 'payload';
import { FORM_OPTIONS } from '@/lib/contact-form-schema';

export const ContactForm: CollectionConfig = {
    slug: 'contact-forms',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'createdAt', 'status'],
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Name',
        },
        {
            name: 'email',
            type: 'email',
            required: true,
            label: 'E-Mail',
        },
        {
            name: 'phone',
            type: 'text',
            required: false,
            label: 'Telefonnummer',
        },
        {
            name: 'companyName',
            type: 'text',
            required: false,
            label: 'Unternehmensname',
        },
        {
            name: 'industry',
            type: 'select',
            required: false,
            label: 'Branche',
            options: FORM_OPTIONS.industries,
        },
        {
            name: 'businessSize',
            type: 'select',
            required: false,
            label: 'Größe des Unternehmens',
            options: FORM_OPTIONS.businessSizes,
        },
        {
            name: 'hasWebsite',
            type: 'select',
            required: true,
            label: 'Hat eine Website?',
            options: FORM_OPTIONS.hasWebsite,
        },
        {
            name: 'websiteUrl',
            type: 'text',
            required: false,
            label: 'Website URL',
            admin: {
                condition: (data) => data.hasWebsite === 'yes',
            },
        },
        {
            name: 'currentMarketing',
            type: 'select',
            required: false,
            label: 'Aktuelle Marketing Tools',
            hasMany: true,
            options: FORM_OPTIONS.marketingTools,
        },
        {
            name: 'projectType',
            type: 'select',
            required: true,
            label: 'Projekttyp',
            hasMany: true,
            options: FORM_OPTIONS.projectTypes,
        },
        {
            name: 'timeline',
            type: 'select',
            required: true,
            label: 'Zeitrahmen',
            options: FORM_OPTIONS.timelines,
        },
        {
            name: 'budget',
            type: 'select',
            required: true,
            label: 'Budget',
            options: FORM_OPTIONS.budgets,
        },
        {
            name: 'message',
            type: 'textarea',
            label: 'Nachricht',
        },
        {
            name: 'howDidYouHear',
            type: 'select',
            required: false,
            label: 'Wie haben Sie von uns erfahren?',
            options: FORM_OPTIONS.referralSources,
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'new',
            required: true,
            admin: {
                position: 'sidebar',
            },
            options: FORM_OPTIONS.statuses,
        },
        {
            name: 'notes',
            type: 'textarea',
            required: false,
            admin: {
                position: 'sidebar',
            },
        },
    ],
    timestamps: true,
};
