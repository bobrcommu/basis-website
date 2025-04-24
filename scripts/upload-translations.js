/**
 * Script to upload initial translations to Locize
 * 
 * Usage:
 *   node scripts/upload-translations.js
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Configuration
const projectId = '578277be-b3b6-44f6-ab4f-efefdf5adaeb';
const apiKey = '6437ec51-6944-49a4-8b70-05f7cdf07093';
const version = 'latest';
const sourceLanguage = 'en';  // Our reference language
const languages = ['en', 'nl', 'fr', 'de', 'es'];
const namespace = 'translation';  // Locize namespace

// Path to the translation template JSON file
const templatePath = path.join(__dirname, '..', 'locize-init.json');

// Read the template file
console.log(`Reading template from ${templatePath}`);
const template = JSON.parse(fs.readFileSync(templatePath, 'utf8'));

// Function to upload translations
async function uploadTranslations(lang, data) {
  try {
    console.log(`Uploading translations for language: ${lang}`);
    
    // For languages other than the source, we use the missing endpoint
    // For the source language, we use the update endpoint
    const endpoint = lang === sourceLanguage ? 'update' : 'missing';
    
    const url = `https://api.locize.app/${endpoint}/${projectId}/${version}/${lang}/${namespace}`;
    
    const response = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (response.status === 200) {
      console.log(`✅ Successfully uploaded translations for ${lang}`);
      return true;
    } else {
      console.error(`❌ Failed to upload translations for ${lang}: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error uploading translations for ${lang}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting upload of translations to Locize...');
  
  // Start with the source language (English)
  await uploadTranslations(sourceLanguage, template);
  
  // Then do other languages (they will be machine translated by Locize)
  for (const lang of languages) {
    if (lang !== sourceLanguage) {
      await uploadTranslations(lang, template);
    }
  }
  
  console.log('Upload process completed!');
}

// Run the script
main().catch(err => {
  console.error('Script execution failed:', err);
  process.exit(1);
});
