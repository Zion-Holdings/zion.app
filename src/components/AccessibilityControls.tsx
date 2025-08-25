import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Type, 
  Contrast, 
  Volume2, 
  VolumeX,
  Settings,
  X,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';

interface AccessibilityControlsProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({ 
  position = 'bottom-right' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState<'normal' | 'high' | 'inverted'>('normal');
  const [isMuted, setIsMuted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('dark');

  // Position classes based on prop
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
      default:
        return 'bottom-4 right-4';
    }
  };

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Apply contrast changes
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('contrast-normal', 'contrast-high', 'contrast-inverted');
    root.classList.add(`contrast-${contrast}`);
  }, [contrast]);

  // Apply theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  // Toggle mute state
  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Here you would implement actual audio muting logic
    if (isMuted) {
      // Unmute audio
      console.log('Audio unmuted');
    } else {
      // Mute audio
      console.log('Audio muted');
    }
  };

  // Reset all settings
  const resetSettings = () => {
    setFontSize(16);
    setContrast('normal');
    setIsMuted(false);
    setTheme('dark');
  };

  return (
    <div className={`fixed ${getPositionClasses()} z-50`}>
      {/* Main Accessibility Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
        aria-label="Accessibility controls"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="w-7 h-7" />
        
        {/* Pulse animation when open */}
        {isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-300"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute bottom-20 right-0 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="Accessibility settings"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-cyan-400" />
                Accessibility
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Font Size Control */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <Type className="w-4 h-4 text-cyan-400" />
                  Font Size
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                    className="w-8 h-8 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                    aria-label="Decrease font size"
                  >
                    A-
                  </button>
                  <span className="text-white font-medium min-w-[3rem] text-center">
                    {fontSize}px
                  </span>
                  <button
                    onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                    className="w-8 h-8 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                    aria-label="Increase font size"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Contrast Control */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <Contrast className="w-4 h-4 text-cyan-400" />
                  Contrast
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'high', 'inverted'] as const).map((contrastOption) => (
                    <button
                      key={contrastOption}
                      onClick={() => setContrast(contrastOption)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        contrast === contrastOption
                          ? 'bg-cyan-500 text-white shadow-lg'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {contrastOption.charAt(0).toUpperCase() + contrastOption.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Control */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <Settings className="w-4 h-4 text-cyan-400" />
                  Theme
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {([
                    { value: 'light', icon: Sun, label: 'Light' },
                    { value: 'dark', icon: Moon, label: 'Dark' },
                    { value: 'auto', icon: Monitor, label: 'Auto' }
                  ] as const).map(({ value, icon: Icon, label }) => (
                    <button
                      key={value}
                      onClick={() => setTheme(value)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                        theme === value
                          ? 'bg-cyan-500 text-white shadow-lg'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Audio Control */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-red-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-cyan-400" />
                  )}
                  Audio
                </label>
                <button
                  onClick={toggleMute}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isMuted
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {isMuted ? 'Unmute Audio' : 'Mute Audio'}
                </button>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-700/50">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
                >
                  Reset to Defaults
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};