import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'Memorial Types | Digital Memorials For Every Occasion',
  description: 'Explore our range of digital memorial options for different life events, including weddings, anniversaries, and other special moments worth preserving.',
};

export default function MemorialTypesPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const memorialTypes = [
    {
      id: 'weddings',
      title: 'Wedding Memorials',
      description: 'Preserve the magic of your wedding day forever with a digital memorial that celebrates your love story.',
      image: '/memorial-women.webp',
      link: `/${locale}/memorial-types/weddings`
    },
    {
      id: 'anniversaries',
      title: 'Anniversary Memorials',
      description: 'Commemorate milestone anniversaries with a tribute that captures your journey together.',
      image: '/VINTAGEFAMILY.png',
      link: `/${locale}/contact`
    },
    {
      id: 'loved-ones',
      title: 'Loved Ones Memorials',
      description: 'Honor and remember those who have passed with a dignified and personalized digital tribute.',
      image: '/EVEREGRAVESTONE.png',
      link: `/${locale}/loved-ones`
    },
    {
      id: 'pets',
      title: 'Pet Memorials',
      description: 'Create a lasting tribute to your beloved animal companions and the joy they brought to your life.',
      image: '/VINTAGEPHOTO.png',
      link: `/${locale}/blog/pet-memorials`
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-playfair">Memorial Types</h1>
              <p className="text-xl text-gray-700 mb-8">
                Explore our range of digital memorial solutions for different life events and occasions. Each type is designed to preserve memories and create meaningful connections.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50"></div>
        </section>

        {/* Memorial Types Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {memorialTypes.map((type) => (
                <div key={type.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      style={{objectFit: 'cover'}}
                      className="hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4">{type.title}</h2>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <Link 
                      href={type.link}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Memorial Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need a Custom Memorial?</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Don't see what you're looking for? We can create custom digital memorials for any occasion or purpose.
                </p>
                <p className="text-gray-600 mb-8">
                  Whether it's a family reunion, cultural celebration, historical event, or any other significant moment, our team can design a tailored digital memorial that meets your specific needs.
                </p>
                <Link 
                  href={`/${locale}/contact`} 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Contact Us for Custom Options
                </Link>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/EVEREGRAVESTONE.png" 
                  alt="Custom memorial options"
                  fill
                  style={{objectFit: 'cover'}}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3">How long do digital memorials last?</h3>
                  <p className="text-gray-600">
                    Our digital memorials are designed to last indefinitely. We use secure cloud storage and regular backups to ensure your memorial remains accessible for generations to come.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Can I update my memorial after it's created?</h3>
                  <p className="text-gray-600">
                    Absolutely! All our memorials can be continuously updated. Add new photos, videos, stories, or invite others to contribute their memories at any time.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3">How are digital memorials accessed?</h3>
                  <p className="text-gray-600">
                    Your memorial is accessible through a unique URL that you can share with friends and family. For physical connections, we offer QR code plaques that can be placed on physical items or locations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Can I control who sees my memorial?</h3>
                  <p className="text-gray-600">
                    Yes, you have complete privacy control. Choose to make your memorial public, password-protected, or visible only to invited guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Preserving Your Special Moments</h2>
              <p className="text-xl mb-8">
                Create a lasting digital memorial that captures the essence of life's most meaningful events and relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={`/${locale}/contact`} 
                  className="btn-white text-center px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-gray-100 transition duration-300"
                >
                  Create Your Memorial
                </Link>
                <Link 
                  href={`/${locale}/products`} 
                  className="btn-outline text-center px-6 py-3 rounded-lg border border-white hover:bg-blue-700 transition duration-300"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 