import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const MedallionContent = dynamic(() => import('./MedallionContent'), {
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

export default function MedallionPage({ params }: { params: { locale: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MedallionContent locale={params.locale} />
    </Suspense>
  );
}
