import { Metadata } from 'next';
import { Suspense } from 'react';
import AIImageRestoreContent from './AIImageRestoreContent';

type Params = {
  locale: string;
};

export const metadata: Metadata = {
  title: 'AI Image Restoration | Evere - Digital Memorial Service',
  description: 'Restore and enhance old, damaged photos of your loved ones with our AI-powered image restoration technology.',
};

export default async function AIImageRestorePage({
  params,
}: {
  params: Params;
}) {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading...</div>}>
      <AIImageRestoreContent locale={params.locale} />
    </Suspense>
  );
}
