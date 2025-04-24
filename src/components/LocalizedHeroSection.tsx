'use client';

import { useTranslatedContent } from '@/lib/useTranslatedContent';
import HeroSection from './HeroSection';

export default function LocalizedHeroSection() {
  // Use our translation hook to get translated content
  const subtitle = useTranslatedContent('home.hero.subtitle', 'Connect physical grave markers to digital memories that last forever');
  const description = useTranslatedContent('home.hero.description', 'Our weather-resistant cemetery QR code plaques connect memorial sites to digital legacies. Easily attach a memorial QR code to any headstone or grave marker for instant access to cherished memories and stories.');
  
  // We're using an animated title directly in HeroSection, but we still need to pass a title prop
  const title = ""; // Empty string as we're using animated title in the component
  
  return (
    <HeroSection 
      title={title}
      subtitle={subtitle}
      description={description}
      imageSrc="/herophone.png"
    />
  );
}
