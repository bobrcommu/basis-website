import { HowItWorksPageContent } from './HowItWorksContent';

interface HowItWorksPageProps {
  params: {
    locale: string;
  };
}

export default async function HowItWorksPage({ params }: HowItWorksPageProps) {
  return <HowItWorksPageContent locale={params.locale} />;
} 