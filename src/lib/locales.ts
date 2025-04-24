// Language settings for static export
export const SUPPORTED_LOCALES = ['en', 'nl', 'fr', 'de', 'es'];
export const DEFAULT_LOCALE = 'en';

// Helper function to check if locale is supported
export function isValidLocale(locale: string): boolean {
  return SUPPORTED_LOCALES.includes(locale);
} 