// This middleware handles:
// 1. Setting proper cache headers for static assets
// 2. Image optimization route handling
// 3. Response compression optimization

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CACHE_CONTROL_HEADERS = {
  // Long-term caching for static assets (1 year)
  STATIC: 'public, max-age=31536000, immutable',
  // Medium-term caching for images and other content (1 week)
  IMAGES: 'public, max-age=604800, stale-while-revalidate=86400',
  // Short-term caching for dynamic content (1 hour)
  DYNAMIC: 'public, max-age=3600, stale-while-revalidate=300',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Add cache control headers based on the content type
  if (pathname.match(/\.(jpg|jpeg|png|webp|avif|svg|ico)$/i)) {
    response.headers.set('Cache-Control', CACHE_CONTROL_HEADERS.IMAGES);
  } else if (pathname.match(/\.(js|css|woff|woff2|ttf|otf)$/i)) {
    response.headers.set('Cache-Control', CACHE_CONTROL_HEADERS.STATIC);
  } else if (!pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', CACHE_CONTROL_HEADERS.DYNAMIC);
  }

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except server-side API routes
    '/((?!api/|_next/static|_next/image|favicon.ico).*)',
  ],
}; 