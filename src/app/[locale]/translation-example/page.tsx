import { Metadata } from 'next';
import Link from 'next/link';
import TranslationExample from '@/components/TranslationExample';

export const metadata: Metadata = {
  title: 'Translation Example | EverE Memorial',
  description: 'Example page demonstrating the translation system for EverE Memorial.',
};

export default function TranslationExamplePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  return (
    <main className="mt-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link 
            href={`/${locale}`} 
            className="text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
        
        <div className="mb-16">
          <h1 className="text-4xl font-bold">Translation Example</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4">
            This page demonstrates the multilingual support system implemented using Google Cloud Translation API.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['en', 'nl', 'fr', 'de', 'es'].map(lang => (
              <Link 
                key={lang}
                href={`/${lang}/translation-example`}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  locale === lang 
                    ? 'bg-primary text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                } transition-colors`}
              >
                {lang.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        
        <TranslationExample />
      </div>
    </main>
  );
}
