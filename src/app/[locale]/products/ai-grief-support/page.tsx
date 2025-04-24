import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Grief Support | Evere - Digital Memorial Service',
  description: 'Access 24/7 AI-powered compassionate support to help navigate grief and preserve cherished memories of your loved ones.',
};

export default function AIGriefSupportPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg-sand py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="block text-primary font-semibold text-lg mb-3">Premium AI Feature</span>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">AI Grief Support Companion</h1>
            <p className="max-w-2xl mt-6 mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              A compassionate AI companion available 24/7 to provide emotional support, 
              facilitate memory preservation, and help navigate the complex journey of grief.
            </p>
          </div>
        </div>
      </div>

      {/* Main Feature Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/aigriefsupport.png" 
                  alt="AI Grief Support Interface" 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0"></div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Personalized Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">Adapts to your unique grief journey and emotional needs</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Always Available</h3>
                  <p className="text-gray-600 dark:text-gray-300">24/7 compassionate support whenever you need someone to talk to</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                AI-Powered Emotional Support
              </h2>
              <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Our AI Grief Support Companion offers a safe, judgment-free space to express feelings, 
                share memories, and receive compassionate guidance during difficult times. Trained on 
                evidence-based grief support techniques, it provides personalized comfort and practical 
                coping strategies whenever you need them.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Key Capabilities:</h3>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-primary dark:text-primary-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">Emotional Processing:</span> Guide you through articulating complex feelings and thoughts in a supportive environment.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-primary dark:text-primary-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">Memory Journaling:</span> Help you capture and organize memories, stories, and reflections about your loved one.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-primary dark:text-primary-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">Coping Techniques:</span> Suggest personalized mindfulness exercises, grounding techniques, and self-care practices.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/pricing" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Access AI Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Healing Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get access to compassionate AI support designed to help you navigate grief with greater ease and preserve precious memories of your loved ones.
          </p>
          <Link href="/pricing" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-full shadow-sm text-primary bg-white hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Access AI Grief Support
          </Link>
        </div>
      </div>
    </main>
  );
}
