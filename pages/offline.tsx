import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Check initial status
    checkOnlineStatus();

    // Listen for online/offline events
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);

    return () => {
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkOnlineStatus);
    };
  }, []);

  useEffect(() => {
    if (isOnline) {
      // Redirect to home page when back online
      window.location.href = '/';
    }
  }, [isOnline]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    window.location.reload();
  };

  const handleGoHome = () => {
    // Try to navigate to home page
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <Head>
        <title>Offline - Zion Tech Group</title>
        <meta name="description" content="You are currently offline. Please check your internet connection." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        {/* Offline Icon */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-8xl mb-6"
        >
          📡
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-white mb-4"
        >
          You&apos;re Offline
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 mb-8 leading-relaxed"
        >
          It looks like you&apos;ve lost your internet connection. Don&apos;t worry - we&apos;ve cached some content for offline viewing.
        </motion.p>

        {/* Status Indicator */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}></div>
            <span className="text-sm text-gray-300">
              {isOnline ? 'Connection restored!' : 'No internet connection'}
            </span>
          </div>
          
          {retryCount > 0 && (
            <p className="text-sm text-gray-400">
              Retry attempts: {retryCount}
            </p>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <button
            onClick={handleRetry}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>🔄</span>
            <span>Retry Connection</span>
          </button>

          <button
            onClick={handleGoHome}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>🏠</span>
            <span>Go to Homepage</span>
          </button>
        </motion.div>

        {/* Offline Features */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 p-4 bg-gray-800 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-white mb-3">Available Offline</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>Homepage content</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>About page</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>Contact information</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>Service descriptions</span>
            </div>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-sm text-gray-400"
        >
          <p className="mb-2">Having trouble connecting?</p>
          <div className="space-y-1">
            <p>• Check your Wi-Fi or mobile data</p>
            <p>• Try refreshing the page</p>
            <p>• Contact support if the issue persists</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 pt-6 border-t border-gray-700"
        >
          <p className="text-xs text-gray-500">
            Zion Tech Group - Revolutionary Technology Solutions
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}