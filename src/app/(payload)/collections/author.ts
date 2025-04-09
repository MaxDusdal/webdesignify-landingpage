import { CollectionConfig } from 'payload';

export const Author: CollectionConfig = {
    slug: 'author',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'bio',
            type: 'textarea',
            required: true,
        },
        {
            name: 'socialLinks',
            type: 'array',
            fields: [
                { name: 'name', type: 'text' },
                { name: 'url', type: 'text' },
            ],
        },
    ],
};
