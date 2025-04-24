'use client';

import Link from 'next/link';
import Image from 'next/image';
import PricingSection from '@/components/PricingSection';
import { useState, useEffect, useRef } from 'react';

interface PricingPageProps {
  params: {
    locale: string;
  };
}

// Convert to a non-async function
export default function PricingPage({ params }: PricingPageProps) {
  // Extract locale directly without async
  const { locale } = params;
  
  return (
    <PricingPageContent locale={locale} />
  );
}

// Client component for the page content
function PricingPageContent({ locale }: { locale: string }) {
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

  // Enhanced polaroid images with pricing-related content
  const polaroidImages = [
    // Left side images
    { 
      src: '/pricing1.jpg', 
      alt: 'Premium Plan', 
      initialX: 0, 
      initialY: 5, 
      rotateZ: -8, 
      delay: 0, 
      scale: 1.1,
      caption: 'Premium Plan',
      mobileX: 0,
      mobileY: 0,
      mobileScale: 0.7,
      zIndex: 35,
      showLogo: true
    },
    { 
      src: '/evereplaque.png', 
      alt: 'Evere Medallion', 
      initialX: 20, 
      initialY: 20, 
      rotateZ: 4, 
      delay: 0.4, 
      scale: 0.95,
      caption: 'Medallion - $97',
      mobileX: 5,
      mobileY: 4,
      mobileScale: 0.65,
      zIndex: 33
    },
    { 
      src: '/qrtag.png', 
      alt: 'QR Tag', 
      initialX: 75, 
      initialY: 10, 
      rotateZ: 8, 
      delay: 0.7, 
      scale: 1.1,
      caption: 'QR Tag - $49',
      mobileX: 15,
      mobileY: 0,
      mobileScale: 0.7,
      zIndex: 31,
      showLogo: true
    },
    { 
      src: '/everedogtag.png', 
      alt: 'Animal Tag', 
      initialX: 60, 
      initialY: 30, 
      rotateZ: -5, 
      delay: 1.1, 
      scale: 0.98,
      caption: 'Animal Tag - $49',
      mobileX: 12,
      mobileY: 10,
      mobileScale: 0.68,
      zIndex: 29
    },
    // Right side images
    { 
      src: '/everequote1.png', 
      alt: 'Lifetime Plan', 
      initialX: -5, 
      initialY: 25, 
      rotateZ: 6, 
      delay: 0.3, 
      scale: 1.0,
      caption: 'Lifetime Plan',
      mobileX: -2,
      mobileY: 8,
      mobileScale: 0.68,
      zIndex: 27,
      showLogo: true
    },
    { 
      src: '/everebox2.png', 
      alt: 'Memorial Box', 
      initialX: 35, 
      initialY: 15, 
      rotateZ: -6, 
      delay: 0.5, 
      scale: 1.05,
      caption: 'Memorial Box',
      mobileX: 7,
      mobileY: 4,
      mobileScale: 0.68,
      zIndex: 32
    },
    { 
      src: '/everelogo.png', 
      alt: 'Evere Logo', 
      initialX: 50, 
      initialY: 35, 
      rotateZ: 7, 
      delay: 0.8, 
      scale: 1.02,
      caption: 'Premium Features',
      mobileX: 10,
      mobileY: 12,
      mobileScale: 0.7,
      zIndex: 28,
      showLogo: true
    },
    { 
      src: '/premiumquote.png', 
      alt: 'Premium Quote', 
      initialX: 90, 
      initialY: 5, 
      rotateZ: -9, 
      delay: 1.2, 
      scale: 0.95,
      caption: 'Monthly Plan',
      mobileX: 18,
      mobileY: 0,
      mobileScale: 0.65,
      zIndex: 30
    }
  ];

  // Handle hover effects for polaroid images
  const handleHoverStart = (index: number) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  // Sample products data
  const products = [
    {
      id: 'medallion',
      name: 'Evere Medallion',
      price: '$97.00',
      description: 'Premium memorial medallion with QR code that links to a digital memorial.',
      image: '/evereplaque.png',
      path: `/${locale}/products/medallion`,
      featured: true
    },
    {
      id: 'qr-tag',
      name: 'Evere QR Dog Collars',
      price: '$49.00',
      description: 'Durable metal QR tag for outdoor memorials and headstones.',
      image: '/qrtag.png',
      path: '#',
      featured: false
    },
    {
      id: 'memorial-cards',
      name: 'Evere Animal Tag',
      price: '$49.00',
      description: 'Set of 10 premium memorial cards with QR code to share eternal memories.',
      image: '/everedogtag.png',
      path: '#',
      featured: false
    }
  ];

  return (
    <main className="pt-0 pb-20" style={{ backgroundColor: "#F5F0E4" }}>
      {/* Header Section with 3D Floating Polaroids */}
      <section ref={heroSectionRef} className="pt-20 md:pt-24 pb-16 md:pb-20 relative overflow-visible h-[600px] sm:h-[700px] md:h-[800px]">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          {/* Decorative accent circles */}
          <div className="absolute top-0 right-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        {/* 3D Floating Polaroid Images */}
        <div className="section-3d-polaroids relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-visible">
          {/* The floating polaroids */}
          <div 
            data-is-desktop={isDesktopView ? 'true' : 'false'} 
            className="polaroid-container absolute inset-0 z-10"
          >
            {polaroidImages.map((img, index) => {
              // Base styles for all polaroids with proper typing
              const baseStyle: React.CSSProperties = {
                position: 'absolute',
                left: isDesktopView ? `${img.initialX}%` : `${50 + img.mobileX * 4}%`,
                top: isDesktopView ? `${img.initialY}%` : `${50 + img.mobileY * 4}%`,
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
                transition: 'transform 0.5s ease-out, box-shadow 0.3s ease, filter 0.3s ease',
                animation: isAnimated 
                  ? `${isDesktopView 
                      ? `fly-in-desktop-${index} 1.2s ease-out forwards, float-desktop-${index} 8s ease-in-out infinite ${img.delay + 1.2}s`
                      : `fly-in-mobile-${index} 1.2s ease-out forwards, float-mobile-${index} 5s ease-in-out infinite ${img.delay + 1.2}s`
                    }`
                  : 'none',
                width: isDesktopView ? `${img.scale * 200}px` : `${img.mobileScale * 240}px`,
                height: isDesktopView ? `${img.scale * 250}px` : `${img.mobileScale * 300}px`,
                opacity: 0, // Start invisible for fly-in effect
                boxShadow: '0 5px 15px rgba(0,0,0,0.15)'
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
                  onMouseLeave={() => handleHoverEnd()}
                >
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
                      boxShadow: '0 5px 15px rgba(0,0,0,0.15)'
                    }}
                  >
                    <div className="polaroid-inner bg-[#f8f5ed] p-3 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300 ring-1 ring-white/70 border border-[#e6e0d0]" style={{ boxSizing: 'border-box', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f5ed' }}>
                      <div className="relative overflow-hidden h-[75%]" style={{ margin: 0, padding: 0, backgroundColor: '#f8f5ed', position: 'relative' }}>
                        <div className="absolute inset-0 bg-[#f8f5ed]"></div>
                        <div className="absolute inset-0 bg-black/5"></div>
                        <img 
                          src={img.src} 
                          alt={img.alt}
                          className="w-full h-full object-cover grayscale-[35%] contrast-[115%] brightness-[1.05] sepia-[20%] transform hover:scale-105 transition-all duration-700"
                          style={{ display: 'block', position: 'relative', margin: 0, padding: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                        />
                        {img.showLogo && (
                          <div className="absolute bottom-2 right-2 w-10 h-10 md:w-14 md:h-14 bg-white/90 rounded-sm p-1 shadow-md border border-white/80 rotate-3 hover:rotate-0 transition-all duration-300 overflow-hidden">
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
                      {/* Caption section with enhanced styling to prevent transparency */}
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
                        borderTop: '1px solid rgba(230, 224, 208, 0.5)'
                      }}>
                        {/* Extra background fill element to catch any transparent areas */}
                        <div className="absolute inset-0 bg-[#f8f5ed] z-0" style={{ backgroundColor: '#f8f5ed' }}></div>
                        <p className="font-serif text-xs md:text-sm text-neutral-700 m-0 p-0 relative z-10" style={{
                          fontFamily: "'Dancing Script', cursive",
                          margin: 0,
                          padding: 0,
                          position: 'relative',
                          zIndex: 10
                        }}>
                          {img.caption || img.alt}
                        </p>
                      </div>
                      {/* Additional overlay to ensure no transparency */}
                      <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-[#f8f5ed] pointer-events-none" style={{ 
                        backgroundColor: '#f8f5ed', 
                        zIndex: 5,
                        opacity: 0.99,
                        pointerEvents: 'none'
                      }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center absolute inset-0 pointer-events-none">
          <div className="text-center relative z-50 bg-white/95 backdrop-blur-md p-5 md:p-8 rounded-2xl max-w-xl border border-neutral-200 shadow-xl pointer-events-auto mt-20 md:mt-24">
            <div className="inline-block mb-3 md:mb-4 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
              Simple & Transparent Pricing
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-3 md:mb-5">
              Pricing & Products
            </h1>
            <p className="max-w-lg mx-auto text-sm md:text-base text-neutral-700">
              Choose the perfect plan and products to preserve your memories for generations to come.
            </p>
          </div>
        </div>

        {/* CSS Animations - Adding fly-in animations */}
        <style jsx>{`
          @keyframes float-base {
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
          
          ${polaroidImages.map((img, index) => `
            /* Fly-in animations for desktop */
            @keyframes fly-in-desktop-${index} {
              0% {
                transform: translate(${index % 2 === 0 ? '-200%' : '200%'}, ${index % 3 === 0 ? '-100%' : '100%'}) 
                  rotateX(${Math.random() * 45}deg) 
                  rotateY(${Math.random() * 45}deg) 
                  rotateZ(${img.rotateZ * 3}deg) 
                  scale(0.2);
                opacity: 0;
              }
              100% {
                transform: translate(-50%, -50%) 
                  rotateX(${mousePosition.y * -8}deg) 
                  rotateY(${mousePosition.x * 8}deg) 
                  rotateZ(${img.rotateZ}deg) 
                  scale(${img.scale * 1.2});
                opacity: 1;
              }
            }
            
            /* Fly-in animations for mobile */
            @keyframes fly-in-mobile-${index} {
              0% {
                transform: translate(${index % 2 === 0 ? '-200%' : '200%'}, ${index % 3 === 0 ? '-100%' : '100%'}) 
                  rotateZ(${img.rotateZ * 2}deg) 
                  scale(0.2);
                opacity: 0;
              }
              100% {
                transform: translate(-50%, -50%) 
                  rotateZ(${img.rotateZ}deg) 
                  scale(${img.mobileScale * 1.5});
                opacity: 1;
              }
            }
            
            /* Mobile animations */
            @keyframes float-mobile-${index} {
              0% {
                transform: translateY(0px) translateZ(0) rotateZ(${img.rotateZ}deg) scale(${img.mobileScale * 1.5});
              }
              50% {
                transform: translateY(-${5 + (index % 3) * 2}px) translateZ(${(index % 4 + 1) * 5}px) rotateZ(${img.rotateZ + (index % 2 ? 1 : -1)}deg) scale(${img.mobileScale * 1.5});
              }
              100% {
                transform: translateY(0px) translateZ(0) rotateZ(${img.rotateZ}deg) scale(${img.mobileScale * 1.5});
              }
            }
            
            /* Desktop animations */
            @keyframes float-desktop-${index} {
              0% {
                transform: rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg) rotateZ(${img.rotateZ}deg) translateZ(${(index % 4 + 1) * 15}px) translateY(0px) scale(${img.scale * 1.2});
              }
              50% {
                transform: rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg) rotateZ(${img.rotateZ + (index % 2 ? 2 : -2)}deg) translateZ(${(index % 4 + 1) * 20}px) translateY(${-6 - (index % 3) * 3}px) scale(${img.scale * 1.2});
              }
              100% {
                transform: rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg) rotateZ(${img.rotateZ}deg) translateZ(${(index % 4 + 1) * 15}px) translateY(0px) scale(${img.scale * 1.2});
              }
            }
          `).join('\n')}
          
          .perspective-1000 {
            perspective: 1000px;
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }
          
          /* Ensure proper positioning for polaroid elements */
          .polaroid-frame {
            position: relative;
            transform-origin: center;
            transition: transform 0.3s ease-out, box-shadow 0.3s ease;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .polaroid-frame:hover {
            transform: scale(1.05) rotate(0deg) !important;
            z-index: 100 !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4) !important;
          }
          
          /* Additional hover animations for polaroid frames */
          .polaroid-item:hover {
            z-index: 100 !important;
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
          }
          
          .polaroid-inner::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 25%;
            background-color: #f8f5ed;
            z-index: 0;
          }
          
          .polaroid-inner::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 25%;
            background-color: #f8f5ed;
            z-index: 0;
          }
          
          .polaroid-inner > div.relative {
            position: relative;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #f8f5ed;
          }
          
          .polaroid-inner img {
            transition: all 0.6s ease-in-out;
            position: relative;
            z-index: 0;
            display: block;
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            object-position: center;
            object-fit: cover;
          }
          
          .polaroid-inner > div.mt-0 {
            margin-top: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color: #f8f5ed;
            z-index: 1;
          }
          
          .polaroid-inner > div.mt-0::after {
            content: '';
            position: absolute;
            inset: 0;
            background-color: #f8f5ed;
            z-index: -1;
          }
          
          .polaroid-inner > div.mt-0 p {
            margin: 0;
            padding: 0;
            line-height: 1.2;
            position: relative;
            z-index: 2;
          }
          
          .polaroid-inner:hover img {
            transform: scale(1.05);
            filter: grayscale(0%) contrast(100%) brightness(1.05) sepia(0%);
          }
          
          /* Desktop-specific styles applied via responsive data attributes */
          @media (min-width: 768px) {
            /* Apply desktop styles to each polaroid based on its index */
            ${polaroidImages.map((img, index) => `
              [data-index="${index}"] {
                width: ${img.scale * 160}px !important;
                height: ${img.scale * 200}px !important;
                left: calc(50% + ${img.initialX}rem) !important;
                top: calc(50% + ${img.initialY}rem) !important;
                transform: rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg) rotateZ(${img.rotateZ}deg) translateZ(${(index % 4 + 1) * 20}px) scale(${img.scale}) !important;
                animation: float-desktop-${index} 8s ease-in-out infinite ${img.delay}s !important;
              }
            `).join('\n')}
          
            .polaroid-item:hover {
              box-shadow: 0 20px 40px rgba(0,0,0,0.4) !important;
            }
            
            .polaroid-frame:hover {
              transform: scale(1.05) rotate(0deg) !important;
            }
          }
        `}</style>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="pt-0 -mt-12 md:-mt-24 lg:-mt-32 relative z-20">
        <PricingSection />
      </section>

      {/* Products Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Our Memorial Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Physical Keepsakes
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-700">
              Explore our range of beautifully crafted memorial products that connect physical mementos to digital memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:translate-y-[-8px]">
                <div className="relative h-64">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">{product.name}</h3>
                  <p className="text-neutral-700 mb-8">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Link 
                      href={product.path} 
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
                    >
                      {product.path === '#' ? 'Coming Soon' : 'View Details'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-neutral-700 mb-10">
              Join thousands of families preserving precious memories with our digital memorial platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href={`https://app.evere.io/auth/sign-up`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
              >
                Create Your Memorial
              </Link>
              <Link 
                href={`/${locale}/products`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}