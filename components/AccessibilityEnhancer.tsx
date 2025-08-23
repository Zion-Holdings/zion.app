import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Contrast, 
  Type, 
  MousePointer, 
  Keyboard,
  Accessibility,
  HelpCircle,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true
  });
  const [currentFocus, setCurrentFocus] = useState<string>('');
  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);

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

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const savedSettings = JSON.parse(saved);
        setSettings(savedSettings);
        applySettings(savedSettings);
      } catch (error) {
        console.error('Error loading accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip if target is an input or textarea
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation with visual feedback
          setCurrentFocus(target.id || target.className || 'unknown');
          break;
        case 'Enter':
        case ' ':
          // Activate clickable elements with space/enter
          if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
            e.preventDefault();
            target.click();
          }
          break;
        case 'Escape':
          // Close modals and dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [aria-expanded="true"]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.setAttribute('aria-expanded', 'false');
              modal.style.display = 'none';
            }
          });
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(() => {
    const issues: string[] = [];
    
    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`Image ${index + 1} missing alt text or aria-label`);
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let prevLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > prevLevel + 1) {
        issues.push(`Heading structure issue: h${level} follows h${prevLevel} (index ${index + 1})`);
      }
      prevLevel = level;
    });

    // Check for proper form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      if (!input.id || !document.querySelector(`label[for="${input.id}"]`)) {
        issues.push(`Form input ${index + 1} missing proper label association`);
      }
    });

    // Check for proper ARIA attributes
    const ariaElements = document.querySelectorAll('[aria-*]');
    ariaElements.forEach((element, index) => {
      const ariaExpanded = element.getAttribute('aria-expanded');
      if (ariaExpanded === 'true' && !element.classList.contains('expanded')) {
        issues.push(`ARIA expanded state mismatch for element ${index + 1}`);
      }
    });

    setAccessibilityIssues(issues);
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings.screenReader]);

  // Toggle accessibility panel
  const togglePanel = () => {
    setIsOpen(!isOpen);
    announceToScreenReader(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened');
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-4 left-4 z-50 p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            className="fixed bottom-20 left-4 z-50 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 id="accessibility-title" className="text-xl font-bold text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={togglePanel}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <EyeOff className="w-5 h-5" />
                </button>
              </div>

              <p id="accessibility-description" className="text-gray-400 text-sm mb-6">
                Customize your browsing experience with these accessibility features
              </p>

              {/* Settings Controls */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Contrast className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">High Contrast</span>
                  </div>
                  <button
                    onClick={() => applySettings({ highContrast: !settings.highContrast })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.highContrast}
                    aria-label="Toggle high contrast mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Large Text</span>
                  </div>
                  <button
                    onClick={() => applySettings({ largeText: !settings.largeText })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-blue-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.largeText}
                    aria-label="Toggle large text mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MousePointer className="w-5 h-5 text-purple-400" />
                    <span className="text-white">Reduced Motion</span>
                  </div>
                  <button
                    onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-purple-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
                    aria-label="Toggle reduced motion mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Keyboard className="w-5 h-5 text-green-400" />
                    <span className="text-white">Keyboard Navigation</span>
                  </div>
                  <button
                    onClick={() => applySettings({ keyboardNavigation: !settings.keyboardNavigation })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-green-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.keyboardNavigation}
                    aria-label="Toggle keyboard navigation mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Accessibility Audit */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <button
                  onClick={runAccessibilityAudit}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  aria-label="Run accessibility audit"
                >
                  <HelpCircle className="w-4 h-4" />
                  Run Accessibility Audit
                </button>

                {accessibilityIssues.length > 0 && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 text-sm font-medium">
                        {accessibilityIssues.length} Issues Found
                      </span>
                    </div>
                    <ul className="text-xs text-red-300 space-y-1">
                      {accessibilityIssues.slice(0, 3).map((issue, index) => (
                        <li key={index}>• {issue}</li>
                      ))}
                      {accessibilityIssues.length > 3 && (
                        <li className="text-red-400">... and {accessibilityIssues.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Current Focus Indicator */}
              {settings.keyboardNavigation && currentFocus && (
                <div className="mt-4 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 text-xs">
                      Current focus: {currentFocus}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Styles */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .large-text * {
          font-size: 1.2em;
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
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>

      {children}
    </>
  );
};

export default AccessibilityEnhancer;