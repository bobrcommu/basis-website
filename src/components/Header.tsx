"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';

type HeaderProps = {
  locale?: string;
};

export default function Header({ locale: propLocale = 'en' }: HeaderProps) {
  const params = useParams();
  const routeLocale = typeof params?.locale === 'string' ? params.locale : undefined;
  
  // Use the locale from the URL params if available, otherwise fall back to the prop
  const locale = routeLocale || propLocale;
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-neutral-200/20 ${mounted ? 'dark:border-neutral-800/20' : ''} py-3`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href={`/${locale}`} className="flex items-center group">
                <div className="relative overflow-hidden rounded-full">
                  <Image 
                    src="/EVEREICON1.png"
                    alt="Evere Memorial"
                    width={120} 
                    height={40}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href={`/${locale}/products`}
                className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 dark:text-neutral-300 dark:hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary dark:after:bg-white after:transition-all hover:after:w-full"
              >
                Products
              </Link>
              <Link 
                href={`/${locale}/how-it-works`}
                className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 dark:text-neutral-300 dark:hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary dark:after:bg-white after:transition-all hover:after:w-full"
              >
                How It Works
              </Link>
              <Link 
                href={`/${locale}/pricing`}
                className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 dark:text-neutral-300 dark:hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary dark:after:bg-white after:transition-all hover:after:w-full"
              >
                Pricing
              </Link>
              
              {/* Memorial Types Dropdown */}
              <div className="relative group">
                <button className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 dark:text-neutral-300 dark:hover:text-white inline-flex items-center relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary dark:after:bg-white after:transition-all group-hover:after:w-full">
                  Memorial Types
                  <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-neutral-200 dark:bg-neutral-800/90 dark:border-neutral-700 py-2 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <Link href={`/${locale}/memorial-types`} className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700/70 rounded-md mx-2 transition-colors duration-150">
                    All Memorial Types
                  </Link>
                  <Link href={`/${locale}/memorial-types/weddings`} className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700/70 rounded-md mx-2 transition-colors duration-150">
                    Weddings
                  </Link>
                  <Link href={`/${locale}/loved-ones`} className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700/70 rounded-md mx-2 transition-colors duration-150">
                    Loved Ones
                  </Link>
                  <Link href={`/${locale}/animals`} className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700/70 rounded-md mx-2 transition-colors duration-150">
                    Animals
                  </Link>
                  <Link href={`/${locale}/landmarks`} className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700/70 rounded-md mx-2 transition-colors duration-150">
                    Landmarks
                  </Link>
                </div>
              </div>
              
              {/* Premium Features Dropdown */}
              <div className="relative group">
                <button className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 dark:text-neutral-300 dark:hover:text-white inline-flex items-center relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary dark:after:bg-white after:transition-all group-hover:after:w-full">
                  Premium AI Features
                  <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-neutral-200 dark:bg-neutral-800/90 dark:border-neutral-700 py-2 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <Link href={`/${locale}/ai-image-restore`} className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700/70 rounded-md mx-2 transition-colors duration-150">
                    AI Image Restore
                  </Link>
                  <Link href={`/${locale}/ai-eulogy-writer`} className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700/70 rounded-md mx-2 transition-colors duration-150">
                    AI Eulogy Writer
                  </Link>
                  <Link href={`/${locale}/products/ai-grief-support`} className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700/70 rounded-md mx-2 transition-colors duration-150">
                    AI Grief Support
                  </Link>
                </div>
              </div>
              
              <Link 
                href={`/${locale}/partnership`}
                className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 dark:text-neutral-300 dark:hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary dark:after:bg-white after:transition-all hover:after:w-full"
              >
                Partnership
              </Link>
            </nav>

            {/* CTA Buttons and Language Selector */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <LanguageSelector 
                locale={locale} 
                className="mr-1" 
              />
              
              <Link 
                href={`https://app.evere.io/auth/sign-in`} 
                className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 dark:text-neutral-300 dark:hover:text-white"
              >
                Log in
              </Link>
              <Link 
                href={`https://app.evere.io/auth/sign-up`} 
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark dark:bg-primary-light dark:text-neutral-900 dark:hover:bg-primary transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                type="button" 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2.5 rounded-full text-neutral-600 bg-neutral-100/80 hover:bg-neutral-200/80 dark:text-neutral-400 dark:bg-neutral-800/80 dark:hover:bg-neutral-700/80 focus:outline-none transition-colors duration-200"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                {/* Icon when menu is closed */}
                {!isMenuOpen ? (
                  <svg 
                    className="block h-5 w-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg 
                    className="block h-5 w-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with improved touch targets and spacing */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md dark:bg-neutral-800/95 shadow-lg">
            <div className="px-3 pt-3 pb-6 space-y-2">
              {/* Language Selector for Mobile */}
              <div className="flex justify-end px-3 py-2">
                <LanguageSelector locale={locale} />
              </div>
              <Link 
                href={`/${locale}/products`} 
                className="block px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href={`/${locale}/how-it-works`} 
                className="block px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href={`/${locale}/pricing`} 
                className="block px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="relative mt-3">
                <div className="px-4 py-2 text-base font-medium text-neutral-500 dark:text-neutral-400">
                  Memorial Types
                </div>
                <div className="pl-4 mt-1">
                  <Link 
                    href={`/${locale}/memorial-types`}
                    className="block px-4 py-3 mb-1 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Memorial Types
                  </Link>
                  <Link 
                    href={`/${locale}/memorial-types/weddings`}
                    className="block px-4 py-3 mb-1 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Weddings
                  </Link>
                  <Link 
                    href={`/${locale}/loved-ones`}
                    className="block px-4 py-3 mb-1 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Loved Ones
                  </Link>
                  <Link 
                    href={`/${locale}/animals`}
                    className="block px-4 py-3 mb-1 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Animals
                  </Link>
                  <Link 
                    href={`/${locale}/landmarks`}
                    className="block px-4 py-3 mb-1 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Landmarks
                  </Link>
                </div>
              </div>
              
              <div className="relative mt-3">
                <div className="px-4 py-2 text-base font-medium text-neutral-500 dark:text-neutral-400">
                  Premium Features
                </div>
                <div className="pl-4 mt-1">
                  <Link 
                    href={`/${locale}/ai-image-restore`} 
                    className="block px-4 py-3 mb-1 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI Image Restore
                  </Link>
                  <Link 
                    href={`/${locale}/ai-eulogy-writer`} 
                    className="block px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI Eulogy Writer
                  </Link>
                  <Link 
                    href={`/${locale}/products/ai-grief-support`} 
                    className="block px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI Grief Support
                  </Link>
                </div>
              </div>
              <Link 
                href={`/${locale}/partnership`}
                className="block px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Partnership
              </Link>
            </div>
            <div className="pt-6 pb-6 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex flex-col space-y-4 px-4 mt-3">
                <Link 
                  href={`https://app.evere.io/auth/sign-in`} 
                  className="block w-full px-4 py-3.5 text-center text-base font-medium rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-150 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  href={`https://app.evere.io/auth/sign-up`} 
                  className="block w-full px-4 py-3.5 text-center text-base font-medium rounded-full bg-primary text-white hover:bg-primary-dark dark:bg-primary-light dark:text-neutral-900 dark:hover:bg-primary transition-colors duration-200 touch-manipulation shadow-md hover:shadow-lg transform hover:-translate-y-1 relative overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent animate-pulse"></span>
                  <span className="relative">Get Started</span>
                </Link>
              </div>
            </div>
            
            {/* Add a sticky Get Started button at the bottom of mobile menu */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md shadow-lg border-t border-neutral-200 dark:border-neutral-700">
              <Link 
                href={`https://app.evere.io/auth/sign-up`} 
                className="block w-full px-4 py-4 text-center text-base font-bold rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-200 touch-manipulation shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Persistent Floating Get Started Button - Always visible on mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Link 
          href={`https://app.evere.io/auth/sign-up`} 
          className="flex items-center justify-center px-5 py-4 text-base font-bold rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-all duration-300 animate-pulse-subtle"
          style={{
            boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 0 0 3px rgba(255,255,255,0.2)',
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)'
          }}
        >
          <span className="relative">
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse rounded-full"></span>
            <span className="relative">Get Started</span>
          </span>
        </Link>
      </div>

      {/* Custom animation for the button */}
      <style jsx global>{`
        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 0 0 3px rgba(255,255,255,0.2);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(0,0,0,0.2), 0 0 0 4px rgba(255,255,255,0.3);
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}
