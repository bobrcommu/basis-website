"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function HowItWorksSection() {
  // State to track which step is active
  const [activeStep, setActiveStep] = useState(0);

  // The steps in the process with sand color scheme
  const steps = [
    {
      id: "01",
      title: "Create free medallion",
      description: "Start by creating your digital medallion for free. No account needed.",
      checklistItems: [
        "Go to our website",
        "Click 'Create free medallion'",
        "Customize your design"
      ],
      bgColor: "bg-neutral-50", // Lightest sand
      iconBg: "bg-neutral-50",
      checkmarkBg: "bg-primary/10",
      checkmarkColor: "text-primary",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Buy a product",
      description: "Choose from our selection of high-quality physical products.",
      checklistItems: [
        "Browse product catalog",
        "Select your preferred style",
        "Complete checkout securely"
      ],
      bgColor: "bg-neutral-100", // Light sand
      iconBg: "bg-neutral-50",
      checkmarkBg: "bg-primary/10",
      checkmarkColor: "text-primary",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Connect",
      description: "Link your physical product with your digital medallion.",
      checklistItems: [
        "Open the Camera App",
        "Scan the QR Code",
        "Tap the Link"
      ],
      bgColor: "bg-neutral-200", // Medium-light sand
      iconBg: "bg-neutral-50",
      checkmarkBg: "bg-primary/10",
      checkmarkColor: "text-primary",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden gradient-bg-sand">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-bg-sand"></div>
        
        {/* Decorative accent circles */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-4 tracking-tight">
            How It Works
          </h1>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium">
            Simple & easy to use
          </div>
        </div>

        {/* Steps - All steps shown on mobile, tab menu on desktop */}
        <div className="hidden md:flex flex-col md:flex-row gap-6 justify-between mb-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex-1 relative cursor-pointer transition-all duration-300 ${
                activeStep === index ? 'border-b-2 border-primary dark:border-primary' : 'border-b-2 border-transparent hover:border-neutral-300 dark:hover:border-neutral-700'
              }`}
              onClick={() => setActiveStep(index)}
              role="button"
              tabIndex={0}
              aria-label={`Switch to step ${step.id}: ${step.title}`}
            >
              <div className="p-4 text-center">
                <h3 className={`text-lg md:text-xl font-bold my-3 ${
                  activeStep === index ? 'text-primary dark:text-primary' : 'text-neutral-700 dark:text-neutral-300'
                }`}>
                  {step.title.replace(/^\d+\s+/, '')}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Desktop Tabs */}
        <div className="hidden md:block">
          <div className="rounded-2xl p-8 md:p-12 shadow-lg mt-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-700/60 shadow-[0_5px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.2)] relative overflow-hidden">
            {/* Background image with fade effect */}
            <div 
              className="absolute inset-0 opacity-15 dark:opacity-20 bg-cover bg-center" 
              style={{ backgroundImage: `url('/evere${activeStep + 1}.jpg')` }}
            ></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left side: Image */}
              <div className="flex justify-center">
                {activeStep === 0 ? (
                  <div className="w-full max-w-[400px]">
                    <Image 
                      src="/everecreateprofile.png" 
                      alt="Create free medallion on phone" 
                      width={400} 
                      height={700} 
                      className="w-full drop-shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-300" 
                    />
                  </div>
                ) : activeStep === 1 ? (
                  <div className="w-full max-w-[400px]">
                    <Image 
                      src="/qrtag.png" 
                      alt="QR Tag product" 
                      width={400} 
                      height={400} 
                      className="w-full rounded-xl shadow-lg" 
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-[400px]">
                    <Image 
                      src="/everescan.png" 
                      alt="Scan QR code with phone" 
                      width={700} 
                      height={700} 
                      className="w-full drop-shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-300" 
                    />
                  </div>
                )}
              </div>
              
              {/* Right side: Text content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-6">
                  {activeStep === 0 ? "Create your memorial medallion" : 
                   activeStep === 1 ? "Choose your perfect QR product" : 
                   "Connect digital to physical"}
                </h2>
                
                <p className="text-neutral-800 dark:text-neutral-300 mb-8">
                  {steps[activeStep].description}
                </p>
                
                {/* Checklist - Now Dynamic Based on Active Step with Colored Checkmarks */}
                <div className="space-y-4">
                  {steps[activeStep].checklistItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`h-6 w-6 rounded-full ${steps[activeStep].checkmarkBg} flex items-center justify-center flex-shrink-0 mr-4`}>
                        <svg className={`h-4 w-4 ${steps[activeStep].checkmarkColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                  <span className="text-lg text-neutral-800 dark:text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              
                {/* CTA Button */}
                <div className="mt-10">
                  <a 
                    href="https://app.evere.io/auth/sign-up" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-all duration-200 rounded-full bg-primary text-neutral-50 shadow-lg hover:shadow-xl hover:bg-primary-dark dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                  >
                    <span>Get started for free</span>
                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - All steps shown sequentially - Improved for mobile */}
        <div className="md:hidden space-y-10">
          {steps.map((step, index) => (
            <div key={step.id} className="rounded-2xl p-5 sm:p-6 shadow-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-700/60 shadow-[0_5px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.2)] relative overflow-hidden">
              {/* Background image with fade effect */}
              <div 
                className="absolute inset-0 opacity-15 dark:opacity-20 bg-cover bg-center" 
                style={{ backgroundImage: `url('/evere${index + 1}.jpg')` }}
              ></div>
              
              {/* Step number and title */}
              <div className="mb-5">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white font-bold text-sm mb-3">
                  {step.id}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary">
                  {step.title.replace(/^\d+\s+/, '')}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Image */}
                <div className="flex justify-center">
                  {index === 0 ? (
                    <div className="w-full max-w-[220px]">
                      <Image 
                        src="/everecreateprofile.png" 
                        alt="Create free medallion on phone" 
                        width={400} 
                        height={700} 
                        className="w-full drop-shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-300" 
                        priority={index === 0}
                      />
                    </div>
                  ) : index === 1 ? (
                    <div className="w-full max-w-[280px]">
                      <Image 
                        src="/qrtag.png" 
                        alt="QR Tag product" 
                        width={400} 
                        height={400} 
                        className="w-full rounded-xl shadow-lg" 
                        priority={index === 1}
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-[220px]">
                      <Image 
                        src="/everescan.png" 
                        alt="Scan QR code with phone" 
                        width={400} 
                        height={700} 
                        className="w-full drop-shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-300" 
                        priority={index === 2}
                      />
                    </div>
                  )}
                </div>
                
                {/* Text content */}
                <div>
                  <p className="text-neutral-800 dark:text-neutral-300 mb-5 text-base sm:text-lg">
                    {step.description}
                  </p>
                  
                  {/* Checklist - Improved for touch targets */}
                  <div className="space-y-3 sm:space-y-4">
                    {step.checklistItems.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className={`h-6 w-6 rounded-full ${step.checkmarkBg} flex items-center justify-center flex-shrink-0 mr-3`}>
                          <svg className={`h-4 w-4 ${step.checkmarkColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base sm:text-lg text-neutral-800 dark:text-neutral-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Mobile CTA Button - Improved for mobile */}
          <div className="mt-8 flex justify-center">
            <a 
              href="https://app.evere.io/auth/sign-up" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-full max-w-xs px-8 py-4 text-base font-bold transition-all duration-200 rounded-full bg-primary text-neutral-50 shadow-lg hover:shadow-xl hover:bg-primary-dark dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary touch-manipulation`}
              aria-label="Get started for free"
            >
              <span>Get started for free</span>
              <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
