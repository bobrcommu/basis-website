import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Suspense } from 'react';

type Params = {
  locale: string;
};

export const metadata: Metadata = {
  title: 'AI Eulogy Writer | Evere - Digital Memorial Service',
  description: 'Create heartfelt, personalized eulogies for your loved ones with our AI-powered eulogy writer. Available exclusively for Premium and Lifetime members.',
};

export default async function AIEulogyWriterPage({
  params,
}: {
  params: Params;
}) {
  const { locale } = params;
  
  const features = [
    {
      title: 'Personalized Content',
      description: 'Our AI generates heartfelt eulogies tailored to your loved one\'s unique personality, achievements, and relationships.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Multiple Styles',
      description: 'Choose from various tones and styles including heartfelt, inspiring, reflective, or celebratory to match the occasion.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Easy Customization',
      description: 'Edit and refine the AI-generated content to add your personal touch and ensure every detail is perfect.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: 'Memory Integration',
      description: 'Incorporate special memories, stories, and quotes already stored in your memorial page for a truly meaningful eulogy.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Answer Simple Questions',
      description: 'Provide details about your loved one through our guided questionnaire process.',
    },
    {
      number: '02',
      title: 'AI Generation',
      description: 'Our advanced AI creates a personalized eulogy based on the information provided.',
    },
    {
      number: '03',
      title: 'Review & Edit',
      description: 'Refine the eulogy using our intuitive editor to ensure it captures your loved one\'s essence.',
    },
    {
      number: '04',
      title: 'Save & Print',
      description: 'Save the eulogy to your memorial page and print a beautifully formatted copy for the service.',
    },
  ];

  const testimonials = [
    {
      quote: "The AI Eulogy Writer helped me find the words when I couldn't. It created a beautiful tribute that perfectly captured my father's spirit.",
      author: "Sarah K.",
    },
    {
      quote: "I was struggling with what to say at my grandmother's service. This tool gave me a wonderful starting point that I could personalize with our special memories.",
      author: "Michael T.",
    },
    {
      quote: "Writing a eulogy is one of the hardest things to do when grieving. This service made it so much easier while still feeling deeply personal.",
      author: "Jennifer L.",
    },
  ];

  const EulogyWriterContent = () => (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium">
              Premium Feature
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">AI Eulogy Writer</h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
              Honor your loved ones with beautifully crafted, personalized eulogies generated with the help of AI.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="gradient-bg-sand py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Finding the Right Words
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
                Writing a eulogy is one of the most challenging tasks during a time of grief. Our AI Eulogy Writer 
                helps you create a meaningful tribute that honors your loved one's life, achievements, and legacy.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
                Available exclusively for Premium and Lifetime members, this tool provides a thoughtful framework 
                that you can customize to create a eulogy that truly reflects the unique individual you're remembering.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-96 w-full">
                  <Image 
                    src="/evere-eulogywriter.png" 
                    alt="Writing a eulogy" 
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

      {/* Features Section */}
      <div className="gradient-bg-sand py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Powerful Writing Features
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Our AI technology offers thoughtful assistance for creating meaningful eulogies.
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
              Creating a heartfelt eulogy has never been more straightforward.
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

      {/* Testimonials Section */}
      <div className="gradient-bg-sand py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              What Our Users Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Hear from others who have used our AI Eulogy Writer.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 relative">
                  {/* Quote mark */}
                  <div className="absolute top-6 left-8 text-6xl text-primary/10 dark:text-primary/20">
                    "
                  </div>
                  <div className="relative z-10">
                    <p className="text-gray-700 dark:text-gray-300 italic mb-6">{testimonial.quote}</p>
                    <p className="text-primary dark:text-primary-light font-medium">{testimonial.author}</p>
                  </div>
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
                    AI Eulogy Writer is available exclusively for our Premium and Lifetime members. 
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
                        src="/evereplaque.png" 
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EulogyWriterContent />
    </Suspense>
  );
}
