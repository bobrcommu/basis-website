'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface LovedOnesContentProps {
  locale: string;
}

export default function LovedOnesContent({ locale }: LovedOnesContentProps) {
  const searchParams = useSearchParams();
  const [isAnimated, setIsAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set up intersection observer for mobile scrolling effect
  useEffect(() => {
    if (!isMobile || !heroRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // If the element is in view and we're scrolling down, animate the polaroids
        if (entries[0].isIntersecting) {
          setIsAnimated(true);
        } else {
          setIsAnimated(false);
        }
      },
      { 
        threshold: 0.3 // Trigger when 30% of the element is visible
      }
    );

    observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [isMobile]);

  return (
    <main className="pt-24 pb-16 bg-[#F5F0E4]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden min-h-[90vh] flex items-center pt-16 pb-12">
        {/* Background with overlay */}
        <div className="absolute inset-0 -z-10">
          {/* Background image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/herobg.jpg')" }}></div>
          
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E4]/90 via-[#F5F0E4]/80 to-[#F5F0E4]/95"></div>
          
          {/* Decorative accent elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5 bg-[url('/subtle-pattern.png')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left content area */}
            <div className="w-full lg:w-1/2 lg:pr-8">
              <div className="max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/10 dark:from-primary/20 dark:to-primary/20 shadow-sm text-primary dark:text-primary-light text-sm font-medium border border-primary/20 dark:border-primary/30 transition-all duration-200 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/20 hover:border-primary/30">
                  Digital Memorial Tributes
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary tracking-tight font-playfair max-w-xl mx-auto lg:mx-0 relative">
                  Honor Your Loved Ones
                </h1>
                
                <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Create lasting digital memorials that celebrate and preserve the precious memories of those we cherish. Share their stories, photos, and legacy with future generations.
                </p>
                
                <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Link
                    href={`https://app.evere.io/${locale}/auth/sign-up`}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg hover:shadow-xl hover:translate-y-[-2px] group relative overflow-hidden"
                  >
                    <span className="relative z-10">Create Memorial</span>
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-full"></span>
                    <svg className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link
                    href="#memorial-types"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-200 rounded-full bg-white/60 text-primary-dark border border-primary/20 backdrop-blur-sm hover:bg-white/80 hover:text-primary-dark hover:shadow-md hover:translate-y-[-2px]"
                  >
                    <span>View Examples</span>
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/40 shadow-sm">
                  <div className="text-sm font-medium text-neutral-700 sm:mr-5 mb-3 sm:mb-0">Trusted by families worldwide</div>
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-5">
                    <div className="flex -space-x-3 mb-3 sm:mb-0">
                      {[1, 2, 3].map((num) => (
                        <div 
                          key={num} 
                          className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-md ring-2 ring-primary/20"
                        >
                          <img 
                            src={`/placeholder-avatar-${num}.svg`}
                            alt={`User ${num}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-primary font-bold">4.9/5</span>
                      <span className="text-neutral-700 ml-1">from 200+ reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right image area */}
            <div className="w-full lg:w-1/2">
              <div className="relative mx-auto max-w-lg">
                <div className={`relative h-[500px] group ${isAnimated ? 'polaroid-animated' : ''}`}>
                  {/* Polaroid 1 */}
                  <div className="absolute left-0 top-10 w-[85%] transform -rotate-6 transition-all duration-700 group-hover:left-[-15%] group-hover:top-[30%] group-hover:-rotate-12">
                    <div className="polaroid-frame bg-[#f7f3e9] p-3 rounded-sm shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] border border-[#e6e0d0] overflow-hidden">
                      <div className="overflow-hidden mb-3">
                        <img
                          src="/VINTAGEFAMILY.png"
                          alt="Memorial memory"
                          className="w-full h-[220px] object-cover grayscale-[30%] contrast-[90%] brightness-[1.05] sepia-[15%]"
                        />
                      </div>
                      <p className="font-handwriting text-sm text-neutral-700 text-center px-2 pb-1" style={{fontFamily: 'cursive'}}>Summer picnic, 2018</p>
                    </div>
                  </div>

                  {/* Polaroid 2 */}
                  <div className="absolute left-[15%] top-20 w-[80%] transform rotate-3 transition-all duration-700 group-hover:left-[10%] group-hover:top-[50%] group-hover:rotate-6">
                    <div className="polaroid-frame bg-[#f8f5ed] p-3 rounded-sm shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)] border border-[#e6e0d0] overflow-hidden">
                      <div className="overflow-hidden mb-3">
                        <img
                          src="/VINTAGEPHOTO.png"
                          alt="Memorial memory"
                          className="w-full h-[200px] object-cover grayscale-[20%] contrast-[95%] brightness-[1.05] sepia-[10%]"
                        />
                      </div>
                      <p className="font-handwriting text-sm text-neutral-700 text-center px-2 pb-1" style={{fontFamily: 'cursive'}}>Family reunion, 1948</p>
                    </div>
                  </div>

                  {/* Polaroid 3 */}
                  <div className="absolute left-[8%] top-0 w-[75%] transform -rotate-2 transition-all duration-700 group-hover:left-[50%] group-hover:top-[20%] group-hover:rotate-8">
                    <div className="polaroid-frame bg-[#f5f0e4] p-3 rounded-sm shadow-[0_10px_30px_-5px_rgba(0,0,0,0.25)] border border-[#e6e0d0] overflow-hidden">
                      <div className="relative overflow-hidden mb-3">
                        <img
                          src="/VINTAGEWEDDING.png"
                          alt="Memorial memory"
                          className="w-full h-[230px] object-cover grayscale-[10%] contrast-[98%] brightness-[1.02] sepia-[5%]"
                        />
                        <div className="absolute bottom-2 right-2 w-16 h-16 bg-gradient-to-br from-white/95 to-white/90 rounded-sm p-1.5 shadow-lg border border-white/80 rotate-3 hover:rotate-0 transition-all duration-300">
                          <img
                            src="/qr-code-example.svg"
                            alt="QR code example"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <p className="font-handwriting text-sm text-neutral-700 text-center px-2 pb-1" style={{fontFamily: 'cursive'}}>Wedding day, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memorial Types Section */}
      <section id="memorial-types" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Create Meaningful Digital Memorials
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-700">
              Our platform offers various ways to honor and remember your loved ones, combining traditional memorials with modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden mb-6">
                <img
                  src="/EVEREGRAVESTONE.png"
                  alt="Physical memorial with QR code"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Physical Memorial Integration</h3>
              <p className="text-neutral-700">Connect physical memorials with digital tributes using our weatherproof QR code plaques.</p>
            </div>

            <div className="relative group">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden mb-6">
                <img
                  src="/VINTAGEPHOTO.png"
                  alt="Restored vintage family photo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Photo Restoration</h3>
              <p className="text-neutral-700">Preserve and enhance cherished old photographs with our AI-powered restoration tools.</p>
            </div>

            <div className="relative group">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden mb-6">
                <img
                  src="/digital-memorial.svg"
                  alt="Digital memorial concept"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Tributes</h3>
              <p className="text-neutral-700">Create dynamic memorial pages with photos, videos, stories, and interactive features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Interactive Memorial */}
            <div className="bg-white rounded-2xl p-8">
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Interactive Memorial</h3>
              <p className="text-neutral-600 mb-6">Share photos, videos, stories, and cherished memories. Create a living tribute that grows over time with contributions from family and friends.</p>
            </div>

            {/* QR Code Integration */}
            <div className="bg-white rounded-2xl p-8">
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">QR Code Integration</h3>
              <p className="text-neutral-600 mb-6">Connect physical memorials to digital tributes with durable QR codes. Allow visitors to instantly access memories with a simple scan.</p>
            </div>

            {/* AI-Powered Tools */}
            <div className="bg-white rounded-2xl p-8">
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Tools</h3>
              <p className="text-neutral-600 mb-6">Enhance tributes with AI image restoration and eulogy writing assistance. Preserve and improve old photos, craft meaningful messages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Creating Your Memorial Website
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-700">
              Our intuitive platform makes it easy to create a beautiful and meaningful memorial website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/everescan.png"
                alt="Scanning QR code on memorial"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. Create Your Memorial</h3>
                  <p className="text-neutral-700">Start by creating a personalized memorial page with photos, stories, and memories.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">2. Add Rich Content</h3>
                  <p className="text-neutral-700">Upload photos and videos, write stories, and invite family members to contribute.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">3. Choose Your QR Product</h3>
                  <p className="text-neutral-700">Select from our range of weatherproof QR code products to connect physical and digital memorials.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">4. Share with Family</h3>
                  <p className="text-neutral-700">Invite family and friends to view and contribute to the memorial, creating a living tribute.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create Memorial Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-6">Create a Digital Memorial</h2>
                <p className="mb-6">
                  Honor and remember your loved ones with a personalized digital memorial. Our platform offers:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Customizable memorial pages with photos, videos, and stories</li>
                  <li>Privacy controls to manage who can view and contribute</li>
                  <li>Interactive features like guestbooks and comment sections</li>
                  <li>QR code integration for physical memorials</li>
                  <li>AI tools for image restoration and eulogy writing</li>
                  <li>Permanent preservation of memories for future generations</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href={`https://app.evere.io/${locale}/auth/sign-up`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
              >
                Create Memorial
              </Link>
              <Link
                href={`/${locale}/how-it-works`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition-colors"
              >
                Learn More
              </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden gradient-bg-sand">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 gradient-bg-sand"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium">
              Stories that inspire
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-4 tracking-tight">
              Memories preserved, stories shared
            </h2>
            
            <p className="text-lg text-neutral-800 dark:text-neutral-300 max-w-2xl mx-auto">
              Real stories from families who have used Evere to honor and remember their loved ones
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                content: "Evere helped our family create a beautiful memorial for my grandfather. The QR code plaque we placed at his grave allows visitors to see his life story, photos, and the impact he had on all of us. It's brought us comfort knowing his memory lives on in such a meaningful way.",
                author: {
                  name: 'Sarah Johnson',
                  role: 'Premium Plan User',
                  imageUrl: '/placeholder-avatar-1.svg',
                  location: 'Portland, Oregon'
                }
              },
              {
                content: "After losing my wife, I wanted to create something special to honor her memory. The digital memorial I created with Evere has become a place where our children and grandchildren can visit anytime to remember her. The QR code pendant I wear keeps her close to my heart, literally and figuratively.",
                author: {
                  name: 'Robert Martinez',
                  role: 'Forever Plan User',
                  imageUrl: '/placeholder-avatar-2.svg',
                  location: 'Chicago, Illinois'
                }
              },
              {
                content: "Our community lost a beloved teacher, and we used Evere to create a memorial that truly captured her spirit. We placed a QR code plaque in the school garden, and now students and staff can scan it to see photos, videos, and stories about her incredible impact. It's become a special place for reflection.",
                author: {
                  name: 'Emily Chen',
                  role: 'Premium Plan User',
                  imageUrl: '/placeholder-avatar-3.svg',
                  location: 'Austin, Texas'
                }
              }
            ].map((testimonial, index) => (
              <div key={index} className="h-full">
                <div className="relative h-full flex flex-col group">
                  {/* Decorative elements */}
                  <div className="absolute -top-3 -left-3 w-24 h-24 bg-primary/5 dark:bg-primary/10 rounded-full blur-xl -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                  
                  {/* Card */}
                  <div className="bg-[#F5F0E4]/80 dark:bg-neutral-900 rounded-2xl overflow-hidden h-full flex flex-col justify-between p-8 transform transition-all duration-300 hover:-translate-y-2 shadow-[0_5px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] border border-neutral-200/60 dark:border-neutral-700/60 z-10 relative">
                    <div className="absolute inset-0 overflow-hidden opacity-15 dark:opacity-20">
                      <img 
                        src={`/evere${index + 1 === 3 ? 7 : index + 4}.jpg`} 
                        alt="Background" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-6 right-8 text-neutral-200 dark:text-neutral-800 opacity-40">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14.2667 4.73333 12.8667 5.53333 11.5333C6.33333 10.2 7.46667 9 8.93333 7.93333L10.2667 9.46667C8.93333 10.4 8 11.3333 7.46667 12.2667C6.93333 13.2 6.66667 14.1333 6.66667 15.0667H7.33333C8 15.0667 8.6 15.3333 9.13333 15.8667C9.66667 16.4 9.93333 17 9.93333 17.6667C9.93333 18.3333 9.66667 18.9333 9.13333 19.4667C8.6 20 8 21.3333 7.33333 21.3333H9.33333ZM20 21.3333C18.5333 21.3333 17.3333 20.8 16.4 19.7333C15.4667 18.6667 15 17.3333 15 15.7333C15 14.2667 15.4 12.8667 16.2 11.5333C17 10.2 18.1333 9 19.6 7.93333L20.9333 9.46667C19.6 10.4 18.6667 11.3333 18.1333 12.2667C17.6 13.2 17.3333 14.1333 17.3333 15.0667H18C18.6667 15.0667 19.2667 15.3333 19.8 15.8667C20.3333 16.4 20.6 17 20.6 17.6667C20.6 18.3333 20.3333 18.9333 19.8 19.4667C19.2667 20 18.6667 21.3333 18 21.3333H20Z" fill="currentColor"/>
                      </svg>
                    </div>
                    
                    {/* Rating */}
                    <div>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-5 w-5 text-primary dark:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Testimonial content */}
                      <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>
                    
                    {/* Author */}
                    <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center">
                      <div className="relative w-12 h-12 overflow-hidden rounded-full">
                        <img 
                          src={testimonial.author.imageUrl} 
                          alt={testimonial.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-primary dark:text-primary">{testimonial.author.name}</p>
                        <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                          <span>{testimonial.author.role}</span>
                          <span className="mx-2">•</span>
                          <span>{testimonial.author.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorial Types and Preservation */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Preserving Memories for Future Generations
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700">
                  Digital memorial websites offer a modern way to preserve and share the precious memories of your loved ones. Unlike traditional memorials, digital tributes can grow and evolve over time, allowing family members to contribute stories, photos, and memories.
                </p>
                <p className="text-lg text-neutral-700">
                  Our platform combines the timeless tradition of memorialization with modern technology, creating an enduring legacy that can be accessed and appreciated by future generations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Family History</h3>
                    <p className="text-neutral-600">Preserve genealogical information and family stories</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Photo Archives</h3>
                    <p className="text-neutral-600">Store and restore precious family photographs</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Video Memories</h3>
                    <p className="text-neutral-600">Share video tributes and recorded memories</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Written Tributes</h3>
                    <p className="text-neutral-600">Collect stories and messages from loved ones</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/VINTAGEFAMILY.png"
                  alt="Vintage family photo"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/VINTAGEWEDDING.png"
                  alt="Vintage wedding photo"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/VINTAGEPHOTO.png"
                  alt="Restored vintage photo"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/evereplaque.png"
                  alt="Memorial plaque with QR code"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Digital Memorial Websites: A Modern Way to Remember
              </h2>
              <p>
                Digital memorial websites provide a meaningful way to honor and remember loved ones in the digital age. These online tributes combine traditional elements of remembrance with modern technology, creating an interactive and evolving memorial that can be shared with family and friends worldwide.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Why Choose a Digital Memorial?
              </h3>
              <ul className="space-y-3">
                <li>Accessible from anywhere, allowing family and friends to visit the memorial regardless of physical location</li>
                <li>Interactive features that enable sharing of stories, photos, and memories</li>
                <li>Permanent preservation of memories, stories, and photographs</li>
                <li>Integration with physical memorials through QR code technology</li>
                <li>Privacy controls to manage who can view and contribute to the memorial</li>
                <li>AI-powered tools for photo restoration and eulogy writing</li>
              </ul>
              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Creating a Lasting Digital Legacy
              </h3>
              <p>
                Our platform helps you create a meaningful digital legacy that preserves the memory of your loved ones for generations to come. Through a combination of traditional memorial elements and modern technology, we provide a space where memories can be shared, stories can be told, and legacies can live on.
              </p>
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-4">Memorial Website Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">For Families</h5>
                    <ul className="text-sm space-y-2">
                      <li>Easy-to-use memorial creation tools</li>
                      <li>Photo and video galleries</li>
                      <li>Interactive timeline features</li>
                      <li>Family tree integration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">For Visitors</h5>
                    <ul className="text-sm space-y-2">
                      <li>Guestbook for sharing memories</li>
                      <li>Story contribution features</li>
                      <li>Photo sharing capabilities</li>
                      <li>Memorial notification options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Memorial Community</h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Connect with others who understand your journey. Share experiences, find support, and preserve memories together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Support Groups</h3>
              <p className="text-neutral-600 mb-6">
                Join our caring community of individuals who share similar experiences. Find comfort, understanding, and friendship in our support groups.
              </p>
              <Link
                href={`/${locale}/community/support-groups`}
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Join a Group →
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Memorial Gallery</h3>
              <p className="text-neutral-600 mb-6">
                Explore public memorials created by our community. Find inspiration and see how others honor their loved ones.
              </p>
              <Link
                href={`/${locale}/gallery`}
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                View Gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
