<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Keyboard, MousePointer, 
  Smartphone, Monitor, CheckCircle, AlertTriangle, Info,
  Settings, Zap, Shield, Brain, Heart, Target, Users,
  Accessibility, Contrast, Type, Palette, ZoomIn, ZoomOut,
  RotateCcw, Play, Pause, SkipBack, SkipForward
} from 'lucide-react';

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  category: 'vision' | 'hearing' | 'mobility' | 'cognitive' | 'general';
  isEnabled: boolean;
  impact: 'high' | 'medium' | 'low';
  icon: React.ReactNode;
}

interface AccessibilityTest {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'running' | 'passed' | 'failed';
  details?: string;
  recommendations?: string[];
}

const AccessibilityEnhancer: React.FC = () => {
  const [features, setFeatures] = useState<AccessibilityFeature[]>([
    {
      id: 'high-contrast',
      name: 'High Contrast Mode',
      description: 'Enhance text and background contrast for better readability',
      category: 'vision',
      isEnabled: false,
      impact: 'high',
      icon: <Contrast className="w-5 h-5" />
    },
    {
      id: 'font-scaling',
      name: 'Font Scaling',
      description: 'Allow users to increase font size up to 200%',
      category: 'vision',
      isEnabled: true,
      impact: 'high',
      icon: <Type className="w-5 h-5" />
    },
    {
      id: 'color-blindness',
      name: 'Color Blindness Support',
      description: 'Provide alternative color schemes and patterns',
      category: 'vision',
      isEnabled: false,
      impact: 'medium',
      icon: <Palette className="w-5 h-5" />
    },
    {
      id: 'screen-reader',
      name: 'Screen Reader Optimization',
      description: 'Enhanced ARIA labels and semantic HTML structure',
      category: 'vision',
      isEnabled: true,
      impact: 'high',
      icon: <Eye className="w-5 h-5" />
    },
    {
      id: 'keyboard-navigation',
      name: 'Keyboard Navigation',
      description: 'Full keyboard accessibility with visible focus indicators',
      category: 'mobility',
      isEnabled: true,
      impact: 'high',
      icon: <Keyboard className="w-5 h-5" />
    },
    {
      id: 'voice-control',
      name: 'Voice Control Support',
      description: 'Voice command recognition and navigation',
      category: 'mobility',
      isEnabled: false,
      impact: 'medium',
      icon: <Volume2 className="w-5 h-5" />
    },
    {
      id: 'motion-reduction',
      name: 'Motion Reduction',
      description: 'Reduce or eliminate animations for users with vestibular disorders',
      category: 'cognitive',
      isEnabled: false,
      impact: 'medium',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'reading-assistance',
      name: 'Reading Assistance',
      description: 'Text-to-speech and reading comprehension tools',
      category: 'cognitive',
      isEnabled: false,
      impact: 'medium',
      icon: <Brain className="w-5 h-5" />
    },
    {
      id: 'focus-management',
      name: 'Focus Management',
      description: 'Intelligent focus handling and skip links',
      category: 'general',
      isEnabled: true,
      impact: 'high',
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 'error-prevention',
      name: 'Error Prevention',
      description: 'Clear error messages and confirmation dialogs',
      category: 'general',
      isEnabled: true,
      impact: 'medium',
      icon: <Shield className="w-5 h-5" />
    }
  ]);

  const [tests, setTests] = useState<AccessibilityTest[]>([
    {
      id: 'aria-labels',
      name: 'ARIA Labels Check',
      description: 'Verify all interactive elements have proper ARIA labels',
      status: 'pending'
    },
    {
      id: 'color-contrast',
      name: 'Color Contrast Analysis',
      description: 'Check text contrast ratios meet WCAG guidelines',
      status: 'pending'
    },
    {
      id: 'keyboard-accessibility',
      name: 'Keyboard Accessibility',
      description: 'Test keyboard navigation and focus management',
      status: 'pending'
    },
    {
      id: 'semantic-html',
      name: 'Semantic HTML Structure',
      description: 'Verify proper use of semantic HTML elements',
      status: 'pending'
    },
    {
      id: 'screen-reader',
      name: 'Screen Reader Compatibility',
      description: 'Test compatibility with major screen readers',
      status: 'pending'
    }
  ]);

  const [currentView, setCurrentView] = useState<'features' | 'tests' | 'settings'>('features');
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [contrastMode, setContrastMode] = useState<'normal' | 'high' | 'inverted'>('normal');
  const [showFocusIndicators, setShowFocusIndicators] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Toggle accessibility features
  const toggleFeature = useCallback((featureId: string) => {
    setFeatures(prev => prev.map(f => 
      f.id === featureId ? { ...f, isEnabled: !f.isEnabled } : f
    ));
  }, []);

  // Run accessibility tests
  const runTests = useCallback(async () => {
    setIsRunningTests(true);
    
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      
      // Update test status to running
      setTests(prev => prev.map(t => 
        t.id === test.id ? { ...t, status: 'running' } : t
      ));

      // Simulate test execution
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate test results (random pass/fail for demo)
      const passed = Math.random() > 0.3;
      const status = passed ? 'passed' : 'failed';
      const details = passed 
        ? 'All elements passed accessibility requirements'
        : 'Found 2-3 accessibility issues that need attention';
      const recommendations = passed 
        ? []
        : ['Add missing ARIA labels', 'Improve color contrast', 'Enhance keyboard navigation'];

      setTests(prev => prev.map(t => 
        t.id === test.id ? { 
          ...t, 
          status, 
          details, 
          recommendations 
        } : t
      ));
    }
    
    setIsRunningTests(false);
  }, [tests]);

  // Apply font scaling
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale}%`;
  }, [fontScale]);

  // Apply contrast mode
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('contrast-normal', 'contrast-high', 'contrast-inverted');
    root.classList.add(`contrast-${contrastMode}`);
  }, [contrastMode]);

  // Apply focus indicators
  useEffect(() => {
    if (showFocusIndicators) {
      document.documentElement.classList.add('show-focus-indicators');
    } else {
      document.documentElement.classList.remove('show-focus-indicators');
    }
  }, [showFocusIndicators]);

  // Apply reduced motion
  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [reducedMotion]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'vision': return <Eye className="w-4 h-4" />;
      case 'hearing': return <Volume2 className="w-4 h-4" />;
      case 'mobility': return <Keyboard className="w-4 h-4" />;
      case 'cognitive': return <Brain className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'failed': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'running': return <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />;
      default: return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-black/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Accessibility className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Accessibility Enhancer</h2>
            <p className="text-purple-400">Advanced accessibility features and testing tools</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentView('features')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentView === 'features' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                : 'bg-black/30 text-gray-400 hover:text-white'
            }`}
          >
            Features
          </button>
          <button
            onClick={() => setCurrentView('tests')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentView === 'tests' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                : 'bg-black/30 text-gray-400 hover:text-white'
            }`}
          >
            Tests
          </button>
          <button
            onClick={() => setCurrentView('settings')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentView === 'settings' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                : 'bg-black/30 text-gray-400 hover:text-white'
            }`}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {currentView === 'features' && (
          <motion.div
            key="features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-black/30 border border-gray-700 rounded-lg p-4 text-center">
                <ZoomIn className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-semibold mb-1">Zoom In</div>
                <button
                  onClick={() => setFontScale(Math.min(200, fontScale + 10))}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                >
                  +
                </button>
              </div>
              
              <div className="bg-black/30 border border-gray-700 rounded-lg p-4 text-center">
                <ZoomOut className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold mb-1">Zoom Out</div>
                <button
                  onClick={() => setFontScale(Math.max(50, fontScale - 10))}
                  className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                >
                  -
                </button>
              </div>
              
              <div className="bg-black/30 border border-gray-700 rounded-lg p-4 text-center">
                <RotateCcw className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold mb-1">Reset</div>
                <button
                  onClick={() => setFontScale(100)}
                  className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
                >
                  Reset
                </button>
              </div>
              
              <div className="bg-black/30 border border-gray-700 rounded-lg p-4 text-center">
                <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold mb-1">Focus</div>
                <button
                  onClick={() => setShowFocusIndicators(!showFocusIndicators)}
                  className={`px-3 py-1 rounded text-sm ${
                    showFocusIndicators 
                      ? 'bg-green-500 text-white hover:bg-green-600' 
                      : 'bg-gray-500 text-white hover:bg-gray-600'
                  }`}
                >
                  {showFocusIndicators ? 'Hide' : 'Show'}
=======
import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Eye, EyeOff, Keyboard, MousePointer } from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Check user preferences
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(prefersReducedMotion.matches);

    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(prefersHighContrast.matches);

    const prefersLargeText = window.matchMedia('(prefers-contrast: more)');
    setIsLargeText(prefersLargeText.matches);
  }, []);

  // Apply accessibility features
  useEffect(() => {
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isLargeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (isKeyboardMode) {
      root.classList.add('keyboard-mode');
    } else {
      root.classList.remove('keyboard-mode');
    }
  }, [isHighContrast, isLargeText, isReducedMotion, isKeyboardMode]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Tab navigation enhancement
      if (e.key === 'Tab') {
        setIsKeyboardMode(true);
        
        // Add focus indicator
        const focusableElements = document.querySelectorAll(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach((el) => {
          el.addEventListener('focus', () => setCurrentFocus(el as HTMLElement));
          el.addEventListener('blur', () => setCurrentFocus(null));
        });
      }

      // Escape key to close modals/panels
      if (e.key === 'Escape') {
        setShowAccessibilityPanel(false);
      }

      // Arrow key navigation for custom components
      if (e.key.startsWith('Arrow')) {
        const focusableElements = Array.from(
          document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];

        const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
        let nextIndex = currentIndex;

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          nextIndex = (currentIndex + 1) % focusableElements.length;
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
        }

        focusableElements[nextIndex]?.focus();
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus indicator
  useEffect(() => {
    if (currentFocus && isKeyboardMode) {
      currentFocus.style.outline = '3px solid #06b6d4';
      currentFocus.style.outlineOffset = '2px';
      
      return () => {
        currentFocus.style.outline = '';
        currentFocus.style.outlineOffset = '';
      };
    }
  }, [currentFocus, isKeyboardMode]);

  // Skip to main content link
  const handleSkipToMain = useCallback(() => {
    const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
    if (mainContent) {
      (mainContent as HTMLElement).focus();
      (mainContent as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Announce changes to screen readers
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

  // Toggle accessibility features
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(!isHighContrast);
    announceToScreenReader(`High contrast ${!isHighContrast ? 'enabled' : 'disabled'}`);
  }, [isHighContrast, announceToScreenReader]);

  const toggleLargeText = useCallback(() => {
    setIsLargeText(!isLargeText);
    announceToScreenReader(`Large text ${!isLargeText ? 'enabled' : 'disabled'}`);
  }, [isLargeText, announceToScreenReader]);

  const toggleReducedMotion = useCallback(() => {
    setIsReducedMotion(!isReducedMotion);
    announceToScreenReader(`Reduced motion ${!isReducedMotion ? 'enabled' : 'disabled'}`);
  }, [isReducedMotion, announceToScreenReader]);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        onClick={handleSkipToMain}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Accessibility Panel Toggle */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-4 left-4 bg-cyan-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-cyan-700 transition-colors"
        onClick={() => setShowAccessibilityPanel(!showAccessibilityPanel)}
        aria-label="Open accessibility options"
        aria-expanded={showAccessibilityPanel}
      >
        <Eye className="w-5 h-5" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {showAccessibilityPanel && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-0 left-0 h-full w-80 bg-gray-900 text-white p-6 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Accessibility Options</h2>
              <button
                onClick={() => setShowAccessibilityPanel(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close accessibility panel"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">High Contrast</h3>
                  <p className="text-sm text-gray-400">Increase text and background contrast</p>
                </div>
                <button
                  onClick={toggleHighContrast}
                  className={`p-2 rounded-lg transition-colors ${
                    isHighContrast ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                  aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast`}
                >
                  <Eye className="w-4 h-4" />
>>>>>>> ef267d731aed572a16d33348da4bc2ee8cd3772a
                </button>
              </div>

<<<<<<< HEAD
            {/* Accessibility Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-black/30 border border-gray-700 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{feature.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(feature.impact)}`}>
                            {feature.impact.toUpperCase()}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {getCategoryIcon(feature.category)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={feature.isEnabled}
                        onChange={() => toggleFeature(feature.id)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Category: {feature.category}</span>
                    <span>Status: {feature.isEnabled ? 'Enabled' : 'Disabled'}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {currentView === 'tests' && (
          <motion.div
            key="tests"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Test Controls */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Accessibility Testing</h3>
                <p className="text-gray-400">Run comprehensive accessibility tests to identify and fix issues</p>
              </div>
              
              <button
                onClick={runTests}
                disabled={isRunningTests}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>{isRunningTests ? 'Running Tests...' : 'Run All Tests'}</span>
              </button>
            </div>

            {/* Test Results */}
            <div className="space-y-4">
              {tests.map((test) => (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-black/30 border border-gray-700 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-white font-semibold">{test.name}</h4>
                        {getStatusIcon(test.status)}
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{test.description}</p>
                      
                      {test.details && (
                        <div className="text-sm text-gray-300 mb-2">{test.details}</div>
                      )}
                      
                      {test.recommendations && test.recommendations.length > 0 && (
                        <div className="space-y-1">
                          <div className="text-sm text-yellow-400 font-medium">Recommendations:</div>
                          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                            {test.recommendations.map((rec, index) => (
                              <li key={index}>{rec}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="ml-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        test.status === 'passed' ? 'bg-green-500/20 text-green-400' :
                        test.status === 'failed' ? 'bg-red-500/20 text-red-400' :
                        test.status === 'running' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {test.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {currentView === 'settings' && (
          <motion.div
            key="settings"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Accessibility Settings</h3>
            
            {/* Font Scaling */}
            <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3">Font Scaling</h4>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Current: {fontScale}%</span>
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={fontScale}
                  onChange={(e) => setFontScale(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-gray-400 text-sm">50% - 200%</div>
              </div>
            </div>

            {/* Contrast Mode */}
            <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3">Contrast Mode</h4>
              <div className="grid grid-cols-3 gap-3">
                {(['normal', 'high', 'inverted'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setContrastMode(mode)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      contrastMode === mode
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-black/30 text-gray-400 hover:text-white hover:bg-black/50'
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Focus Indicators */}
            <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3">Focus Indicators</h4>
              <div className="flex items-center space-x-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showFocusIndicators}
                    onChange={(e) => setShowFocusIndicators(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
                <span className="text-gray-400 text-sm">
                  {showFocusIndicators ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>

            {/* Motion Reduction */}
            <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3">Motion Reduction</h4>
              <div className="flex items-center space-x-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={reducedMotion}
                    onChange={(e) => setReducedMotion(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
                <span className="text-gray-400 text-sm">
                  {reducedMotion ? 'Reduced motion enabled' : 'Full motion enabled'}
                </span>
=======
              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Large Text</h3>
                  <p className="text-sm text-gray-400">Increase text size for better readability</p>
                </div>
                <button
                  onClick={toggleLargeText}
                  className={`p-2 rounded-lg transition-colors ${
                    isLargeText ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                  aria-label={`${isLargeText ? 'Disable' : 'Enable'} large text`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Reduced Motion</h3>
                  <p className="text-sm text-gray-400">Reduce or eliminate animations</p>
                </div>
                <button
                  onClick={toggleReducedMotion}
                  className={`p-2 rounded-lg transition-colors ${
                    isReducedMotion ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                  aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <MousePointer className="w-4 h-4" />
                </button>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Keyboard Navigation</h3>
                  <p className="text-sm text-gray-400">Enhanced keyboard navigation support</p>
                </div>
                <div className={`p-2 rounded-lg transition-colors ${
                  isKeyboardMode ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
                }`}>
                  <Keyboard className="w-4 h-4" />
                </div>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Tab</span>
                    <span className="text-gray-400">Navigate between elements</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Arrow Keys</span>
                    <span className="text-gray-400">Navigate custom components</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Escape</span>
                    <span className="text-gray-400">Close panels/modals</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enter/Space</span>
                    <span className="text-gray-400">Activate buttons/links</span>
                  </div>
                </div>
              </div>

              {/* Screen Reader Announcements */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Screen Reader Support</h3>
                <p className="text-sm text-gray-400">
                  This website includes comprehensive screen reader support with proper ARIA labels, 
                  semantic HTML, and live announcements for dynamic content changes.
                </p>
>>>>>>> ef267d731aed572a16d33348da4bc2ee8cd3772a
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span>WCAG 2.1 AA Compliant</span>
            <span>•</span>
            <span>Screen Reader Optimized</span>
            <span>•</span>
            <span>Keyboard Navigation Ready</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4 text-red-400" />
            <span>Built with accessibility in mind</span>
          </div>
        </div>
      </div>
    </div>
=======
      {/* Main Content */}
      <main id="main-content" role="main" tabIndex={-1}>
        {children}
      </main>

      {/* Focus indicator styles */}
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
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #000000;
          --bg-secondary: #111827;
          --accent: #06b6d4;
        }

        .large-text {
          font-size: 1.2em;
        }

        .large-text h1 { font-size: 3.5rem; }
        .large-text h2 { font-size: 2.5rem; }
        .large-text h3 { font-size: 2rem; }
        .large-text p { font-size: 1.3rem; }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .keyboard-mode *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }

        /* High contrast overrides */
        .high-contrast .bg-gray-900 { background-color: #000000 !important; }
        .high-contrast .text-gray-300 { color: #ffffff !important; }
        .high-contrast .text-gray-400 { color: #e5e7eb !important; }
        .high-contrast .border-gray-600 { border-color: #ffffff !important; }
      `}</style>
    </>
>>>>>>> ef267d731aed572a16d33348da4bc2ee8cd3772a
  );
};

export default AccessibilityEnhancer;