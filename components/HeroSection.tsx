'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Content } from '@/types/content';
import { FiArrowRight } from 'react-icons/fi';

interface HeroSectionProps {
  featuredContent: Content;
}

export default function HeroSection({ featuredContent }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {featuredContent.featuredImage && (
        <div className="absolute inset-0 opacity-20">
          <Image
            src={featuredContent.featuredImage}
            alt={featuredContent.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full uppercase">
              {featuredContent.category}
            </span>
            <span className="text-gray-300 text-sm">
              {format(new Date(featuredContent.createdAt), 'MMMM d, yyyy')}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {featuredContent.title}
          </h1>
          {featuredContent.excerpt && (
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {featuredContent.excerpt}
            </p>
          )}
          <Link
            href={`/content/${featuredContent.slug}`}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            <span>Read More</span>
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

