import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnership Opportunities | Evere - Digital Memorial Service',
  description: 'Explore business partnership and affiliate opportunities with Evere, the leading digital memorial and QR code memorial service.',
};

export default function PartnershipPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Partnership Opportunities</h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
              Join forces with Evere to help people preserve memories and honor their loved ones.
            </p>
          </div>
        </div>
      </div>

      {/* Partnership Types Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Partnership Types
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              We offer several ways to partner with Ereve, each designed to create mutual value.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Business Partnerships */}
            <div className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Business Partnerships</h3>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-5xl font-extrabold tracking-tight">Strategic</span>
                    <span className="ml-1 text-xl font-semibold">&nbsp;collaboration</span>
                  </div>
                  <p className="mt-5 text-lg text-gray-500 dark:text-gray-400">
                    Perfect for funeral homes, cemeteries, memorial parks, and other businesses in the memorial industry looking to offer digital memorial services to their clients.
                  </p>
                </div>
                <div className="mt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                        White-label or co-branded digital memorial solutions
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                        Wholesale pricing on QR code products
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                        Dedicated account manager and priority support
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                        Marketing materials and sales training
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Become a Business Partner
                  </Link>
                </div>
              </div>
            </div>

            {/* Affiliate Program */}
            <div className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Affiliate Program</h3>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-5xl font-extrabold tracking-tight">Commission</span>
                    <span className="ml-1 text-xl font-semibold">&nbsp;based</span>
                  </div>
                  <p className="mt-5 text-lg text-gray-500 dark:text-gray-400">
                    Ideal for bloggers, content creators, and individuals who want to earn commissions by referring customers to Evere's digital memorial services.
                  </p>
                </div>
                <div className="mt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                        Earn 15% commission on all referred sales
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                        Custom affiliate links and tracking dashboard
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                        Promotional materials and banners
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                        Monthly payments via PayPal or bank transfer
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Join Affiliate Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Why Partner With Ereve?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Discover the advantages of joining forces with the leading digital memorial service.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 dark:bg-gray-900 rounded-lg px-6 pb-8 h-full shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black dark:bg-white rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Additional Revenue Stream</h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Generate new income by offering digital memorial services and QR code products to your clients or audience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 dark:bg-gray-900 rounded-lg px-6 pb-8 h-full shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black dark:bg-white rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Trusted Brand</h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Partner with a respected name in digital memorialization, known for quality, security, and compassionate service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 dark:bg-gray-900 rounded-lg px-6 pb-8 h-full shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black dark:bg-white rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Innovative Technology</h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Offer cutting-edge digital memorial solutions that connect physical memorials with rich online experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 dark:bg-gray-900 rounded-lg px-6 pb-8 h-full shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black dark:bg-white rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Dedicated Support</h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Receive personalized assistance, training, and resources to help you succeed as an Evere partner.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 dark:bg-gray-900 rounded-lg px-6 pb-8 h-full shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black dark:bg-white rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Growth Opportunity</h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Tap into the growing market for digital memorialization and QR code memorial products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 dark:bg-gray-900 rounded-lg px-6 pb-8 h-full shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black dark:bg-white rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Meaningful Impact</h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Help people preserve and share the memories of their loved ones in meaningful, lasting ways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Partner Testimonials
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Hear from businesses and affiliates who have partnered with Ereve.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-300">RS</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Robert Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Smith Funeral Home</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  "Partnering with Ereve has allowed us to offer a modern, meaningful service to our clients. The QR code memorials have been incredibly popular, and the digital platform is intuitive for both us and our clients."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-300">JD</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Jennifer Davis</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Peaceful Gardens Cemetery</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  "Our cemetery visitors love the ability to scan QR codes and instantly access photos, stories, and memories of their loved ones. Ereve's partnership program has been seamless to implement and has added significant value to our services."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-300">MT</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Michael Thompson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Grief Support Blogger</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  "As an affiliate partner, I've been able to recommend a service I truly believe in to my blog readers while earning a meaningful commission. The affiliate dashboard makes tracking easy, and the promotional materials are professional and effective."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to become a partner?</span>
            <span className="block text-gray-300">Get in touch with our partnership team today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:border-transparent"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
