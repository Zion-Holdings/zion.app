import React from 'react';
import { motion } from 'framer-motion';

const LoadingSkeleton: React.FC = () => {
  const shimmer = "animate-pulse bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-[length:200%_100%]";

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* Logo skeleton */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={`w-32 h-32 mx-auto rounded-full ${shimmer} mb-4`}></div>
        </motion.div>

        {/* Title skeleton */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className={`h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg ${shimmer} mb-4`}></div>
          <div className={`h-8 bg-gray-600 rounded-lg ${shimmer} w-3/4 mx-auto`}></div>
        </motion.div>

        {/* Description skeleton */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className={`h-4 bg-gray-600 rounded ${shimmer} mb-2`}></div>
          <div className={`h-4 bg-gray-600 rounded ${shimmer} mb-2 w-5/6 mx-auto`}></div>
          <div className={`h-4 bg-gray-600 rounded ${shimmer} w-4/6 mx-auto`}></div>
        </motion.div>

        {/* Buttons skeleton */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className={`w-48 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full ${shimmer}`}></div>
          <div className={`w-48 h-12 bg-gray-600 rounded-full ${shimmer}`}></div>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <span className="text-cyan-400 text-sm font-medium ml-2">
              Loading Zion Tech Group...
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 border border-cyan-400/30 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-purple-400/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default LoadingSkeleton;