'use client';

import { useState } from 'react';
import { useTranslatedContent } from '@/lib/useTranslatedContent';
import { useTranslation } from '@/lib/TranslationContext';
import { updateTranslation, addMissingTranslation, LANGUAGE_NAMES } from '@/lib/locizeService';

/**
 * Component for testing the Locize integration
 */
export default function LocizeTest() {
  const { locale, translations } = useTranslation();
  const [testKey, setTestKey] = useState('test.message');
  const [testValue, setTestValue] = useState('Hello from Locize Test');
  const [apiResult, setApiResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  // Get translations using the useTranslatedContent hook
  const title = useTranslatedContent('home.hero.title', 'Preserve Memories Forever');
  const subtitle = useTranslatedContent('home.hero.subtitle', 'Create lasting digital memorials for your loved ones');
  const testMessage = useTranslatedContent(testKey, 'Translation not found');
  
  // Function to add a test translation
  const handleAddTranslation = async () => {
    setLoading(true);
    setApiResult(null);
    
    try {
      const success = await addMissingTranslation(locale, testKey, testValue);
      
      if (success) {
        setApiResult('✅ Translation added successfully! Refresh the page to see it.');
      } else {
        setApiResult('❌ Failed to add translation. Check console for details.');
      }
    } catch (error) {
      console.error('Error adding translation:', error);
      setApiResult('❌ Error adding translation. Check console for details.');
    } finally {
      setLoading(false);
    }
  };
  
  // Function to update a test translation
  const handleUpdateTranslation = async () => {
    setLoading(true);
    setApiResult(null);
    
    try {
      const success = await updateTranslation(locale, testKey, testValue);
      
      if (success) {
        setApiResult('✅ Translation updated successfully! Refresh the page to see it.');
      } else {
        setApiResult('❌ Failed to update translation. Check console for details.');
      }
    } catch (error) {
      console.error('Error updating translation:', error);
      setApiResult('❌ Error updating translation. Check console for details.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Locize Integration Test</h2>
        <p className="mb-4">Current locale: <span className="font-bold">{locale}</span> ({LANGUAGE_NAMES[locale] || 'Unknown'})</p>
        
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mb-6 shadow-sm">
          <h3 className="font-medium mb-1">Loaded Translations:</h3>
          <p className="mb-1"><span className="font-mono text-sm">home.hero.title:</span> {title}</p>
          <p><span className="font-mono text-sm">home.hero.subtitle:</span> {subtitle}</p>
          
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h3 className="font-medium mb-2">Test Translation:</h3>
            <p><span className="font-mono text-sm">{testKey}:</span> {testMessage}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium mb-3">API Test</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Translation Key:</label>
              <input 
                type="text" 
                value={testKey} 
                onChange={e => setTestKey(e.target.value)} 
                className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded"
                placeholder="e.g., test.message"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Translation Value:</label>
              <input 
                type="text" 
                value={testValue} 
                onChange={e => setTestValue(e.target.value)} 
                className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded"
                placeholder="e.g., Hello World"
              />
            </div>
          </div>
          
          <div className="flex gap-3 mb-4">
            <button 
              onClick={handleAddTranslation} 
              disabled={loading} 
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? 'Adding...' : 'Add New Translation'}
            </button>
            <button 
              onClick={handleUpdateTranslation} 
              disabled={loading} 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Update Translation'}
            </button>
          </div>
          
          {apiResult && (
            <div className={`p-3 rounded ${apiResult.startsWith('✅') ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'}`}>
              {apiResult}
            </div>
          )}
        </div>
      </div>
      
      <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mt-10">
        <h3 className="text-lg font-semibold mb-3">Raw Translations Object:</h3>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-auto max-h-80">
          <pre className="text-xs">
            {JSON.stringify(translations, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
