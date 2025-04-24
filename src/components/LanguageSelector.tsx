'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { SUPPORTED_LOCALES } from '@/lib/locales';
import { LANGUAGE_NAMES } from '@/lib/locizeService';

type LanguageSelectorProps = {
  locale: string;
  className?: string;
};

export default function LanguageSelector({ locale, className = '' }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Get the path without the locale prefix to construct links
  const getPathWithoutLocale = () => {
    if (!pathname) return '/';
    
    // Remove locale prefix from path
    const segments = pathname.split('/');
    if (segments[1] === locale) {
      return `/${segments.slice(2).join('/')}`;
    }
    return pathname;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors"
        aria-expanded={isOpen}
        aria-label={`Select language: current language is ${LANGUAGE_NAMES[locale as keyof typeof LANGUAGE_NAMES] || 'English'}`}
      >
        <div className="w-6 h-4 relative overflow-hidden rounded-sm">
          <Image 
            src={`/flags/${locale}.svg`}
            alt={LANGUAGE_NAMES[locale as keyof typeof LANGUAGE_NAMES] || 'English'}
            fill
            sizes="24px"
            className="object-cover"
          />
        </div>
        <svg
          className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 z-50 py-1">
          {SUPPORTED_LOCALES.map((lang) => (
            <Link
              key={lang}
              href={`/${lang}${getPathWithoutLocale().replace(/^\/|\/$/g, '')}`}
              className={`flex items-center px-4 py-2 text-sm ${
                lang === locale
                  ? 'bg-primary/10 text-primary dark:bg-primary/20 font-medium'
                  : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              <div className="w-6 h-4 relative overflow-hidden rounded-sm mr-3">
                <Image 
                  src={`/flags/${lang}.svg`}
                  alt={LANGUAGE_NAMES[lang as keyof typeof LANGUAGE_NAMES]}
                  fill
                  sizes="24px"
                  className="object-cover"
                />
              </div>
              <span>{LANGUAGE_NAMES[lang as keyof typeof LANGUAGE_NAMES]}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
