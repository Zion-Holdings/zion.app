import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

type Theme = 'dark' | 'light' | 'system';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
      root.classList.toggle('light', systemTheme === 'light');
    } else {
      root.classList.toggle('dark', newTheme === 'dark');
      root.classList.toggle('light', newTheme === 'light');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'system':
        return <Monitor className="w-4 h-4" />;
      default:
        return <Moon className="w-4 h-4" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'System';
      default:
        return 'Dark';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 rounded-lg transition-colors"
        aria-label="Toggle theme"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {getThemeIcon()}
        <span className="text-gray-300 hidden sm:block">{getThemeLabel()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50"
          >
            <div className="p-2">
              {[
                { value: 'light', icon: Sun, label: 'Light', description: 'Light theme' },
                { value: 'dark', icon: Moon, label: 'Dark', description: 'Dark theme' },
                { value: 'system', icon: Monitor, label: 'System', description: 'Follow system preference' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleThemeChange(option.value as Theme)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    theme === option.value
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  <option.icon className="w-4 h-4" />
                  <div>
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-gray-500">{option.description}</div>
                  </div>
                  {theme === option.value && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;