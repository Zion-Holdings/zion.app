import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Shield, 
  Rocket, 
  Cpu, 
  Database, 
  Target, 
  Star, 
  Sparkles,
  Zap,
  Globe,
  Infinity
} from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
  variant?: 'default' | 'futuristic' | 'quantum' | 'space';
}

const LoadingState: React.FC<LoadingStateProps> = ({
  message = "Loading revolutionary technology...",
  showProgress = true,
  progress = 0,
  variant = 'futuristic'
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(message);
  const [currentIcon, setCurrentIcon] = useState(0);

  const icons = [
    { icon: Brain, color: 'from-purple-500 to-pink-500', label: 'AI Processing' },
    { icon: Atom, color: 'from-cyan-500 to-blue-500', label: 'Quantum Computing' },
    { icon: Shield, color: 'from-red-500 to-orange-500', label: 'Security Check' },
    { icon: Rocket, color: 'from-emerald-500 to-teal-500', label: 'Launch Sequence' },
    { icon: Cpu, color: 'from-blue-500 to-indigo-500', label: 'System Init' },
    { icon: Database, color: 'from-green-500 to-emerald-500', label: 'Data Loading' },
    { icon: Target, color: 'from-yellow-500 to-orange-500', label: 'Targeting' },
    { icon: Star, color: 'from-pink-500 to-purple-500', label: 'Stellar Sync' },
    { icon: Sparkles, color: 'from-cyan-500 to-purple-500', label: 'Magic Loading' },
    { icon: Zap, color: 'from-yellow-500 to-cyan-500', label: 'Power Up' },
    { icon: Globe, color: 'from-blue-500 to-green-500', label: 'Global Connect' },
    { icon: Infinity, color: 'from-purple-500 to-cyan-500', label: 'Infinite Loop' }
  ];

  const loadingMessages = [
    "Initializing AI consciousness...",
    "Quantum entanglement in progress...",
    "Establishing neural connections...",
    "Calibrating space-time coordinates...",
    "Synchronizing with future technology...",
    "Preparing autonomous systems...",
    "Loading revolutionary solutions...",
    "Connecting to the matrix...",
    "Booting up the future...",
    "Almost there, just a moment..."
  ];

  useEffect(() => {
    if (showProgress && progress > 0) {
      setCurrentProgress(progress);
    } else if (showProgress) {
      // Simulate progress
      const interval = setInterval(() => {
        setCurrentProgress(prev => {
          if (prev >= 95) return prev;
          return prev + Math.random() * 15;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [showProgress, progress]);

  useEffect(() => {
    // Rotate through loading messages
    const messageInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingMessages.findIndex(msg => msg === prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 2000);

    return () => clearInterval(messageInterval);
  }, []);

  useEffect(() => {
    // Rotate through icons
    const iconInterval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 1500);

    return () => clearInterval(iconInterval);
  }, []);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          background: 'bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900',
          accent: 'from-cyan-400 to-blue-400',
          border: 'border-cyan-500/30'
        };
      case 'space':
        return {
          background: 'bg-gradient-to-br from-black via-purple-900 to-indigo-900',
          accent: 'from-purple-400 to-pink-400',
          border: 'border-purple-500/30'
        };
      case 'futuristic':
      default:
        return {
          background: 'bg-gradient-to-br from-black via-gray-900 to-cyan-900',
          accent: 'from-cyan-400 to-blue-400',
          border: 'border-cyan-500/30'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`min-h-screen ${styles.background} flex items-center justify-center relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Main Loading Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            {/* Rotating Icon Container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: -1, ease: "linear" }}
              className="w-32 h-32 mx-auto relative"
            >
              {icons.map((iconData, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: index === currentIcon ? 1 : 0.3,
                    scale: index === currentIcon ? 1 : 0.8
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r ${iconData.color} flex items-center justify-center ${
                    index === currentIcon ? 'shadow-2xl shadow-cyan-500/25' : ''
                  }`}
                >
                  <iconData.icon className="w-16 h-16 text-white" />
                </motion.div>
              ))}
            </motion.div>

            {/* Pulsing Ring */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: -1 }}
              className="absolute inset-0 w-32 h-32 rounded-full border-4 border-cyan-400/30"
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h2>
          
          <motion.p
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-300 font-medium"
          >
            {loadingText}
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        {showProgress && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="w-full max-w-md mx-auto">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Loading...</span>
                <span>{Math.round(currentProgress)}%</span>
              </div>
              
              <div className="w-full bg-gray-800/50 rounded-full h-3 border border-gray-700/50 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${currentProgress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${styles.accent} rounded-full relative`}
                >
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(6, 182, 212, 0.5)",
                        "0 0 40px rgba(6, 182, 212, 0.8)",
                        "0 0 20px rgba(6, 182, 212, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: -1 }}
                    className="absolute inset-0 rounded-full"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Current Icon Label */}
        <motion.div
          key={currentIcon}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-4 py-2">
            {React.createElement(icons[currentIcon].icon, { className: "w-4 h-4 text-cyan-400" })}
            <span className="text-cyan-300 text-sm font-medium">
              {icons[currentIcon].label}
            </span>
          </div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10,
                repeat: -1,
                delay: Math.random() * 5
              }}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingState;