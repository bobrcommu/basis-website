'use client';

import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Use legacy Image from Next.js which works better with static exports
interface OptimizedStaticImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  lcp?: boolean; // Mark as Largest Contentful Paint image
  fadeIn?: boolean; // Enable fade-in effect
  fill?: boolean;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  quality?: number;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  objectPosition?: string;
}

/**
 * OptimizedStaticImage component with improved loading behavior:
 * - Works with static exports (Next.js output: 'export')
 * - Proper handling of LCP images
 * - Fade-in effects when desired
 */
export default function OptimizedStaticImage({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  lcp = false,
  priority = false,
  fadeIn = true,
  fill = false,
  sizes,
  loading: loadingProp,
  quality = 75,
  objectFit = 'cover',
  objectPosition,
}: OptimizedStaticImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [finalSrc, setFinalSrc] = useState(src);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // Determine loading strategy
  const shouldPrioritize = priority || lcp;
  const loading = loadingProp || (shouldPrioritize ? 'eager' : 'lazy');
  
  // Decide fade in animation style
  const fadeInClass = fadeIn && isLoaded ? 'opacity-100' : fadeIn && !isLoaded ? 'opacity-0' : '';
  const combinedClassName = `${fadeIn ? 'transition-opacity duration-300' : ''} ${fadeInClass} ${className}`.trim();
  
  // Try to use optimized image paths if available
  useEffect(() => {
    // IMPORTANT: Always use the original source as default
    setFinalSrc(src);
    
    if (typeof src !== 'string') return;
    
    // If already using optimized path, keep as is
    if (src.includes('/optimized/')) return;
    
    // Skip optimization check for image URLs
    if (src.startsWith('http')) return;
    
    // Get base file name (without extension)
    const baseName = src.split('/').pop()?.split('.')[0];
    if (!baseName) return;
    
    // Don't attempt to check non-existent images
    if (baseName === 'undefined' || baseName === 'null') return;
    
    // Construct optimized path
    const optimizedPath = `/optimized/${baseName}.webp`;
    
    // Try to load the optimized version
    const preloadImg = new window.Image();
    
    // Only set the optimized path if it successfully loads
    preloadImg.onload = () => {
      setFinalSrc(optimizedPath);
    };
    
    // On error, keep using the original source (already set above)
    preloadImg.onerror = () => {}; 
    
    // Start the image load check
    preloadImg.src = optimizedPath;
  }, [src]);
  
  // Preload LCP images 
  useEffect(() => {
    if (lcp && typeof finalSrc === 'string') {
      const imgElement = new window.Image();
      imgElement.src = finalSrc;
    }
  }, [lcp, finalSrc]);

  return (
    <div 
      ref={ref} 
      className={`relative ${fill ? 'h-full w-full' : ''}`}
      style={{ ...style, height: fill ? '100%' : 'auto', width: fill ? '100%' : 'auto' }}
    >
      {(isInView || shouldPrioritize) && (
        <Image
          src={finalSrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          layout={fill ? 'fill' : 'intrinsic'}
          objectFit={objectFit}
          objectPosition={objectPosition}
          sizes={sizes}
          loading={loading as any}
          quality={lcp ? 90 : quality}
          className={combinedClassName}
          priority={priority}
          onLoadingComplete={() => setIsLoaded(true)}
          unoptimized={true} // Required for static export
        />
      )}
    </div>
  );
} 