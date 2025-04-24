'use client';

import { createContext, useContext } from 'react';
import { SUPPORTED_LOCALES } from '@/lib/locales';

type TranslationContextType = {
  locale: string;
  translations: Record<string, any>;
};

const TranslationContext = createContext<TranslationContextType>({
  locale: '',
  translations: {}
});

export function TranslationProvider({ 
  children,
  locale,
  translations
}: { 
  children: React.ReactNode;
  locale: string;
  translations: Record<string, any>;
}) {
  return (
    <TranslationContext.Provider value={{ locale, translations }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
