'use client';

/**
 * This is a drop-in replacement for the Next.js Image component 
 * that works with static exports.
 * 
 * Import this instead of 'next/image' in your components.
 */

import { OptimizedImageWithContext } from './ImageProvider';

// Define the same props interface as Next.js Image component
type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  className?: string;
  style?: React.CSSProperties;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  objectPosition?: string;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
};

// Hero image paths that should be prioritized
const HERO_IMAGES = [
  '/herobg.jpg',
  '/herobg.webp',
  '/statuehero.webp',
  '/VINTAGEFAMILY.PNG',
  '/VINTAGEWEDDING.PNG',
  '/placeholder-avatar-1.svg',
  '/placeholder-avatar-2.svg',
  '/placeholder-avatar-3.svg',
  '/herophone.png',
  '/everefront.png',
  '/qrherophone.png',
  '/evereplaque.png',
  'https://evere.io/VINTAGEFAMILY.PNG',
  'https://evere.io/VINTAGEPHOTO.PNG',
  'https://evere.io/VINTAGEWEDDING.PNG',
  'https://evere.io/qr-code-example.svg',
  'https://evere.io/qrherophone.png',
  'https://evere.io/evereplaque.png'
];

/**
 * Drop-in replacement for Next.js Image component that works with static exports
 */
export default function Image({
  src,
  alt,
  width = 100,
  height = 100,
  fill,
  quality,
  priority,
  loading,
  className,
  style,
  objectFit,
  objectPosition,
  sizes,
  ...rest
}: ImageProps) {
  // Check if this is a hero image that should be prioritized
  const isHeroImage = typeof src === 'string' && HERO_IMAGES.some(path => src.includes(path));
  
  // Set priority automatically for hero images
  const shouldPrioritize = priority || isHeroImage;
  
  return (
    <OptimizedImageWithContext
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      quality={quality}
      priority={shouldPrioritize}
      loading={loading}
      className={className} 
      style={style}
      objectFit={objectFit}
      objectPosition={objectPosition}
      sizes={sizes}
    />
  );
} 