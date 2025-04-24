'use client';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

// Note: We can't export metadata with 'use client', so we'll use Next.js Head component

interface ProductsPageProps {
  params: {
    locale: string;
  };
}

export default function ProductsPage({ params: { locale } }: ProductsPageProps) {
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
    <main className="pt-28 pb-20">
      {/* Header Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#F5F0E4" }}>
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ backgroundColor: "#F5F0E4" }}></div>
          
          {/* Decorative accent circles */}
          <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Preserve Memories Forever
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Memorial Products
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-neutral-700">
              Bridging the gap between physical and digital remembrance with elegant, durable products designed to preserve memories for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="inline-block mb-6 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">
                FEATURED PRODUCT
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Evere Medallion</h2>
              <p className="text-neutral-700 mb-8">
                Our flagship product, the Evere Medallion is a beautiful, durable keepsake that connects physical memorials to digital memories. With a simple scan, visitors can access photos, videos, stories, and more about your loved one.
              </p>
              <div className="flex items-center mb-8">
                <span className="text-2xl font-bold text-primary">$97.00</span>
                <span className="ml-2 text-sm text-gray-500">(Includes 2 identical medallions)</span>
              </div>
              <div>
                <Link 
                  href={`/${locale}/products/medallion`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
                >
                  View Details
                  <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative lg:h-auto">
              <div className="absolute inset-0 bg-neutral-50"></div>
              <div className="relative h-80 sm:h-96 lg:h-full">
                <Image 
                  src="/evereplaque.png" 
                  alt="Evere Medallion" 
                  fill
                  className="object-contain p-8"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="pt-36 pb-36 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-neutral-900 mt-10 mb-16">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
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
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Ready to Preserve Memories?</h2>
            <p className="text-lg text-neutral-700 mb-10">
              Our products are designed to connect physical spaces with digital memories, creating lasting tributes for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href={`/${locale}/products/medallion`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
              >
                Shop Now
              </Link>
              <Link 
                href={`/${locale}/#how-it-works`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
