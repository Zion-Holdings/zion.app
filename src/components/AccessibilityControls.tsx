import React, { useState, useEffect, useCallback } from 'react';
import { Settings, Eye, Zap, X, Volume2, Keyboard, Monitor } from 'lucide-react';
import { useAccessibility } from '../hooks/useAccessibility';

interface AccessibilityControlsProps {
  className?: string;
  position?: 'top-right' | 'bottom-right' | 'floating';
}

export const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({ 
  className = '',
  position = 'floating'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { preferences, savePreferences, announceToScreenReader } = useAccessibility();

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.accessibility-controls')) {
        setIsOpen(false);
        setIsExpanded(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      announceToScreenReader('Accessibility controls opened');
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePreferenceChange = (key: keyof typeof preferences, value: boolean) => {
    savePreferences({ [key]: value });
    announceToScreenReader(`${String(key).replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`);
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'floating':
      default:
        return 'bottom-4 right-4';
    }
  };

  return (
    <div className={`accessibility-controls fixed ${getPositionClasses()} z-50 ${className}`}>
      {/* Main Toggle Button */}
      <button
        onClick={togglePanel}
        className="group relative p-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        aria-label="Open accessibility controls"
        aria-expanded={isOpen}
      >
        <Settings className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Accessibility
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={toggleExpanded}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label={isExpanded ? 'Collapse panel' : 'Expand panel'}
                >
                  {isExpanded ? <X className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Visual Preferences */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Visual Preferences
              </h4>
              
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.highContrast}
                    onChange={(e) => handlePreferenceChange('highContrast', e.target.checked)}
                    className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.largeText}
                    onChange={(e) => handlePreferenceChange('largeText', e.target.checked)}
                    className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                </label>
              </div>
            </div>

            {/* Motion Preferences */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Motion Preferences
              </h4>
              
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.reducedMotion}
                    onChange={(e) => handlePreferenceChange('reducedMotion', e.target.checked)}
                    className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Reduce Motion</span>
                </label>
              </div>
            </div>

            {/* Navigation Preferences */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <Keyboard className="w-4 h-4" />
                Navigation
              </h4>
              
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.focusIndicator}
                    onChange={(e) => handlePreferenceChange('focusIndicator', e.target.checked)}
                    className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.keyboardNavigation}
                    onChange={(e) => handlePreferenceChange('keyboardNavigation', e.target.checked)}
                    className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                </label>
              </div>
            </div>

            {/* Screen Reader Support */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                Screen Reader
              </h4>
              
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.screenReader}
                    onChange={(e) => handlePreferenceChange('screenReader', e.target.checked)}
                    className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Enable Announcements</span>
                </label>
              </div>
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Keyboard Shortcuts</h4>
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <p><kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Alt + Tab</kbd> Skip to main content</p>
                <p><kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Escape</kbd> Close modals</p>
                <p><kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Tab</kbd> Navigate elements</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};