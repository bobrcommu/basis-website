'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface SearchParamsContextProps {
  searchParams: URLSearchParams;
}

export const SearchParamsContext = React.createContext<SearchParamsContextProps>({
  searchParams: new URLSearchParams(),
});

function SearchParamsContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  
  return (
    <SearchParamsContext.Provider value={{ searchParams }}>
      {children}
    </SearchParamsContext.Provider>
  );
}

export function SearchParamsProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsContent>{children}</SearchParamsContent>
    </Suspense>
  );
}

export function useSearchParamsContext() {
  const context = React.useContext(SearchParamsContext);
  if (!context) {
    throw new Error('useSearchParamsContext must be used within a SearchParamsProvider');
  }
  return context;
}
