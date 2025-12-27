'use client';

import Image from 'next/image';
import { getCloudinaryUrl } from '@/lib/cloudinary';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 80,
}: CloudinaryImageProps) {
  // Check if it's already a Cloudinary URL or a regular URL
  const isCloudinaryUrl = src.includes('cloudinary.com');
  
  let imageUrl = src;
  
  // If it's a Cloudinary public ID (not a full URL), construct the URL
  if (!isCloudinaryUrl && !src.startsWith('http')) {
    imageUrl = getCloudinaryUrl(src, {
      width,
      height,
      quality,
      format: 'auto',
    });
  } else if (isCloudinaryUrl && width) {
    // If it's already a Cloudinary URL, add transformations
    const baseUrl = src.split('/upload/')[0];
    const publicId = src.split('/upload/')[1];
    imageUrl = getCloudinaryUrl(publicId, {
      width,
      height,
      quality,
      format: 'auto',
    });
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      quality={quality}
    />
  );
}

