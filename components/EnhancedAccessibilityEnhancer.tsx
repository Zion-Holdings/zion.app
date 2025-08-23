import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Keyboard, Mouse, 
  Smartphone, Monitor, CheckCircle, AlertTriangle, 
  Settings, X, Zap, Accessibility, Contrast, Type
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindMode: boolean;
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  fix: string;
  priority: 'high' | 'medium' | 'low';
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindMode: false
  });
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  // Toggle accessibility panel
  const togglePanel = () => setIsVisible(!isVisible);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply focus indicators
    if (updatedSettings.focusIndicators) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Scan for accessibility issues
  const scanAccessibility = useCallback(async () => {
    setIsScanning(true);
    setScanProgress(0);
    const newIssues: AccessibilityIssue[] = [];

    // Simulate scanning process
    for (let i = 0; i <= 100; i += 10) {
      setScanProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Check for common accessibility issues
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        newIssues.push({
          id: `img-${index}`,
          type: 'error',
          message: 'Image missing alt text',
          element: img.tagName.toLowerCase(),
          fix: 'Add descriptive alt text or aria-label',
          priority: 'high'
        });
      }
    });

    // Check for form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      if (!label && !input.getAttribute('aria-label')) {
        newIssues.push({
          id: `input-${index}`,
          type: 'warning',
          message: 'Form control missing label',
          element: input.tagName.toLowerCase(),
          fix: 'Add label or aria-label attribute',
          priority: 'medium'
        });
      }
    });

    // Check for heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        newIssues.push({
          id: `heading-${index}`,
          type: 'warning',
          message: 'Heading level skipped',
          element: heading.tagName.toLowerCase(),
          fix: 'Use proper heading hierarchy (h1 → h2 → h3)',
          priority: 'medium'
        });
      }
      previousLevel = level;
    });

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // This is a simplified check - in reality you'd need a proper contrast calculator
      if (color === backgroundColor) {
        newIssues.push({
          id: `contrast-${index}`,
          type: 'error',
          message: 'Poor color contrast detected',
          element: element.tagName.toLowerCase(),
          fix: 'Ensure sufficient contrast between text and background',
          priority: 'high'
        });
      }
    });

    setIssues(newIssues);
    setIsScanning(false);
  }, []);

  // Load saved settings on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Add CSS for accessibility features
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      
      .large-text {
        font-size: 1.2em !important;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .focus-visible *:focus {
        outline: 3px solid #06b6d4 !important;
        outline-offset: 2px !important;
      }
      
      .accessibility-panel {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        max-width: 400px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={togglePanel}
        className="fixed bottom-20 right-20 z-50 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
        aria-label="Open accessibility panel"
      >
        <Accessibility className="w-6 h-6 text-white" />
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="accessibility-panel"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl max-w-md">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Accessibility className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Accessibility</h3>
                <p className="text-xs text-gray-400">Enhanced user experience</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleExpanded}
                className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
                title={isExpanded ? 'Minimize' : 'Expand'}
              >
                {isExpanded ? <Monitor className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
              </button>
              <button
                onClick={togglePanel}
                className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Settings */}
          <div className="p-4 border-b border-gray-700/50">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Quick Settings</h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => applySettings({ highContrast: !settings.highContrast })}
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  settings.highContrast
                    ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                    : 'bg-gray-800/50 border-gray-600/50 text-gray-300 hover:border-gray-500/50'
                }`}
              >
                <Contrast className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">High Contrast</span>
              </button>

              <button
                onClick={() => applySettings({ largeText: !settings.largeText })}
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  settings.largeText
                    ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                    : 'bg-gray-800/50 border-gray-600/50 text-gray-300 hover:border-gray-500/50'
                }`}
              >
                <Type className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">Large Text</span>
              </button>

              <button
                onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  settings.reducedMotion
                    ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                    : 'bg-gray-800/50 border-gray-600/50 text-gray-300 hover:border-gray-500/50'
                }`}
              >
                <Zap className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">Reduced Motion</span>
              </button>

              <button
                onClick={() => applySettings({ focusIndicators: !settings.focusIndicators })}
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  settings.focusIndicators
                    ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                    : 'bg-gray-800/50 border-gray-600/50 text-gray-300 hover:border-gray-500/50'
                }`}
              >
                <Keyboard className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">Focus Indicators</span>
              </button>
            </div>
          </div>

          {/* Scan Button */}
          <div className="p-4 border-b border-gray-700/50">
            <button
              onClick={scanAccessibility}
              disabled={isScanning}
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isScanning ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Scanning... {scanProgress}%
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  Scan for Issues
                </div>
              )}
            </button>
          </div>

          {/* Issues List */}
          {issues.length > 0 && (
            <div className="p-4 border-b border-gray-700/50">
              <h4 className="text-sm font-medium text-gray-300 mb-3">
                Found {issues.length} accessibility issue{issues.length !== 1 ? 's' : ''}
              </h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {issues.slice(0, 3).map((issue) => (
                  <motion.div
                    key={issue.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-3 rounded-lg border ${
                      issue.type === 'error' ? 'border-red-500/30 bg-red-500/10' :
                      issue.type === 'warning' ? 'border-yellow-500/30 bg-yellow-500/10' :
                      'border-blue-500/30 bg-blue-500/10'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-white mb-1">{issue.message}</div>
                        <div className="text-xs text-gray-400">{issue.fix}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {issues.length > 3 && (
                <div className="text-center mt-3">
                  <span className="text-xs text-gray-400">
                    +{issues.length - 3} more issues found
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Advanced Settings */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4"
            >
              <h4 className="text-sm font-medium text-gray-300 mb-3">Advanced Settings</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={settings.screenReader}
                    onChange={(e) => applySettings({ screenReader: e.target.checked })}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Screen Reader Optimized</span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={(e) => applySettings({ keyboardNavigation: e.target.checked })}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Enhanced Keyboard Navigation</span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={settings.colorBlindMode}
                    onChange={(e) => applySettings({ colorBlindMode: e.target.checked })}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Color Blind Friendly</span>
                </label>
              </div>
            </motion.div>
          )}

          {/* Footer */}
          <div className="p-4 bg-gray-800/30 rounded-b-2xl">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">Accessibility Features</p>
              <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                <span>WCAG 2.1 AA</span>
                <span>•</span>
                <span>Screen Reader</span>
                <span>•</span>
                <span>Keyboard Nav</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnhancedAccessibilityEnhancer;