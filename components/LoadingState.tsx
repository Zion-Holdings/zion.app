import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Loader2, CheckCircle, AlertCircle, 
  Clock, Brain, Atom, Rocket
} from 'lucide-react';

interface LoadingStateProps {
  isLoading: boolean;
  progress?: number;
  status?: 'loading' | 'success' | 'error' | 'idle';
  message?: string;
  showProgress?: boolean;
  variant?: 'default' | 'futuristic' | 'quantum' | 'ai';
  size?: 'sm' | 'md' | 'lg';
}

const LoadingState: React.FC<LoadingStateProps> = ({
  isLoading,
  progress = 0,
  status = 'idle',
  message = 'Loading...',
  showProgress = true,
  variant = 'default',
  size = 'md'
}) => {
  const [dots, setDots] = useState('');


  // Animated dots effect
  useEffect(() => {
    if (!isLoading) return;
    
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, [isLoading]);



  // Get variant-specific content
  const getVariantContent = () => {
    switch (variant) {
      case 'futuristic':
        return {
          icon: <Rocket className="w-full h-full" />,
          colors: 'from-cyan-500 to-blue-600',
          bgColors: 'from-cyan-500/20 to-blue-500/20',
          borderColors: 'border-cyan-400/30'
        };
      case 'quantum':
        return {
          icon: <Atom className="w-full h-full" />,
          colors: 'from-purple-500 to-pink-600',
          bgColors: 'from-purple-500/20 to-pink-500/20',
          borderColors: 'border-purple-400/30'
        };
      case 'ai':
        return {
          icon: <Brain className="w-full h-full" />,
          colors: 'from-green-500 to-emerald-600',
          bgColors: 'from-green-500/20 to-emerald-500/20',
          borderColors: 'border-green-400/30'
        };
      default:
        return {
          icon: <Loader2 className="w-full h-full" />,
          colors: 'from-gray-500 to-gray-600',
          bgColors: 'from-gray-500/20 to-gray-600/20',
          borderColors: 'border-gray-400/30'
        };
    }
  };

  // Get size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'w-16 h-16',
          icon: 'w-8 h-8',
          text: 'text-sm'
        };
      case 'lg':
        return {
          container: 'w-32 h-32',
          icon: 'w-16 h-16',
          text: 'text-lg'
        };
      default:
        return {
          container: 'w-24 h-24',
          icon: 'w-12 h-12',
          text: 'text-base'
        };
    }
  };

  // Get status icon
  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-full h-full text-green-400" />;
      case 'error':
        return <AlertCircle className="w-full h-full text-red-400" />;
      case 'loading':
        return getVariantContent().icon;
      default:
        return <Clock className="w-full h-full text-gray-400" />;
    }
  };



  const variantContent = getVariantContent();
  const sizeClasses = getSizeClasses();

  if (!isLoading && status === 'idle') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <div className="relative">
          {/* Main Loading Container */}
          <motion.div
            animate={isLoading ? { rotate: 360 } : {}}
            transition={{ duration: 2, repeat: isLoading ? Infinity : 0, ease: "linear" }}
            className={`${sizeClasses.container} relative rounded-full bg-gradient-to-r ${variantContent.bgColors} border ${variantContent.borderColors} flex items-center justify-center`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${variantContent.colors} opacity-20 blur-xl`} />
            
            {/* Icon Container */}
            <div className={`${sizeClasses.icon} relative z-10 text-white`}>
              {getStatusIcon()}
            </div>

            {/* Animated Ring */}
            {isLoading && variant !== 'default' && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/30"
              />
            )}

            {/* Pulse Effect */}
            {isLoading && variant !== 'default' && (
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent"
              />
            )}
          </motion.div>

          {/* Progress Bar */}
          {showProgress && isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 w-48 bg-gray-800/50 rounded-full h-2 border border-gray-700 overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`h-full bg-gradient-to-r ${variantContent.colors} rounded-full relative`}
              >
                {/* Progress Glow */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm" />
              </motion.div>
            </motion.div>
          )}

          {/* Status Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-center"
          >
            <div className={`text-white font-medium ${sizeClasses.text}`}>
              {message}
              {isLoading && dots}
            </div>
            
            {/* Progress Percentage */}
            {showProgress && isLoading && (
              <div className="text-gray-400 text-sm mt-1">
                {Math.round(progress)}%
              </div>
            )}

            {/* Status Indicator */}
            {status !== 'loading' && (
              <div className="mt-2 text-xs text-gray-500 capitalize">
                {status}
              </div>
            )}
          </motion.div>

          {/* Background Particles for Futuristic Variants */}
          {isLoading && variant !== 'default' && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.cos(i * 60 * Math.PI / 180) * 100],
                    y: [0, Math.sin(i * 60 * Math.PI / 180) * 100],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingState;