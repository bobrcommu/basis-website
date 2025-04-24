'use client';

import Link from 'next/link';
import Image from 'next/image';
import HowItWorksSection from '@/components/HowItWorksSection';
import { useState, useEffect, useRef } from 'react';

interface HowItWorksContentProps {
  locale: string;
}

interface PolaroidImage {
  src: string;
  alt: string;
  initialX: number;
  initialY: number;
  rotateZ: number;
  delay: number;
  scale: number;
  caption: string;
  mobileX: number;
  mobileY: number;
  mobileScale: number;
  zIndex?: number;
  showLogo?: boolean;
}

export function HowItWorksPageContent({ locale }: HowItWorksContentProps) {
  // Mouse position state for polaroid animation
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimated, setIsAnimated] = useState(false);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroSectionRef.current) {
        const rect = heroSectionRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the center of the hero section
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enable animations after a short delay
  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);
    
    // Set animation complete after all polaroids have flown in
    const completionTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2500); // Allow time for all polaroids to fly in
    
    return () => {
      clearTimeout(animationTimer);
      clearTimeout(completionTimer);
    };
  }, []);
  
  // Detect viewport size to adjust polaroid styles
  useEffect(() => {
    const checkViewport = () => {
      setIsDesktopView(window.innerWidth >= 768);
    };
    
    // Initial check
    checkViewport();
    
    // Listen for window resize
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Enhanced polaroid images with more variety and improved positioning
  const polaroidImages: PolaroidImage[] = [
    // Vintage wedding photos (similar to screenshot)
    { 
      src: '/image 81.png', 
      alt: 'Wedding Memory', 
      initialX: 15,
      initialY: 5,  // Reverted to positive value
      rotateZ: -8, 
      delay: 0, 
      scale: 1.1,
      caption: 'Our wedding day, June 2012',
      mobileX: -35, // Moved more to the left
      mobileY: -35, // Moved higher up
      mobileScale: 0.85,
      zIndex: 35,
      showLogo: true
    },
    { 
      src: '/image 82.png', 
      alt: 'Wedding Photo', 
      initialX: 35,
      initialY: 25,  // Maintained
      rotateZ: 4, 
      delay: 0.4, 
      scale: 0.95,
      caption: 'First dance, May 2019',
      mobileX: -10, // Moved more to the left
      mobileY: -45, // Moved higher up
      mobileScale: 0.8,
      zIndex: 33
    },
    { 
      src: '/image 83.png', 
      alt: 'Marriage Memory', 
      initialX: 70,
      initialY: 10,  // Reverted to positive value
      rotateZ: 8, 
      delay: 0.7, 
      scale: 1.1,
      caption: 'Just married! April 2017',
      mobileX: -45, // Moved more to the left
      mobileY: -20, // Moved higher up
      mobileScale: 0.85,
      zIndex: 31,
      showLogo: true
    },
    { 
      src: '/image 84.png', 
      alt: 'Vintage Wedding', 
      initialX: 85,
      initialY: 35,  // Maintained
      rotateZ: -5, 
      delay: 1.1, 
      scale: 0.98,
      caption: 'Church ceremony, July 2015',
      mobileX: 5, // Moved more to the left
      mobileY: -15, // Moved higher up
      mobileScale: 0.8,
      zIndex: 29
    },
    { 
      src: '/image 85.png', 
      alt: 'Classic Wedding', 
      initialX: 5,
      initialY: 30,  // Maintained
      rotateZ: 6, 
      delay: 0.3, 
      scale: 1.0,
      caption: 'Reception party, August 2018',
      mobileX: -30, // Moved more to the left
      mobileY: 0, // Moved higher up
      mobileScale: 0.8,
      zIndex: 27,
      showLogo: true
    },
    // Slightly offset duplicates for layered effect
    { 
      src: '/image 86.png', 
      alt: 'Wedding Memory', 
      initialX: 20,
      initialY: 15,  // Reverted to positive value
      rotateZ: -6, 
      delay: 0.5, 
      scale: 1.05,
      caption: 'Cutting the cake, Sept 2016',
      mobileX: -15, // Moved more to the left
      mobileY: -60, // Moved higher up
      mobileScale: 0.82,
      zIndex: 32
    },
    { 
      src: '/image 87.png', 
      alt: 'Wedding Photo', 
      initialX: 50,
      initialY: 35,  // Maintained
      rotateZ: 7, 
      delay: 0.8, 
      scale: 1.02,
      caption: 'Forever love, October 2014',
      mobileX: -25, // Moved more to the left
      mobileY: -75, // Moved higher up
      mobileScale: 0.85,
      zIndex: 28,
      showLogo: true
    },
    { 
      src: '/image 88.png', 
      alt: 'Marriage Memory', 
      initialX: 65,
      initialY: 5,  // Reverted to positive value
      rotateZ: -9, 
      delay: 1.2, 
      scale: 0.95,
      caption: 'Wedding portraits, May 2020',
      mobileX: -5, // Moved more to the left
      mobileY: 20, // Moved higher up
      mobileScale: 0.75,
      zIndex: 30
    },
    // Additional images repeating the sequence for more variety
    { 
      src: '/image 81.png', 
      alt: 'Vintage Wedding', 
      initialX: 90,
      initialY: 30,  // Maintained
      rotateZ: 3, 
      delay: 0.6, 
      scale: 1.03,
      caption: 'Annie & Michael, 2013',
      mobileX: -40, // Moved more to the left
      mobileY: -10, // Moved higher up
      mobileScale: 0.82,
      zIndex: 26,
      showLogo: true
    },
    { 
      src: '/image 82.png', 
      alt: 'Classic Wedding', 
      initialX: 10,
      initialY: 40,  // Maintained
      rotateZ: -7, 
      delay: 1.0, 
      scale: 0.97,
      caption: 'Emma & John, June 2019',
      mobileX: 0, // Moved more to the left
      mobileY: -85, // Moved higher up
      mobileScale: 0.79,
      zIndex: 25
    },
    // Some at different angles
    { 
      src: '/image 83.png', 
      alt: 'Wedding Day', 
      initialX: 30,
      initialY: 45,  // Maintained
      rotateZ: 12, 
      delay: 0.9, 
      scale: 0.94,
      caption: 'The big day, November 2021',
      mobileX: -35, // Moved more to the left
      mobileY: 35, // Moved higher up
      mobileScale: 0.74,
      zIndex: 24
    },
    { 
      src: '/image 84.png', 
      alt: 'Wedding Memory', 
      initialX: 60,
      initialY: 50,  // Maintained
      rotateZ: -10, 
      delay: 0.2, 
      scale: 0.99,
      caption: 'Honeymoon in Paris, 2022',
      mobileX: -10, // Moved more to the left
      mobileY: 10, // Moved higher up
      mobileScale: 0.78,
      zIndex: 23,
      showLogo: true
    },
  ];
  
  const benefits = [
    {
      title: "Easy Setup",
      description: "Create your memorial in minutes with our intuitive interface",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Secure Storage",
      description: "Your memories are safely stored and backed up in the cloud",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Unlimited Sharing",
      description: "Share your memorial with anyone, anywhere in the world",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )
    },
    {
      title: "Permanent Access",
      description: "Your memorial is available forever, accessible with a simple scan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "I created a memorial for my father and placed the medallion on his headstone. Now our entire family can share and access memories whenever they visit.",
      author: "Sarah M.",
      role: "Premium Member"
    },
    {
      quote: "The QR tag for my dog's memorial is perfect. We placed it in our garden and it's weathering beautifully.",
      author: "James T.",
      role: "Lifetime Member"
    }
  ];

  const handleHoverStart = (index: number) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = (index: number) => {
    setHoveredIndex(null);
  };

  return (
    <main className="pt-0 pb-16" style={{ backgroundColor: "#F5F0E4" }}>
      {/* Header Section with 3D Floating Polaroids */}
      <section ref={heroSectionRef} className="pt-20 md:pt-24 pb-16 md:pb-20 relative overflow-visible h-[600px] sm:h-[700px] md:h-[800px]">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          {/* Decorative accent circles */}
          <div className="absolute top-0 right-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        {/* 3D Floating Polaroid Images */}
        <div className="section-3d-polaroids relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-visible" style={{ backgroundColor: "#F5F0E4" }}>
          {/* The floating polaroids */}
          <div 
            data-is-desktop={isDesktopView ? 'true' : 'false'} 
            className="polaroid-container absolute inset-0 z-10"
          >
            {polaroidImages.map((img, index) => {
              // Base styles for all polaroids with proper typing
              const baseStyle: React.CSSProperties = {
                position: 'absolute',
                left: isDesktopView ? `${img.initialX}%` : `${50 + img.mobileX}%`,
                top: isDesktopView ? `${img.initialY}%` : `${50 + img.mobileY}%`,
                transform: isDesktopView 
                  ? `translate(-50%, -50%) 
                      rotateX(${mousePosition.y * -8}deg) 
                      rotateY(${mousePosition.x * 8}deg) 
                      rotateZ(${img.rotateZ}deg) 
                      scale(${img.scale * 1.2})`
                  : `translate(-50%, -50%) 
                      rotateZ(${img.rotateZ}deg) 
                      scale(${img.mobileScale * 1.5})`,
                zIndex: img.zIndex || 10,
                transition: 'transform 0.5s ease-out, filter 0.3s ease',
                animation: isAnimated 
                  ? "fly-in-effect 1.2s ease-out forwards, float-effect 8s ease-in-out infinite"
                  : 'none',
                width: isDesktopView ? `${img.scale * 200}px` : `${img.mobileScale * 240}px`,
                height: isDesktopView ? `${img.scale * 250}px` : `${img.mobileScale * 300}px`,
                opacity: 0, // Start invisible for fly-in effect
                boxShadow: 'none',
                backgroundColor: '#F5F0E4'
              };
              
              // Combine base styles with mobile adjustments
              const polaroidStyle: React.CSSProperties = {
                ...baseStyle
              };

              return (
                <div
                  key={index}
                  className="polaroid-item absolute perspective-1000"
                  style={polaroidStyle}
                  onMouseEnter={() => handleHoverStart(index)}
                  onMouseLeave={() => handleHoverEnd(index)}
                >
                  {/* Multiple background shells with increasing size to catch all shadows */}
                  <div className="absolute inset-0 bg-[#F5F0E4] rounded-md" style={{ 
                    transform: 'scale(1.3)',
                    zIndex: -6
                  }}></div>
                  <div className="absolute inset-0 bg-[#F5F0E4] rounded-md" style={{ 
                    transform: 'scale(1.25)',
                    zIndex: -5
                  }}></div>
                  <div className="absolute inset-0 bg-[#F5F0E4] rounded-md" style={{ 
                    transform: 'scale(1.2)',
                    zIndex: -4
                  }}></div>
                  <div className="absolute inset-0 bg-[#F5F0E4] rounded-md" style={{ 
                    transform: 'scale(1.15)',
                    zIndex: -3
                  }}></div>
                  <div className="absolute inset-0 bg-[#F5F0E4] rounded-md" style={{ 
                    transform: 'scale(1.1)',
                    zIndex: -2
                  }}></div>
                  <div className="absolute inset-0 bg-[#F5F0E4] rounded-md" style={{ 
                    transform: 'scale(1.05)',
                    zIndex: -1
                  }}></div>
                  
                  {/* Polaroid frame with image and caption */}
                  <div 
                    className={`polaroid-frame relative ${
                      hoveredIndex === index ? 'z-50 scale-105' : ''
                    } transition-all duration-300 ease-out`}
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#f8f5ed',
                      overflow: 'hidden',
                      borderRadius: '4px',
                      boxShadow: 'none',
                      transform: 'translateZ(0)'
                    }}
                  >
                    {/* Extra background to prevent any transparency */}
                    <div className="absolute inset-0 bg-[#f8f5ed] rounded-[3px]"></div>
                    
                    <div className="polaroid-inner bg-[#f8f5ed] p-3 rounded transition-all duration-300 ring-0 border border-[#e6e0d0]" style={{ 
                      boxSizing: 'border-box', 
                      position: 'relative', 
                      overflow: 'hidden', 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      backgroundColor: '#f8f5ed',
                      isolation: 'isolate',
                      boxShadow: 'none',
                      filter: 'none'
                    }}>
                      <div className="relative overflow-hidden h-[75%]" style={{ 
                        margin: 0, 
                        padding: 0, 
                        backgroundColor: '#f8f5ed', 
                        position: 'relative',
                        isolation: 'isolate'
                      }}>
                        <div className="absolute inset-0 bg-[#f8f5ed] z-[-1]"></div>
                        <div className="absolute inset-0 bg-black/5 z-[0]"></div>
                        <img 
                          src={img.src} 
                          alt={img.alt}
                          className="w-full h-full object-cover grayscale-[35%] contrast-[115%] brightness-[1.05] sepia-[20%] transform hover:scale-105 transition-all duration-700"
                          style={{ 
                            display: 'block', 
                            position: 'relative', 
                            margin: 0, 
                            padding: 0, 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover', 
                            objectPosition: 'center',
                            zIndex: 1
                          }}
                        />
                        {img.showLogo && (
                          <div className="absolute bottom-2 right-2 w-10 h-10 md:w-14 md:h-14 bg-white/90 rounded-sm p-1 border border-white/80 rotate-3 hover:rotate-0 transition-all duration-300 overflow-hidden" style={{ 
                            zIndex: 2, 
                            boxShadow: 'none',
                            filter: 'none'
                          }}>
                            <div className="bg-white/70 rounded-sm w-full h-full flex items-center justify-center">
                              <img 
                                src="/wedding-qr-code.png" 
                                alt="QR Code"
                                className="w-full h-full object-contain opacity-90"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Caption section with enhanced styling to prevent transparency and fix size */}
                      <div className="h-[25%] flex items-center justify-center mt-0 p-0 bg-[#f8f5ed]" style={{ 
                        backgroundColor: '#f8f5ed', 
                        margin: 0, 
                        padding: 0, 
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        borderTop: '1px solid rgba(230, 224, 208, 0.5)',
                        isolation: 'isolate',
                        height: '25%', // Fixed explicit height
                        maxHeight: '25%', // Ensure it doesn't exceed
                        flex: '0 0 25%' // Fixed flex basis
                      }}>
                        {/* Extra background fill element to catch any transparent areas */}
                        <div className="absolute inset-0 bg-[#f8f5ed] z-0" style={{ backgroundColor: '#f8f5ed' }}></div>
                        <p className="font-serif text-xs md:text-sm text-neutral-700 m-0 p-0 relative z-10" style={{
                          fontFamily: "'Dancing Script', cursive",
                          margin: 0,
                          padding: 0,
                          position: 'relative',
                          zIndex: 10,
                          lineHeight: 1.2,
                          maxHeight: 'calc(100% - 4px)',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical'
                        }}>
                          {img.caption || img.alt}
                        </p>
                      </div>
                      {/* Additional overlay to ensure no transparency */}
                      <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-[#f8f5ed] pointer-events-none" style={{ 
                        backgroundColor: '#f8f5ed', 
                        zIndex: 5,
                        opacity: 1,
                        pointerEvents: 'none',
                        height: '25%',
                        maxHeight: '25%'
                      }}></div>
                    </div>
                    {/* Border masking layer */}
                    <div className="absolute inset-0 pointer-events-none border border-[#f8f5ed] rounded-[3px]" style={{
                      zIndex: 10
                    }}></div>
                  </div>
                  
                  {/* Extra shadow-catching layers */}
                  <div className="absolute inset-[-10px] bg-[#F5F0E4] -z-10 rounded-md" style={{ opacity: 0.95 }}></div>
                  <div className="absolute inset-[-5px] bg-[#F5F0E4] -z-9 rounded-md" style={{ opacity: 0.98 }}></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center absolute inset-0 pointer-events-none">
          <div className="text-center relative z-50 bg-white/95 backdrop-blur-md p-5 md:p-8 rounded-2xl max-w-xl border border-neutral-200 shadow-xl pointer-events-auto mt-20 md:mt-24">
            <div className="inline-block mb-3 md:mb-4 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
              Simple 3-Step Process
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-3 md:mb-5">
              How Evere Works
            </h1>
            <p className="max-w-lg mx-auto text-sm md:text-base text-neutral-700">
              Creating and sharing your digital memorial is easy with our intuitive platform and beautiful physical products.
            </p>
          </div>
        </div>

        {/* NO STYLED JSX AT ALL - use plain CSS in a style tag */}
        <style>
{`
.perspective-1000 {
  perspective: 1000px;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.polaroid-frame {
  position: relative;
  transform-origin: center;
  transition: transform 0.3s ease-out;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: none !important;
}

.polaroid-frame:hover {
  transform: scale(1.05) rotate(0deg) !important;
  z-index: 100 !important;
  box-shadow: none !important;
}

.polaroid-item:hover {
  z-index: 100 !important;
  box-shadow: none !important;
}

.polaroid-item * {
  box-shadow: none !important;
}

.polaroid-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f5ed;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: none !important;
}

.section-3d-polaroids {
  background-color: #F5F0E4;
}

.polaroid-inner img {
  box-shadow: none !important;
}

.polaroid-item [class*='absolute'] {
  box-shadow: none !important;
}

@keyframes fly-in-effect {
  0% {
    transform: translate(-200%, -100%) rotateX(20deg) rotateY(20deg) rotateZ(-15deg) scale(0.2);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(-8deg) scale(1.2);
    opacity: 1;
  }
}

@keyframes float-effect {
  0% {
    transform: translateY(0px) translateZ(0);
  }
  50% {
    transform: translateY(-10px) translateZ(15px);
  }
  100% {
    transform: translateY(0px) translateZ(0);
  }
}

/* Support all animation names that might be in the HTML */
@keyframes fly-in-desktop-0, 
@keyframes fly-in-desktop-1, 
@keyframes fly-in-desktop-2, 
@keyframes fly-in-desktop-3, 
@keyframes fly-in-desktop-4, 
@keyframes fly-in-desktop-5, 
@keyframes fly-in-desktop-6, 
@keyframes fly-in-desktop-7, 
@keyframes fly-in-desktop-8, 
@keyframes fly-in-desktop-9, 
@keyframes fly-in-desktop-10, 
@keyframes fly-in-desktop-11 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes float-desktop-0, 
@keyframes float-desktop-1, 
@keyframes float-desktop-2, 
@keyframes float-desktop-3, 
@keyframes float-desktop-4, 
@keyframes float-desktop-5, 
@keyframes float-desktop-6, 
@keyframes float-desktop-7, 
@keyframes float-desktop-8, 
@keyframes float-desktop-9, 
@keyframes float-desktop-10, 
@keyframes float-desktop-11 {
  0%, 50%, 100% { transform: translateZ(0); }
}

@keyframes fly-in-mobile-0, 
@keyframes fly-in-mobile-1, 
@keyframes fly-in-mobile-2, 
@keyframes fly-in-mobile-3, 
@keyframes fly-in-mobile-4, 
@keyframes fly-in-mobile-5, 
@keyframes fly-in-mobile-6, 
@keyframes fly-in-mobile-7, 
@keyframes fly-in-mobile-8, 
@keyframes fly-in-mobile-9, 
@keyframes fly-in-mobile-10, 
@keyframes fly-in-mobile-11 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes float-mobile-0, 
@keyframes float-mobile-1, 
@keyframes float-mobile-2, 
@keyframes float-mobile-3, 
@keyframes float-mobile-4, 
@keyframes float-mobile-5, 
@keyframes float-mobile-6, 
@keyframes float-mobile-7, 
@keyframes float-mobile-8, 
@keyframes float-mobile-9, 
@keyframes float-mobile-10, 
@keyframes float-mobile-11 {
  0%, 50%, 100% { transform: translateZ(0); }
}

/* Also support camelCase versions */
@keyframes flyInDesktop0, 
@keyframes flyInDesktop1, 
@keyframes flyInDesktop2, 
@keyframes flyInDesktop3, 
@keyframes flyInDesktop4, 
@keyframes flyInDesktop5, 
@keyframes flyInDesktop6, 
@keyframes flyInDesktop7, 
@keyframes flyInDesktop8, 
@keyframes flyInDesktop9, 
@keyframes flyInDesktop10, 
@keyframes flyInDesktop11 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes floatDesktop0, 
@keyframes floatDesktop1, 
@keyframes floatDesktop2, 
@keyframes floatDesktop3, 
@keyframes floatDesktop4, 
@keyframes floatDesktop5, 
@keyframes floatDesktop6, 
@keyframes floatDesktop7, 
@keyframes floatDesktop8, 
@keyframes floatDesktop9, 
@keyframes floatDesktop10, 
@keyframes floatDesktop11 {
  0%, 50%, 100% { transform: translateZ(0); }
}

@keyframes flyInMobile0, 
@keyframes flyInMobile1, 
@keyframes flyInMobile2, 
@keyframes flyInMobile3, 
@keyframes flyInMobile4, 
@keyframes flyInMobile5, 
@keyframes flyInMobile6, 
@keyframes flyInMobile7, 
@keyframes flyInMobile8, 
@keyframes flyInMobile9, 
@keyframes flyInMobile10, 
@keyframes flyInMobile11 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes floatMobile0, 
@keyframes floatMobile1, 
@keyframes floatMobile2, 
@keyframes floatMobile3, 
@keyframes floatMobile4, 
@keyframes floatMobile5, 
@keyframes floatMobile6, 
@keyframes floatMobile7, 
@keyframes floatMobile8, 
@keyframes floatMobile9, 
@keyframes floatMobile10, 
@keyframes floatMobile11 {
  0%, 50%, 100% { transform: translateZ(0); }
}

`}
        </style>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works-section" className="pt-0 -mt-12 md:-mt-24 lg:-mt-32 relative z-20">
        <HowItWorksSection />
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Key Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Why Choose Evere
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-700">
              Our digital memorial platform offers unique advantages that make remembering and honoring loved ones easier than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process with Image */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                The Complete Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                From Digital to Physical
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                The Evere platform bridges the gap between digital memories and physical memorials, creating a lasting connection for generations to come.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Create Your Memorial</h3>
                    <p className="text-neutral-700">
                      Start by signing up and creating your digital memorial page. Add photos, videos, stories, and other memories to make it personal and meaningful.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Select Your Product</h3>
                    <p className="text-neutral-700">
                      Choose from our range of high-quality QR medallions, tags, and other products designed to withstand the elements and time.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Connect and Share</h3>
                    <p className="text-neutral-700">
                      Link your physical product to your digital memorial with a simple scan. Place it at the memorial site, allowing visitors to connect with your memories forever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl z-0"></div>
              <div className="relative z-10">
                <Image 
                  src="/evereplaque.png" 
                  alt="Evere Medallion Product" 
                  width={600} 
                  height={600}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              What Our Users Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <svg className="h-10 w-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-neutral-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-neutral-900">{testimonial.author}</p>
                  <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Ready to Preserve Your Memories?</h2>
            <p className="text-lg text-neutral-700 mb-10">
              Join thousands of families who trust Evere to preserve and share their most precious memories for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href={`https://app.evere.io/auth/sign-up`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
              >
                Create Your Memorial
              </Link>
              <Link 
                href={`/${locale}/pricing`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition-colors"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 