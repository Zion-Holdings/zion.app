import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Contrast, Type, 
  MousePointer, Keyboard, Monitor, Smartphone, 
  CheckCircle, AlertTriangle, Info
} from 'lucide-react';

interface AccessibilitySettings {
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
  priority: 'high' | 'medium' | 'low';
  fix?: string;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true
  });

  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [currentIssue, setCurrentIssue] = useState<AccessibilityIssue | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);

  // Performance optimization: Memoized accessibility audit
  const runAccessibilityAudit = useCallback(async () => {
    setIsAuditing(true);
    const newIssues: AccessibilityIssue[] = [];

    try {
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          newIssues.push({
            type: 'error',
            message: 'Image missing alt text or aria-label',
            element: `img[${index}]`,
            priority: 'high',
            fix: 'Add descriptive alt text or aria-label attribute'
          });
        }
      });

      // Check for proper heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level - previousLevel > 1) {
          newIssues.push({
            type: 'warning',
            message: 'Heading hierarchy skipped levels',
            element: `${heading.tagName.toLowerCase()}[${index}]`,
            priority: 'medium',
            fix: 'Ensure heading levels follow proper hierarchy (h1 → h2 → h3)'
          });
        }
        previousLevel = level;
      });

      // Check for proper form labels
      const formInputs = document.querySelectorAll('input, select, textarea');
      formInputs.forEach((input, index) => {
        const inputElement = input as HTMLInputElement;
        if (!inputElement.labels?.length && !inputElement.getAttribute('aria-label')) {
          newIssues.push({
            type: 'error',
            message: 'Form input missing label or aria-label',
            element: `${inputElement.tagName.toLowerCase()}[${index}]`,
            priority: 'high',
            fix: 'Add proper label element or aria-label attribute'
          });
        }
      });

      // Check for sufficient color contrast
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element, index) => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        // Basic contrast check (simplified)
        if (color && backgroundColor && color !== backgroundColor) {
          // This is a simplified check - in production, use a proper contrast calculation library
          newIssues.push({
            type: 'info',
            message: 'Color contrast should be verified',
            element: `${element.tagName.toLowerCase()}[${index}]`,
            priority: 'low',
            fix: 'Ensure text has sufficient contrast ratio (4.5:1 for normal text, 3:1 for large text)'
          });
        }
      });

      // Check for keyboard navigation
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
      interactiveElements.forEach((element, index) => {
        const tabIndex = element.getAttribute('tabindex');
        if (tabIndex === '-1') {
          newIssues.push({
            type: 'warning',
            message: 'Element removed from tab order',
            element: `${element.tagName.toLowerCase()}[${index}]`,
            priority: 'medium',
            fix: 'Ensure element is accessible via keyboard navigation'
          });
        }
      });

    } catch (error) {
      console.warn('Accessibility audit error:', error);
    }

    setIssues(newIssues);
    setIsAuditing(false);
  }, []);

  // Performance optimization: Apply accessibility settings
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

  // Performance optimization: Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Performance optimization: Run initial audit
  useEffect(() => {
    const timer = setTimeout(() => {
      runAccessibilityAudit();
    }, 2000); // Delay to allow page to load

    return () => clearTimeout(timer);
  }, [runAccessibilityAudit]);

  // Performance optimization: Memoized issue counts
  const issueCounts = useMemo(() => {
    return issues.reduce((acc, issue) => {
      acc[issue.type] = (acc[issue.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [issues]);

  // Performance optimization: Memoized priority counts
  const priorityCounts = useMemo(() => {
    return issues.reduce((acc, issue) => {
      acc[issue.priority] = (acc[issue.priority] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [issues]);

  // Performance optimization: Memoized settings panel
  const settingsPanel = useMemo(() => (
    <div className="space-y-4">
      {/* High Contrast Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Contrast className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-medium">High Contrast</span>
        </div>
        <button
          onClick={() => applySettings({ highContrast: !settings.highContrast })}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
            settings.highContrast ? 'bg-cyan-600' : 'bg-gray-600'
          }`}
          aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast mode`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.highContrast ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Large Text Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Type className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-medium">Large Text</span>
        </div>
        <button
          onClick={() => applySettings({ largeText: !settings.largeText })}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
            settings.largeText ? 'bg-purple-600' : 'bg-gray-600'
          }`}
          aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text mode`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.largeText ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Reduced Motion Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Eye className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium">Reduced Motion</span>
        </div>
        <button
          onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
            settings.reducedMotion ? 'bg-green-600' : 'bg-gray-600'
          }`}
          aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion mode`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Focus Indicators Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <MousePointer className="w-5 h-5 text-orange-400" />
          <span className="text-sm font-medium">Focus Indicators</span>
        </div>
        <button
          onClick={() => applySettings({ focusIndicators: !settings.focusIndicators })}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
            settings.focusIndicators ? 'bg-orange-600' : 'bg-gray-600'
          }`}
          aria-label={`${settings.focusIndicators ? 'Disable' : 'Enable'} focus indicators`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  ), [settings, applySettings]);

  // Performance optimization: Memoized issues panel
  const issuesPanel = useMemo(() => (
    <div className="space-y-3">
      {issues.length === 0 ? (
        <div className="text-center py-4">
          <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <p className="text-sm text-gray-300">No accessibility issues found!</p>
        </div>
      ) : (
        issues.slice(0, 5).map((issue, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:scale-105 ${
              issue.type === 'error' ? 'bg-red-900/20 border-red-700/50' :
              issue.type === 'warning' ? 'bg-yellow-900/20 border-yellow-700/50' :
              'bg-blue-900/20 border-blue-700/50'
            }`}
            onClick={() => setCurrentIssue(issue)}
          >
            <div className="flex items-start space-x-3">
              {issue.type === 'error' ? <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" /> :
               issue.type === 'warning' ? <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5" /> :
               <Info className="w-4 h-4 text-blue-400 mt-0.5" />}
              <div className="flex-1">
                <p className="text-sm font-medium text-white mb-1">{issue.message}</p>
                {issue.element && (
                  <p className="text-xs text-gray-400 mb-1">Element: {issue.element}</p>
                )}
                {issue.fix && (
                  <p className="text-xs text-gray-300">Fix: {issue.fix}</p>
                )}
              </div>
            </div>
          </div>
        ))
      )}
      
      {issues.length > 5 && (
        <div className="text-center">
          <button
            onClick={() => setCurrentIssue(null)}
            className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View all {issues.length} issues
          </button>
        </div>
      )}
    </div>
  ), [issues]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-3 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Toggle accessibility panel"
        aria-expanded={isVisible}
      >
        <div className="relative">
          <Eye className="w-6 h-6" />
          
          {/* Issue Count Badge */}
          {Object.values(issueCounts).some(count => count > 0) && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">
                {Object.values(issueCounts).reduce((sum, count) => sum + count, 0)}
              </span>
            </div>
          )}
        </div>
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-700 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Accessibility</h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  ✕
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    {issues.length}
                  </div>
                  <div className="text-xs text-gray-400">Total Issues</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-red-400">
                    {priorityCounts.high || 0}
                  </div>
                  <div className="text-xs text-gray-400">High Priority</div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex space-x-1 mb-6">
                <button
                  onClick={() => setCurrentIssue(null)}
                  className={`flex-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                    currentIssue === null
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Settings
                </button>
                <button
                  onClick={() => setCurrentIssue(issues[0] || null)}
                  className={`flex-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                    currentIssue !== null
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Issues
                  {issues.length > 0 && (
                    <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                      {issues.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {currentIssue === null ? (
                  <>
                    {settingsPanel}
                    
                    {/* Audit Button */}
                    <div className="pt-4 border-t border-gray-700">
                      <button
                        onClick={runAccessibilityAudit}
                        disabled={isAuditing}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      >
                        {isAuditing ? 'Auditing...' : 'Run Accessibility Audit'}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Issue Details */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">Issue Details</h3>
                        <button
                          onClick={() => setCurrentIssue(null)}
                          className="text-cyan-400 hover:text-cyan-300 text-sm"
                        >
                          Back to Settings
                        </button>
                      </div>
                      
                      {issuesPanel}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS Classes for Accessibility */}
      <style jsx global>{`
        .high-contrast {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1f2937 !important;
          --accent: #06b6d4 !important;
        }

        .large-text {
          font-size: 1.2em !important;
        }

        .large-text h1 { font-size: 2.5em !important; }
        .large-text h2 { font-size: 2em !important; }
        .large-text h3 { font-size: 1.75em !important; }
        .large-text p { font-size: 1.2em !important; }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible :focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }

        .focus-visible :focus:not(:focus-visible) {
          outline: none !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;