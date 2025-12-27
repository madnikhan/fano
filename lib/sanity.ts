import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const contentQuery = `*[_type == "content" && published == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  type,
  excerpt,
  content,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name, slug, "image": image.asset->url},
  "category": category->{name, slug, color},
  tags,
  published,
  featured,
  publishedAt,
  platform,
  socialMediaUrl,
  embedCode
}`;

export const featuredContentQuery = `*[_type == "content" && published == true && featured == true] | order(publishedAt desc)[0] {
  _id,
  title,
  slug,
  type,
  excerpt,
  content,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name, slug, "image": image.asset->url},
  "category": category->{name, slug, color},
  tags,
  published,
  featured,
  publishedAt,
  platform,
  socialMediaUrl,
  embedCode
}`;

export const contentBySlugQuery = `*[_type == "content" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  type,
  excerpt,
  content,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name, slug, "image": image.asset->url},
  "category": category->{name, slug, color},
  tags,
  published,
  featured,
  publishedAt,
  platform,
  socialMediaUrl,
  embedCode
}`;

export const contentByTypeQuery = `*[_type == "content" && published == true && type == $type] | order(publishedAt desc) {
  _id,
  title,
  slug,
  type,
  excerpt,
  content,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name, slug, "image": image.asset->url},
  "category": category->{name, slug, color},
  tags,
  published,
  featured,
  publishedAt,
  platform,
  socialMediaUrl,
  embedCode
}`;

export const contentByCategoryQuery = `*[_type == "content" && published == true && category->slug.current == $categorySlug] | order(publishedAt desc) {
  _id,
  title,
  slug,
  type,
  excerpt,
  content,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name, slug, "image": image.asset->url},
  "category": category->{name, slug, color},
  tags,
  published,
  featured,
  publishedAt,
  platform,
  socialMediaUrl,
  embedCode
}`;

