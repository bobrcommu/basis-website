'use client';

import axios from 'axios';

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

/**
 * Fetch translations from Locize
 * @param locale The locale to fetch translations for
 * @returns The translations object
 */
export async function fetchTranslations(locale: string = DEFAULT_LANGUAGE): Promise<Record<string, any>> {
  try {
    // Fixed hardcoded credentials for testing 
    // (you should replace these with environment variables in production)
    const projectId = '578277be-b3b6-44f6-ab4f-efefdf5adaeb'; // process.env.LOCIZE_PROJECT_ID
    const version = 'latest'; // process.env.NEXT_PUBLIC_LOCIZE_VERSION || 'latest';
    
    console.log('Using Locize project ID:', projectId);
    
    if (!projectId) {
      console.error('Locize project ID is not configured');
      return {};
    }
    
    // Safe fallback to default language if the requested locale is not supported
    const safeLocale = SUPPORTED_LANGUAGES.includes(locale) ? locale : DEFAULT_LANGUAGE;
    
    const url = `https://api.locize.app/${projectId}/${version}/${safeLocale}/translation`;
    console.log('Fetching translations from URL:', url);
    
    const response = await axios.get(url);
    
    if (response.status !== 200) {
      console.error(`Failed to fetch translations for ${locale} from Locize`);
      return {};
    }
    
    console.log(`Successfully fetched translations for ${locale}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching translations from Locize:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    return {};
  }
}

/**
 * Update a translation in Locize
 * @param locale The locale to update
 * @param key The key to update
 * @param value The new translation value
 * @returns Success status
 */
export async function updateTranslation(
  locale: string,
  key: string,
  value: string
): Promise<boolean> {
  try {
    // Hardcoded credentials for testing
    const projectId = '578277be-b3b6-44f6-ab4f-efefdf5adaeb';
    const apiKey = '6437ec51-6944-49a4-8b70-05f7cdf07093';
    const version = 'latest';
    
    console.log('Update translation - Using credentials:', { projectId: projectId.substring(0, 5) + '...', apiKeyPresent: !!apiKey });
    
    if (!projectId || !apiKey) {
      console.error('Locize credentials are not configured');
      return false;
    }
    
    const url = `https://api.locize.app/update/${projectId}/${version}/${locale}/translation`;
    
    // Construct a nested object from the dot notation key
    const keys = key.split('.');
    const updateData: any = {};
    let current = updateData;
    
    // Build the nested structure except for the last key
    for (let i = 0; i < keys.length - 1; i++) {
      current[keys[i]] = {};
      current = current[keys[i]];
    }
    
    // Set the value at the last key
    current[keys[keys.length - 1]] = value;
    
    const response = await axios.post(url, updateData, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.status === 200;
  } catch (error) {
    console.error('Error updating translation in Locize:', error);
    return false;
  }
}

/**
 * Add a missing translation to Locize
 * @param locale The locale to add the translation to
 * @param key The key to add
 * @param value The translation value
 * @returns Success status
 */
export async function addMissingTranslation(
  locale: string,
  key: string,
  value: string
): Promise<boolean> {
  try {
    // Hardcoded credentials for testing
    const projectId = '578277be-b3b6-44f6-ab4f-efefdf5adaeb';
    const apiKey = '6437ec51-6944-49a4-8b70-05f7cdf07093';
    const version = 'latest';
    
    console.log('Add missing translation - Using credentials:', { projectId: projectId.substring(0, 5) + '...', apiKeyPresent: !!apiKey });
    console.log('Adding translation for:', { locale, key, value });
    
    if (!projectId || !apiKey) {
      console.error('Locize credentials are not configured');
      return false;
    }
    
    const url = `https://api.locize.app/missing/${projectId}/${version}/${locale}/translation`;
    
    // Parse the key using dot notation
    const keys = key.split('.');
    const updateData: any = {};
    let current = updateData;
    
    // Build the nested structure except for the last key
    for (let i = 0; i < keys.length - 1; i++) {
      current[keys[i]] = {};
      current = current[keys[i]];
    }
    
    // Set the value at the last key
    current[keys[keys.length - 1]] = value;
    
    const response = await axios.post(url, updateData, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.status === 200;
  } catch (error) {
    console.error('Error adding missing translation to Locize:', error);
    return false;
  }
}
