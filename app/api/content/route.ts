import { NextRequest, NextResponse } from 'next/server';
import { getContents, createContent } from '@/lib/content';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    const published = searchParams.get('published');
    const featured = searchParams.get('featured');
    const category = searchParams.get('category');
    const limitCount = searchParams.get('limit');

    const contents = await getContents({
      type: type as any,
      published: published === 'true' ? true : published === 'false' ? false : undefined,
      featured: featured === 'true',
      category: category || undefined,
      limitCount: limitCount ? parseInt(limitCount) : undefined,
    });

    return NextResponse.json(contents);
  } catch (error) {
    console.error('Error fetching contents:', error);
    return NextResponse.json({ error: 'Failed to fetch contents' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const id = await createContent(body);
    return NextResponse.json({ id });
  } catch (error) {
    console.error('Error creating content:', error);
    return NextResponse.json({ error: 'Failed to create content' }, { status: 500 });
  }
}

