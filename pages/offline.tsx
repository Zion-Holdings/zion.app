import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const OfflinePage: React.FC = () => {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Offline Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative mx-auto w-32 h-32">
            {/* Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Icon Container */}
            <div className="relative z-10 w-full h-full bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.5)]">
              <WifiOff className="w-16 h-16 text-white" />
            </div>
            
            {/* Connection Lines */}
            <motion.div
              className="absolute -top-2 -left-2 w-8 h-8 border-2 border-red-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 border-2 border-orange-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>
        </motion.div>

        {/* Offline Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              You're Offline
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            It looks like you've lost your connection to the internet. 
            Don't worry, you can still access some features while offline.
          </p>
        </motion.div>

        {/* Status Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-medium">Connection Status</span>
            </div>
            
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center justify-between">
                <span>Internet Connection</span>
                <span className="text-red-400">Disconnected</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Offline Mode</span>
                <span className="text-green-400">Available</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cached Content</span>
                <span className="text-blue-400">Accessible</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center gap-3">
              {isRetrying ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Retrying...
                </>
              ) : (
                <>
                  <RefreshCw className="w-5 h-5" />
                  Try Again
                </>
              )}
            </span>
          </button>

          <button
            onClick={handleGoBack}
            className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-2xl hover:border-gray-500 hover:text-gray-200 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
          >
            <span className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </span>
          </button>

          <Link
            href="/"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
          >
            <span className="flex items-center gap-3">
              <Home className="w-5 h-5" />
              Home
            </span>
          </Link>
        </motion.div>

        {/* Helpful Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <h3 className="text-lg font-semibold text-gray-300 mb-4">
            While You're Offline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4">
              <h4 className="font-medium text-gray-300 mb-2">Browse Cached Pages</h4>
              <p>Access previously visited pages that are stored locally</p>
            </div>
            
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4">
              <h4 className="font-medium text-gray-300 mb-2">Check Connection</h4>
              <p>Verify your internet connection and try refreshing</p>
            </div>
            
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4">
              <h4 className="font-medium text-gray-300 mb-2">Use Mobile Data</h4>
              <p>Switch to mobile data if WiFi is unavailable</p>
            </div>
            
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4">
              <h4 className="font-medium text-gray-300 mb-2">Contact Support</h4>
              <p>Reach out to our team if issues persist</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OfflinePage;