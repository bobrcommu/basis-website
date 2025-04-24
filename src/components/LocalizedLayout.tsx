'use client';

import { useTranslation } from '@/lib/TranslationContext';
import Header from './Header';
import Footer from './Footer';

export default function LocalizedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { locale } = useTranslation();
  
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
