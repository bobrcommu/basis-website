import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const BlogContent = dynamic(() => import('./BlogContent'), {
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

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent locale={locale} />
    </Suspense>
  );
}
