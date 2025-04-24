'use client';

import { useTranslatedContent } from '@/lib/useTranslatedContent';
import { useTranslation } from '@/lib/TranslationContext';

/**
 * Example component that demonstrates how to use translations
 */
export default function TranslationExample() {
  // Get the current locale and translations from the context
  const { locale } = useTranslation();
  
  // Use the useTranslatedContent hook to get translated strings by their key paths
  const title = useTranslatedContent('home.hero.title', 'Preserve Memories Forever');
  const subtitle = useTranslatedContent('home.hero.subtitle', 'Create lasting digital memorials for your loved ones');
  const getStartedText = useTranslatedContent('common.buttons.getStarted', 'Get Started');
  
  // Example of a nested component that shows how to use translations
  const Feature = ({ keyPath }: { keyPath: string }) => {
    const title = useTranslatedContent(`home.features.${keyPath}.title`, '');
    const description = useTranslatedContent(`home.features.${keyPath}.description`, '');
    
    return (
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
    );
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-4 inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
        <span className="font-medium">Current language:</span> 
        <span className="font-semibold">{locale}</span>
      </div>
      
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8">{subtitle}</p>
      
      <button className="px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors">
        {getStartedText}
      </button>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          {useTranslatedContent('home.features.title', 'Why Choose EverE')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Feature keyPath="feature1" />
          <Feature keyPath="feature2" />
          <Feature keyPath="feature3" />
        </div>
      </div>
      
      <div className="mt-16 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">How to use translations in your components</h2>
        <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg my-4 overflow-auto">
          <pre className="text-sm">
{`// Import the hook
import { useTranslatedContent } from '@/lib/useTranslatedContent';

// Use it in your component
const title = useTranslatedContent('home.hero.title', 'Default Title');
const subtitle = useTranslatedContent('home.hero.subtitle', 'Default Subtitle');

// Then use the translated strings in your JSX
return (
  <div>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}
