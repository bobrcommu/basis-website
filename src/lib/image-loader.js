/**
 * Custom image loader for Next.js
 * This is used to optimize images when using static export mode
 * It checks for optimized images in the /optimized directory first,
 * then falls back to using the original path
 */

export default function customImageLoader({ src, width, quality }) {
  // Handle absolute URLs (external images)
  if (src.startsWith('http')) {
    // For external URLs, we'll return them as-is since we can't optimize them
    return src;
  }

  // Try to use pre-optimized image paths
  const pathWithoutExt = src.substring(0, src.lastIndexOf('.')) || src;
  const ext = src.split('.').pop()?.toLowerCase();
  
  // Check if the path already includes 'optimized'
  if (src.includes('/optimized/')) {
    return src;
  }
  
  // Try to use optimized AVIF or WebP versions first
  const imageName = src.split('/').pop().split('.')[0];
  const basePath = '/optimized/';
  
  // Try webp if the browser supports it (most modern browsers do)
  const webpPath = `${basePath}${imageName}.webp`;
  
  // If we have a width parameter, append it as a query string
  // This doesn't actually resize the image but helps with client-side caching
  const widthParam = width ? `?w=${width}` : '';
  const qualityParam = quality ? `&q=${quality || 75}` : '';
  
  return `${webpPath}${widthParam}${qualityParam}`;
} 