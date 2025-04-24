import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const LovedOnesContent = dynamic(() => import('./LovedOnesContent'), {
  ssr: true,
});

export const metadata: Metadata = {
  title: 'Digital Memorial Websites | Honor & Remember Loved Ones | Evere',
  description: 'Create lasting digital memorials to honor and remember your loved ones. Share photos, stories, and memories with our interactive memorial websites. Features QR code integration and AI-powered tools.',
  keywords: [
    'digital memorial',
    'memorial website',
    'online tribute',
    'QR code memorial',
    'remember loved ones',
    'family memories',
    'memorial photos',
    'digital legacy',
    'memorial tribute',
    'preserve memories'
  ],
  openGraph: {
    title: 'Digital Memorial Websites | Honor & Remember Loved Ones',
    description: 'Create lasting digital memorials to honor and remember your loved ones. Share photos, stories, and memories with our interactive memorial websites.',
    images: [
      {
        url: '/view-gravestone-with-flowers-candle.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Memorial Website'
      }
    ]
  }
};

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

export default function LovedOnesPage({ params }: { params: { locale: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LovedOnesContent locale={params.locale} />
    </Suspense>
  );
}
