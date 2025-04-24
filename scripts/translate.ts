#!/usr/bin/env node
/**
 * Script to generate translation files for all supported languages.
 * 
 * Usage:
 * npx ts-node scripts/translate.ts
 * 
 * Requirements:
 * - Google Cloud Translation API key must be set up in .env.local
 */

import { translateText, SUPPORTED_LANGUAGES, LANGUAGE_NAMES } from '../src/lib/translationService';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import axios from 'axios';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Check for required environment variables
if (!process.env.GOOGLE_CLOUD_API_KEY) {
  console.error('Error: Google Cloud API Key is not configured.');
  console.error('Please set GOOGLE_CLOUD_API_KEY in your .env.local file');
  process.exit(1);
}

/**
 * Translate a JSON message file
 */
async function translateMessageFile(
  sourceFile: string,
  targetLanguage: string
): Promise<object> {
  try {
    // Read the source JSON file
    const source = JSON.parse(await fs.readFile(sourceFile, 'utf8'));
    
    // Function to recursively translate an object
    async function translateObject(obj: any): Promise<any> {
      const result: any = {};
      
      for (const key of Object.keys(obj)) {
        if (typeof obj[key] === 'string') {
          // Translate string
          result[key] = await translateText(obj[key], targetLanguage);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          // Recursively translate nested objects
          result[key] = await translateObject(obj[key]);
        } else {
          // Copy other values as is
          result[key] = obj[key];
        }
      }
      
      return result;
    }
    
    // Translate the entire message file
    return await translateObject(source);
  } catch (error) {
    console.error('Message file translation error:', error);
    throw error;
  }
}

/**
 * Generate all translation files from English source
 */
async function generateAllTranslations(): Promise<void> {
  const sourceFile = path.join(process.cwd(), 'messages', 'en.json');

  try {
    // Process each target language
    for (const lang of SUPPORTED_LANGUAGES) {
      // Skip source language (English)
      if (lang === 'en') continue;
      
      console.log(`Translating messages to ${LANGUAGE_NAMES[lang as keyof typeof LANGUAGE_NAMES]}...`);
      
      // Translate the messages
      const translated = await translateMessageFile(sourceFile, lang);
      
      // Write to target language file
      const targetFile = path.join(process.cwd(), 'messages', `${lang}.json`);
      await fs.writeFile(targetFile, JSON.stringify(translated, null, 2), 'utf8');
      
      console.log(`Translation complete: ${targetFile}`);
    }
    
    console.log('All translations generated successfully!');
  } catch (error) {
    console.error('Failed to generate translations:', error);
    throw error;
  }
}

async function main() {
  try {
    console.log('Starting translation process...');
    await generateAllTranslations();
    console.log('Translations completed successfully!');
  } catch (error) {
    console.error('Translation process failed:', error);
    process.exit(1);
  }
}

// Add a timeout to avoid rate limiting
setTimeout(() => {
  main().catch(err => console.error('Script failed:', err));
}, 1000);
