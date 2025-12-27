import { client, contentQuery, featuredContentQuery, contentBySlugQuery, contentByTypeQuery, contentByCategoryQuery } from './sanity';
import { Content } from '@/types/content';

// Transform Sanity content to our Content type
function transformSanityContent(sanityContent: any): Content {
  return {
    id: sanityContent._id,
    type: sanityContent.type,
    title: sanityContent.title,
    slug: sanityContent.slug?.current || sanityContent.slug,
    excerpt: sanityContent.excerpt,
    content: sanityContent.content || '',
    featuredImage: sanityContent.featuredImage,
    author: sanityContent.author?.name || 'Unknown',
    authorId: sanityContent.author?.slug?.current || '',
    category: sanityContent.category?.name || 'Uncategorized',
    tags: sanityContent.tags || [],
    published: sanityContent.published || false,
    featured: sanityContent.featured || false,
    createdAt: sanityContent.publishedAt ? new Date(sanityContent.publishedAt) : new Date(),
    updatedAt: sanityContent.publishedAt ? new Date(sanityContent.publishedAt) : new Date(),
    publishedAt: sanityContent.publishedAt ? new Date(sanityContent.publishedAt) : undefined,
    views: 0,
    likes: 0,
    socialMediaUrl: sanityContent.socialMediaUrl,
    embedCode: sanityContent.embedCode,
    platform: sanityContent.platform,
  };
}

export async function getContents(options?: {
  type?: string;
  published?: boolean;
  featured?: boolean;
  category?: string;
  limitCount?: number;
}): Promise<Content[]> {
  try {
    let query = contentQuery;
    let params: any = {};

    if (options?.type) {
      query = contentByTypeQuery;
      params.type = options.type;
    } else if (options?.category) {
      query = contentByCategoryQuery;
      params.categorySlug = options.category;
    }

    const contents = await client.fetch(query, params);
    let transformed = contents.map(transformSanityContent);

    if (options?.featured) {
      transformed = transformed.filter((c: Content) => c.featured);
    }

    if (options?.limitCount) {
      transformed = transformed.slice(0, options.limitCount);
    }

    return transformed;
  } catch (error) {
    console.error('Error fetching contents:', error);
    return [];
  }
}

export async function getContent(slug: string): Promise<Content | null> {
  try {
    const content = await client.fetch(contentBySlugQuery, { slug });
    if (!content) return null;
    return transformSanityContent(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    return null;
  }
}

export async function getFeaturedContent(): Promise<Content | null> {
  try {
    const content = await client.fetch(featuredContentQuery);
    if (!content) return null;
    return transformSanityContent(content);
  } catch (error) {
    console.error('Error fetching featured content:', error);
    return null;
  }
}

