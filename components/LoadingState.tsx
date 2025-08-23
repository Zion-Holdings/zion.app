import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Atom, Shield, Rocket, Zap, Sparkles } from 'lucide-react';

const LoadingState: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const loadingSteps = [
    { icon: Brain, text: 'Initializing AI Consciousness', color: 'from-purple-500 to-pink-500' },
    { icon: Atom, text: 'Loading Quantum Systems', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, text: 'Activating Security Protocols', color: 'from-red-500 to-orange-500' },
    { icon: Rocket, text: 'Launching Revolutionary Services', color: 'from-emerald-500 to-teal-500' },
    { icon: Zap, text: 'Optimizing Performance', color: 'from-yellow-500 to-orange-500' },
    { icon: Sparkles, text: 'Finalizing Experience', color: 'from-indigo-500 to-purple-500' }
  ];

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowContent(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Update current step based on progress
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        const newStep = Math.floor((progress / 100) * loadingSteps.length);
        return Math.min(newStep, loadingSteps.length - 1);
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [progress, loadingSteps.length]);

  if (showContent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-black flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Zion Tech Group 2046
          </h1>
          <p className="text-xl text-gray-300">Ready to revolutionize your future</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Brain className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Zion Tech Group 2046
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Revolutionary AI Consciousness & Quantum Technology
          </p>
        </motion.div>

        {/* Loading Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative">
            {/* Progress Bar */}
            <div className="w-full bg-gray-800/50 rounded-full h-3 mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Progress Text */}
            <div className="text-center">
              <span className="text-2xl font-bold text-white">{Math.round(progress)}%</span>
              <span className="text-gray-400 ml-2">Complete</span>
            </div>
          </div>
        </motion.div>

        {/* Current Step */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <AnimatePresence mode="wait">
                         <motion.div
               key={currentStep}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className="flex items-center justify-center gap-3"
             >
               <div className={`w-12 h-12 bg-gradient-to-r ${loadingSteps[currentStep].color} rounded-full flex items-center justify-center`}>
                 {React.createElement(loadingSteps[currentStep].icon, { className: "w-6 h-6 text-white" })}
               </div>
               <span className="text-lg text-gray-300">{loadingSteps[currentStep].text}</span>
             </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Status Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            Preparing the future of technology...
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This may take a few moments while we initialize our revolutionary systems
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingState;