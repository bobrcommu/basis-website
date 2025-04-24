import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Ereve - Digital Memorial Service',
  description: 'Join our team at Ereve and help us create meaningful digital memorials that preserve memories for generations to come.',
};

export default function CareersPage() {
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: "We're looking for a talented frontend developer to help build beautiful, responsive digital memorial experiences.",
      requirements: [
        'Strong experience with React, Next.js, and TypeScript',
        'Proficiency in modern CSS and responsive design',
        'Experience with UI/UX design principles',
        'Ability to write clean, maintainable code',
        'Passion for creating meaningful user experiences',
      ],
    },
    {
      id: 2,
      title: 'Customer Success Specialist',
      department: 'Customer Support',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help our customers create meaningful digital memorials and provide compassionate support during sensitive times.',
      requirements: [
        'Excellent communication and empathy skills',
        'Experience in customer support or similar role',
        'Ability to explain technical concepts in simple terms',
        'Strong problem-solving abilities',
        'Comfort working with people experiencing grief',
      ],
    },
    {
      id: 3,
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design beautiful, intuitive interfaces for our digital memorial platform and physical QR code products.',
      requirements: [
        'Strong portfolio demonstrating UI/UX design skills',
        'Experience with design systems and component libraries',
        'Proficiency in Figma or similar design tools',
        'Understanding of accessibility standards',
        'Ability to balance aesthetics with usability',
      ],
    },
  ];

  // Sample benefits
  const benefits = [
    {
      title: 'Flexible Work',
      description: 'Remote-first company with flexible hours to help you maintain work-life balance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      imageUrl: '/evere1.jpg',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs to keep you at your best.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      imageUrl: '/evere2.jpg',
    },
    {
      title: 'Professional Growth',
      description: 'Learning stipends and career development opportunities to help you grow.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      imageUrl: '/evere3.jpg',
    },
    {
      title: 'Meaningful Work',
      description: "Make a real difference in people's lives by helping them preserve precious memories.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      imageUrl: '/evere4.jpg',
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Careers at Ereve</h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
              Join our mission to help people preserve and share memories of their loved ones.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Culture Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Our Mission & Culture
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
                At Ereve, we're building technology that helps people preserve and share the memories of their loved ones in meaningful ways. We believe that everyone deserves to be remembered, and that modern technology can help us create more personal, accessible, and enduring memorials.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
                Our team is compassionate, innovative, and dedicated to making a positive impact in people's lives during difficult times. We work remotely, value work-life balance, and foster a culture of empathy, collaboration, and continuous learning.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/statuehero.jpg" 
                  alt="Team collaboration" 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Benefits & Perks
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              We take care of our team so they can focus on taking care of our customers.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="pt-6 relative">
                  <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-900 shadow-[0_5px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.2)] border border-neutral-200/60 dark:border-neutral-700/60 relative px-6 pb-8 h-full overflow-hidden hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <div className="absolute inset-0 opacity-15 dark:opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('${benefit.imageUrl}')` }}></div>
                    
                    {/* Icon positioned at the top */}
                    <div className="w-14 h-14 rounded-xl bg-black dark:bg-black shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.4)] flex items-center justify-center absolute -top-6 left-6 z-10 border border-black/80 dark:border-black/80">
                      <div className="h-6 w-6 text-white dark:text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white tracking-tight font-playfair">{benefit.title}</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Open Positions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Join our team and help us build the future of digital memorialization.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="rounded-2xl bg-neutral-50 dark:bg-neutral-900 shadow-[0_5px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.2)] border border-neutral-200/60 dark:border-neutral-700/60 relative overflow-hidden hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] transition-all duration-300">
                <div className="absolute inset-0 opacity-15 dark:opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('/evere${job.id + 1}.jpg')` }}></div>
                <div className="px-6 py-5 sm:px-8 relative">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-playfair">{job.title}</h3>
                    <div className="flex space-x-2">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        {job.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{job.description}</p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-5 sm:px-8 relative">
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">Requirements</h4>
                  <ul className="mt-4 space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-500 dark:text-gray-400">{requirement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-5 sm:px-8 relative">
                  <Link href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white">
                    Apply for this position
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-gray-500 dark:text-gray-400">
              Don't see a position that matches your skills? We're always looking for talented people.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
