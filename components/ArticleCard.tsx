'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Content } from '@/types/content';
import { FiEye, FiHeart, FiFacebook, FiYoutube, FiTwitter } from 'react-icons/fi';

interface ArticleCardProps {
  content: Content;
  featured?: boolean;
}

export default function ArticleCard({ content, featured = false }: ArticleCardProps) {
  const getPlatformIcon = () => {
    switch (content.platform) {
      case 'facebook':
        return <FiFacebook className="w-4 h-4" />;
      case 'youtube':
        return <FiYoutube className="w-4 h-4" />;
      case 'twitter':
        return <FiTwitter className="w-4 h-4" />;
      default:
        return null;
    }
  };

  if (featured) {
    return (
      <Link href={`/content/${content.slug}`} className="group">
        <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          {content.featuredImage && (
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={content.featuredImage}
                alt={content.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {content.platform && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2 text-sm font-medium">
                  {getPlatformIcon()}
                  <span className="capitalize">{content.platform}</span>
                </div>
              )}
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase">
                {content.category}
              </span>
              <span className="text-gray-500 text-sm">
                {format(new Date(content.createdAt), 'MMM d, yyyy')}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
              {content.title}
            </h2>
            {content.excerpt && (
              <p className="text-gray-600 mb-4 line-clamp-3">{content.excerpt}</p>
            )}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="font-medium">{content.author}</span>
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <FiEye className="w-4 h-4" />
                  <span>{content.views || 0}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FiHeart className="w-4 h-4" />
                  <span>{content.likes || 0}</span>
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/content/${content.slug}`} className="group">
      <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
        {content.featuredImage && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={content.featuredImage}
              alt={content.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {content.platform && (
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1.5 text-xs font-medium">
                {getPlatformIcon()}
                <span className="capitalize">{content.platform}</span>
              </div>
            )}
          </div>
        )}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase">
              {content.category}
            </span>
            <span className="text-gray-500 text-xs">
              {format(new Date(content.createdAt), 'MMM d')}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {content.title}
          </h3>
          {content.excerpt && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">{content.excerpt}</p>
          )}
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
            <span>{content.author}</span>
            <div className="flex items-center space-x-3">
              <span className="flex items-center space-x-1">
                <FiEye className="w-3 h-3" />
                <span>{content.views || 0}</span>
              </span>
              <span className="flex items-center space-x-1">
                <FiHeart className="w-3 h-3" />
                <span>{content.likes || 0}</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

