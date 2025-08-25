import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Zap, Shield, Rocket } from 'lucide-react';

interface EnhancedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'bounce' | 'wave';
  text?: string;
  showIcons?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24'
};

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

export function EnhancedLoading({ 
  size = 'md', 
  variant = 'default', 
  text = 'Loading...',
  showIcons = true,
  className = ''
}: EnhancedLoadingProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants: Variants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.7, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const bounceVariants: Variants = {
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const waveVariants: Variants = {
    wave: {
      y: [0, -15, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const icons = [Sparkles, Zap, Shield, Rocket];

  if (variant === 'pulse') {
    return (
      <motion.div
        className={`flex flex-col items-center justify-center ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={`${sizeClasses[size]} bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center shadow-lg`}
          variants={pulseVariants}
          animate="pulse"
        >
          <Sparkles className={`${iconSizes[size]} text-white`} />
        </motion.div>
        {text && (
          <motion.p 
            variants={iconVariants}
            className="mt-4 text-zion-slate-light text-center font-medium"
          >
            {text}
          </motion.p>
        )}
      </motion.div>
    );
  }

  if (variant === 'bounce') {
    return (
      <motion.div
        className={`flex flex-col items-center justify-center ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={`${sizeClasses[size]} bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center shadow-lg`}
          variants={bounceVariants}
          animate="bounce"
        >
          <Rocket className={`${iconSizes[size]} text-white`} />
        </motion.div>
        {text && (
          <motion.p 
            variants={iconVariants}
            className="mt-4 text-zion-slate-light text-center font-medium"
          >
            {text}
          </motion.p>
        )}
      </motion.div>
    );
  }

  if (variant === 'wave') {
    return (
      <motion.div
        className={`flex flex-col items-center justify-center ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`${size === 'xl' ? 'w-3 h-8' : 'w-2 h-6'} bg-gradient-to-b from-zion-cyan to-zion-purple rounded-full`}
              variants={waveVariants}
              animate="wave"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        {text && (
          <motion.p 
            variants={iconVariants}
            className="mt-4 text-zion-slate-light text-center font-medium"
          >
            {text}
          </motion.p>
        )}
      </motion.div>
    );
  }

  // Default variant with rotating icons
  return (
    <motion.div
      className={`flex flex-col items-center justify-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} bg-gradient-to-br from-zion-blue-dark to-zion-purple rounded-full flex items-center justify-center shadow-2xl border border-zion-cyan/20`}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full animate-pulse"></div>
          <Sparkles className={`${iconSizes[size]} text-zion-cyan relative z-10`} />
        </motion.div>
        
        {showIcons && (
          <div className="absolute inset-0">
            {icons.map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: sizeClasses[size],
                  height: sizeClasses[size]
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Icon className={`${iconSizes[size]} text-zion-purple-light opacity-60`} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      {text && (
        <motion.div 
          variants={iconVariants}
          className="mt-6 text-center"
        >
          <motion.p 
            className="text-zion-slate-light font-medium text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.p>
          <motion.div 
            className="mt-2 flex justify-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-zion-cyan rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}