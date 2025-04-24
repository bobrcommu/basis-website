import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Ereve - Digital Memorial Service',
  description: 'Get in touch with our team for questions about digital memorials, QR code products, or support with your existing memorial.',
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Contact Us</h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
              We're here to help with any questions about our digital memorial services.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white dark:bg-black shadow-xl rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="relative overflow-hidden py-10 px-6 bg-black dark:bg-gray-800 sm:px-10 xl:p-12 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                  <svg className="absolute inset-0 w-full h-full" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                    <defs>
                      <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="text-gray-700 dark:text-gray-600" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Contact Information</h3>
                <p className="mt-6 text-base text-gray-300 max-w-3xl">
                  Have questions about our services or need support with your digital memorial? Our team is here to help.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt><span className="sr-only">Email</span></dt>
                  <dd className="flex text-base text-gray-300">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3">support@ereve.com</span>
                  </dd>
                  <dt><span className="sr-only">Phone number</span></dt>
                  <dd className="flex text-base text-gray-300">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                  <dt><span className="sr-only">Office</span></dt>
                  <dd className="flex text-base text-gray-300">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="ml-3">123 Memorial Lane<br />San Francisco, CA 94103</span>
                  </dd>
                </dl>
                <div className="mt-12">
                  <h3 className="text-lg font-medium text-white">Support Hours</h3>
                  <div className="mt-4 text-base text-gray-300">
                    <p>Monday - Friday: 9AM - 6PM EST</p>
                    <p>Saturday: 10AM - 4PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Send us a message</h3>
                <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                      <span id="phone-optional" className="text-sm text-gray-500 dark:text-gray-400">Optional</span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                      <span id="message-max" className="text-sm text-gray-500 dark:text-gray-400">Max. 500 characters</span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                        aria-describedby="message-max"
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Can't find the answer you're looking for? Contact our support team.
            </p>
          </div>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  How quickly will I receive my QR code product?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Physical QR code products typically ship within 3-5 business days and arrive within 7-10 business days, depending on your location.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Can I get help setting up my digital memorial?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Absolutely! Our support team is available to help you set up your digital memorial and answer any questions you may have.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  How do I add more contributors to my memorial?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  You can add contributors in your memorial's settings page. Simply enter their email address and set their permission level.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  What if my QR code product is damaged?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  We offer replacements for damaged QR code products within 30 days of receipt. Please contact our support team with photos of the damage.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
