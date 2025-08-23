import React, { useEffect, useState } from 'react';

interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void;
  onUpdateInstalled?: () => void;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdateAvailable,
  onUpdateInstalled
}) => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [isUpdateInstalled, setIsUpdateInstalled] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      registerServiceWorker();
    }
  }, []);

  const registerServiceWorker = async () => {
    try {
      const swRegistration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      setRegistration(swRegistration);

      // Handle updates
      swRegistration.addEventListener('updatefound', () => {
        const newWorker = swRegistration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setIsUpdateAvailable(true);
              onUpdateAvailable?.();
            }
          });
        }
      });

      // Handle successful installation
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setIsUpdateInstalled(true);
        onUpdateInstalled?.();
      });

      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('Cache updated:', event.data.payload);
        }
      });

      console.log('Service Worker registered successfully:', swRegistration);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  };

  const updateServiceWorker = async () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      setIsUpdateAvailable(false);
    }
  };

  const checkForUpdates = async () => {
    if (registration) {
      await registration.update();
    }
  };

  // Request notification permission
  const requestNotificationPermission = async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted');
      }
    }
  };

  // Send push notification (for testing)
  const sendTestNotification = async () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        await registration.showNotification('Zion Tech Group', {
          body: 'Welcome to the future of technology!',
          icon: '/images/zion-tech-group-logo.png',
          badge: '/images/badge.png',
          tag: 'welcome-notification'
        });
      } catch (error) {
        console.error('Failed to send notification:', error);
      }
    }
  };

  // Background sync registration
  const registerBackgroundSync = async () => {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        await registration.sync.register('background-sync');
        console.log('Background sync registered');
      } catch (error) {
        console.error('Background sync registration failed:', error);
      }
    }
  };

  return (
    <>
      {/* Update notification */}
      {isUpdateAvailable && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Update Available</h4>
              <p className="text-sm opacity-90">A new version is ready to install</p>
            </div>
            <button
              onClick={updateServiceWorker}
              className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      )}

      {/* Update installed notification */}
      {isUpdateInstalled && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Update Installed</h4>
              <p className="text-sm opacity-90">New version is now active</p>
            </div>
            <button
              onClick={() => setIsUpdateInstalled(false)}
              className="bg-white text-green-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* PWA Install Prompt (hidden by default) */}
      <div id="pwa-install-prompt" className="hidden">
        <div className="fixed bottom-4 left-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Install Zion Tech Group</h4>
              <p className="text-sm opacity-90">Add to home screen for quick access</p>
            </div>
            <div className="flex gap-2">
              <button
                id="pwa-install-accept"
                className="bg-white text-purple-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
              >
                Install
              </button>
              <button
                id="pwa-install-dismiss"
                className="bg-transparent border border-white text-white px-4 py-2 rounded font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Worker Status (for development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg z-50 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${registration ? 'bg-green-400' : 'bg-red-400'}`}></div>
            <span>SW: {registration ? 'Active' : 'Inactive'}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={checkForUpdates}
              className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs transition-colors"
            >
              Check Updates
            </button>
            <button
              onClick={requestNotificationPermission}
              className="bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-xs transition-colors"
            >
              Notifications
            </button>
            <button
              onClick={sendTestNotification}
              className="bg-purple-600 hover:bg-purple-700 px-2 py-1 rounded text-xs transition-colors"
            >
              Test Notif
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceWorkerRegistration;