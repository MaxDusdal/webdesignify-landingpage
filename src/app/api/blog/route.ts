import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import payloadConfig from '@/app/payload.config';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    
    // Get query parameters with defaults
    const limit = Number(searchParams.get('limit') || '10');
    const page = Number(searchParams.get('page') || '1');
    const sort = searchParams.get('sort') || '-date'; // Default sort by date descending
    const where = searchParams.get('where') ? JSON.parse(searchParams.get('where')!) : {};
    
    try {
        const payload = await getPayload({ config: payloadConfig });
        
        const result = await payload.find({
            collection: 'blog',
            limit,
            page,
            sort,
            where: {
                status: { equals: 'published' }, // Only fetch published posts
                ...where,
            },
            depth: 1, // To populate relationships like author
        });
        
        return NextResponse.json(result);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
    }
} 