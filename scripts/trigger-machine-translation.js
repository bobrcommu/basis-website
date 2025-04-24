#!/usr/bin/env node

/**
 * Script to trigger machine translation for all existing content in Locize
 * Usage: node scripts/trigger-machine-translation.js
 */

const https = require('https');

// Configuration
const config = {
  projectId: '578277be-b3b6-44f6-ab4f-efefdf5adaeb',
  apiKey: '6437ec51-6944-49a4-8b70-05f7cdf07093',
  version: 'latest',
  referenceLng: 'en',
  languages: ['fr', 'de', 'nl', 'es'], // Target languages (excluding reference language)
  namespaces: ['translation'], // Add more namespaces if needed
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
 * Get all keys for a specific language and namespace
 */
async function getTranslations(language, namespace) {
  try {
    const endpoint = `/${config.projectId}/${config.version}/${language}/${namespace}`;
    const response = await makeRequest(endpoint);
    log(`Successfully fetched translations for ${language}/${namespace}`);
    return response;
  } catch (error) {
    log(`Error fetching translations for ${language}/${namespace}:`, error.message);
    return {};
  }
}

/**
 * Trigger machine translation for a language and namespace
 */
async function triggerMachineTranslation(language, namespace) {
  try {
    // Endpoint for machine translation trigger
    const endpoint = `/translate/${config.projectId}/${config.version}/${language}/${namespace}`;
    
    // Set source language as English (reference language)
    const data = {
      language: config.referenceLng
    };
    
    const response = await makeRequest(endpoint, 'POST', data);
    log(`Successfully triggered machine translation for ${language}/${namespace}`);
    return response;
  } catch (error) {
    log(`Error triggering machine translation for ${language}/${namespace}:`, error.message);
    throw error;
  }
}

/**
 * Process all languages and namespaces
 */
async function runMachineTranslation() {
  try {
    log('Starting machine translation process...');
    
    // Process each target language
    for (const language of config.languages) {
      log(`Processing language: ${language}`);
      
      // Process each namespace
      for (const namespace of config.namespaces) {
        // First check if there are translations for this language/namespace
        const translations = await getTranslations(language, namespace);
        
        if (Object.keys(translations).length > 0) {
          log(`Found existing translations for ${language}/${namespace}`);
          
          // Trigger machine translation
          await triggerMachineTranslation(language, namespace);
        } else {
          log(`No translations found for ${language}/${namespace}`);
        }
      }
    }
    
    log('Machine translation process completed!');
  } catch (error) {
    log('Error during machine translation process:', error.message);
    process.exit(1);
  }
}

// Execute the machine translation
runMachineTranslation()
  .then(() => {
    log('Process completed successfully.');
  })
  .catch((error) => {
    log('Error during process:', error.message);
    process.exit(1);
  });
