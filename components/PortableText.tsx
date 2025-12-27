'use client';

import { PortableText as SanityPortableText } from '@portabletext/react';
import Image from 'next/image';

// Extract video ID from YouTube URL
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// YouTube Embed Component
function YouTubeEmbed({ url, caption }: { url: string; caption?: string }) {
  if (!url) {
    return (
      <div className="my-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-600">⚠️ YouTube embed: No URL provided</p>
      </div>
    );
  }

  const videoId = getYouTubeVideoId(url);
  
  if (!videoId) {
    return (
      <div className="my-8 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600 font-semibold">❌ Invalid YouTube URL</p>
        <p className="text-red-500 text-sm mt-1">URL provided: {url}</p>
        <p className="text-red-500 text-sm">Please use a valid YouTube URL format</p>
      </div>
    );
  }

  return (
    <div className="my-8">
      <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {caption && (
        <p className="mt-2 text-sm text-gray-600 text-center italic">{caption}</p>
      )}
    </div>
  );
}

// Custom components for Portable Text
const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?.url) return null;
      return (
        <div className="my-8">
          <Image
            src={value.asset.url}
            alt={value.alt || 'Image'}
            width={800}
            height={600}
            className="rounded-lg w-full h-auto"
          />
          {value.alt && (
            <p className="mt-2 text-sm text-gray-600 text-center italic">{value.alt}</p>
          )}
        </div>
      );
    },
    youtubeEmbed: ({ value }: { value: any }) => {
      if (!value?.url) {
        return (
          <div className="my-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-600">YouTube embed missing URL</p>
          </div>
        );
      }
      return <YouTubeEmbed url={value.url} caption={value.caption} />;
    },
  },
  block: {
    h1: (props: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{props.children}</h1>
    ),
    h2: (props: any) => (
      <h2 className="text-3xl font-bold mt-6 mb-3">{props.children}</h2>
    ),
    h3: (props: any) => (
      <h3 className="text-2xl font-bold mt-4 mb-2">{props.children}</h3>
    ),
    normal: (props: any) => (
      <p className="mb-4 leading-relaxed">{props.children}</p>
    ),
  },
};

interface PortableTextProps {
  content: any;
}

export default function PortableText({ content }: PortableTextProps) {
  if (!content) return null;
  
  // If content is already a string, render it as plain text
  if (typeof content === 'string') {
    return <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{content}</div>;
  }

  // If content is an array (portable text), render it with Sanity PortableText
  if (Array.isArray(content)) {
    return (
      <div className="prose prose-lg max-w-none">
        <SanityPortableText value={content} components={components} />
      </div>
    );
  }

  return null;
}

