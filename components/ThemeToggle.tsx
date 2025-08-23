import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-800/80 text-yellow-400 hover:bg-gray-700/90 border border-gray-600/50' 
          : 'bg-white/80 text-gray-800 hover:bg-white/90 border border-gray-200/50'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;