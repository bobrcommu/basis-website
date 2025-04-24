import { use } from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/lib/TranslationContext";
import { getStaticTranslations } from "@/lib/serverTranslations";

// Font configurations
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: 'swap',
  adjustFontFallback: false
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: 'swap',
  adjustFontFallback: false
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "700"],
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Headstone QR Code Plaques & Memorial QR Codes | EverE",
  description: "Create memorial & cemetery QR code plaques: weather‑proof headstone QR codes, grave marker QR codes, and digital tributes in minutes.",
  icons: ['/evereicon.png'],
};

// Define supported languages directly for static paths
const SUPPORTED_LOCALES = ['en', 'nl', 'fr', 'de', 'es'];

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map(locale => ({ locale }));
}

// Fallback translations to use if no translations are found
const fallbackTranslations = {
  home: {
    hero: {
      title: "Transform Memories into Lasting Digital Legacies",
      subtitle: "Create lasting digital memorials for your loved ones"
    },
    features: {
      title: "Features That Make Us Special"
    }
  },
  common: {
    buttons: {
      getStarted: "Get Started"
    }
  }
};

// Get translations for a given locale
function getTranslations(locale: string) {
  // Use static translations from JSON files
  const translations = getStaticTranslations(locale);
  
  if (Object.keys(translations).length === 0) {
    console.warn('No translations found, using fallback translations');
    return fallbackTranslations;
  }
  
  return translations;
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  // React 18 way to unwrap params
  const resolvedParams = use(Promise.resolve(params));
  const locale = resolvedParams.locale;
  
  // Get translations
  const translations = getTranslations(locale);
  
  // Change html lang attribute in root layout (client-side only)
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale;
  }
  
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${playfair.variable}`}>
      <TranslationProvider locale={locale} translations={translations}>
        <div className="flex flex-col min-h-screen">
          <Header locale={locale} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </TranslationProvider>
    </div>
  );
}
