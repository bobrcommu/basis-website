'use client';

import { useState } from 'react';

export default function FaqSection() {
  const faqs = [
    {
      question: 'What is a digital memorial?',
      answer:
        'A digital memorial is an online tribute to a loved one who has passed away. It includes photos, videos, stories, and other memories that can be accessed and shared by family and friends. Ereve\'s digital memorials are accessible through QR codes placed on physical products, creating a bridge between the physical and digital worlds.',
    },
    {
      question: 'How do the QR medallions work?',
      answer:
        'Our QR medallions feature a unique QR code that, when scanned with a smartphone camera, prompts the user to claim the medallion. Once claimed, you can create a new digital memorial or connect it to an existing one. These medallions are designed to be placed at meaningful locations such as cemeteries, home memorial spaces, or other special places.',
    },
    {
      question: 'What does it mean to "claim" a medallion?',
      answer:
        'Claiming a medallion means registering it to your Ereve account. When someone scans the QR code on a medallion for the first time, they\'ll be prompted to claim it by creating an account or logging in. Once claimed, you become the administrator of that medallion and can create or link a digital memorial to it. This ensures that only authorized users can manage the memorial content.',
    },
    {
      question: 'How long will the digital memorial be available?',
      answer:
        'The availability depends on your plan. With our Basic and Premium plans, the memorial is available as long as your subscription is active. With our Forever plan, we guarantee permanent storage of your memorial, ensuring it will be available for generations to come.',
    },
    {
      question: 'Can family and friends contribute to the memorial?',
      answer:
        'Yes! You can invite family and friends to contribute their own memories, photos, stories, and tributes to the memorial. You have full control over who can view and contribute to the memorial through our customizable privacy settings.',
    },
    {
      question: 'What happens if the QR code product is damaged or lost?',
      answer:
        'If your QR code product is damaged or lost, we can provide a replacement product with the same QR code. Contact our customer support team, and we\'ll help you get a replacement as quickly as possible.',
    },
    {
      question: 'Is my data secure and private?',
      answer:
        'Yes, we take data security and privacy very seriously. Your memorial data is stored securely, and you have full control over who can access it through our privacy settings. You can make the memorial completely private, accessible only to invited users, or public.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer:
        'Absolutely! You can upgrade your plan at any time. When you upgrade, you\'ll immediately gain access to all the features of your new plan. If you upgrade to our Forever plan, your memorial will be preserved permanently.',
    },
    {
      question: 'How do I get started?',
      answer:
        'It\'s a straightforward process! Simply sign up for an account, choose your plan, and order your QR medallion. When you receive your medallion, scan the QR code to claim it and follow our guided setup process to create your digital memorial or connect it to an existing one.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 overflow-hidden gradient-bg-sand">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-bg-sand"></div>
        
        {/* Decorative accent circles */}
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium">
            Support & Information
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-4 tracking-tight font-playfair">
            Frequently asked questions
          </h1>
          <p className="text-lg text-neutral-800 dark:text-neutral-300 mx-auto">
            Find answers to common questions about Ereve's digital memorials and QR medallions.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-[#F5F0E4]/80 dark:bg-neutral-900 rounded-xl overflow-hidden transition-all duration-300 
                border border-neutral-200/60 dark:border-neutral-700/60 relative
                ${openIndex === index 
                  ? 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]' 
                  : 'shadow-[0_5px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.2)]'}`}
              >
                <div 
                  className="absolute inset-0 opacity-15 dark:opacity-20 bg-cover bg-center" 
                  style={{ 
                    backgroundImage: `url('/evere${(index % 5) + 1}.jpg')`
                  }}
                ></div>
                <button
                  onClick={() => toggleFaq(index)}
                  className="text-left w-full flex justify-between items-center p-4 focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-bold text-primary dark:text-primary" style={{ fontFamily: "var(--font-playfair)" }}>{faq.question}</span>
                  <div className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 transition-all duration-200 ${openIndex === index ? 'bg-primary/10 dark:bg-primary/20' : ''}`}>
                    <svg
                      className={`${
                        openIndex === index ? 'rotate-180' : 'rotate-0'
                      } h-5 w-5 transform transition-transform duration-200 ease-in-out text-neutral-500 dark:text-neutral-400 ${openIndex === index ? 'text-primary dark:text-primary-light' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden transition-all duration-300 ease-in-out`}
                >
                  <div className="px-4 pb-4 pt-0 border-t border-neutral-100 dark:border-neutral-800">
                    <p className="text-neutral-800 dark:text-neutral-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional question prompt */}
        <div className="mt-8 text-center">
          <div className="inline-block py-3 px-5 rounded-xl bg-[#F5F0E4]/80 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/50 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-15 dark:opacity-20 bg-cover bg-center" 
              style={{ 
                backgroundImage: `url('/evere7.jpg')`
              }}
            ></div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-3 text-sm">
              Still have questions about our services?
            </p>
            <a 
              href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 rounded-full bg-primary text-neutral-50 shadow-sm hover:bg-primary-dark hover:shadow-md dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-light focus:outline-none"
            >
              <span>Contact our support team</span>
              <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
