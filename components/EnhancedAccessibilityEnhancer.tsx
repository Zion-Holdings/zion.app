import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  X
} from 'lucide-react';

interface AccessibilityFeatures {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
}

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  severity: 'high' | 'medium' | 'low';
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true
  });
  
  const [showPanel, setShowPanel] = useState(false);
  const [accessibilityIssues, setAccessibilityIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Enhanced focus management
  useEffect(() => {
    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      // Enhanced focus indicators
      if (features.focusIndicators) {
        target.classList.add('ring-4', 'ring-cyan-500', 'ring-offset-2', 'ring-offset-black');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('ring-4', 'ring-cyan-500', 'ring-offset-2', 'ring-offset-black');
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [features.focusIndicators]);

  // High contrast mode
  useEffect(() => {
    if (features.highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#e5e7eb');
      document.documentElement.style.setProperty('--bg-primary', '#000000');
      document.documentElement.style.setProperty('--bg-secondary', '#1f2937');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--text-primary');
      document.documentElement.style.removeProperty('--text-secondary');
      document.documentElement.style.removeProperty('--bg-primary');
      document.documentElement.style.removeProperty('--bg-secondary');
    }
  }, [features.highContrast]);

  // Large text mode
  useEffect(() => {
    if (features.largeText) {
      document.documentElement.classList.add('large-text');
      document.documentElement.style.fontSize = '120%';
    } else {
      document.documentElement.classList.remove('large-text');
      document.documentElement.style.fontSize = '100%';
    }
  }, [features.largeText]);

  // Reduced motion
  useEffect(() => {
    if (features.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
    } else {
      document.documentElement.classList.remove('reduced-motion');
      document.documentElement.style.removeProperty('--animation-duration');
    }
  }, [features.reducedMotion]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Accessibility scanner
  const scanAccessibility = useCallback(async () => {
    setIsScanning(true);
    const issues: AccessibilityIssue[] = [];

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push({
          type: 'error',
          message: 'Image missing alt text or aria-label',
          element: `img`,
          severity: 'high'
        });
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level - previousLevel > 1) {
        issues.push({
          type: 'warning',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading.tagName.toLowerCase(),
          severity: 'medium'
        });
      }
      previousLevel = level;
    });

    // Check for proper form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach((control) => {
      const id = control.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = control.getAttribute('aria-label');
      
      if (!label && !ariaLabel && !control.getAttribute('aria-labelledby')) {
        issues.push({
          type: 'error',
          message: 'Form control missing label or aria-label',
          element: control.tagName.toLowerCase(),
          severity: 'high'
        });
      }
    });

    // Check for proper ARIA attributes
    const ariaElements = document.querySelectorAll('[aria-*]');
    ariaElements.forEach((element) => {
      const ariaExpanded = element.getAttribute('aria-expanded');
      const ariaControls = element.getAttribute('aria-controls');
      
      if (ariaExpanded && !ariaControls) {
        issues.push({
          type: 'warning',
          message: 'Element with aria-expanded should have aria-controls',
          element: element.tagName.toLowerCase(),
          severity: 'medium'
        });
      }
    });

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor) {
        issues.push({
          type: 'error',
          message: 'Text and background colors are the same',
          element: element.tagName.toLowerCase(),
          severity: 'high'
        });
      }
    });

    setAccessibilityIssues(issues);
    setIsScanning(false);

    if (features.screenReader) {
      announceToScreenReader(`Accessibility scan complete. Found ${issues.length} issues.`);
    }
  }, [features.screenReader, announceToScreenReader]);

  // Toggle feature
  const toggleFeature = (feature: keyof AccessibilityFeatures) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));

    if (features.screenReader) {
      announceToScreenReader(`${feature} ${!features[feature] ? 'enabled' : 'disabled'}`);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setShowPanel(prev => !prev);
      }
      
      // Alt + H to toggle high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        toggleFeature('highContrast');
      }
      
      // Alt + L to toggle large text
      if (event.altKey && event.key === 'l') {
        event.preventDefault();
        toggleFeature('largeText');
      }
      
      // Alt + M to toggle reduced motion
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        toggleFeature('reducedMotion');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [features]);

  return (
    <>
      {/* Accessibility Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => toggleFeature('highContrast')}
                    className={`p-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                      features.highContrast 
                        ? 'bg-cyan-600 border-cyan-500 text-white' 
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    {features.highContrast ? <CheckCircle className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    High Contrast
                  </button>
                  
                  <button
                    onClick={() => toggleFeature('largeText')}
                    className={`p-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                      features.largeText 
                        ? 'bg-cyan-600 border-cyan-500 text-white' 
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    {features.largeText ? <CheckCircle className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    Large Text
                  </button>
                  
                  <button
                    onClick={() => toggleFeature('reducedMotion')}
                    className={`p-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                      features.reducedMotion 
                        ? 'bg-cyan-600 border-cyan-500 text-white' 
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    {features.reducedMotion ? <CheckCircle className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    Reduced Motion
                  </button>
                  
                  <button
                    onClick={() => toggleFeature('focusIndicators')}
                    className={`p-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                      features.focusIndicators 
                        ? 'bg-cyan-600 border-cyan-500 text-white' 
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    {features.focusIndicators ? <CheckCircle className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    Focus Indicators
                  </button>
                </div>
              </div>

              {/* Accessibility Scanner */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">Accessibility Scanner</h3>
                  <button
                    onClick={scanAccessibility}
                    disabled={isScanning}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    {isScanning ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        Scan
                      </>
                    )}
                  </button>
                </div>

                {accessibilityIssues.length > 0 && (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {accessibilityIssues.map((issue, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border-l-4 ${
                          issue.type === 'error' ? 'border-red-500 bg-red-900/20' :
                          issue.type === 'warning' ? 'border-yellow-500 bg-yellow-900/20' :
                          'border-blue-500 bg-blue-900/20'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {issue.type === 'error' ? (
                            <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          ) : issue.type === 'warning' ? (
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm text-white">{issue.message}</p>
                            {issue.element && (
                              <p className="text-xs text-gray-400 mt-1">Element: {issue.element}</p>
                            )}
                            <span className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
                              issue.severity === 'high' ? 'bg-red-600 text-white' :
                              issue.severity === 'medium' ? 'bg-yellow-600 text-white' :
                              'bg-blue-600 text-white'
                            }`}>
                              {issue.severity} priority
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Keyboard Shortcuts */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Toggle Panel:</span>
                    <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Alt + A</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>High Contrast:</span>
                    <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Alt + H</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Large Text:</span>
                    <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Alt + L</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Reduced Motion:</span>
                    <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Alt + M</kbd>
                  </div>
                </div>
              </div>

              {/* Current Focus Indicator */}
              {currentFocus && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Current Focus</h3>
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <p className="text-sm text-gray-300">
                      <strong>Element:</strong> {currentFocus.tagName.toLowerCase()}
                    </p>
                    {currentFocus.textContent && (
                      <p className="text-sm text-gray-300 mt-1">
                        <strong>Text:</strong> {currentFocus.textContent.slice(0, 50)}...
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed top-24 right-4 z-40 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        aria-label="Toggle accessibility panel"
      >
        <Eye className="w-5 h-5" />
        {showPanel ? 'Hide' : 'Show'} Accessibility
      </button>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;