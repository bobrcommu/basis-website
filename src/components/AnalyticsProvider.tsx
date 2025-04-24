'use client';

import Script from 'next/script';

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-BY7HPC14QH`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BY7HPC14QH', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Cookiebot */}
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="01270c63-f728-4f58-8ffd-aa2807b395f1"
        strategy="afterInteractive"
      />

      {/* Schema.org */}
      <Script
        id="schema-org"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EverE Memorial",
          "url": "https://evere.io",
          "logo": "https://evere.io/evereicon.png",
          "sameAs": [
            "https://facebook.com/everememorial",
            "https://instagram.com/everememorial"
          ]
        })}
      </Script>

      {/* Theme Script */}
      <Script id="theme-script" strategy="beforeInteractive">
        {`
          try {
            const storedTheme = localStorage.getItem('theme');
            const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = storedTheme || (systemDark ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', theme === 'dark');
          } catch (e) {}
        `}
      </Script>

      {children}
    </>
  );
}
