import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  Type, 
  Contrast, 
  MousePointer,
  Keyboard,
  CheckCircle,
  AlertTriangle,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  zoomLevel: number;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  dyslexia: boolean;
  darkMode: boolean;
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  element: string;
  description: string;
  impact: 'critical' | 'moderate' | 'minor';
  solution: string;
  wcag: string;
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    zoomLevel: 100,
    colorBlindness: 'none',
    dyslexia: false,
    darkMode: false
  });
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);
  const focusRef = useRef<HTMLDivElement>(null);

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

    // Apply zoom level
    document.documentElement.style.fontSize = `${updatedSettings.zoomLevel}%`;

    // Apply color blindness simulation
    document.documentElement.className = document.documentElement.className
      .replace(/color-blindness-\w+/g, '');
    if (updatedSettings.colorBlindness !== 'none') {
      document.documentElement.classList.add(`color-blindness-${updatedSettings.colorBlindness}`);
    }

    // Apply dyslexia-friendly font
    if (updatedSettings.dyslexia) {
      document.documentElement.classList.add('dyslexia-friendly');
    } else {
      document.documentElement.classList.remove('dyslexia-friendly');
    }

    // Apply dark mode
    if (updatedSettings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Keyboard navigation tracking
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsKeyboardMode(true);
        setCurrentFocus(document.activeElement as HTMLElement);
        
        if (document.activeElement) {
          setFocusHistory(prev => {
            const newHistory = [...prev, document.activeElement as HTMLElement];
            return newHistory.slice(-10); // Keep last 10 focus elements
          });
        }
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardMode(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Focus indicator
  useEffect(() => {
    if (settings.focusIndicator) {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 3px solid #00d4ff !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 6px rgba(0, 212, 255, 0.3) !important;
        }
        .focus-visible {
          outline: 3px solid #00d4ff !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [settings.focusIndicator]);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(async () => {
    setIsScanning(true);
    const newIssues: AccessibilityIssue[] = [];

    try {
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          newIssues.push({
            id: `missing-alt-${index}`,
            type: 'error',
            element: img.tagName.toLowerCase(),
            description: 'Image missing alt text or aria-label',
            impact: 'critical',
            solution: 'Add descriptive alt text or aria-label attribute',
            wcag: '1.1.1 Non-text Content'
          });
        }
      });

      // Check for proper heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          newIssues.push({
            id: `heading-skip-${index}`,
            type: 'warning',
            element: heading.tagName.toLowerCase(),
            description: 'Heading level skipped (e.g., h1 to h3)',
            impact: 'moderate',
            solution: 'Ensure proper heading hierarchy without skipping levels',
            wcag: '1.3.1 Info and Relationships'
          });
        }
        previousLevel = level;
      });

      // Check for form labels
      const formControls = document.querySelectorAll('input, select, textarea');
      formControls.forEach((control, index) => {
        const id = control.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = control.getAttribute('aria-label');
        const ariaLabelledBy = control.getAttribute('aria-labelledby');
        
        if (!label && !ariaLabel && !ariaLabelledBy) {
          newIssues.push({
            id: `missing-label-${index}`,
            type: 'error',
            element: control.tagName.toLowerCase(),
            description: 'Form control missing label or aria-label',
            impact: 'critical',
            solution: 'Add label element or aria-label attribute',
            wcag: '3.3.2 Labels or Instructions'
          });
        }
      });

      // Check for color contrast (simplified)
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element, index) => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        if (color === backgroundColor || (color === 'rgba(0, 0, 0, 0)' && backgroundColor === 'rgba(0, 0, 0, 0)')) {
          newIssues.push({
            id: `contrast-issue-${index}`,
            type: 'warning',
            element: element.tagName.toLowerCase(),
            description: 'Potential color contrast issue detected',
            impact: 'moderate',
            solution: 'Ensure sufficient color contrast ratio (4.5:1 for normal text)',
            wcag: '1.4.3 Contrast (Minimum)'
          });
        }
      });

      // Check for keyboard navigation
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
      interactiveElements.forEach((element, index) => {
        const tabIndex = element.getAttribute('tabindex');
        if (tabIndex === '-1' && !element.hasAttribute('aria-hidden')) {
          newIssues.push({
            id: `keyboard-trap-${index}`,
            type: 'warning',
            element: element.tagName.toLowerCase(),
            description: 'Element with tabindex="-1" may trap keyboard users',
            impact: 'moderate',
            solution: 'Review tabindex usage and ensure proper keyboard navigation',
            wcag: '2.1.1 Keyboard'
          });
        }
      });

      // Check for ARIA attributes
      const ariaElements = document.querySelectorAll('[aria-*]');
      ariaElements.forEach((element, index) => {
        const ariaExpanded = element.getAttribute('aria-expanded');
        const ariaExpandedValue = element.getAttribute('aria-expanded');
        
        if (ariaExpanded && ariaExpandedValue !== 'true' && ariaExpandedValue !== 'false') {
          newIssues.push({
            id: `invalid-aria-${index}`,
            type: 'error',
            element: element.tagName.toLowerCase(),
            description: 'Invalid aria-expanded value',
            impact: 'moderate',
            solution: 'Use "true" or "false" for aria-expanded attribute',
            wcag: '4.1.2 Name, Role, Value'
          });
        }
      });

    } catch {
      // Accessibility audit failed
    }

    setIssues(newIssues);
    setIsScanning(false);
  }, []);

  // Quick actions
  const quickActions = [
    {
      name: 'Increase Text Size',
      icon: ZoomIn,
      action: () => applySettings({ zoomLevel: Math.min(settings.zoomLevel + 10, 200) })
    },
    {
      name: 'Decrease Text Size',
      icon: ZoomOut,
      action: () => applySettings({ zoomLevel: Math.max(settings.zoomLevel - 10, 50) })
    },
    {
      name: 'Reset Zoom',
      icon: RotateCcw,
      action: () => applySettings({ zoomLevel: 100 })
    },
    {
      name: 'Toggle High Contrast',
      icon: Contrast,
      action: () => applySettings({ highContrast: !settings.highContrast })
    },
    {
      name: 'Toggle Large Text',
      icon: Type,
      action: () => applySettings({ largeText: !settings.largeText })
    },
    {
      name: 'Toggle Reduced Motion',
      icon: Eye,
      action: () => applySettings({ reducedMotion: !settings.reducedMotion })
    }
  ];

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'info': return <AlertTriangle className="w-4 h-4 text-blue-400" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical': return 'bg-red-500/20 text-red-400';
      case 'moderate': return 'bg-yellow-500/20 text-yellow-400';
      case 'minor': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        aria-label="Accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            className="fixed top-0 left-0 h-full w-96 bg-gray-900 border-r border-gray-700 shadow-2xl z-40 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Accessibility className="w-6 h-6 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">Accessibility</h2>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Quick Actions */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="flex items-center space-x-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm text-white"
                      aria-label={action.name}
                    >
                      <action.icon className="w-4 h-4" />
                      <span className="truncate">{action.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Focus Indicator */}
              {settings.focusIndicator && currentFocus && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Current Focus</h3>
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="text-sm text-gray-300 mb-1">Element:</div>
                    <div className="text-white font-mono text-xs break-all">
                      {currentFocus.tagName.toLowerCase()}
                      {currentFocus.id && `#${currentFocus.id}`}
                      {currentFocus.className && `.${currentFocus.className.split(' ').join('.')}`}
                    </div>
                    {currentFocus.textContent && (
                      <>
                        <div className="text-sm text-gray-300 mt-2 mb-1">Content:</div>
                        <div className="text-white text-xs break-all">
                          {currentFocus.textContent.substring(0, 100)}
                          {currentFocus.textContent.length > 100 && '...'}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Keyboard Mode Indicator */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Navigation Mode</h3>
                <div className="flex items-center space-x-3">
                  <div className={`flex items-center space-x-2 p-2 rounded-lg ${
                    isKeyboardMode ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-400'
                  }`}>
                    <Keyboard className="w-4 h-4" />
                    <span className="text-sm">Keyboard</span>
                  </div>
                  <div className={`flex items-center space-x-2 p-2 rounded-lg ${
                    !isKeyboardMode ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-700 text-gray-400'
                  }`}>
                    <MousePointer className="w-4 h-4" />
                    <span className="text-sm">Mouse</span>
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Settings</h3>
                <div className="space-y-3">
                  {Object.entries(settings).map(([key, value]) => {
                    if (key === 'zoomLevel') return null;
                    if (key === 'colorBlindness') return null;
                    
                    return (
                      <label key={key} className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <button
                          onClick={() => applySettings({ [key]: !value })}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            value ? 'bg-green-500' : 'bg-gray-600'
                          }`}
                          aria-label={`Toggle ${key}`}
                        >
                          <motion.div
                            className="w-5 h-5 bg-white rounded-full shadow-md"
                            animate={{ x: value ? 24 : 2 }}
                            transition={{ duration: 0.2 }}
                          />
                        </button>
                      </label>
                    );
                  })}
                </div>

                {/* Zoom Level */}
                <div className="mt-4">
                  <label className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Zoom Level</span>
                    <span className="text-white text-sm">{settings.zoomLevel}%</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    step="10"
                    value={settings.zoomLevel}
                    onChange={(e) => applySettings({ zoomLevel: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    aria-label="Adjust zoom level"
                  />
                </div>

                {/* Color Blindness */}
                <div className="mt-4">
                  <label className="text-gray-300 text-sm mb-2 block">Color Blindness Simulation</label>
                  <select
                    value={settings.colorBlindness}
                    onChange={(e) => applySettings({ colorBlindness: e.target.value as any })}
                    className="w-full bg-gray-700 text-white rounded-lg p-2 text-sm"
                    aria-label="Select color blindness simulation"
                  >
                    <option value="none">None</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>
              </div>

              {/* Accessibility Audit */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">Accessibility Audit</h3>
                  <button
                    onClick={runAccessibilityAudit}
                    disabled={isScanning}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 text-white py-2 px-3 rounded-lg transition-all duration-300 text-sm"
                    aria-label="Run accessibility audit"
                  >
                    {isScanning ? 'Scanning...' : 'Run Audit'}
                  </button>
                </div>
                
                {issues.length > 0 && (
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {issues.map((issue) => (
                      <div key={issue.id} className="border-l-4 border-cyan-500 pl-3 bg-gray-700 rounded-lg p-3">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {getIssueIcon(issue.type)}
                            <h4 className="font-medium text-white text-sm">{issue.description}</h4>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${getImpactColor(issue.impact)}`}>
                            {issue.impact}
                          </span>
                        </div>
                        <p className="text-gray-300 text-xs mb-1">Element: {issue.element}</p>
                        <p className="text-cyan-400 text-xs mb-1">{issue.solution}</p>
                        <p className="text-gray-400 text-xs">WCAG: {issue.wcag}</p>
                      </div>
                    ))}
                  </div>
                )}

                {issues.length === 0 && !isScanning && (
                  <div className="text-center py-4">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-green-400 text-sm">No accessibility issues found!</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus History Display */}
      {focusHistory.length > 0 && settings.focusIndicator && (
        <div
          ref={focusRef}
          className="fixed bottom-20 left-6 z-30 bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-lg max-w-xs"
        >
          <h4 className="text-white text-sm font-medium mb-2">Focus History</h4>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {focusHistory.slice(-5).reverse().map((element, index) => (
              <div key={index} className="text-xs text-gray-300 bg-gray-700 rounded px-2 py-1">
                {element.tagName.toLowerCase()}
                {element.id && `#${element.id}`}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibilityEnhancer;