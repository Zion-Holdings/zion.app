import { useEffect, useState } from 'react';

interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void;
  onUpdateInstalled?: () => void;
}

export const useServiceWorker = (props?: ServiceWorkerRegistrationProps) => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [isUpdateInstalled, setIsUpdateInstalled] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    const registerServiceWorker = async () => {
      try {
        const swRegistration = await navigator.serviceWorker.register('/sw.js');
        setRegistration(swRegistration);

        // Check for updates
        swRegistration.addEventListener('updatefound', () => {
          const newWorker = swRegistration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setIsUpdateAvailable(true);
                props?.onUpdateAvailable?.();
              }
            });
          }
        });

        // Handle controller change (update installed)
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          setIsUpdateInstalled(true);
          setIsUpdateAvailable(false);
          props?.onUpdateInstalled?.();
        });

        // Handle service worker messages
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'SKIP_WAITING') {
            swRegistration.waiting?.postMessage({ type: 'SKIP_WAITING' });
          }
        });

        console.log('Service Worker registered successfully');
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    };

    registerServiceWorker();

    // Cleanup
    return () => {
      if (registration) {
        registration.unregister();
      }
    };
  }, [props]);

  const updateServiceWorker = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  };

  const unregisterServiceWorker = async () => {
    if (registration) {
      await registration.unregister();
      window.location.reload();
    }
  };

  return {
    isUpdateAvailable,
    isUpdateInstalled,
    registration,
    updateServiceWorker,
    unregisterServiceWorker,
  };
};

export const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = (props) => {
  const { isUpdateAvailable, updateServiceWorker } = useServiceWorker(props);

  if (!isUpdateAvailable) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-white text-sm">Update available</span>
        <button
          onClick={updateServiceWorker}
          className="px-3 py-1 bg-cyan-500 text-white text-xs rounded hover:bg-cyan-600 transition-colors"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ServiceWorkerRegistration;