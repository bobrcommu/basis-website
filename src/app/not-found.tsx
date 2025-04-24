'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Default locale fallback
const DEFAULT_LOCALE = 'en';

export default function NotFound() {
  const router = useRouter();
  
  // Attempt to redirect to a valid locale route
  useEffect(() => {
    // Check if we're navigating to a root-level path without locale
    const pathname = window.location.pathname;
    if (pathname === '/' || pathname === '') {
      router.replace(`/${DEFAULT_LOCALE}`);
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <div className="space-y-4">
          <Link 
            href={`/${DEFAULT_LOCALE}`}
            className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            Go to Homepage
          </Link>
          <div className="text-sm text-gray-500">
            Available languages:
            <div className="mt-2 flex justify-center gap-4">
              {['en', 'nl', 'fr', 'de', 'es'].map(locale => (
                <Link 
                  key={locale}
                  href={`/${locale}`}
                  className="px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {locale.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
