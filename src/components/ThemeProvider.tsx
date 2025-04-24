"use client";

import { useEffect, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    // Move all browser initialization to client-side effect
    try {
      const storedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = storedTheme || (systemDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', theme === 'dark');
    } catch (e) {
      console.error('Theme initialization error:', e);
    }
  }, []);

  return <>{children}</>;
}
