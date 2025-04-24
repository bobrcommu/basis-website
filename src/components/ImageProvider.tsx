'use client';

import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { ImageProps } from 'next/image';
import OptimizedStaticImage from './OptimizedStaticImage';

// Define interface for the context
interface ImageContextProps {
  getOptimizedPath: (src: string) => string;
  isLCPImage: (src: string) => boolean;
}

// Create a context
const ImageContext = createContext<ImageContextProps>({
  getOptimizedPath: (src) => src,
  isLCPImage: () => false,
});

// LCP images that should be prioritized
const LCP_IMAGES = [
  '/herobg.jpg',
  '/herobg.webp',
  '/herobg.avif',
  '/view-gravestone-with-flowers-candle.jpg',
  '/view-gravestone-with-flowers-candle.webp',
  '/statuehero.webp',
  '/statuehero.avif',
  '/VINTAGEFAMILY.PNG',
  '/VINTAGEWEDDING.PNG',
  '/everefront.png',
  '/logonew.png',
  '/EVEREICON1.png',
  '/herophone.png',
  '/qrherophone.png',
  'https://evere.io/VINTAGEFAMILY.PNG',
  'https://evere.io/VINTAGEPHOTO.PNG',
  'https://evere.io/VINTAGEWEDDING.PNG',
  'https://evere.io/qr-code-example.svg',
  'https://evere.io/qrherophone.png',
  'https://evere.io/evereplaque.png'
];

// Images that should use their original paths without optimization
const DIRECT_SERVE_IMAGES = [
  // Hero section images
  '/statuehero.webp',
  '/VINTAGEFAMILY.PNG',
  '/VINTAGEWEDDING.PNG',
  '/herobg.jpg',
  '/herobg.webp',
  '/everefront.png',
  '/everefront.webp',
  '/logonew.png',
  '/logonew.webp',
  '/herophone.png',
  '/herophone.webp',
  '/qrherophone.png',
  '/qrherophone.webp',
  '/evereplaque.png',
  '/evereplaque.webp',
  'https://evere.io/VINTAGEFAMILY.PNG',
  'https://evere.io/VINTAGEPHOTO.PNG',
  'https://evere.io/VINTAGEWEDDING.PNG',
  'https://evere.io/qr-code-example.svg',
  'https://evere.io/qrherophone.png',
  'https://evere.io/evereplaque.png',
  
  // Avatar placeholders
  '/placeholder-avatar-1.svg',
  '/placeholder-avatar-2.svg',
  '/placeholder-avatar-3.svg',
  
  // Other critical images
  '/EVEREICON1.png',
  '/view-gravestone-with-flowers-candle.jpg',
  '/view-gravestone-with-flowers-candle.webp'
];

// Provider component to handle image optimization
export function ImageProvider({ children }: { children: ReactNode }) {
  // Check if path is for an LCP image
  const isLCPImage = useMemo(() => {
    return (src: string) => {
      if (typeof src !== 'string') return false;
      return LCP_IMAGES.some(lcpSrc => src.includes(lcpSrc));
    };
  }, []);

  // Get optimized image path if available
  const getOptimizedPath = useMemo(() => {
    return (src: string) => {
      if (typeof src !== 'string') return src;
      
      // If already using optimized path, return as is
      if (src.includes('/optimized/')) return src;
      
      // Check if this image should be served directly
      if (DIRECT_SERVE_IMAGES.some(directSrc => src.includes(directSrc))) {
        return src;
      }
      
      // Check if we have an optimized version in our public folder
      const baseName = src.split('/').pop()?.split('.')[0];
      const ext = src.split('.').pop()?.toLowerCase();
      
      if (!baseName || !ext) return src;
      
      // First prefer WebP format as most compatible modern format 
      const webpPath = `/optimized/${baseName}.webp`;
      
      // Return the optimized path
      return webpPath;
    };
  }, []);

  const contextValue = useMemo(() => ({
    getOptimizedPath,
    isLCPImage,
  }), [getOptimizedPath, isLCPImage]);

  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
}

// Hook to use the image context
export function useImageOptimization() {
  return useContext(ImageContext);
}

// Optimized image component with context
export function OptimizedImageWithContext(props: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  lcp?: boolean;
  fadeIn?: boolean;
  fill?: boolean;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  quality?: number;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  objectPosition?: string;
}) {
  const { getOptimizedPath, isLCPImage } = useImageOptimization();
  const { src, ...restProps } = props;
  
  // Determine if this is an LCP image
  const isLCP = isLCPImage(src);
  
  // Get optimized image path if available
  const optimizedSrc = typeof src === 'string' ? getOptimizedPath(src) : src;
  
  return (
    <OptimizedStaticImage
      src={optimizedSrc}
      lcp={isLCP}
      width={props.width || 100}
      height={props.height || 100}
      {...restProps}
    />
  );
} 