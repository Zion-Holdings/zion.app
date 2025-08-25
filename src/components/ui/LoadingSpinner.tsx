import React from 'react';
import { motion } from 'framer-motion';

interface PageLoaderProps {
  text?: string;
  className?: string;
}

export function PageLoader({ text = "Loading...", className = "" }: PageLoaderProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center ${className}`}>
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-zion-cyan text-lg font-medium"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
}

export function LoadingSpinner({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`w-6 h-6 border-2 border-zion-cyan border-t-transparent rounded-full ${className}`}
    />
  );
}

export function LoadingDots({ className = "" }: { className?: string }) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
          className="w-2 h-2 bg-zion-cyan rounded-full"
        />
      ))}
    </div>
  );
}

export function LoadingBar({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full bg-zion-blue-dark rounded-full h-2 ${className}`}>
      <motion.div
        className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function LoadingPulse({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={`w-8 h-8 bg-zion-cyan rounded-full ${className}`}
    />
  );
}