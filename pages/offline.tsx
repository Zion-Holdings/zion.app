import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Home, Signal } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const OfflinePage: React.FC = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleCheckConnection = () => {
    // Check if we're back online
    if (navigator.onLine) {
      window.location.reload();
    } else {
      // Use a more modern approach instead of alert
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ef4444;
        color: white;
        padding: 16px;
        border-radius: 8px;
        z-index: 10000;
        font-family: system-ui, sans-serif;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      `;
      notification.textContent = 'You are still offline. Please check your internet connection.';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 5000);
    }
  };

  return (
    <>
      <SEOHead 
        title="Offline - Zion Tech Group"
        description="You are currently offline. Check your internet connection and try again."
        type="website"
      />
      
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Offline Icon */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8 bg-gray-800/50 rounded-full flex items-center justify-center border-4 border-gray-700"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <WifiOff className="w-16 h-16 text-gray-400" />
          </motion.div>

          {/* Main Message */}
          <h1 className="text-5xl font-bold text-gray-300 mb-6">
            You're Offline
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            It looks like you've lost your internet connection. Don't worry - some of our content is available offline.
          </p>

          {/* Connection Status */}
          <motion.div
            className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${navigator.onLine ? 'bg-green-400' : 'bg-red-400'}`}></div>
              <span className="text-gray-300 font-medium">
                {navigator.onLine ? 'Connection Restored' : 'No Internet Connection'}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm">
              {navigator.onLine 
                ? 'Great! You\'re back online. Click retry to reload the page.'
                : 'Please check your internet connection and try again.'
              }
            </p>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
              onClick={handleRetry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!navigator.onLine}
            >
              <RefreshCw className="w-5 h-5" />
              Retry Connection
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
              onClick={handleCheckConnection}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Signal className="w-5 h-5" />
              Check Connection
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
              onClick={handleGoHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              Go Home
            </motion.button>
          </div>

          {/* Offline Features */}
          <motion.div
            className="bg-gray-900/30 border border-gray-700 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              Available Offline
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-300 font-medium">Basic Navigation</p>
                  <p className="text-gray-500 text-sm">Core website structure</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-300 font-medium">Cached Content</p>
                  <p className="text-gray-500 text-sm">Previously viewed pages</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-300 font-medium">Contact Forms</p>
                  <p className="text-gray-500 text-sm">Will sync when online</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-300 font-medium">Dynamic Content</p>
                  <p className="text-gray-500 text-sm">Requires internet</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Help Text */}
          <div className="mt-8 text-gray-500">
            <p className="text-sm">
              If you continue to have issues, please contact our support team at{' '}
              <a 
                href="mailto:support@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                support@ziontechgroup.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default OfflinePage;