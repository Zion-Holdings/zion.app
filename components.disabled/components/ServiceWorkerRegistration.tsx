import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void;
  onUpdateInstalled?: () => void;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdateAvailable,
  onUpdateInstalled
}) => {
  const [isInstalling, setIsInstalling] = useState(false);
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [isUpdateInstalled, setIsUpdateInstalled] = useState(false);
  const [registration, setRegistration] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
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
              onUpdateAvailable?.();
            }
          });
        }
      });

      // Handle controller change (update installed)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setIsUpdateInstalled(true);
        onUpdateInstalled?.();
        
        // Reload after a short delay to ensure the new service worker is active
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });

      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SW_VERSION') {
          console.log('Service Worker version:', event.data.version);
        }
      });

    } catch (error) {
      console.error('Service worker registration failed:', error);
      setError('Failed to register service worker');
    }
  };

  const handleUpdate = async () => {
    if (!registration) return;

    setIsInstalling(true);
    setError(null);

    try {
      // Send message to service worker to skip waiting
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }

      // Check for updates
      await registration.update();
      
      // Force reload to activate new service worker
      window.location.reload();
    } catch (error) {
      console.error('Update failed:', error);
      setError('Failed to update application');
    } finally {
      setIsInstalling(false);
    }
  };

  const handleDismiss = () => {
    setIsUpdateAvailable(false);
    setIsUpdateInstalled(false);
  };

  // Don't render anything if service worker is not supported
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return null;
  }

  return (
    <AnimatePresence>
      {/* Update Available Notification */}
      {isUpdateAvailable && (
        <motion.div
          className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-2xl z-50 max-w-sm"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <Download className="w-5 h-5 text-cyan-400" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white mb-1">
                Update Available
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                A new version of Zion Tech Group is available with improved features and performance.
              </p>
              
              <div className="flex gap-2">
                <button
                  onClick={handleUpdate}
                  disabled={isInstalling}
                  className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white text-xs font-medium rounded transition-colors duration-200 flex items-center gap-1"
                >
                  {isInstalling ? (
                    <>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    'Update Now'
                  )}
                </button>
                
                <button
                  onClick={handleDismiss}
                  className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs font-medium rounded transition-colors duration-200"
                >
                  Later
                </button>
              </div>
            </div>
            
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Update Installed Notification */}
      {isUpdateInstalled && (
        <motion.div
          className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-2xl z-50 max-w-sm"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white mb-1">
                Update Installed
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                The new version has been installed successfully. The page will reload automatically.
              </p>
              
              <button
                onClick={() => window.location.reload()}
                className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded transition-colors duration-200"
              >
                Reload Now
              </button>
            </div>
            
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Error Notification */}
      {error && (
        <motion.div
          className="fixed bottom-4 right-4 bg-red-900 border border-red-700 rounded-lg p-4 shadow-2xl z-50 max-w-sm"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <XCircle className="w-5 h-5 text-red-400" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white mb-1">
                Service Worker Error
              </h4>
              <p className="text-xs text-red-300 mb-3">
                {error}
              </p>
              
              <button
                onClick={() => setError(null)}
                className="px-3 py-1.5 bg-red-700 hover:bg-red-600 text-white text-xs font-medium rounded transition-colors duration-200"
              >
                Dismiss
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceWorkerRegistration;