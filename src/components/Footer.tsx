'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function Footer() {
  const params = useParams();
  const locale = typeof params?.locale === 'string' ? params.locale : 'en';

  const productLinks = [
    { href: `/${locale}/#features`, label: "Features" },
    { href: `/${locale}/#pricing`, label: "Pricing" },
    { href: `/${locale}/#testimonials`, label: "Testimonials" },
    { href: `/${locale}/faq`, label: "FAQ" },
    { href: `/${locale}/partnership`, label: "Partnership" },
    { href: `/${locale}/loved-ones`, label: "Loved Ones" },
    { href: `/${locale}/landmarks`, label: "Landmarks" }
  ];

  const companyLinks = [
    { href: `/${locale}/about`, label: "About Us" },
    { href: `/${locale}/blog`, label: "Blog" },
    { href: `/${locale}/careers`, label: "Careers" },
    { href: `/${locale}/contact`, label: "Contact" }
  ];

  const legalLinks = [
    { href: `/${locale}/privacy`, label: "Privacy Policy" },
    { href: `/${locale}/terms`, label: "Terms of Service" },
    { href: `/${locale}/cookies`, label: "Cookie Policy" }
  ];

  return (
    <footer className="gradient-bg-sand border-t border-neutral-200 dark:border-neutral-800">
      {/* Top wavy divider */}
      {/* Removed wavy divider for consistent background */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section with subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left column with text and CTA */}

          {/* Right column will be empty to match screenshot layout */}
          <div></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 border-t border-neutral-200 dark:border-neutral-800 pt-12">
          {/* Company Info - larger column */}
          <div className="col-span-1 md:col-span-2 lg:pr-12">
            <div className="mb-6 flex items-center">
              <div className="relative">
                <Image 
                  src="/EVEREICON1.png" 
                  alt="Ereve Logo" 
                  width={130} 
                  height={44}
                  className="transform transition-transform duration-300 hover:scale-105" 
                />
                <div className="absolute -right-8 -top-2 text-xs font-semibold text-primary dark:text-primary bg-primary/5 dark:bg-primary/10 px-2 py-0.5 rounded-full">
                  Memorial
                </div>
              </div>
            </div>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 max-w-md leading-relaxed">
              Creating meaningful connections between memories and reality. Our digital memorials and QR code products 
              help preserve the stories of loved ones and significant landmarks.
            </p>
            
            {/* Social links with enhanced styling */}
            <div className="flex space-x-5">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com/ereve`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-primary hover:bg-primary/10 dark:text-neutral-400 dark:hover:text-primary dark:hover:bg-primary/20 transition-colors duration-200"
                  aria-label={social}
                >
                  {social === 'facebook' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
            
            {/* Stay updated section - moved to match screenshot layout */}
            <div className="mt-10">
              <h4 className="text-sm font-semibold text-primary dark:text-primary mb-3">
                Stay updated
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                Subscribe to receive updates and memorial stories
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 text-sm bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-r-md hover:bg-primary-dark transition-colors duration-200 dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links with enhanced styling */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-primary dark:text-primary mb-5">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors duration-200 flex items-center group">
                    <svg className="mr-2 h-1.5 w-1.5 text-primary/70 dark:text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 6 6" fill="currentColor">
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-primary dark:text-primary mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors duration-200 flex items-center group">
                    <svg className="mr-2 h-1.5 w-1.5 text-primary/70 dark:text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 6 6" fill="currentColor">
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-primary dark:text-primary mb-5">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors duration-200 flex items-center group">
                    <svg className="mr-2 h-1.5 w-1.5 text-primary/70 dark:text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 6 6" fill="currentColor">
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with enhanced styling */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 md:mb-0">
            &copy; 2025 Ereve. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"></path>
              </svg>
              <a href="#top" className="underline hover:text-primary dark:hover:text-primary transition-colors duration-200">
                Back to top
              </a>
            </div>
            
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              Made with 
              <span className="inline-block mx-1 text-accent">❤</span>
              in memory of loved ones
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
