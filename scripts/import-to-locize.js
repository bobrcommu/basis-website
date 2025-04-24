#!/usr/bin/env node

/**
 * Script to upload translations to Locize
 * Usage: node scripts/import-to-locize.js
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

// Configuration
const config = {
  projectId: '578277be-b3b6-44f6-ab4f-efefdf5adaeb',
  apiKey: '6437ec51-6944-49a4-8b70-05f7cdf07093',
  version: 'latest',
  localesPath: path.join(__dirname, '../public/locales'),
  referenceLng: 'en',
  languages: ['en', 'fr', 'de', 'nl', 'es'],
  namespace: 'translation',
  debug: true
};

// Create a custom agent with increased timeout
const httpAgent = new http.Agent({ keepAlive: true, timeout: 60000 });
const httpsAgent = new https.Agent({ keepAlive: true, timeout: 60000 });

/**
 * Log with timestamp
 */
function log(...args) {
  if (config.debug) {
    console.log(`[${new Date().toISOString()}]`, ...args);
  }
}

/**
 * Flatten a nested JSON object
 * @param {Object} obj - The nested object to flatten
 * @param {String} prefix - The prefix for the flattened keys
 * @returns {Object} - The flattened object
 */
function flattenObject(obj, prefix = '') {
  const flattened = {};
  
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      // Recursively flatten nested objects
      const nested = flattenObject(obj[key], prefix ? `${prefix}.${key}` : key);
      Object.assign(flattened, nested);
    } else {
      // Add leaf node
      flattened[prefix ? `${prefix}.${key}` : key] = obj[key];
    }
  }
  
  return flattened;
}

/**
 * Make a request to the Locize API
 */
async function makeRequest(endpoint, method = 'GET', data = null, extraHeaders = {}) {
  return new Promise((resolve, reject) => {
    const apiBase = 'api.locize.app';
    const options = {
      hostname: apiBase,
      port: 443,
      path: endpoint,
      method: method,
      agent: httpsAgent,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`,
        ...extraHeaders
      }
    };

    log(`Making ${method} request to ${apiBase}${endpoint}`);

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        log(`Response status: ${res.statusCode}`);
        
        if (res.statusCode >= 200 && res.statusCode < 300) {
          if (responseData) {
            try {
              const json = JSON.parse(responseData);
              resolve(json);
            } catch (e) {
              resolve(responseData);
            }
          } else {
            resolve({});
          }
        } else {
          reject(new Error(`HTTP error: ${res.statusCode} - ${responseData}`));
        }
      });
    });
    
    req.on('error', (error) => {
      log('Request error:', error.message);
      reject(error);
    });
    
    req.on('timeout', () => {
      log('Request timeout');
      req.destroy();
      reject(new Error('Request timeout'));
    });

    if (data) {
      const jsonData = JSON.stringify(data);
      req.write(jsonData);
      
      // For debugging
      if (jsonData.length < 1000) {
        log('Sending data:', jsonData);
      } else {
        log(`Sending data: [${jsonData.length} bytes]`);
      }
    }
    
    req.end();
  });
}

/**
 * Get all translation files from the locales directory
 */
async function getTranslationFiles() {
  const result = {};
  
  for (const lang of config.languages) {
    const langPath = path.join(config.localesPath, lang);
    try {
      const langStat = await stat(langPath);
      if (!langStat.isDirectory()) continue;
      
      const files = await readdir(langPath);
      for (const file of files) {
        if (!file.endsWith('.json')) continue;
        
        try {
          const filePath = path.join(langPath, file);
          const fileContent = await readFile(filePath, 'utf8');
          const namespace = file.replace('.json', '');
          
          if (!result[lang]) result[lang] = {};
          
          // Parse and flatten the JSON structure
          const parsedContent = JSON.parse(fileContent);
          result[lang][namespace] = flattenObject(parsedContent);
          
          log(`Loaded and flattened translations for ${lang}/${namespace} (${Object.keys(result[lang][namespace]).length} keys)`);
        } catch (fileError) {
          log(`Error loading file for ${lang}/${file}:`, fileError.message);
        }
      }
    } catch (langError) {
      log(`Language directory ${lang} not found:`, langError.message);
    }
  }
  
  return result;
}

/**
 * Update translations for a language and namespace
 */
async function updateTranslations(lang, namespace, data) {
  try {
    const endpoint = `/update/${config.projectId}/${config.version}/${lang}/${namespace}`;
    const response = await makeRequest(endpoint, 'POST', data);
    log(`Successfully updated translations for ${lang}/${namespace}`);
    return response;
  } catch (error) {
    log(`Error updating translations for ${lang}/${namespace}:`, error.message);
    throw error;
  }
}

/**
 * Add missing translations for a language and namespace
 */
async function addMissingTranslations(lang, namespace, data) {
  try {
    const endpoint = `/missing/${config.projectId}/${config.version}/${lang}/${namespace}`;
    const response = await makeRequest(endpoint, 'POST', data);
    log(`Successfully added missing translations for ${lang}/${namespace}`);
    return response;
  } catch (error) {
    log(`Error adding missing translations for ${lang}/${namespace}:`, error.message);
    throw error;
  }
}

/**
 * Upload translations to Locize in batches
 */
async function uploadTranslations() {
  try {
    log('Starting translation upload to Locize...');
    
    // Get all translation files
    const translations = await getTranslationFiles();
    
    // Handle empty translations
    if (Object.keys(translations).length === 0) {
      log('No translation files found.');
      return;
    }
    
    // Upload reference language first
    if (translations[config.referenceLng]) {
      log(`Uploading reference language: ${config.referenceLng}`);
      for (const ns in translations[config.referenceLng]) {
        await updateTranslations(
          config.referenceLng,
          ns,
          translations[config.referenceLng][ns]
        );
      }
    }
    
    // Upload other languages
    for (const lang in translations) {
      if (lang === config.referenceLng) continue;
      
      log(`Uploading language: ${lang}`);
      for (const ns in translations[lang]) {
        await addMissingTranslations(
          lang,
          ns,
          translations[lang][ns]
        );
      }
    }
    
    log('Successfully uploaded all translations to Locize!');
  } catch (error) {
    log('Error uploading translations:', error.message);
    process.exit(1);
  }
}

// Execute the upload
uploadTranslations()
  .then(() => {
    log('Upload process completed successfully.');
  })
  .catch((error) => {
    log('Error during upload process:', error.message);
    process.exit(1);
  });
