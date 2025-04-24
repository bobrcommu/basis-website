'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRICING_PLANS, redirectToCheckout } from '@/lib/stripeApi';

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({
    'Basic': false,
    'Premium': false,
    'Lifetime': false
  });

  const handlePaymentClick = async (planName: string, stripePrice: string) => {
    try {
      // Set loading state for this specific button
      setIsLoading(prev => ({ ...prev, [planName]: true }));
      setSelectedPlan(planName);
      
      // For free plan, redirect directly to signup
      if (planName === 'Basic') {
        window.location.href = "https://app.evere.io/auth/sign-up";
        return;
      }
      
      // For paid plans, redirect to Stripe checkout
      if (!stripePrice) {
        throw new Error('Invalid price ID');
      }
      
      console.log(`Processing payment for ${planName} plan with price ID: ${stripePrice}`);
      
      try {
        // Mock implementation to simulate checkout flow
        // In production, this would redirect to Stripe
        const session = await redirectToCheckout(stripePrice);
        
        // For demo purposes, show an alert then redirect (simulating the return from Stripe)
        setTimeout(() => {
          alert(`Ready to process payment for ${planName} plan! Your Stripe session ID: ${session.id}`);
          window.location.href = "https://app.evere.io/auth/sign-up";
        }, 500);
      } catch (stripeError) {
        console.error('Stripe checkout error:', stripeError);
        alert(`Payment processing error: ${stripeError instanceof Error ? stripeError.message : 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      alert('There was an error processing your payment. Please try again.');
    } finally {
      // Reset loading state after a short delay to ensure the loading state is visible
      setTimeout(() => {
        setIsLoading(prev => ({ ...prev, [planName]: false }));
      }, 800);
    }
  };

  const handlePlanSelection = (planType: string) => {
    if (typeof window !== 'undefined') {
      // Set the selected plan in localStorage
      localStorage.setItem('selectedPlan', planType);
      // Redirect to the signup page
      window.location.href = "https://app.evere.io/auth/sign-up";
    }
  };

  const handleQRCodePurchase = () => {
    if (typeof window !== 'undefined') {
      // Redirect to the signup page
      window.location.href = "https://app.evere.io/auth/sign-up";
    }
  };

  // Enhanced plans with additional styling and interactive features
  const plans = PRICING_PLANS.map(plan => ({
    ...plan,
    capacity: {
      photos: plan.id === 'basic' ? '5' : 'UNLIMITED',
      music: plan.id === 'basic' ? '-' : 'UNLIMITED',
      videos: plan.id === 'basic' ? '-' : 'UNLIMITED',
    },
    cta: plan.id === 'premium' ? 'Subscribe' : (plan.id === 'lifetime' ? 'Get Lifetime' : 'Select'),
    image: `/pricing${plan.id === 'basic' ? '1' : (plan.id === 'premium' ? '2' : '3')}.jpg`,
    featureHighlight: plan.id === 'premium',
  }));

  return (
    <section id="pricing" className="py-20 gradient-bg-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-bg-sand"></div>
        
        {/* Decorative accent circles */}
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium">
            Premium Memorial Plans
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-primary mb-4 tracking-tight">
            Choose Your Forever Plan
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-neutral-800 dark:text-neutral-300 mx-auto">
            Select the perfect plan to preserve your precious memories with our secure, elegant memorial service.
          </p>
        </div>

        {/* Payment security badges - Improved for mobile */}
        <div className="flex flex-col sm:flex-row justify-center mt-6 mb-10 gap-3 sm:gap-6">
          <div className="flex items-center justify-center bg-white/50 dark:bg-black/20 px-3 sm:px-4 py-2 rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">Secure Payments</span>
          </div>
          <div className="flex items-center justify-center bg-white/50 dark:bg-black/20 px-3 sm:px-4 py-2 rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">Privacy Protected</span>
          </div>
          <div className="flex items-center justify-center bg-white/50 dark:bg-black/20 px-3 sm:px-4 py-2 rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">Multiple Payment Options</span>
          </div>
        </div>

        <div className="mt-12 space-y-10 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:max-w-4xl lg:mx-auto xl:max-w-none">
          {plans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`rounded-2xl bg-neutral-50/90 dark:bg-neutral-900/90 backdrop-blur-sm divide-y divide-neutral-200 dark:divide-neutral-700 transition-all duration-300 hover:translate-y-[-8px] relative overflow-hidden ${
                plan.mostPopular 
                  ? 'shadow-[0_15px_50px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.4)] border-2 border-primary dark:border-primary hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] scale-105 z-10' 
                  : 'shadow-[0_5px_30px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_30px_-15px_rgba(0,0,0,0.2)] border border-neutral-200 dark:border-neutral-700 hover:shadow-[0_15px_45px_-15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_15px_45px_-15px_rgba(0,0,0,0.4)]'
              }`}
            >
              {/* Most popular badge */}
              {plan.mostPopular && (
                <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 rotate-12 z-20">
                  <div className="bg-accent text-white text-xs font-bold px-4 py-1 rounded-l-full rounded-r-full shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              {/* Background image with fade effect */}
              <div 
                className="absolute inset-0 opacity-15 dark:opacity-20 bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url('${plan.image}')`
                }}
              ></div>
              
              <div className="p-6 sm:p-8 relative z-10">
                <h2 className="text-xl sm:text-2xl leading-6 font-bold text-primary dark:text-primary flex items-center">
                  {plan.name}
                  {plan.name === 'Lifetime' && (
                    <span className="ml-2 bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent text-sm font-medium px-2 py-1 rounded border border-amber-200 dark:border-amber-700">
                      FOREVER
                    </span>
                  )}
                </h2>
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">{plan.description}</p>
                
                <div className="mt-6 sm:mt-8 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-extrabold text-primary dark:text-primary bg-clip-text">{plan.price}</span>
                  <span className="text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-400 ml-1">{plan.frequency}</span>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className={`h-full ${plan.mostPopular ? 'bg-primary' : 'bg-accent'} rounded-full`} style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <button
                  onClick={() => handlePaymentClick(plan.name, plan.priceId)}
                  disabled={isLoading[plan.name]}
                  className={`mt-6 sm:mt-8 block w-full py-4 px-6 border border-transparent rounded-full text-center font-medium transition-all duration-200 relative overflow-hidden group touch-manipulation ${
                    plan.mostPopular
                      ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:bg-primary-dark dark:from-primary dark:to-primary-dark dark:text-white dark:hover:shadow-primary/50 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-primary/50'
                      : 'bg-neutral-200 text-neutral-800 border border-neutral-300 hover:bg-neutral-300 hover:text-neutral-900 hover:shadow-md dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700 focus:ring-2 focus:ring-neutral-300/50'
                  }`}
                >
                  {isLoading[plan.name] ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="animate-pulse">Processing...</span>
                    </span>
                  ) : (
                    <>
                      <span className="relative z-10">{plan.name === 'Premium' ? 'Subscribe Now' : (plan.name === 'Lifetime' ? 'Get Lifetime Access' : 'Start Free')}</span>
                      <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-full"></span>
                      {plan.mostPopular && (
                        <span className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 rounded-full bg-accent animate-ping"></span>
                      )}
                    </>
                  )}
                </button>
              </div>
              
              <div className="pt-5 pb-6 sm:pt-6 sm:pb-8 px-6 sm:px-8 relative z-10">
                <h3 className="text-xs font-medium text-primary dark:text-primary uppercase tracking-wide mb-4">Features include</h3>
                
                {/* Capacity display */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-5 sm:mb-6 bg-neutral-100 dark:bg-neutral-800 p-2 sm:p-3 rounded-lg">
                  <div className="text-center">
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Photos</div>
                    <div className={`text-sm font-bold ${plan.capacity.photos === 'UNLIMITED' ? 'text-primary' : 'text-neutral-700 dark:text-neutral-300'}`}>
                      {plan.capacity.photos}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Videos</div>
                    <div className={`text-sm font-bold ${plan.capacity.videos === 'UNLIMITED' ? 'text-primary' : 'text-neutral-700 dark:text-neutral-300'}`}>
                      {plan.capacity.videos}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Music</div>
                    <div className={`text-sm font-bold ${plan.capacity.music === 'UNLIMITED' ? 'text-primary' : 'text-neutral-700 dark:text-neutral-300'}`}>
                      {plan.capacity.music}
                    </div>
                  </div>
                </div>
                
                <ul role="list" className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <svg
                        className={`flex-shrink-0 h-4 sm:h-5 w-4 sm:w-5 mt-0.5 ${plan.featureHighlight ? 'text-primary' : 'text-accent-dark dark:text-accent-light'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Support information for premium plans */}
                {plan.name !== 'Basic' && (
                  <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-dark dark:text-accent-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="text-xs text-neutral-600 dark:text-neutral-400">Priority support included</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Money back guarantee */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/50 dark:bg-black/20 rounded-xl shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">30-day Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
