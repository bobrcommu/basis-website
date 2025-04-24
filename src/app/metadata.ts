import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://evere.io"),
  title: "EverE | Digital Memorial Solutions & QR Code Memorials",
  description: "Honor your loved ones with EverE's innovative digital memorial solutions. Create lasting tributes with our durable QR codes for headstones, gravestones, and memorial plaques. Share memories, stories, and photos that last generations.",
  keywords: "digital memorial, QR code memorial, headstone QR code, gravestone QR code, memorial plaque, digital tribute, memorial website, pet memorial, QR tombstone, memory preservation",
  authors: [{ name: "EverE" }],
  creator: "EverE",
  publisher: "EverE",
  icons: [
    { rel: "icon", url: "/evereicon.png" },
    { rel: "apple-touch-icon", url: "/evereicon.png" },
    { rel: "shortcut icon", url: "/favicon.ico" }
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evere.io",
    siteName: "EverE Digital Memorials",
    title: "EverE | Digital Memorial Solutions & QR Code Memorials",
    description: "Honor your loved ones with EverE's innovative digital memorial solutions. Create lasting tributes with our durable QR codes for headstones, gravestones, and memorial plaques.",
    images: [{
      url: "/EVEREGRAVESTONE.png",
      width: 1200,
      height: 630,
      alt: "EverE Digital Memorial Solutions"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "EverE | Digital Memorial Solutions & QR Code Memorials",
    description: "Honor your loved ones with EverE's innovative digital memorial solutions. Create lasting tributes with QR codes for headstones and memorial plaques.",
    images: ["/EVEREGRAVESTONE.png"],
    creator: "@evere_memorials"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "verification_token"
  },
  alternates: {
    canonical: "https://evere.io",
    languages: {
      "en": "https://evere.io/en",
      "nl": "https://evere.io/nl",
      "de": "https://evere.io/de",
      "fr": "https://evere.io/fr",
      "es": "https://evere.io/es"
    }
  }
};
