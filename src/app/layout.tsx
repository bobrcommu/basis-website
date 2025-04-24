import { Geist, Geist_Mono, Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import { SearchParamsProvider } from "@/components/SearchParamsProvider";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import { ImageProvider } from "@/components/ImageProvider";
import ServiceWorkerProvider from "@/components/ServiceWorkerProvider";
import { Suspense } from "react";
import { PageTransition } from "@/components/animations";

// Font configurations with display: 'swap' for better performance
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: 'swap',
  adjustFontFallback: false,
  preload: true
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: 'swap',
  adjustFontFallback: false,
  preload: true
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "700"],
  display: 'swap',
  preload: true
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  display: 'swap',
  preload: true
});

export { metadata } from './metadata';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${playfair.variable}`}
    >
      <head>
        {/* Add preload hints for critical resources */}
        <link rel="preload" href="/optimized/logonew.webp" as="image" type="image/webp" />
        <link rel="preload" href="/optimized/everefront.webp" as="image" type="image/webp" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://api.evere.com" />
        
        {/* Meta tags for PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Evere Memorial" />
        <link rel="apple-touch-icon" href="/EVEREICON1.webp" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SearchParamsProvider>
            <ImageProvider>
              <AnalyticsProvider>
                <Suspense fallback={null}>
                  <PerformanceOptimizer />
                  <ServiceWorkerProvider />
                  <AnalyticsWrapper />
                  <PageTransition type="fadeUp">
                    {children}
                  </PageTransition>
                </Suspense>
              </AnalyticsProvider>
            </ImageProvider>
          </SearchParamsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
