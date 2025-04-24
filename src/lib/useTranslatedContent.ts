'use client';

import { useTranslation } from './TranslationContext';

/**
 * Hook to get translated content by key path
 * 
 * @param keyPath Dot notation path to the translation (e.g., 'home.hero.title')
 * @param defaultMessage Fallback message if translation is not found
 * @returns The translated string
 * 
 * Example usage:
 * ```
 * const title = useTranslatedContent('home.hero.title', 'Default Title');
 * ```
 */
export function useTranslatedContent(keyPath: string, defaultMessage: string = ''): string {
  const { translations } = useTranslation();
  
  if (!keyPath) return defaultMessage;
  
  try {
    // Split the key path and traverse the translations object
    const keys = keyPath.split('.');
    let current: any = translations;
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return defaultMessage;
      }
    }
    
    return typeof current === 'string' ? current : defaultMessage;
  } catch (error) {
    console.error(`Error retrieving translation for key: ${keyPath}`, error);
    return defaultMessage;
  }
}
