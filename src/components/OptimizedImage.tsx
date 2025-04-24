'use client';

import Image, { ImageProps } from 'next/image';

/**
 * This component wraps Next.js Image component and sets unoptimized=true by default
 * Use this for static export compatibility
 */
export default function OptimizedImage(props: ImageProps) {
  return <Image {...props} unoptimized={true} />;
} 