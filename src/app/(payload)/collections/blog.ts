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
            name: 'category',
            type: 'select',
            options: ['Web Design', 'Web Development', 'SEO', 'Marketing', 'Other'],
            required: true,
        },
        {
            name: 'tags',
            type: 'array',
            fields: [{ name: 'tag', type: 'text' }],
            required: true,
        },
        {
            name: 'relatedPosts',
            type: 'array',
            fields: [{ name: 'post', type: 'relationship', relationTo: 'blog' }],
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
    admin: {
        useAsTitle: 'title',
        livePreview: {
            url: 'http://localhost:3000/blog/google-my-business',
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
    category: string;
    tags: string[];
    relatedPosts: string[];
    slug: string;
    status: string;
}
