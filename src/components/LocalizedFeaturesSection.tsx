'use client';

import { useTranslatedContent } from '@/lib/useTranslatedContent';
import FeaturesSection from './FeaturesSection';

export default function LocalizedFeaturesSection({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // Use our translation hook to get translated content
  const title = useTranslatedContent('home.features.title', 'Why Choose EverE');
  
  return (
    <FeaturesSection locale={locale} />
  );
}
