"use client";

import { useRef } from 'react';
import Link from 'next/link';

interface FeaturesSectionProps {
  locale: string;
}

export default function FeaturesSection({ locale }: FeaturesSectionProps) {
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      name: 'Digital Memorial Pages',
      description: 'Create beautiful, personalized memorial pages with photos, videos, stories, and tributes that can be shared with family and friends.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      path: ""
    },
    {
      name: 'Claimable QR Medallions',
      description: 'Elegant physical medallions and plaques with unique QR codes that can be claimed and linked to your digital memorials.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
      path: `/${locale}/products/medallion`
    },
    {
      name: 'AI Image Restoration',
      description: 'Breathe new life into old or damaged photos with our advanced AI technology that repairs, enhances, and colorizes images.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      path: `/${locale}/ai-image-restore`
    },
    {
      name: 'AI Eulogy Writer',
      description: "Create heartfelt, personalized eulogies with the help of our AI assistant that captures your loved one's unique personality and legacy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      path: `/${locale}/ai-eulogy-writer`
    },
    {
      name: 'AI Grief Support Companion',
      description: 'Access 24/7 compassionate AI support to help navigate the grief journey, preserve memories, and find comfort during difficult moments.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      path: `/${locale}/products/ai-grief-support`
    },
    {
      name: 'Collaborative Memories',
      description: 'Invite family and friends to contribute their own memories, photos, and stories to create a rich, collective memorial.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      path: ""
    },
    {
      name: 'Timeline & Life Events',
      description: 'Organize memories chronologically with an interactive timeline showcasing important life events, achievements, and milestones.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      path: ""
    },
    {
      name: 'Secure & Private',
      description: 'Control who can view and contribute to the memorial with customizable privacy settings and secure access controls.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      path: ""
    },
  ];

  // Only keep 6 features (2 rows of 3)
  const displayedFeatures = features.slice(0, 6);

  return (
    <section id="features" className="relative py-12 overflow-hidden gradient-bg-sand feature-section" ref={featuresRef}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-bg-sand"></div>
        <div className="absolute -bottom-24 right-0 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"></div>
        <div className="absolute inset-0 opacity-3 dark:opacity-5 pointer-events-none">
          <div className="h-full w-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium">
            Feature-Rich Platform
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-4 tracking-tight font-playfair">
            Honor their legacy in a digital age
          </h1>
          <p className="text-lg text-neutral-800 dark:text-neutral-300 mx-auto">
            Evere combines beautiful digital memorials with advanced AI tools to create lasting, meaningful tributes that preserve memories for generations.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {displayedFeatures.map((feature, index) => (
              <div 
                key={feature.name} 
                className="relative group"
              >
                <div className="rounded-xl h-full transform transition-all duration-300 bg-[#F5F0E4]/80 dark:bg-neutral-900/80 shadow-sm hover:shadow-md overflow-hidden group-hover:-translate-y-1 border border-neutral-200/20 dark:border-neutral-700/40 relative p-5 md:p-6">
                  <div 
                    className="absolute inset-0 opacity-15 dark:opacity-20 bg-cover bg-center" 
                    style={{ 
                      backgroundImage: `url('/evere${index === 5 ? 7 : index + 1}.jpg')`
                    }}
                  ></div>
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 dark:from-gray-800 dark:to-black rounded-sm shadow-md flex items-center justify-center relative z-10 transform transition-all duration-300 group-hover:rotate-3">
                      <div className="h-6 w-6 text-white dark:text-white">{feature.icon}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{feature.name}</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-[15px] leading-relaxed">{feature.description}</p>
                  
                  {feature.path && (
                    <div className="mt-4">
                      <Link 
                        href={feature.path}
                        className="text-sm font-medium text-primary dark:text-primary-light hover:underline inline-flex items-center"
                      >
                        Learn more
                        <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-14 text-center">
          <a 
            href="https://app.evere.io/auth/sign-up"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 rounded-full bg-primary text-neutral-50 shadow-lg hover:bg-primary-dark hover:shadow-xl dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <span>Explore all features</span>
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
