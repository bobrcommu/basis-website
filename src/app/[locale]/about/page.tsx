import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const AboutPageContent = dynamic(() => import('./AboutPageContent'), {
  ssr: true,
});

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

export default function AboutPage({ params }: { params: { locale: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutPageContent locale={params.locale} />
    </Suspense>
  );
}
