import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

interface ThemeToggleProps {
  currentTheme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { id: 'dark', icon: Moon, label: 'Dark Mode', color: 'from-gray-800 to-gray-900' },
    { id: 'light', icon: Sun, label: 'Light Mode', color: 'from-yellow-400 to-orange-500' },
  ] as const;

  return (
    <div className="fixed top-32 right-6 z-50">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl">
        <div className="flex flex-col gap-2">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const isActive = currentTheme === theme.id;
            
            return (
              <motion.button
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={`relative p-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br ' + theme.color + ' text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={theme.label}
                aria-label={`Switch to ${theme.label}`}
              >
                <Icon className="w-5 h-5" />
                
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-white/30"
                    layoutId="activeTheme"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
      
      {/* Theme indicator */}
      <motion.div
        className="mt-3 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-xs text-gray-400 font-medium">
          {currentTheme === 'dark' ? 'Dark' : 'Light'} Mode
        </span>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;