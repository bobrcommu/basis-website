// Server-side translations handler

// Static translations
import en from '../../public/locales/en/translation.json';
import fr from '../../public/locales/fr/translation.json';
import de from '../../public/locales/de/translation.json';
import nl from '../../public/locales/nl/translation.json';
import es from '../../public/locales/es/translation.json';

// Supported languages
export const SUPPORTED_LANGUAGES = ['en', 'nl', 'fr', 'de', 'es'];
export const DEFAULT_LANGUAGE = 'en';

// Language names mapping
export const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  nl: 'Nederlands',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español'
};

// Pre-loaded static translations
const staticTranslations: Record<string, any> = {
  en,
  fr,
  de,
  nl,
  es
};

/**
 * Get static translations for a locale
 * This function works on both server and client
 */
export function getStaticTranslations(locale: string = DEFAULT_LANGUAGE): Record<string, any> {
  // Ensure we use a supported locale, defaulting to English if needed
  const safeLocale = SUPPORTED_LANGUAGES.includes(locale) ? locale : DEFAULT_LANGUAGE;
  
  // Return the static translations for the requested locale
  return staticTranslations[safeLocale] || staticTranslations[DEFAULT_LANGUAGE];
}

/**
 * Get a nested value from an object using a dot-notation path
 */
export function getNestedValue(obj: any, path: string, defaultValue: any = null): any {
  if (!obj || !path) return defaultValue;
  
  // Split the path by dots
  const keys = path.split('.');
  let current = obj;
  
  // Traverse the object following the path
  for (const key of keys) {
    if (current === null || current === undefined || !Object.prototype.hasOwnProperty.call(current, key)) {
      return defaultValue;
    }
    current = current[key];
  }
  
  return current === undefined ? defaultValue : current;
}
