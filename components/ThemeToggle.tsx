import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'dark' | 'light' | 'system';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('system');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const activeTheme = theme === 'system' ? systemTheme : theme;

    root.classList.remove('light', 'dark');
    root.classList.add(activeTheme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const themes = [
    { value: 'light', icon: Sun, label: 'Light theme', color: 'from-yellow-400 to-orange-500' },
    { value: 'dark', icon: Moon, label: 'Dark theme', color: 'from-blue-600 to-purple-600' },
    { value: 'system', icon: Monitor, label: 'System theme', color: 'from-gray-500 to-gray-700' }
  ] as const;

  if (!mounted) {
    return (
      <div className={`w-12 h-12 rounded-lg bg-gray-200 animate-pulse ${className}`} />
    );
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="flex items-center space-x-1 p-1 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {themes.map(({ value, icon: Icon, label, color }) => (
          <motion.button
            key={value}
            onClick={() => handleThemeChange(value)}
            className={`relative p-2 rounded-md transition-all duration-200 ${
              theme === value
                ? 'bg-gradient-to-r ' + color + ' text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={label}
            title={label}
          >
            <Icon className="w-4 h-4" />
            {theme === value && (
              <motion.div
                className="absolute inset-0 rounded-md bg-gradient-to-r opacity-20"
                style={{ background: `linear-gradient(to right, var(--${color.split('-')[1]}-500), var(--${color.split('-')[3]}-500))` }}
                layoutId="activeTheme"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default ThemeToggle;