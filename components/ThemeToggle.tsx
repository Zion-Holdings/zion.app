import React, { useState, useEffect } from 'react';
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
      <div className="w-10 h-10 bg-gray-800 rounded-lg animate-pulse"></div>
    );
  }

  return (
    <div className="relative group">
      <button
        className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 group-hover:ring-2 ring-cyan-500/50"
        onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-blue-400" />
        )}
      </button>

      {/* Theme Options Dropdown */}
      <div className="absolute right-0 top-12 w-32 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2 space-y-1">
          <button
            onClick={() => handleThemeChange('light')}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
              theme === 'light'
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Light</span>
          </button>
          
          <button
            onClick={() => handleThemeChange('dark')}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
              theme === 'dark'
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>Dark</span>
          </button>
          
          <button
            onClick={() => handleThemeChange('system')}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
              theme === 'system'
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>System</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;