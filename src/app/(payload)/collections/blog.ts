import { revalidatePath } from 'next/cache';
import { CollectionConfig } from 'payload';

export const Blog: CollectionConfig = {
    slug: 'blog',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'excerpt',
            type: 'text',
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'date',
            type: 'date',
            required: true,
        },
        {
            name: 'tags',
            type: 'array',
            fields: [{ name: 'tag', type: 'text' }],
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            options: ['draft', 'published'],
            required: true,
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'author',
            required: true,
        },
        {
            name: 'readTime',
            type: 'number',
        },
    ],
    hooks: {
        afterChange: [
            ({ operation }) => {
                if (process.env.NODE_ENV === 'production') {
                    try {
                        revalidatePath('/', 'layout');

                        console.log(`Revalidated paths after ${operation} operation on blog collection`);
                    } catch (error) {
                        console.error('Failed to revalidate after blog change:', error);
                    }
                }
            },
        ],
    },
    admin: {
        useAsTitle: 'title',
        livePreview: {
            url: 'https://' + process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL + '/blog/google-my-business',
            breakpoints: [
                {
                    height: 1024,
                    label: 'Desktop',
                    name: 'desktop',
                    width: 1024,
                },
                {
                    height: 768,
                    label: 'Tablet',
                    name: 'tablet',
                    width: 768,
                },
                {
                    height: 640,
                    label: 'Mobile',
                    name: 'mobile',
                    width: 640,
                },
            ],
        },
    },
    access: {
        read: () => true,
    },
    versions: {
        drafts: {
            autosave: true,
        },
    },
};

export interface BlogPost {
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    author: string;
    tags: string[];
    slug: string;
    status: string;
}
