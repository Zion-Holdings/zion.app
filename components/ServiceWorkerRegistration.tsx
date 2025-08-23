import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, RefreshCw } from 'lucide-react';

// Declare the ServiceWorker types for TypeScript
declare global {
  interface ServiceWorkerRegistration {
    waiting: ServiceWorker | null;
    installing: ServiceWorker | null;
  }
  
  interface ServiceWorker {
    state: string;
    postMessage: (message: { type: string }) => void;
  }
  
  interface Navigator {
    serviceWorker: {
      register: (script: string) => Promise<ServiceWorkerRegistration>;
      addEventListener: (type: string, listener: (event: any) => void) => void;
      controller: ServiceWorker | null;
    };
  }
}

const ServiceWorkerRegistration: React.FC = () => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      registerServiceWorker();
    }
  }, []);

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
            }
          });
        }
      });

      // Handle service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });

      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'BACKGROUND_SYNC_COMPLETE') {
          // Background sync completed
        }
      });

    } catch {
      // Service Worker registration failed
    }
  };

  const updateServiceWorker = async () => {
    if (registration && registration.waiting) {
      setIsInstalling(true);
      
      // Send message to waiting service worker to skip waiting
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      
      // Wait a bit for the update to take effect
      setTimeout(() => {
        setIsInstalling(false);
        setIsUpdateAvailable(false);
      }, 2000);
    }
  };

  const dismissUpdate = () => {
    setIsUpdateAvailable(false);
  };

  if (!isUpdateAvailable) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-6 left-6 z-50 max-w-sm"
      >
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-2xl shadow-2xl border border-cyan-400/30 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Download className="w-5 h-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-1">
                Update Available
              </h3>
              <p className="text-xs text-cyan-100 mb-3">
                A new version of Zion Tech Group is available with improved performance and features.
              </p>
              
              <div className="flex gap-2">
                <button
                  onClick={updateServiceWorker}
                  disabled={isInstalling}
                  className="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isInstalling ? (
                    <>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Download className="w-3 h-3" />
                      Update Now
                    </>
                  )}
                </button>
                
                <button
                  onClick={dismissUpdate}
                  className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium transition-all duration-200"
                >
                  Later
                </button>
              </div>
            </div>
            
            <button
              onClick={dismissUpdate}
              className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceWorkerRegistration;