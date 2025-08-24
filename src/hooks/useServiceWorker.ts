import { useState, useEffect, useCallback } from 'react';

interface ServiceWorkerState {
  isSupported: boolean;
  isInstalled: boolean;
  isUpdated: boolean;
  isOnline: boolean;
  registration: ServiceWorkerRegistration | null;
  error: string | null;
}

interface ServiceWorkerOptions {
  onUpdate?: () => void;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useServiceWorker = (options: ServiceWorkerOptions = {}) => {
  const [state, setState] = useState<ServiceWorkerState>({
    isSupported: 'serviceWorker' in navigator,
    isInstalled: false,
    isUpdated: false,
    isOnline: navigator.onLine,
    registration: null,
    error: null
  });

  // Check for service worker updates
  const checkForUpdates = useCallback(async () => {
    if (!state.isSupported || !state.registration) return;

    try {
      await state.registration.update();
    } catch (error) {
      console.error('Failed to check for updates:', error);
      setState(prev => ({ ...prev, error: 'Update check failed' }));
    }
  }, [state.isSupported, state.registration]);

  // Skip waiting and activate new service worker
  const skipWaiting = useCallback(async () => {
    if (!state.registration || !state.registration.waiting) return;

    try {
      state.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      
      // Listen for the new service worker to take control
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Failed to skip waiting:', error);
      setState(prev => ({ ...prev, error: 'Failed to activate update' }));
    }
  }, [state.registration]);

  // Register service worker
  const register = useCallback(async () => {
    if (!state.isSupported) {
      setState(prev => ({ ...prev, error: 'Service Worker not supported' }));
      return;
    }

    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      setState(prev => ({
        ...prev,
        registration,
        isInstalled: true,
        error: null
      }));

      options.onSuccess?.();

      // Listen for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setState(prev => ({ ...prev, isUpdated: true }));
              options.onUpdate?.();
            }
          });
        }
      });

      // Listen for service worker state changes
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setState(prev => ({ ...prev, isInstalled: true }));
      });

    } catch (error) {
      console.error('Service Worker registration failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      setState(prev => ({ ...prev, error: errorMessage }));
      options.onError?.(errorMessage);
    }
  }, [state.isSupported, options]);

  // Unregister service worker
  const unregister = useCallback(async () => {
    if (!state.registration) return;

    try {
      await state.registration.unregister();
      setState(prev => ({
        ...prev,
        registration: null,
        isInstalled: false,
        isUpdated: false
      }));
    } catch (error) {
      console.error('Failed to unregister service worker:', error);
      setState(prev => ({ ...prev, error: 'Unregistration failed' }));
    }
  }, [state.registration]);

  // Get service worker version
  const getVersion = useCallback(async (): Promise<string | null> => {
    const registration = state.registration;
    if (!registration) return null;
    if (!registration.active) return null;

    return new Promise((resolve) => {
      const messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = (event) => {
        resolve(event.data.version || null);
      };

      const activeWorker = registration.active;
      if (activeWorker) {
        activeWorker.postMessage(
          { type: 'GET_VERSION' },
          [messageChannel.port2]
        );
      }
    });
  }, [state.registration]);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setState(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setState(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Auto-register service worker on mount
  useEffect(() => {
    if (state.isSupported && !state.isInstalled) {
      register();
    }
  }, [state.isSupported, state.isInstalled, register]);

  // Request notification permission
  const requestNotificationPermission = useCallback(async (): Promise<boolean> => {
    if (!('Notification' in window)) {
      console.warn('Notifications not supported');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission === 'denied') {
      console.warn('Notification permission denied');
      return false;
    }

    try {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    } catch (error) {
      console.error('Failed to request notification permission:', error);
      return false;
    }
  }, []);

  // Send push notification
  const sendNotification = useCallback(async (title: string, options?: NotificationOptions) => {
    if (!state.registration) {
      console.warn('Service Worker not registered');
      return false;
    }

    try {
      await state.registration.showNotification(title, options);
      return true;
    } catch (error) {
      console.error('Failed to send notification:', error);
      return false;
    }
  }, [state.registration]);

  // Get cache information
  const getCacheInfo = useCallback(async () => {
    if (!state.isSupported) return null;

    try {
      const cacheNames = await caches.keys();
      const cacheInfo = await Promise.all(
        cacheNames.map(async (name) => {
          const cache = await caches.open(name);
          const keys = await cache.keys();
          return {
            name,
            size: keys.length,
            urls: keys.map(req => req.url)
          };
        })
      );

      return cacheInfo;
    } catch (error) {
      console.error('Failed to get cache info:', error);
      return null;
    }
  }, [state.isSupported]);

  // Clear all caches
  const clearAllCaches = useCallback(async () => {
    if (!state.isSupported) return false;

    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(name => caches.delete(name))
      );
      return true;
    } catch (error) {
      console.error('Failed to clear caches:', error);
      return false;
    }
  }, [state.isSupported]);

  return {
    ...state,
    register,
    unregister,
    checkForUpdates,
    skipWaiting,
    getVersion,
    requestNotificationPermission,
    sendNotification,
    getCacheInfo,
    clearAllCaches
  };
};