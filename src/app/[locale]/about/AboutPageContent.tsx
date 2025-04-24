'use client';

import React from 'react';
import { useSearchParamsContext } from '@/components/SearchParamsProvider';

interface AboutPageContentProps {
  locale: string;
}

export default function AboutPageContent({ locale }: AboutPageContentProps) {
  const { searchParams } = useSearchParamsContext();

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="prose max-w-none">
          {/* Add your about page content here */}
          <p>Current locale: {locale}</p>
          <p>Search params: {searchParams.toString()}</p>
        </div>
      </div>
    </div>
  );
}
