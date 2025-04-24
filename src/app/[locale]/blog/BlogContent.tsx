'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogContentProps {
  locale: string;
}

// Blog article data
const blogArticles = [
  {
    slug: 'ai-crafted-funeral-poems-personalised-tributes',
    title: 'AI-Crafted Funeral Poems: Honouring Loved Ones with Personalised Tributes',
    description: 'Discover how AI-generated poetry can create unique, heartfelt funeral poems that perfectly capture your loved one\'s spirit and legacy.',
    date: 'April 25, 2025',
    readTime: '5 min read',
    image: '/memorial-flowers.webp',
  },
  {
    slug: 'writing-eulogy-for-mother-guide',
    title: 'Writing a Eulogy for Your Mother: A Heartfelt Guide',
    description: 'Discover how to craft a meaningful eulogy for your mother with our compassionate guide, including structure tips and AI-assisted writing support.',
    date: 'April 22, 2025',
    readTime: '6 min read',
    image: '/memorial-women.webp',
  },
  {
    slug: 'beyond-epitaph-guide-free-online-memorials',
    title: 'Beyond the Epitaph: A Complete Guide to Free Online Memorials',
    description: 'Explore free online memorials, QR memorial plaques, and AI eulogy writers changing how we remember loved ones in the digital age.',
    date: 'April 10, 2025',
    readTime: '7 min read',
    image: '/grave-medallion.webp',
  },
  {
    slug: 'quiet-revolution-digital-memorials',
    title: 'A Quiet Revolution in Remembrance: Digital Memorials, Headstone QR Codes and the 50 mm Forever Medallion',
    description: 'Explore how digital memorials with QR codes are transforming remembrance traditions, allowing visitors to experience rich media tributes at gravesides using Evere\'s 50 mm Forever Medallion.',
    date: 'April 15, 2025',
    readTime: '8 min read',
    image: '/grave-medallion.webp',
  },
  {
    slug: 'grave-qr-code-video-comparison',
    title: 'Grave QR Code Video Tributes: Evere vs. Turning Hearts & Remember Well',
    description: 'Compare the leading grave QR code video services with real reviews of Evere Medallion, Turning Hearts, and Remember Well memorial solutions.',
    date: 'June 10, 2025',
    readTime: '7 min read',
    image: '/grave-medallion.webp',
  },
  {
    slug: 'role-of-ai-in-modern-memorials',
    title: 'The Role of AI in Modern Memorials',
    description: 'Explore how Artificial Intelligence is reshaping memorial practices, offering tools for comfort, personalization, and preserving legacies.',
    date: 'April 15, 2025',
    readTime: '6 min read',
    image: '/evereai.webp',
  },
  {
    slug: 'digital-memorial-tribute',
    title: 'Creating Meaningful Digital Memorial Tributes',
    description: 'Learn how to create a digital memorial tribute that captures the essence of your loved one and preserves their memory for generations.',
    date: 'March 28, 2025',
    readTime: '5 min read',
    image: '/herophone.webp',
  },
  {
    slug: 'digital-memorials-for-children',
    title: 'Digital Memorials for Children: A Sensitive Approach',
    description: 'Guidance on creating appropriate and meaningful digital memorials for children, with sensitivity to grief and celebration of life.',
    date: 'March 20, 2025',
    readTime: '7 min read',
    image: '/memorial-women.webp',
  },
  {
    slug: 'memorializing-pets-digitally',
    title: 'Memorializing Pets Digitally',
    description: "Discover ways to honor your beloved pet's memory through digital memorials that celebrate their unique place in your life.",
    date: 'March 10, 2025',
    readTime: '4 min read',
    image: '/everecat.webp',
  },
  {
    slug: 'creating-personalized-digital-tribute-guide',
    title: 'Creating Personalized Digital Tributes: A Comprehensive Guide',
    description: 'A step-by-step guide to creating a personalized digital tribute that reflects the unique story of your loved one.',
    date: 'February 22, 2025',
    readTime: '8 min read',
    image: '/evere7.webp',
  },
];

export default function BlogContent({ locale }: BlogContentProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-playfair">Our Blog</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Insights, resources, and guidance on creating meaningful digital memorials and navigating the journey of remembrance.
        </p>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <Link 
              href={`/${locale}/blog/${article.slug}`}
              key={article.slug}
              className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{objectFit: 'cover'}}
                  className="transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date} • {article.readTime}</p>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h2>
                <p className="text-gray-600">{article.description}</p>
                <div className="mt-4 text-primary font-medium group-hover:underline">Read More →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
