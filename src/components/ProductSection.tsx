'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ShopifyProductEmbed from './ShopifyProductEmbed';
import { trackEvent, trackEcommerceEvent } from '@/lib/analytics';

interface ProductSectionProps {
  locale: string;
}

export default function ProductSection({ locale }: ProductSectionProps) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Product images for the slider
  const productImages = [
    {
      src: '/everefrontnew.png',
      alt: 'Evere Medallion - Front View'
    },
    {
      src: '/everesideview.png',
      alt: 'Evere QR Tag'
    },
    {
      src: '/everebox2.png',
      alt: 'Evere Box'
    }
  ];
  
  const changeImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const handleViewDetails = useCallback(() => {
    // Track product detail view
    trackEcommerceEvent('view_item', {
      currency: 'USD',
      value: 97.00,
      items: [{
        item_id: 'forever-medallion',
        item_name: 'Forever Medallion',
        price: 97.00,
        quantity: 1
      }]
    });
    
    router.push(`/${locale}/products/medallion`);
  }, [router, locale]);

  // Track product image views
  const handleImageView = useCallback((index: number) => {
    trackEvent('product_image_view', {
      product_id: 'forever-medallion',
      image_index: index,
      image_url: productImages[index].src
    });
    changeImage(index);
  }, [productImages]);

  // Track pricing option views
  const handlePricingOptionClick = useCallback((option: string, price: number) => {
    trackEvent('pricing_option_select', {
      product_id: 'forever-medallion',
      option_name: option,
      price: price
    });
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#F5F0E4" }}>
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ backgroundColor: "#F5F0E4" }}></div>
        
        {/* Decorative accent circles */}
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
            Join us today, and begin <span className="text-primary">celebrating their life.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Images with Slider */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="p-6 sm:p-8 rounded-3xl shadow-sm relative" style={{ backgroundColor: "#FAF7F0" }}>
              {/* Main image display */}
              <div className="relative aspect-square mb-4">
                <Image 
                  src={productImages[currentImageIndex].src} 
                  alt={productImages[currentImageIndex].alt} 
                  fill
                  className="object-contain"
                  priority={true}
                />
              </div>
              
              {/* Slider controls */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
                <button 
                  onClick={prevImage}
                  className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors touch-manipulation"
                  aria-label="Previous image"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
                <button 
                  onClick={nextImage}
                  className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors touch-manipulation"
                  aria-label="Next image"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image slider dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                {productImages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => changeImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-primary w-8' : 'bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`View image ${index + 1}`}
                    type="button"
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail navigation */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {productImages.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => handleImageView(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-colors touch-manipulation ${
                    index === currentImageIndex ? 'border-primary' : 'border-neutral-200 hover:border-primary'
                  }`}
                  aria-label={`Select ${image.alt}`}
                  type="button"
                >
                  <div className="relative aspect-square">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
            <div className="flex items-center justify-between mb-4">
              <Image 
                src="/logonew.png" 
                alt="Evere" 
                width={120} 
                height={40}
                className="object-contain"
              />
              <div className="px-3 py-1 bg-gray-100 rounded-full text-xs uppercase tracking-wider font-medium text-gray-600">
                In Stock
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
              Forever Medallion
            </h2>
            
            <div className="text-2xl font-bold text-primary mb-4">
              $97.00
            </div>
            
            {/* Ratings */}
            <div className="flex items-center mb-6">
              <div className="flex flex-wrap items-center">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 text-sm sm:text-base">(218 Reviews)</span>
              </div>
            </div>
            
            {/* Product Description */}
            <div className="mb-8">
              <p className="text-neutral-700 mb-4">
                The Forever Medallion is a beautiful, durable keepsake that connects physical memorials to digital memories. With a simple scan, visitors can access photos, videos, stories, and more about your loved one.
              </p>
              <p className="text-neutral-700">
                Each package includes two identical medallions, crafted from premium materials designed to withstand the elements and time itself.
              </p>
            </div>
            
            {/* Features */}
            <ul className="mb-6 sm:mb-8 space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>2 identical Medallions in Every Pack</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Weather-resistant, premium materials</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Share unlimited photos, videos, and memories</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Invite family and friends to add their memories</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lifetime Warranty</span>
              </li>
            </ul>
            {/* Pricing Options */}
            <div className="flex flex-row overflow-x-auto md:grid md:grid-cols-3 gap-2 mb-6">
              {/* Single Tribute */}
              <button 
                className="border rounded-lg p-3 text-center flex-1 min-w-[30%] flex flex-col h-full"
                onClick={() => handlePricingOptionClick('Single Tribute', 97.00)}
              >
                <h3 className="text-xs sm:text-base font-bold whitespace-nowrap">Single Tribute</h3>
                <p className="text-xs mb-1">1 Box</p>
                <p className="mt-auto font-bold text-xs sm:text-sm">€ 97,00</p>
              </button>
              
              {/* Family Pack */}
              <button 
                className="border rounded-lg p-3 text-center flex-1 min-w-[30%] flex flex-col h-full relative"
                onClick={() => handlePricingOptionClick('Family Pack', 145.50)}
              >
                <div className="bg-[#76A41F] text-white text-[10px] px-2 py-0.5 rounded-full inline-block mb-1 absolute top-1 left-1/2 -translate-x-1/2 whitespace-nowrap">Most popular</div>
                <h3 className="text-xs sm:text-base font-bold whitespace-nowrap mt-5">Family Pack</h3>
                <p className="text-xs mb-1">2 Boxes</p>
                <p className="mt-auto font-bold text-xs sm:text-sm">€ 145,50</p>
              </button>
              
              {/* Legacy Bundle */}
              <button 
                className="border rounded-lg p-3 text-center flex-1 min-w-[30%] flex flex-col h-full"
                onClick={() => handlePricingOptionClick('Legacy Bundle', 194.00)}
              >
                <h3 className="text-xs sm:text-base font-bold whitespace-nowrap">Legacy Bundle</h3>
                <p className="text-xs mb-1">4 Boxes</p>
                <p className="mt-auto font-bold text-xs sm:text-sm">€ 194,00</p>
              </button>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-3 mb-6 items-center justify-between">
              <div className="w-1/2" style={{ display: 'flex', alignItems: 'center', paddingBottom: '20px' }}>
                <ShopifyProductEmbed 
                  productId="10153979576584"
                  componentId="product-component-homepage"
                  buttonVariant="primary"
                />
              </div>
              
              <button
                onClick={handleViewDetails}
                className="w-1/2 h-[50px] bg-black hover:bg-gray-900 text-white font-medium rounded-md transition-all duration-200 flex items-center justify-center hover:shadow-lg hover:-translate-y-[2px]"
                style={{
                  marginTop: 0,
                  height: '50px',
                  padding: '15px 0'
                }}
                type="button"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Details
              </button>
            </div>
            
            {/* Secure payment notice */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure payment via Shopify
              </div>
              <div className="flex items-center space-x-3 mt-2">
                <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" alt="Visa" className="h-8" />
                <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" alt="Mastercard" className="h-8" />
                <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg" alt="American Express" className="h-8" />
                <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" alt="Apple Pay" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
