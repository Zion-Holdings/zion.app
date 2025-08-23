import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'dark' | 'light' | 'system';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
      root.classList.toggle('light', systemTheme === 'light');
    } else {
      root.classList.toggle('dark', theme === 'dark');
      root.classList.toggle('light', theme === 'light');
    }

    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 bg-gray-800 rounded-lg animate-pulse" />
    );
  }

  return (
    <div className="relative">
      <motion.div
        initial={false}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-gray-800/50 backdrop-blur-md border border-cyan-400/20 rounded-lg p-1"
      >
        <div className="flex items-center space-x-1">
          {/* Light Theme Button */}
          <button
            onClick={() => handleThemeChange('light')}
            className={`p-2 rounded-md transition-all duration-300 ${
              theme === 'light'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'text-gray-400 hover:text-yellow-400 hover:bg-white/10'
            }`}
            aria-label="Light theme"
          >
            <Sun className="w-4 h-4" />
          </button>

          {/* System Theme Button */}
          <button
            onClick={() => handleThemeChange('system')}
            className={`p-2 rounded-md transition-all duration-300 ${
              theme === 'system'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'text-gray-400 hover:text-blue-400 hover:bg-white/10'
            }`}
            aria-label="System theme"
          >
            <Monitor className="w-4 h-4" />
          </button>

          {/* Dark Theme Button */}
          <button
            onClick={() => handleThemeChange('dark')}
            className={`p-2 rounded-md transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'text-gray-400 hover:text-purple-400 hover:bg-white/10'
            }`}
            aria-label="Dark theme"
          >
            <Moon className="w-4 h-4" />
          </button>
        </div>

        {/* Active Theme Indicator */}
        <motion.div
          layoutId="activeTheme"
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg -z-10"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      </motion.div>

      {/* Theme Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900/90 backdrop-blur-md border border-cyan-400/30 rounded text-xs text-cyan-400 whitespace-nowrap"
      >
        {theme === 'system' ? 'System' : theme === 'light' ? 'Light' : 'Dark'} Theme
      </motion.div>
    </div>
  );
};

export default ThemeToggle;