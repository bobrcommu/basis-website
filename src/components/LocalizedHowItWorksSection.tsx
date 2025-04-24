'use client';

import { useTranslatedContent } from '@/lib/useTranslatedContent';
import HowItWorksSection from './HowItWorksSection';

export default function LocalizedHowItWorksSection() {
  // Use translation hook to get translated content
  const title = useTranslatedContent('home.howItWorks.title', 'How It Works');
  
  return (
    <HowItWorksSection />
  );
}
