import React, { Suspense } from 'react';
import LocalizedHeroSection from '@/components/LocalizedHeroSection';
import ImageOverlapSection from '@/components/ImageOverlapSection';
import LocalizedFeaturesSection from '@/components/LocalizedFeaturesSection';
import LocalizedHowItWorksSection from '@/components/LocalizedHowItWorksSection';
import ProductSection from '@/components/ProductSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';

// Disable dynamic params
export const dynamicParams = false;

// Generate static params for all locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'nl' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'es' }
  ];
}

function HomePageContent({ locale }: { locale: string }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div> 
        <LocalizedHeroSection />
        <ImageOverlapSection />
        <LocalizedFeaturesSection params={{ locale }} />
        <LocalizedHowItWorksSection />
        <ProductSection locale={locale} />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </div>
    </div>
  );
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent locale={locale} />
    </Suspense>
  );
}
