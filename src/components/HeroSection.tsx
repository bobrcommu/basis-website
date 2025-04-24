'use client';

import { useState, useEffect, useRef } from 'react';
import Image from './Image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  showCTAs?: boolean;
  seoKeywords?: string[];
}

export default function HeroSection({ 
  title, 
  subtitle,
  description,
  imageSrc,
  showCTAs = true,
  seoKeywords = []
}: HeroSectionProps) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  // Words that will cycle in the animation
  const words = ["memory", "moment", "legacy", "tribute", "memorial", "headstone", "monument", "gravestone", "wedding", "qr"];
  const [wordIndex, setWordIndex] = useState(0);

  // Additional text that appears when "qr" is displayed
  const qrSuffix = " becomes forever";

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
  
  // For desktop, always enable animations after a short delay
  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Change word every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section 
      ref={heroRef}
      className="hero-section relative overflow-hidden min-h-[85vh] flex items-start md:items-center pt-24 md:pt-28 pb-20"
      style={{ 
        position: 'relative',
        backgroundColor: 'transparent',
      }}
    >
      {/* Add a proper image component for the background */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/herobg.webp"
          alt="Memorial background"
          fill
          priority
          quality={90}
          className="object-cover"
        />
      </div>
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-transparent backdrop-filter-none max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left content area */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <div className="max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/10 dark:from-primary/20 dark:to-primary/20 shadow-sm text-primary dark:text-primary-light text-sm font-medium border border-primary/20 dark:border-primary/30 transition-all duration-200 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/20 hover:border-primary/30 dark:hover:from-primary/30 dark:hover:to-primary/30 dark:hover:border-primary/40">
                Headstone QR Codes & Digital Memorials
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-primary dark:text-primary tracking-tight font-playfair max-w-xl mx-auto lg:mx-0 relative"
              >
                <motion.span 
                  className="block mb-1 lg:mb-2 drop-shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Where evere. 
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={words[wordIndex]}
                      initial={{ y: "40%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-40%", opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="inline-block ml-1 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                    >
                      {words[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <br />
                  <span className="block mt-2">becomes forever.</span>
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                {description || "Weather-resistant QR memorial plaques for headstones create permanent connections between physical gravesites and cherished digital memories — accessible with a simple scan."}
              </motion.p>
              
              <div className="mt-4 flex flex-row justify-center lg:justify-start gap-2 sm:gap-3">
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <Link
                    href={`https://app.evere.io/auth/sign-up`}
                    className="inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg hover:shadow-xl hover:translate-y-[-2px] dark:from-primary dark:to-primary-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary group relative overflow-hidden"
                  >
                    <span className="relative z-10">Create a memorial</span>
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-full"></span>
                    <svg className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all duration-200 rounded-full bg-white/60 text-primary-dark border border-primary/20 backdrop-blur-sm hover:bg-white/80 hover:text-primary-dark hover:shadow-md hover:translate-y-[-2px] dark:bg-neutral-800/60 dark:text-neutral-200 dark:border-neutral-700/60 dark:hover:bg-neutral-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300"
                  >
                    <span>See how it works</span>
                    <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
              
              {/* Enhanced trust indicators - adjusted for original style */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start p-3 rounded-xl bg-white/40 dark:bg-black/20 backdrop-blur-sm border border-white/40 dark:border-neutral-800/40 shadow-sm">
                <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300 sm:mr-4 mb-2 sm:mb-0">Trusted by families worldwide</div>
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                  <div className="flex -space-x-2 mb-2 sm:mb-0">
                    {[1, 2, 3].map((num) => (
                      <div 
                        key={num} 
                        className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-white dark:border-neutral-900 overflow-hidden shadow-md ring-2 ring-primary/20"
                      >
                        <Image 
                          src={`/placeholder-avatar-${num}.svg`} 
                          alt={`User ${num}`} 
                          width={32} 
                          height={32}
                          priority={true} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="flex mr-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-primary dark:text-primary-light font-bold">4.9/5</span>
                    <span className="text-neutral-700 dark:text-neutral-400 ml-1">from 200+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right image/visual area with vintage polaroid stack */}
          <div className="w-full lg:w-1/2 z-10">
            <div className="relative mx-auto max-w-lg">
              <div className={`relative h-[500px] group ${isAnimated ? 'polaroid-animated' : ''}`}>
                {/* Polaroid 1 - VINTAGEFAMILY */}
                <div className="absolute left-0 top-10 w-[85%] transform -rotate-6 transition-all duration-700 group-hover:left-[-15%] group-hover:top-[30%] group-hover:-rotate-12 z-10">
                  <div className="polaroid-frame bg-[#f7f3e9] p-3 rounded-sm shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] border border-[#e6e0d0] overflow-hidden ring-1 ring-white/70">
                    <div className="overflow-hidden mb-3">
                      <Image
                        src="https://evere.io/VINTAGEFAMILY.PNG"
                        alt="Family memorial memory shared through headstone QR code"
                        width={400}
                        height={220}
                        className="w-full h-[220px] object-cover grayscale-[30%] contrast-[90%] brightness-[1.05] sepia-[15%] transform hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <p className="font-handwriting text-sm text-neutral-700 text-center px-2 pb-1" style={{fontFamily: 'cursive'}}>Summer picnic, 2018</p>
                  </div>
                </div>
                
                {/* Polaroid 2 - VINTAGEPHOTO */}
                <div className="absolute left-[15%] top-20 w-[80%] transform rotate-3 transition-all duration-700 group-hover:left-[10%] group-hover:top-[50%] group-hover:rotate-6 z-20">
                  <div className="polaroid-frame bg-[#f8f5ed] p-3 rounded-sm shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)] border border-[#e6e0d0] overflow-hidden ring-1 ring-white/70">
                    <div className="overflow-hidden mb-3">
                      <Image
                        src="https://evere.io/VINTAGEPHOTO.PNG"
                        alt="Digital memorial photo accessed via QR code on monument"
                        width={400}
                        height={200}
                        className="w-full h-[200px] object-cover grayscale-[20%] contrast-[95%] brightness-[1.05] sepia-[10%] transform hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <p className="font-handwriting text-sm text-neutral-700 text-center px-2 pb-1" style={{fontFamily: 'cursive'}}>Family reunion, 1948</p>
                  </div>
                </div>
                
                {/* Polaroid 3 - VINTAGEWEDDING */}
                <div className="absolute left-[8%] top-0 w-[75%] transform -rotate-2 transition-all duration-700 group-hover:left-[50%] group-hover:top-[20%] group-hover:rotate-8 z-30">
                  <div className="polaroid-frame bg-[#f5f0e4] p-3 rounded-sm shadow-[0_10px_30px_-5px_rgba(0,0,0,0.25)] border border-[#e6e0d0] overflow-hidden ring-1 ring-white/70">
                    <div className="relative overflow-hidden mb-3">
                      <Image
                        src="https://evere.io/VINTAGEWEDDING.PNG"
                        alt="Wedding memory preserved through QR code memorial technology"
                        width={400}
                        height={230}
                        className="w-full h-[230px] object-cover grayscale-[10%] contrast-[98%] brightness-[1.02] sepia-[5%] transform hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute bottom-2 right-2 w-16 h-16 bg-gradient-to-br from-white/95 to-white/90 dark:from-neutral-800/95 dark:to-neutral-800/90 rounded-sm p-1.5 shadow-lg border border-white/80 dark:border-neutral-700/80 rotate-3 hover:rotate-0 transition-all duration-300">
                        <Image
                          src="/EVEREICON1.webp"
                          alt="Evere Logo"
                          width={50}
                          height={50}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <p className="font-handwriting text-sm text-neutral-700 text-center px-2 pb-1" style={{fontFamily: 'cursive'}}>Wedding day, 1972</p>
                  </div>
                </div>

                {/* Phone image */}
                <div className="absolute sm:left-[40%] md:left-[1%] top-[5%] sm:top-[8%] flex items-center justify-center transition-all duration-700 mx-auto left-0 right-0" style={{ zIndex: 999 }}>
                  <div className="relative transform rotate-[-3deg] hover:rotate-[-1deg] transition-all duration-300">
                    <Image
                      src="https://evere.io/qrherophone.png" 
                      alt="Scanning headstone QR code with smartphone"
                      width={190}
                      height={390}
                      priority={true}
                      className="object-contain drop-shadow-2xl filter-none"
                    />
                    <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl opacity-40 rounded-full"></div>
                  </div>
                </div>

                {/* Memorial Plaque */}
                <div className="absolute left-[50%] top-[40%] w-[250px] transition-all duration-700" style={{ zIndex: 999 }}>
                  <div className="relative w-full py-2 px-2 transform rotate-[-10deg] hover:rotate-[-1deg] transition-all duration-300 overflow-visible">
                    <Image
                      src="https://evere.io/evereplaque.png"
                      alt="Durable QR code plaque for headstones and memorials"
                      width={250}
                      height={250}
                      priority={true}
                      className="w-full h-auto drop-shadow-2xl filter-none"
                    />
                    <div className="absolute inset-0 -z-10 bg-yellow-500/10 blur-xl opacity-50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adding hidden SEO text that's visually hidden but readable by search engines */}
      <div className="sr-only">
        <h2>Headstone QR Codes for Memorials and Gravestones</h2>
        <p>
          Create lasting digital memorials with weather-resistant QR codes for headstones, 
          monuments, and gravestones. Our memorial QR codes connect physical burial sites 
          with digital memories, stories, photos, and videos that can be accessed by anyone
          with a smartphone. Preserve your loved one's legacy with Evere's permanent QR code
          memorial plaques.
        </p>
      </div>
    </section>
  );
}