import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    backend: {
      projectId: process.env.LOCIZE_PROJECT_ID,
      apiKey: process.env.LOCIZE_API_KEY,
      version: process.env.NEXT_PUBLIC_LOCIZE_VERSION,
      referenceLng: 'en'
    }
  });

export default i18n;
