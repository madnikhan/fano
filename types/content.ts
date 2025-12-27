export type ContentType = 'article' | 'blog' | 'news' | 'update' | 'facebook' | 'youtube' | 'twitter';

export interface Content {
  id?: string;
  type: ContentType;
  title: string;
  slug: string;
  excerpt?: string;
  content: string | any; // Can be string or Sanity portable text array
  featuredImage?: string;
  author: string;
  authorId: string;
  category: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  createdAt: Date | any;
  updatedAt: Date | any;
  publishedAt?: Date | any;
  views?: number;
  likes?: number;
  // Social media specific fields
  socialMediaUrl?: string;
  embedCode?: string;
  platform?: 'facebook' | 'youtube' | 'twitter';
}

export interface Category {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

