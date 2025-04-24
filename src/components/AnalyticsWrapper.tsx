'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Suspense } from 'react';
import * as analytics from '@/lib/analytics';

function AnalyticsWrapperInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
    analytics.pageview(url);
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsWrapper() {
  return (
    <Suspense>
      <AnalyticsWrapperInner />
    </Suspense>
  );
}
