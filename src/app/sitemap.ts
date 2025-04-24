import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evere.io';
  const locales = ['en', 'nl', 'fr', 'de', 'es'];
  const routes = [
    '',
    '/about',
    '/blog',
    '/loved-ones',
    '/faq',
    '/products/medallion',
    '/services/netherlands',
    '/pricing',
    '/how-it-works',
    '/blog/ai-crafted-funeral-poems-personalised-tributes',
    '/blog/writing-eulogy-for-mother-guide',
    '/blog/grave-qr-code-video-comparison',
    '/blog/quiet-revolution-digital-memorials',
    '/blog/beyond-epitaph-guide-free-online-memorials',
    '/permanent-digital-memorials-headstone-qr-code',
    '/grave-qr-code-video-reviews-evere-turninghearts-rememberwell',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add routes for each locale
  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemap;
}
