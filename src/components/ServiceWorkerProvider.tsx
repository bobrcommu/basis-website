'use client';

import { useEffect } from 'react';

export default function ServiceWorkerProvider() {
  useEffect(() => {
    // Register service worker only in production and if browser supports it
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      // Wait for page to load to avoid competing for bandwidth
      window.addEventListener('load', () => {
        // Register the service worker
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }

    // Add event listeners for service worker updates
    if ('serviceWorker' in navigator) {
      // Listen for new service worker installing
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('New service worker activated, page will reload for latest updates');
        // Reload page to ensure newest version is used
        window.location.reload();
      });
    }

    // Add offline detection
    const handleOffline = () => {
      document.body.classList.add('offline-mode');
      // Show a notification if needed
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('You are offline', {
          body: 'Some features may be limited until you reconnect.',
          icon: '/evereicon.webp'
        });
      }
    };

    const handleOnline = () => {
      document.body.classList.remove('offline-mode');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial state
    if (!navigator.onLine) {
      handleOffline();
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return null;
} 