import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface PageLoaderProps {
  isLoading?: boolean;
  loadingText?: string;
  minDisplayTime?: number;
  onLoadingComplete?: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({
  isLoading = true,
  loadingText = 'Loading Zion Tech Group...',
  minDisplayTime = 1000,
  onLoadingComplete
}) => {
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      // Ensure minimum display time
      const timer = setTimeout(() => {
        setShowLoader(false);
        onLoadingComplete?.();
      }, minDisplayTime);

      return () => clearTimeout(timer);
    }
  }, [isLoading, minDisplayTime, onLoadingComplete]);

  useEffect(() => {
    if (isLoading) {
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      // Complete progress
      setProgress(100);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
            </motion.div>

            {/* Loading Spinner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <LoadingSpinner 
                size="lg" 
                color="primary" 
                variant="spinner"
                showText={false}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-300 mb-8"
            >
              {loadingText}
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="w-64 md:w-96 mx-auto mb-4"
            >
              <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </motion.div>

            {/* Progress Percentage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-sm text-gray-400"
            >
              {Math.round(progress)}%
            </motion.p>

            {/* Loading Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mt-12 text-center"
            >
              <div className="inline-block p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <p className="text-sm text-gray-400">
                  <span className="text-cyan-400 font-medium">Tip:</span> We're preparing the future of technology for you
                </p>
              </div>
            </motion.div>
          </div>

          {/* Background Animation */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;