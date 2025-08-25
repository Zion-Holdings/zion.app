import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  Contrast,
  Sun,
  Moon,
  Monitor,
  Keyboard,
  MousePointer,
  Accessibility
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'x-large';
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

export const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'medium',
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true
  });

  useEffect(() => {
    // Apply accessibility settings to document
    document.documentElement.setAttribute('data-high-contrast', settings.highContrast.toString());
    document.documentElement.setAttribute('data-font-size', settings.fontSize);
    document.documentElement.setAttribute('data-reduced-motion', settings.reducedMotion.toString());
    document.documentElement.setAttribute('data-screen-reader', settings.screenReader.toString());
    document.documentElement.setAttribute('data-keyboard-navigation', settings.keyboardNavigation.toString());
    document.documentElement.setAttribute('data-focus-indicator', settings.focusIndicator.toString());
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const changeFontSize = (size: AccessibilitySettings['fontSize']) => {
    setSettings(prev => ({ ...prev, fontSize: size }));
  };

  const accessibilityFeatures = [
    {
      key: 'highContrast' as keyof AccessibilitySettings,
      icon: Contrast,
      label: 'High Contrast',
      description: 'Increase color contrast for better visibility'
    },
    {
      key: 'reducedMotion' as keyof AccessibilitySettings,
      icon: Eye,
      label: 'Reduced Motion',
      description: 'Reduce animations for motion sensitivity'
    },
    {
      key: 'screenReader' as keyof AccessibilitySettings,
      icon: Volume2,
      label: 'Screen Reader',
      description: 'Optimize for screen reader software'
    },
    {
      key: 'keyboardNavigation' as keyof AccessibilitySettings,
      icon: Keyboard,
      label: 'Keyboard Navigation',
      description: 'Enhanced keyboard navigation support'
    },
    {
      key: 'focusIndicator' as keyof AccessibilitySettings,
      icon: MousePointer,
      label: 'Focus Indicators',
      description: 'Clear focus indicators for keyboard users'
    }
  ];

  const fontSizes = [
    { value: 'small', label: 'Small', size: '14px' },
    { value: 'medium', label: 'Medium', size: '16px' },
    { value: 'large', label: 'Large', size: '18px' },
    { value: 'x-large', label: 'Extra Large', size: '20px' }
  ];

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6 text-white" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Accessibility className="w-5 h-5" />
                Accessibility Settings
              </h3>
              <p className="text-cyan-100 text-sm mt-1">
                Customize your experience for better accessibility
              </p>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Font Size Control */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Font Size
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {fontSizes.map(({ value, label, size }) => (
                    <button
                      key={value}
                      onClick={() => changeFontSize(value as AccessibilitySettings['fontSize'])}
                      className={`p-2 rounded-lg border transition-all duration-200 ${
                        settings.fontSize === value
                          ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300'
                          : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800'
                      }`}
                      style={{ fontSize: size }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accessibility Features */}
              <div className="space-y-3">
                {accessibilityFeatures.map(({ key, icon: Icon, label, description }) => (
                  <div key={key} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-white font-medium">{label}</div>
                        <div className="text-gray-400 text-sm">{description}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSetting(key)}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                        settings[key] ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                      aria-label={`Toggle ${label}`}
                    >
                      <motion.div
                        className="absolute top-1 w-4 h-4 bg-white rounded-full"
                        animate={{ x: settings[key] ? 24 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </button>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="pt-2">
                <h4 className="text-white font-medium mb-2">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      document.documentElement.style.fontSize = '18px';
                      setSettings(prev => ({ ...prev, fontSize: 'large' }));
                    }}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors duration-200"
                  >
                    <ZoomIn className="w-4 h-4 mx-auto mb-1" />
                    Larger Text
                  </button>
                  <button
                    onClick={() => {
                      document.documentElement.style.fontSize = '14px';
                      setSettings(prev => ({ ...prev, fontSize: 'small' }));
                    }}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors duration-200"
                  >
                    <ZoomOut className="w-4 h-4 mx-auto mb-1" />
                    Smaller Text
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-800 p-3 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Close Panel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};