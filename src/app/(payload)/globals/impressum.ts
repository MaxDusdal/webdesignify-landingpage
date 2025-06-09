import { GlobalConfig } from 'payload';
import { revalidatePath } from 'next/cache';

export const Impressum: GlobalConfig = {
    slug: 'impressum',
    access: {
        read: () => true,
    },
    admin: {
        group: 'Legal',
        livePreview: {
            url: '/impressum',
        },
    },
    versions: {
        drafts: {
            autosave: true,
        },
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Title',
            admin: {
                description: 'Der Titel der Impressum Seite',
            },
        },
        {
            name: 'lastUpdated',
            type: 'date',
            required: true,
            label: 'Last Updated',
            admin: {
                description: 'Wann wurde diese Impressum Seite zuletzt aktualisiert?',
            },
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            label: 'Content',
            admin: {
                description: 'Der Hauptinhalt der Impressum Seite',
            },
        },
    ],
    hooks: {
        afterChange: [
            ({ context }) => {
                if (process.env.NODE_ENV === 'production') {
                    try {
                        revalidatePath('/impressum');

                        console.log(`Revalidated paths after ${context.operation} operation on impressum collection`);
                    } catch (error) {
                        console.error('Failed to revalidate after impressum change:', error);
                    }
                }
            },
        ],
    },
};
