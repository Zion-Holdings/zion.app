

import { motion } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';

export function ProfileLoadingState() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark flex flex-col justify-center items-center p-4">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated icon */}
        <motion.div
          className="mb-6"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-zion-cyan/20 rounded-full border-2 border-zion-cyan"
            variants={pulseVariants}
            animate="pulse"
          >
            <User className="w-10 h-10 text-zion-cyan" />
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="text-zion-cyan text-2xl font-semibold mb-4"
          variants={itemVariants}
        >
          Loading Profile
        </motion.div>

        {/* Animated dots */}
        <motion.div
          className="flex justify-center gap-2"
          variants={itemVariants}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-zion-cyan rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
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

        {/* Sparkles effect */}
        <motion.div
          className="mt-6 text-zion-purple-light"
          variants={itemVariants}
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
        </motion.div>
      </motion.div>
    </div>
  );
}
