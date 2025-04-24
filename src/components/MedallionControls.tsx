'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ShopifyProductEmbed from './ShopifyProductEmbed';

export default function MedallionControls() {
  const router = useRouter();
  const [message, setMessage] = useState('');

  function handleViewDetails() {
    router.push('/products/medallion');
    setMessage('Viewing product details');
    setTimeout(() => setMessage(''), 2000);
  }

  return (
    <div className="medallion-controls">
      {/* View Details button only - let Shopify handle the Add to Cart */}
      <div className="mt-3">
        <button
          onClick={handleViewDetails}
          className="w-full h-[50px] bg-black hover:bg-gray-900 text-white font-medium rounded transition duration-200 flex items-center justify-center"
          type="button"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View Details
        </button>
      </div>
      
      {/* Feedback message */}
      {message && (
        <div className="mt-2 text-sm text-gray-600 transition-opacity duration-200 animate-fade-in">
          {message}
        </div>
      )}
    </div>
  );
}
