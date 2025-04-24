'use client';

// This component optimizes CSS loading by inlining critical CSS
// and asynchronously loading non-critical styles

import { useEffect } from 'react';

// Critical CSS rules that should be loaded immediately
const CRITICAL_CSS = `
/* Critical CSS for LCP and initial render */
:root {
  --bg-primary: #FAF7F0;
  --text-primary: #1A1A1A;
  --accent-color: #C6A47F;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

/* Optimize Largest Contentful Paint elements */
.hero-section {
  min-height: 80vh;
  position: relative;
}

/* Prevent layout shifts */
img.lcp {
  content-visibility: auto;
  object-fit: cover;
}

.blur-load {
  background-size: cover;
  background-position: center;
}

/* Hide non-critical images until needed */
img:not(.lcp):not([data-priority="true"]) {
  content-visibility: auto;
}
`;

export default function CriticalCssPreload() {
  useEffect(() => {
    // Create and inject critical CSS
    if (typeof document !== 'undefined') {
      // Check if style already exists to avoid duplicates
      if (!document.getElementById('critical-css')) {
        const style = document.createElement('style');
        style.id = 'critical-css';
        style.innerHTML = CRITICAL_CSS;
        document.head.appendChild(style);
      }

      // Asynchronously load non-critical CSS
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="style"]');
      preloadLinks.forEach(link => {
        if (link instanceof HTMLLinkElement) {
          // Replace preload with stylesheet
          const href = link.href;
          link.rel = 'stylesheet';
          link.as = '';
        }
      });

      // Add priority hints to important images
      const lcpImages = document.querySelectorAll('img.lcp, img[data-priority="true"]');
      lcpImages.forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.fetchPriority = 'high';
        }
      });
    }
  }, []);

  return null;
}

// CSS Loading Strategy:
// 1. Inline critical CSS in head to avoid render blocking
// 2. Preload important CSS files with non-blocking loading
// 3. Async load non-critical CSS after page load 