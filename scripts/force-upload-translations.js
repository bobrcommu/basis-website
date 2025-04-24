#!/usr/bin/env node

/**
 * Script to forcibly upload non-English translations to Locize
 * Usage: node scripts/force-upload-translations.js
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
  languages: ['fr', 'de', 'nl', 'es'], // Only non-English languages
  namespace: 'translation',
  debug: true
};

// Create a custom agent with increased timeout
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
      log(`Sending data: [${jsonData.length} bytes]`);
    }
    
    req.end();
  });
}

/**
 * Get translations file for a specific language
 */
async function getTranslations(lang) {
  const filePath = path.join(config.localesPath, lang, 'translation.json');
  try {
    const fileContent = await readFile(filePath, 'utf8');
    const parsedContent = JSON.parse(fileContent);
    return flattenObject(parsedContent);
  } catch (error) {
    log(`Error reading translations for ${lang}:`, error.message);
    return null;
  }
}

/**
 * Force update of a single key
 */
async function forceUpdateKey(lang, key, value) {
  try {
    const endpoint = `/update/${config.projectId}/${config.version}/${lang}/translation`;
    const data = { [key]: value };
    await makeRequest(endpoint, 'POST', data);
    log(`Updated key "${key}" for ${lang}`);
    return true;
  } catch (error) {
    log(`Error updating key "${key}" for ${lang}:`, error.message);
    return false;
  }
}

/**
 * Forcibly upload translations for a language by updating each key individually
 */
async function forceUploadLanguage(lang) {
  try {
    const translations = await getTranslations(lang);
    if (!translations) {
      log(`No translations found for ${lang}, skipping.`);
      return;
    }
    
    log(`Uploading ${Object.keys(translations).length} keys for ${lang}`);
    let successCount = 0;
    let failCount = 0;
    
    // Update each key individually
    for (const key in translations) {
      const value = translations[key];
      const success = await forceUpdateKey(lang, key, value);
      
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    log(`Completed upload for ${lang}: ${successCount} keys updated, ${failCount} failed`);
  } catch (error) {
    log(`Error processing ${lang}:`, error.message);
  }
}

/**
 * Upload all non-English translations
 */
async function uploadTranslations() {
  try {
    log('Starting forced translation upload to Locize...');
    
    // Process each non-English language
    for (const lang of config.languages) {
      log(`Processing language: ${lang}`);
      await forceUploadLanguage(lang);
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
    log('Process completed successfully.');
  })
  .catch((error) => {
    log('Error during process:', error.message);
    process.exit(1);
  });
