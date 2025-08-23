import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', systemPrefersDark);
      root.classList.toggle('light', !systemPrefersDark);
    } else {
      root.classList.toggle('dark', theme === 'dark');
      root.classList.toggle('light', theme === 'light');
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const root = document.documentElement;
        root.classList.toggle('dark', mediaQuery.matches);
        root.classList.toggle('light', !mediaQuery.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <div className={`w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse ${className}`} />
    );
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      case 'system':
        return <Monitor className="w-5 h-5" />;
      default:
        return <Sun className="w-5 h-5" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      case 'system':
        return 'System Theme';
      default:
        return 'Theme';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const themes: Theme[] = ['dark', 'light', 'system'];
          const currentIndex = themes.indexOf(theme);
          const nextIndex = (currentIndex + 1) % themes.length;
          handleThemeChange(themes[nextIndex]);
        }}
        className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
        title={`Current: ${getThemeLabel()}. Click to cycle themes.`}
        aria-label={`Current theme: ${getThemeLabel()}. Click to cycle themes.`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {getThemeIcon()}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Theme Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-cyan-500/30"
      >
        {getThemeLabel()}
      </motion.div>

      {/* Quick Theme Selection Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-16 right-0 bg-black/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2 shadow-xl min-w-[160px] z-50"
      >
        <div className="space-y-1">
          {(['dark', 'light', 'system'] as Theme[]).map((themeOption) => (
            <button
              key={themeOption}
              onClick={() => handleThemeChange(themeOption)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                theme === themeOption
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="w-4 h-4">
                {themeOption === 'dark' && <Moon className="w-4 h-4" />}
                {themeOption === 'light' && <Sun className="w-4 h-4" />}
                {themeOption === 'system' && <Monitor className="w-4 h-4" />}
              </div>
              <span className="capitalize">
                {themeOption === 'system' ? 'System' : themeOption}
              </span>
              {theme === themeOption && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;