import LocizeTest from '@/components/LocizeTest';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locize Integration Test | EverE',
  description: 'Test page for the Locize translation integration',
};

export default function LocizeTestPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-10">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Locize Integration Test
            </h1>
            
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              This page demonstrates the integration with Locize for managing translations.
              You can see the current translations and test adding or updating translations through the Locize API.
            </p>
          </div>
        </div>
        
        <LocizeTest />
      </div>
    </main>
  );
}
