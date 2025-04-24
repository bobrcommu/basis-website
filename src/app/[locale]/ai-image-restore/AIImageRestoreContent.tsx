"use client";

import Image from 'next/image';
import Link from 'next/link';

interface AIImageRestoreContentProps {
  locale: string;
}

export default function AIImageRestoreContent({ locale }: AIImageRestoreContentProps) {
  const features = [
    {
      title: 'Photo Restoration',
      description: 'Remove scratches, stains, and other damage from old photographs to bring them back to life.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Colorization',
      description: 'Add realistic color to black and white photos to make them feel more modern and vibrant.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Resolution Enhancement',
      description: 'Increase the resolution of low-quality images to make them sharper and clearer.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      ),
    },
    {
      title: 'Face Enhancement',
      description: 'Improve facial features and expressions in old portraits to make them more lifelike.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Upload Your Photo',
      description: 'Select the image you want to restore from your device or memorial page.',
    },
    {
      number: '02',
      title: 'AI Processing',
      description: 'Our advanced AI analyzes and enhances your photo automatically.',
    },
    {
      number: '03',
      title: 'Preview & Adjust',
      description: 'Review the results and make any final adjustments before saving.',
    },
    {
      number: '04',
      title: 'Download & Share',
      description: 'Download your restored photo and share it with family and friends.',
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium">
              Premium Feature
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">AI Image Restoration</h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
              Bring old, damaged photos back to life with our advanced AI technology.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="gradient-bg-sand py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Powerful Restoration Features
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Our AI technology can transform even the most damaged photos.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="rounded-2xl h-full transform transition-all duration-300 bg-neutral-50 dark:bg-neutral-900 shadow-[0_5px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.2)] overflow-hidden group-hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] border border-neutral-200/60 dark:border-neutral-700/60 relative">
                    <div className="px-6 py-8 sm:px-8 h-full relative">
                      {/* Feature icon with background */}
                      <div className="mb-6 relative">
                        <div className="w-14 h-14 rounded-xl bg-black dark:bg-black shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.4)] flex items-center justify-center relative z-10 border border-black/80 dark:border-black/80 transition-all duration-300 group-hover:shadow-[0_12px_25px_-5px_rgba(0,0,0,0.25)] dark:group-hover:shadow-[0_12px_25px_-5px_rgba(0,0,0,0.5)]">
                          <div className="h-6 w-6 text-white dark:text-white">{feature.icon}</div>
                        </div>
                      </div>
                      
                      {/* Feature content */}
                      <h3 className="text-xl font-bold text-primary dark:text-primary mb-3 font-playfair">{feature.title}</h3>
                      <p className="text-neutral-700 dark:text-neutral-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="gradient-bg-sand py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Restoring your precious memories is simple and straightforward.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 bg-neutral-50 dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Feature Notice */}
      <div className="gradient-bg-sand py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 dark:bg-black rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Exclusive Premium Feature
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    AI Image Restoration is available exclusively for our Premium and Lifetime members. 
                    Upgrade your plan today to access this and other premium features.
                  </p>
                  <div className="mt-8 flex">
                    <div className="inline-flex rounded-md shadow">
                      <Link
                        href={`/${locale}/#pricing`}
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
                      >
                        Upgrade Now
                      </Link>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                      <Link
                        href={`/${locale}/contact`}
                        className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:border-transparent"
                      >
                        Contact Support
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-2">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <div className="relative h-80 w-full">
                      <Image 
                        src="/evereimagerestore.png" 
                        alt="Premium feature" 
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
