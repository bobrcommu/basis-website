import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  title: 'Wedding QR Codes | Guest Photo Collection & Digital Guestbook',
  description: 'Collect and share unlimited wedding photos from your guests with elegant QR codes. No app required! Create lasting digital wedding memories with guest photos, videos, and messages.',
  keywords: 'wedding qr code, wedding guest photos, wedding photo sharing, qr code wedding favors, digital guestbook, wedding guest photo collection, wedding photo gallery, wedding memorial, wedding keepsake qr code, wedding photo app alternative',
  openGraph: {
    title: 'Wedding QR Codes | Guest Photo Collection & Digital Guestbook',
    description: 'Collect and share unlimited wedding photos from your guests with elegant QR codes. No app required! Create lasting digital wedding memories.',
    images: [
      {
        url: '/wedding-qr-code.png',
        width: 1200,
        height: 630,
        alt: 'Wedding QR Code Photo Collection Example'
      }
    ]
  }
};

export default function WeddingMemorialsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <div className="flex min-h-screen flex-col">
      <main className="bg-[#F5F0E4]">
        {/* Hero Section */}
        <section className="relative bg-[#F5F0E4] py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/10 shadow-sm text-primary font-medium border border-primary/20 text-sm">
                  Wedding QR Codes & Guest Photo Collection
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-playfair">Collect All Your Wedding Photos With One QR Code</h1>
                <p className="text-xl text-gray-700 mb-8">
                  Our elegant QR code solution helps you collect and preserve all your wedding day memories from every guest's perspective - no app required! Because your special day only happens once.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={`/${locale}/contact`} 
                    className="btn-primary text-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition duration-300"
                  >
                    Create Your Wedding QR Experience
                  </Link>
                  <Link 
                    href="#how-it-works" 
                    className="btn-secondary text-center px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300"
                  >
                    See How It Works
                  </Link>
                </div>
                
                {/* Stats Section */}
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100K+</div>
                    <p className="text-sm text-gray-600">Global Events</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">20M+</div>
                    <p className="text-sm text-gray-600">Moments Captured</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">#1</div>
                    <p className="text-sm text-gray-600">Wedding QR Solution</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/wedding-qr-code.png" 
                  alt="Wedding QR code for guest photo collection with couple holding hands"
                  fill
                  style={{objectFit: 'cover'}}
                  priority
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                  <p className="text-center text-gray-900 font-medium">
                    No app download required! Guests simply scan your QR code
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Pills */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-sm">
                Photos + Videos
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-sm">
                Digital Guestbook
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-sm">
                Live Slideshow
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-sm">
                Albums
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-sm">
                Private Gallery
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-sm">
                Full-Resolution Downloads
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E4] to-transparent opacity-50"></div>
        </section>

        {/* Features Section */}
        <section id="learn-more" className="py-16 bg-[#F5F0E4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Everything You Need For Your Wedding Day</h2>
              <p className="text-xl text-gray-700">
                Our wedding QR code solution offers a complete package to collect, share, and preserve every precious moment from your special day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Unlimited Photo & Video Collection</h3>
                <p className="text-gray-600">
                  Collect thousands of photos and videos from your guests' perspectives. See your wedding from every angle with unlimited uploads - no more chasing photos after the big day!
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Interactive Guest Experience</h3>
                <p className="text-gray-600">
                  Create a memorable experience with our digital and video guestbook. Guests can leave heartfelt messages, share stories, and record video tributes - all through one simple QR code.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Live Slideshow & Gallery</h3>
                <p className="text-gray-600">
                  Watch your photo gallery grow in real-time with our live slideshow feature. Photos appear as guests upload them - perfect for displaying during your reception or after-party!
                </p>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-3">Easy For Everyone - No App Required</h3>
                <p className="text-gray-600">
                  Your guests don't need to download any apps or create accounts. They simply scan your QR code with their phone camera and instantly start sharing photos, videos, and messages.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-3">Full-Resolution Downloads</h3>
                <p className="text-gray-600">
                  Download your entire wedding gallery in full resolution whenever you want. All your precious memories are preserved in their original quality for you to keep forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-[#F5F0E4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works - Simple & Effective</h2>
              <p className="text-xl text-gray-700">
                Creating your wedding QR code takes just 2 minutes, and your guests will love how easy it is to use!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <div className="bg-white rounded-xl shadow-sm p-8 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-4 mt-4 text-center">Create Your QR Code</h3>
                <p className="text-gray-600 text-center">
                  Register in minutes and get your custom wedding QR code. Choose from elegant design options that match your wedding theme.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-24 h-24 bg-[#FAF7F0] rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-4 mt-4 text-center">Share With Guests</h3>
                <p className="text-gray-600 text-center">
                  Display your QR code on wedding invitations, program cards, table centerpieces, or anywhere guests can easily scan it. No app downloads required!
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-24 h-24 bg-[#FAF7F0] rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-4 mt-4 text-center">Collect & Enjoy</h3>
                <p className="text-gray-600 text-center">
                  Watch as your gallery fills with photos, videos, and messages from guests. Download everything in full resolution to treasure forever.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-24 h-24 bg-[#FAF7F0] rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">The Guest Experience</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <p className="text-gray-700">No app downloads or accounts required</p>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <p className="text-gray-700">Instant uploading with just a simple scan</p>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <p className="text-gray-700">Access to view all shared wedding memories</p>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <p className="text-gray-700">Leave heartfelt messages in the digital guestbook</p>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-96 bg-gray-200 rounded-3xl overflow-hidden border-8 border-black relative">
                      <div className="absolute top-0 inset-x-0 h-6 bg-black"></div>
                      <div className="absolute bottom-0 inset-x-0 h-10 bg-black flex items-center justify-center">
                        <div className="w-16 h-2 bg-white/30 rounded-full"></div>
                      </div>
                      <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary-dark/30 flex items-center justify-center p-4">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <p className="text-black font-medium mb-2">Take a photo or video</p>
                          <p className="text-black/70 text-sm">Add to Michael & Sarah's Wedding Gallery</p>
                          <button className="mt-6 bg-primary text-white px-6 py-2 rounded-full font-medium">
                            Upload
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-white p-2 rounded-lg shadow-lg">
                      <div className="w-full h-full border-2 border-primary/20 rounded p-1 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-primary-dark">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Wedding QR Ideas Section */}
        <section className="py-16 bg-[#F5F0E4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Creative Wedding QR Code Ideas</h2>
              <p className="text-xl text-gray-700">
                Unique ways to use your wedding QR code to make your special day even more memorable and interactive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Live Photo Slideshow</h3>
                  <p className="text-gray-600 mb-4">
                    Set up a display screen at your reception that shows a live slideshow of photos as guests upload them. Watch your wedding gallery grow in real-time as the celebration unfolds!
                  </p>
                  <p className="text-gray-600">
                    This creates an interactive experience that gets everyone involved and captures candid moments from multiple perspectives throughout your special day.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 6.75 3.75 3.75-3.75 3.75" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75v10.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">DIY Photo Booth</h3>
                  <p className="text-gray-600 mb-4">
                    Create a DIY photo booth area with props and backdrops, then display your QR code nearby. Guests can take fun photos and instantly add them to your wedding gallery.
                  </p>
                  <p className="text-gray-600">
                    No need for expensive photo booth rentals - this provides the same fun experience while capturing high-quality photos directly from guests' phones.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">I Spy Photo Game</h3>
                  <p className="text-gray-600 mb-4">
                    Create an "I Spy" challenge with a list of photos guests should try to capture during your wedding (first dance, cake cutting, bouquet toss, etc.).
                  </p>
                  <p className="text-gray-600">
                    It turns photo-taking into a fun game and ensures you get pictures of all your important moments from different perspectives.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Video Guestbook Messages</h3>
                  <p className="text-gray-600 mb-4">
                    Encourage guests to record short video messages sharing their well-wishes and favorite memories of you as a couple. Much more personal than a traditional written guestbook!
                  </p>
                  <p className="text-gray-600">
                    These video messages become priceless keepsakes that capture the voices and personalities of your loved ones.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Popular Ways to Display Your QR Code</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 bg-[#FAF7F0] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Invitation Cards</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 bg-[#FAF7F0] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Table Centerpieces</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 bg-[#FAF7F0] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Welcome Signs</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 bg-[#FAF7F0] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Wedding Favors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-[#F5F0E4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Couples Love Our Wedding Photo Collection</h2>
              <p className="text-xl text-gray-700">
                Hear from couples who have used our QR code solution to capture and preserve their special day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "We collected over 300 photos from our guests that we would never have seen otherwise! The morning after our wedding, we woke up to a gallery full of candid moments. Our professional photos are great but these guest photos capture the real emotion."
                </p>
                <div className="flex items-center">
                  <div className="font-medium">
                    <p className="text-gray-900">Michael & Sarah</p>
                    <p className="text-gray-500 text-sm">Married June 2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "The video guestbook feature was a hit! Guests who were too shy to give speeches at the wedding left us the most heartfelt video messages through the QR code. We've watched them countless times - they're even better than reading a traditional guestbook."
                </p>
                <div className="flex items-center">
                  <div className="font-medium">
                    <p className="text-gray-900">David & Elena</p>
                    <p className="text-gray-500 text-sm">Married September 2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "The live slideshow at our reception was amazing! As guests uploaded photos, they appeared on the screen for everyone to see. It created such a fun, interactive atmosphere. Our grandparents loved seeing the photos instantly without needing any tech knowledge."
                </p>
                <div className="flex items-center">
                  <div className="font-medium">
                    <p className="text-gray-900">James & Rebecca</p>
                    <p className="text-gray-500 text-sm">Married May 2023</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Counter */}
            <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 text-center border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-4xl font-bold text-primary mb-2">100K+</h3>
                  <p className="text-gray-600">Global Events</p>
                </div>
                <div className="p-8 text-center border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-4xl font-bold text-primary mb-2">20M+</h3>
                  <p className="text-gray-600">Photos Captured</p>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">#1</h3>
                  <p className="text-gray-600">Wedding Photo Solution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Miss a Single Moment of Your Wedding Day</h2>
                  <p className="text-xl mb-8">
                    Get started in just 2 minutes and collect unlimited photos, videos, and messages from your wedding guests with one elegant QR code.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <p className="text-white">No app downloads required for your guests</p>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <p className="text-white">Unlimited photo & video uploads</p>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <p className="text-white">Full-resolution download package</p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link 
                      href={`/${locale}/contact`} 
                      className="btn-white text-center px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-100 transition duration-300"
                    >
                      Create Your Wedding QR Code
                    </Link>
                    <Link 
                      href={`/${locale}/products`} 
                      className="btn-outline text-center px-6 py-3 rounded-lg border border-white hover:bg-gray-900 transition duration-300"
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>
                <div className="relative h-96 md:h-auto">
                  <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-2xl"></div>
                  <div className="relative flex items-center justify-center h-full">
                    <div className="w-64 h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-4 transform rotate-3">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src="/VINTAGEWEDDING.webp" 
                          alt="Wedding photo collection through QR code"
                          width={400}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-8 right-8 w-40 h-40 bg-white p-3 rounded-lg shadow-lg transform -rotate-3">
                      <div className="w-full h-full bg-[#FAF7F0] p-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-black">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - NEW */}
        <section className="py-16 bg-[#F5F0E4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wedding QR Code FAQs</h2>
              <p className="text-xl text-gray-700">
                Common questions about our wedding QR code memorial services
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">What is a wedding QR code memorial?</h3>
                  <p className="text-gray-600">
                    A wedding QR code memorial is a digital collection of wedding memories, photos, videos, and stories that can be accessed by scanning a custom QR code. It creates a permanent digital archive of your special day that can be shared with guests and preserved for future generations.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How can guests interact with our wedding QR code?</h3>
                  <p className="text-gray-600">
                    Guests can simply scan your wedding QR code with their smartphone camera to instantly access your digital wedding memorial. They can view photos, watch videos, leave messages, and even upload their own photos from your special day if you enable that feature.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Where can I display my wedding QR code?</h3>
                  <p className="text-gray-600">
                    Wedding QR codes can be elegantly displayed on invitation cards, wedding programs, table centerpieces, photo frames, wedding favors, thank you cards, and even on your unity candle or other wedding keepsakes. We provide design services to ensure your QR code complements your wedding aesthetic.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How long does my wedding QR code memorial last?</h3>
                  <p className="text-gray-600">
                    Our wedding QR code memorials are designed to last forever. We offer permanent hosting options with regular backups to ensure your precious memories are preserved for a lifetime and can be passed down to future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO-Rich Footer - NEW */}
        <section className="py-12 bg-[#F5F0E4] border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="sr-only">More About Wedding QR Code Memorials</h2>
              <div className="text-sm text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Wedding QR codes are transforming how couples preserve and share their special day. These elegant, customizable QR codes connect physical mementos with digital wedding memorials that can hold unlimited photos, videos, stories, and messages from loved ones.
                </p>
                <p className="mb-4">
                  Perfect for modern weddings, QR code wedding favors allow guests to instantly access your wedding gallery, leave messages, and even contribute their own photos. Unlike traditional wedding albums that gather dust, QR code memorials are always accessible, easy to share, and impossible to lose.
                </p>
                <p>
                  Whether incorporated into invitations, thank you cards, or keepsakes, wedding QR codes create interactive experiences that bring wedding memories to life with just a simple scan. Preserve your vows, first dance, speeches, and candid moments in a digital format that will last forever and can be passed down through generations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 