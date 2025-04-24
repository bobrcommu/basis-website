'use client';

import { useEffect, useCallback } from 'react';
import CriticalCssPreload from './CriticalCssPreload';

// This component handles performance optimizations like:
// - Preloading critical resources
// - Managing resource priorities
// - Implementing lazy loading boundaries
// - Optimizing third-party scripts

export default function PerformanceOptimizer() {
  // Detect low-end devices or slow connections
  const isLowEndDevice = useCallback(() => {
    if (typeof navigator === 'undefined') return false;
    
    // Check for hardware concurrency (CPU cores)
    const lowCPU = navigator.hardwareConcurrency <= 4;
    
    // Check for device memory (if available)
    const lowMemory = 'deviceMemory' in navigator && 
      // @ts-ignore - deviceMemory exists but TypeScript doesn't know about it
      navigator.deviceMemory <= 4;
    
    // Check for slow connection
    const connection = 'connection' in navigator && 
      // @ts-ignore - connection exists but TypeScript doesn't know about it
      navigator.connection;
      
    const slowConnection = connection && 
      // @ts-ignore
      (connection.saveData || connection.effectiveType === 'slow-2g' || 
       // @ts-ignore
       connection.effectiveType === '2g' || connection.effectiveType === '3g');
    
    return lowCPU || lowMemory || slowConnection;
  }, []);

  useEffect(() => {
    // Skip optimizations for bots/crawlers
    const isBot = /bot|crawler|spider|googlebot|chrome-lighthouse|baidu|bing|semrush|lighthouse/i.test(
      navigator.userAgent
    );
    if (isBot) return;

    // Preload critical images
    const criticalImages = [
      '/optimized/logonew.webp',
      '/optimized/everefront.webp',
      '/optimized/herobg.webp'
    ];

    if (!isLowEndDevice()) {
      criticalImages.forEach(src => {
        const img = new Image();
        img.fetchPriority = 'high';
        img.src = src;
      });
    }

    // Defer non-critical resources
    const deferNonCritical = () => {
      // Find all non-critical scripts
      const nonCriticalScripts = document.querySelectorAll(
        'script[data-priority="low"], script[defer]'
      );

      // Add load delay to non-critical scripts
      nonCriticalScripts.forEach(script => {
        if (script.getAttribute('src')) {
          script.setAttribute('defer', '');
        }
      });

      // Lazy load images that are far below the fold
      const lazyImages = document.querySelectorAll(
        'img:not([loading]), img[loading="eager"]:not([data-priority="true"])'
      );
      lazyImages.forEach(img => {
        if (img instanceof HTMLImageElement && !img.closest('.hero-section')) {
          img.loading = 'lazy';
        }
      });

      // Defer loading of iframes
      const iframes = document.querySelectorAll('iframe:not([loading])');
      iframes.forEach(iframe => {
        if (iframe instanceof HTMLIFrameElement) {
          iframe.loading = 'lazy';
        }
      });
    };

    // Execute optimization after first contentful paint
    if ('requestIdleCallback' in window) {
      // @ts-ignore - requestIdleCallback exists but TypeScript doesn't know about it
      window.requestIdleCallback(deferNonCritical);
    } else {
      setTimeout(deferNonCritical, 2000);
    }

    // Clean up function
    return () => {
      // Any cleanup needed
    };
  }, [isLowEndDevice]);

  return <CriticalCssPreload />;
}
