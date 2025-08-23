import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Keyboard, MousePointer, 
  Monitor, Smartphone, Tablet, CheckCircle, AlertTriangle, 
  Info, Settings, X, Plus, Minus, RotateCcw
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  showPanel?: boolean;
  autoOptimize?: boolean;
}

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'visual' | 'auditory' | 'motor' | 'cognitive';
  wcagLevel: 'A' | 'AA' | 'AAA';
}

interface AccessibilityReport {
  score: number;
  issues: string[];
  warnings: string[];
  suggestions: string[];
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  showPanel = false, 
  autoOptimize = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeatures, setActiveFeatures] = useState<AccessibilityFeature[]>([]);
  const [report, setReport] = useState<AccessibilityReport | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [contrastMode, setContrastMode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [focusIndicator, setFocusIndicator] = useState(true);
  const [skipLinks, setSkipLinks] = useState(true);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  
  const focusableElementsRef = useRef<HTMLElement[]>([]);
  const liveRegionRef = useRef<HTMLDivElement>(null);

  // Initialize accessibility features
  const initializeFeatures = useCallback(() => {
    const features: AccessibilityFeature[] = [
      {
        id: 'high-contrast',
        name: 'High Contrast',
        description: 'Increase color contrast for better visibility',
        enabled: false,
        category: 'visual',
        wcagLevel: 'AA'
      },
      {
        id: 'font-size',
        name: 'Font Size Control',
        description: 'Adjustable font sizes for better readability',
        enabled: true,
        category: 'visual',
        wcagLevel: 'AA'
      },
      {
        id: 'reduced-motion',
        name: 'Reduced Motion',
        description: 'Reduce animations for users with vestibular disorders',
        enabled: false,
        category: 'cognitive',
        wcagLevel: 'A'
      },
      {
        id: 'focus-indicator',
        name: 'Focus Indicators',
        description: 'Clear focus indicators for keyboard navigation',
        enabled: true,
        category: 'motor',
        wcagLevel: 'A'
      },
      {
        id: 'skip-links',
        name: 'Skip Links',
        description: 'Skip to main content for keyboard users',
        enabled: true,
        category: 'motor',
        wcagLevel: 'A'
      },
      {
        id: 'screen-reader',
        name: 'Screen Reader Support',
        description: 'Enhanced ARIA labels and semantic markup',
        enabled: true,
        category: 'auditory',
        wcagLevel: 'AA'
      },
      {
        id: 'keyboard-navigation',
        name: 'Keyboard Navigation',
        description: 'Full keyboard accessibility',
        enabled: true,
        category: 'motor',
        wcagLevel: 'A'
      },
      {
        id: 'color-blindness',
        name: 'Color Blindness Support',
        description: 'Color-independent information design',
        enabled: false,
        category: 'visual',
        wcagLevel: 'AA'
      }
    ];
    
    setActiveFeatures(features);
  }, []);

  // Enhanced accessibility analysis
  const analyzeAccessibility = useCallback(async () => {
    setIsAnalyzing(true);
    
    try {
      const issues: string[] = [];
      const warnings: string[] = [];
      const suggestions: string[] = [];
      let score = 100;

      // Check for missing alt text
      const images = document.querySelectorAll('img');
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
      if (imagesWithoutAlt.length > 0) {
        issues.push(`${imagesWithoutAlt.length} images missing alt text`);
        score -= 10;
      }

      // Check for proper heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
      let previousLevel = 0;
      for (const level of headingLevels) {
        if (level - previousLevel > 1) {
          warnings.push('Heading levels should not be skipped');
          score -= 5;
          break;
        }
        previousLevel = level;
      }

      // Check for form labels
      const formInputs = document.querySelectorAll('input, select, textarea');
      const inputsWithoutLabels = Array.from(formInputs).filter(input => {
        const id = input.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        return !label && !ariaLabel;
      });
      if (inputsWithoutLabels.length > 0) {
        issues.push(`${inputsWithoutLabels.length} form inputs missing labels`);
        score -= 15;
      }

      // Check for sufficient color contrast
      if (!contrastMode) {
        suggestions.push('Enable high contrast mode for better visibility');
      }

      // Check for keyboard navigation
      const focusableElements = document.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusableElementsRef.current = Array.from(focusableElements) as HTMLElement[];
      
      if (focusableElements.length === 0) {
        warnings.push('No focusable elements found');
        score -= 10;
      }

      // Check for ARIA landmarks
      const landmarks = document.querySelectorAll('main, nav, aside, header, footer, [role="main"], [role="navigation"], [role="complementary"], [role="banner"], [role="contentinfo"]');
      if (landmarks.length < 3) {
        suggestions.push('Add more ARIA landmarks for better navigation');
        score -= 5;
      }

      // Check for language declaration
      const html = document.documentElement;
      if (!html.lang) {
        issues.push('HTML language attribute not set');
        score -= 5;
      }

      // Check for skip links
      if (!skipLinks) {
        suggestions.push('Add skip links for keyboard users');
        score -= 5;
      }

      // Check for focus management
      if (!focusIndicator) {
        warnings.push('Focus indicators are disabled');
        score -= 10;
      }

      score = Math.max(0, score);

      const newReport: AccessibilityReport = {
        score,
        issues,
        warnings,
        suggestions
      };

      setReport(newReport);

      // Auto-optimize if enabled
      if (autoOptimize) {
        applyAccessibilityOptimizations(newReport);
      }
    } catch (error) {
      console.warn('Accessibility analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, [contrastMode, skipLinks, focusIndicator, autoOptimize]);

  // Apply accessibility optimizations
  const applyAccessibilityOptimizations = useCallback((currentReport: AccessibilityReport) => {
    // Apply high contrast if needed
    if (currentReport.score < 80 && !contrastMode) {
      setContrastMode(true);
      announceChange('High contrast mode enabled for better visibility');
    }

    // Add missing alt text placeholders
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      if (!imgElement.alt) {
        imgElement.alt = 'Image description needed';
        imgElement.setAttribute('data-accessibility-fix', 'true');
      }
    });

    // Add missing form labels
    const formInputs = document.querySelectorAll('input:not([aria-label]):not([id])');
    formInputs.forEach((input, index) => {
      const id = `input-${index}`;
      input.setAttribute('id', id);
      input.setAttribute('aria-label', 'Form input');
    });

    // Ensure focus indicators
    if (!focusIndicator) {
      setFocusIndicator(true);
      announceChange('Focus indicators enabled');
    }
  }, [contrastMode, focusIndicator]);

  // Announce changes to screen readers
  const announceChange = useCallback((message: string) => {
    setAnnouncements(prev => [...prev, message]);
    
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = message;
    }

    // Clear announcement after 3 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(announcement => announcement !== message));
    }, 3000);
  }, []);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const main = document.querySelector('main') || document.querySelector('[role="main"]');
        if (main) {
          (main as HTMLElement).focus();
          announceChange('Skipped to main content');
        }
      }

      // Toggle high contrast
      if (e.key === 'c' && e.ctrlKey && e.altKey) {
        e.preventDefault();
        setContrastMode(prev => !prev);
        announceChange(contrastMode ? 'High contrast disabled' : 'High contrast enabled');
      }

      // Toggle reduced motion
      if (e.key === 'm' && e.ctrlKey && e.altKey) {
        e.preventDefault();
        setReducedMotion(prev => !prev);
        announceChange(reducedMotion ? 'Motion restored' : 'Motion reduced');
      }

      // Font size controls
      if (e.key === '=' && e.ctrlKey) {
        e.preventDefault();
        setFontSize(prev => Math.min(prev + 2, 32));
        announceChange(`Font size increased to ${fontSize + 2}px`);
      }

      if (e.key === '-' && e.ctrlKey) {
        e.preventDefault();
        setFontSize(prev => Math.max(prev - 2, 12));
        announceChange(`Font size decreased to ${fontSize - 2}px`);
      }

      // Reset font size
      if (e.key === '0' && e.ctrlKey) {
        e.preventDefault();
        setFontSize(16);
        announceChange('Font size reset to default');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [contrastMode, reducedMotion, fontSize, announceChange]);

  // Apply visual accessibility features
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${fontSize}px`;
    
    // Apply contrast mode
    if (contrastMode) {
      root.classList.add('high-contrast');
      root.style.setProperty('--contrast-ratio', '4.5');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-ratio');
    }
    
    // Apply reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }
    
    // Apply high contrast
    if (highContrast) {
      root.classList.add('ultra-high-contrast');
      root.style.setProperty('--contrast-ratio', '7');
    } else {
      root.classList.remove('ultra-high-contrast');
      root.style.removeProperty('--contrast-ratio');
    }
    
    // Apply focus indicators
    if (focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [fontSize, contrastMode, reducedMotion, highContrast, focusIndicator]);

  // Setup skip links
  useEffect(() => {
    if (!skipLinks) return;

    // Add skip link if it doesn't exist
    if (!document.getElementById('skip-link')) {
      const skipLink = document.createElement('a');
      skipLink.id = 'skip-link';
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Add main content id if it doesn't exist
    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main && !main.id) {
      main.id = 'main-content';
    }
  }, [skipLinks]);

  // Initialize component
  useEffect(() => {
    if (showPanel) {
      setIsVisible(true);
      initializeFeatures();
      setupKeyboardNavigation();
      
      if (autoOptimize) {
        analyzeAccessibility();
      }
    }
  }, [showPanel, initializeFeatures, setupKeyboardNavigation, autoOptimize, analyzeAccessibility]);

  // Continuous monitoring
  useEffect(() => {
    if (!showPanel || !autoOptimize) return;

    const interval = setInterval(() => {
      analyzeAccessibility();
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [showPanel, autoOptimize, analyzeAccessibility]);

  if (!showPanel || !isVisible) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4" />;
    if (score >= 70) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  const toggleFeature = (featureId: string) => {
    setActiveFeatures(prev => 
      prev.map(feature => 
        feature.id === featureId 
          ? { ...feature, enabled: !feature.enabled }
          : feature
      )
    );
  };

  return (
    <>
      {/* Live region for screen reader announcements */}
      <div
        ref={liveRegionRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {/* Accessibility Panel */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-cyan-400" />
                Accessibility
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Controls */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Minus className="w-4 h-4" />
                A-
              </button>
              <button
                onClick={() => setFontSize(prev => Math.min(prev + 2, 32))}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                A+
              </button>
              <button
                onClick={() => setContrastMode(!contrastMode)}
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  contrastMode 
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                <Monitor className="w-4 h-4" />
                Contrast
              </button>
              <button
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  reducedMotion 
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                <RotateCcw className="w-4 h-4" />
                Motion
              </button>
            </div>

            {/* Accessibility Score */}
            {report && (
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-white">Accessibility Score</h4>
                  <div className={`flex items-center gap-2 ${getScoreColor(report.score)}`}>
                    {getScoreIcon(report.score)}
                    <span className="text-lg font-bold">{report.score}/100</span>
                  </div>
                </div>
                
                {report.issues.length > 0 && (
                  <div className="mb-3">
                    <h5 className="text-xs font-medium text-red-400 mb-2">Issues ({report.issues.length})</h5>
                    <ul className="text-xs text-red-300 space-y-1">
                      {report.issues.slice(0, 3).map((issue, index) => (
                        <li key={index}>• {issue}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {report.warnings.length > 0 && (
                  <div className="mb-3">
                    <h5 className="text-xs font-medium text-yellow-400 mb-2">Warnings ({report.warnings.length})</h5>
                    <ul className="text-xs text-yellow-300 space-y-1">
                      {report.warnings.slice(0, 2).map((warning, index) => (
                        <li key={index}>• {warning}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Features */}
            <div className="space-y-2 mb-4">
              <h4 className="text-sm font-semibold text-white">Features</h4>
              {activeFeatures.map(feature => (
                <div key={feature.id} className="flex items-center justify-between p-2 bg-gray-800/30 rounded-lg">
                  <div className="flex-1">
                    <div className="text-sm text-white">{feature.name}</div>
                    <div className="text-xs text-gray-400">{feature.description}</div>
                    <div className="text-xs text-gray-500">WCAG {feature.wcagLevel}</div>
                  </div>
                  <button
                    onClick={() => toggleFeature(feature.id)}
                    className={`w-10 h-6 rounded-full transition-colors ${
                      feature.enabled ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      feature.enabled ? 'translate-x-4' : 'translate-x-0'
                    }`} />
                  </button>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={analyzeAccessibility}
                disabled={isAnalyzing}
                className="flex-1 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze'}
              </button>
              <button
                onClick={() => {
                  setFontSize(16);
                  setContrastMode(false);
                  setReducedMotion(false);
                  setHighContrast(false);
                  announceChange('All accessibility settings reset to default');
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="mt-4 p-3 bg-gray-800/30 rounded-lg">
              <h5 className="text-xs font-medium text-gray-300 mb-2">Keyboard Shortcuts</h5>
              <div className="text-xs text-gray-400 space-y-1">
                <div>Ctrl + Alt + C: Toggle contrast</div>
                <div>Ctrl + Alt + M: Toggle motion</div>
                <div>Ctrl + =: Increase font</div>
                <div>Ctrl + -: Decrease font</div>
                <div>Ctrl + 0: Reset font</div>
                <div>Alt + Tab: Skip to content</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Global Accessibility Styles */}
      <style jsx global>{`
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

        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --accent-color: #0000ff;
          --border-color: #000000;
        }

        .ultra-high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --accent-color: #0000ff;
          --border-color: #000000;
          filter: contrast(200%);
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible :focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }

        .high-contrast .focus-visible :focus {
          outline: 3px solid #000000 !important;
        }

        .ultra-high-contrast .focus-visible :focus {
          outline: 5px solid #000000 !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .reduced-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;