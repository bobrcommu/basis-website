import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogArticleTemplateProps {
  title: string;
  date: string;
  readTime: string;
  heroImage: string;
  heroImageAlt: string;
  locale: string;
  children: ReactNode;
  ctaLink?: string;
  ctaText?: string;
}

export default function BlogArticleTemplate({
  title,
  date,
  readTime,
  heroImage,
  heroImageAlt,
  locale,
  children,
  ctaLink,
  ctaText = 'Explore Evere Products',
}: BlogArticleTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16"> {/* Increased top margin for better spacing */}
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-playfair">{title}</h1>
            <div className="flex justify-center items-center text-gray-500 text-sm">
              <time dateTime={date}>{date}</time>
              <span className="mx-2">•</span>
              <span>Approx. {readTime} read</span>
            </div>
          </header>

          {/* Hero image */}
          <div className="mb-10 relative h-96 w-full">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              style={{objectFit:'cover'}}
              className="rounded-xl"
              priority
            />
          </div>

          <div className="prose max-w-none dark:prose-invert">
            {children}
            
            {ctaLink && (
              <div className="flex justify-center mt-8">
                <Link
                  href={`/${locale}${ctaLink}`}
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
} 