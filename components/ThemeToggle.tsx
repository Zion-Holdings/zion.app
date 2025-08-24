'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor, Palette } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system' | 'auto';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or default to system
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Apply theme
    applyTheme(savedTheme || 'system');
  }, []);

  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement;
    
    if (selectedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', selectedTheme === 'dark');
    }

    // Store theme preference
    localStorage.setItem('theme', selectedTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const getThemeIcon = (themeType: Theme) => {
    switch (themeType) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'system':
        return <Monitor className="w-4 h-4" />;
      case 'auto':
        return <Palette className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  const getThemeLabel = (themeType: Theme) => {
    switch (themeType) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'System';
      case 'auto':
        return 'Auto';
      default:
        return 'System';
    }
  };

  const getThemeDescription = (themeType: Theme) => {
    switch (themeType) {
      case 'light':
        return 'Always use light theme';
      case 'dark':
        return 'Always use dark theme';
      case 'system':
        return 'Follow system preference';
      case 'auto':
        return 'Switch based on time';
      default:
        return 'Follow system preference';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-600"
        title="Theme Settings"
      >
        {getThemeIcon(theme)}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Theme Menu */}
          <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64 border border-gray-200 dark:border-gray-700 z-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Theme Settings
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ×
              </button>
            </div>

            <div className="space-y-2">
              {(['light', 'dark', 'system', 'auto'] as Theme[]).map((themeOption) => (
                <button
                  key={themeOption}
                  onClick={() => handleThemeChange(themeOption)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 text-left ${
                    theme === themeOption
                      ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className={`p-2 rounded-md ${
                    theme === themeOption
                      ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {getThemeIcon(themeOption)}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`font-medium ${
                      theme === themeOption
                        ? 'text-blue-900 dark:text-blue-100'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {getThemeLabel(themeOption)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {getThemeDescription(themeOption)}
                    </div>
                  </div>

                  {theme === themeOption && (
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Additional Theme Options */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Smooth Transitions</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    id="smooth-transitions"
                    defaultChecked
                    className="sr-only"
                  />
                  <label
                    htmlFor="smooth-transitions"
                    className="block w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer transition-colors duration-200"
                  >
                    <span className="block w-4 h-4 bg-white rounded-full shadow transform translate-x-1 transition-transform duration-200" />
                  </label>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Theme preference saved automatically
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeToggle;