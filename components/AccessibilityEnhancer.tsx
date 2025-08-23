import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Volume2, 
  Contrast,
  Type,
  Accessibility,
  Info
} from 'lucide-react';

// Define FocusEvent type for DOM events
type FocusEvent = Event & {
  target: EventTarget | null;
};

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  showPanel?: boolean;
  autoOptimize?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  showPanel = false,
  autoOptimize = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: false
  });
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  const focusRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '';
      root.style.lineHeight = '';
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }
    
    // High saturation
    if (newSettings.highSaturation) {
      root.style.filter = 'saturate(1.5) contrast(1.2)';
    } else {
      root.style.filter = '';
    }
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #06b6d4');
    } else {
      root.style.removeProperty('--focus-ring');
    }
    
    setSettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    // Announce changes to screen readers
    announceToScreenReader('Accessibility settings updated');
  }, []);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch (e) {
        // console.log('Failed to parse saved accessibility settings');
      }
    }
  }, [applySettings]);


  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    // Create live region for screen readers
    if (!announcementRef.current) {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
      announcementRef.current = liveRegion;
    }
    
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
    }
    
    // Remove announcement after a delay
    setTimeout(() => {
      // Cleanup handled by component unmount
    }, 5000);
  }, []);

  // Focus management
  const handleFocusChange = useCallback((e: FocusEvent) => {
    const target = e.target as HTMLElement;
    if (target && target.tagName) {
      // Track focus for accessibility
      setCurrentFocus(target);
      
      // Announce focus changes to screen reader
      if (settings.screenReader && target.getAttribute('aria-label')) {
        announceToScreenReader(target.getAttribute('aria-label') || 'Element focused');
      }
    }
  }, [settings.screenReader, announceToScreenReader]);

  // Keyboard navigation enhancements
  const handleKeyDown = useCallback(() => {
    // Tab navigation detected
  }, []);

  // Auto-optimize accessibility
  useEffect(() => {
    if (!autoOptimize) return;
    
    const checkAccessibility = () => {
      const issues: string[] = [];
      
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt) {
          issues.push(`Image missing alt text: ${img.src}`);
        }
      });

      // Check heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          issues.push(`Heading structure issue: ${heading.tagName} follows ${previousLevel > 0 ? `h${previousLevel}` : 'no heading'}`);
        }
        previousLevel = level;
      });

      // Check form labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        const id = input.getAttribute('id');
        if (id && !document.querySelector(`label[for="${id}"]`)) {
          issues.push(`Input missing label: ${id}`);
        }
      });

      if (issues.length > 0) {
        announceToScreenReader(`Found ${issues.length} accessibility issues`);
      } else {
        announceToScreenReader('No accessibility issues found');
      }
    };
    
    // Run check after page load
    const timer = setTimeout(checkAccessibility, 2000);
    return () => clearTimeout(timer);
  }, [autoOptimize, announceToScreenReader]);

  // Set up event listeners
  useEffect(() => {
    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleFocusChange, handleKeyDown]);

  // Quick accessibility shortcuts
  const toggleHighContrast = () => {
    applySettings({ ...settings, highContrast: !settings.highContrast });
  };

  const toggleLargeText = () => {
    applySettings({ ...settings, largeText: !settings.largeText });
  };

  const toggleReducedMotion = () => {
    applySettings({ ...settings, reducedMotion: !settings.reducedMotion });
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      focusIndicator: true,
      screenReader: false
    };
    applySettings(defaultSettings);
  };

  if (!showPanel && !isPanelOpen) {
    return null;
  }

  return (
    <>
      {/* Accessibility Panel */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 w-96 shadow-2xl z-50"
        role="dialog"
        aria-labelledby="accessibility-panel-title"
        aria-describedby="accessibility-panel-description"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 id="accessibility-panel-title" className="text-xl font-semibold text-white flex items-center">
            <Accessibility className="w-6 h-6 mr-2 text-cyan-400" />
            Accessibility
          </h2>
          <button
            onClick={() => setIsPanelOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close accessibility panel"
          >
            ×
          </button>
        </div>
        
        <div id="accessibility-panel-description" className="text-sm text-gray-400 mb-6">
          Customize your viewing experience with these accessibility options
        </div>
        
        <div className="space-y-4">
          {/* High Contrast */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Contrast className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">High Contrast</div>
                <div className="text-sm text-gray-400">Enhanced color contrast</div>
              </div>
            </div>
            <button
              onClick={toggleHighContrast}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
              role="switch"
              aria-checked={settings.highContrast}
              aria-label="Toggle high contrast"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          {/* Large Text */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Type className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Large Text</div>
                <div className="text-sm text-gray-400">Increase text size</div>
              </div>
            </div>
            <button
              onClick={toggleLargeText}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
              role="switch"
              aria-checked={settings.largeText}
              aria-label="Toggle large text"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.largeText ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          {/* Reduced Motion */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Eye className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Reduced Motion</div>
                <div className="text-sm text-gray-400">Minimize animations</div>
              </div>
            </div>
            <button
              onClick={toggleReducedMotion}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
              role="switch"
              aria-checked={settings.reducedMotion}
              aria-label="Toggle reduced motion"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          {/* Screen Reader */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Volume2 className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-medium">Screen Reader</div>
                <div className="text-sm text-gray-400">Enhanced announcements</div>
              </div>
            </div>
            <button
              onClick={() => applySettings({ ...settings, screenReader: !settings.screenReader })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.screenReader ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
              role="switch"
              aria-checked={settings.screenReader}
              aria-label="Toggle screen reader enhancements"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
        
        {/* Reset Button */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <button
            onClick={resetSettings}
            className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
          >
            Reset to Default
          </button>
        </div>
      </motion.div>

      {/* Quick Access Button */}
      {!isPanelOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsPanelOpen(true)}
          className="fixed bottom-4 left-4 p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 z-40"
          aria-label="Open accessibility panel"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}

      {/* Focus Indicator */}
      {currentFocus && settings.focusIndicator && (
        <div
          ref={focusRef}
          className="fixed pointer-events-none z-50 border-2 border-cyan-400 rounded transition-all duration-200"
          style={{
            top: currentFocus.offsetTop - 2,
            left: currentFocus.offsetLeft - 2,
            width: currentFocus.offsetWidth + 4,
            height: currentFocus.offsetHeight + 4
          }}
        />
      )}

      {/* Screen Reader Announcements */}
      <div
        ref={announcementRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />
      
      {/* Visual Announcements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-4 right-4 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 max-w-sm"
      >
        <div className="flex items-center space-x-2">
          <Info className="w-4 h-4" />
          <span className="text-sm">Accessibility settings updated</span>
        </div>
      </motion.div>
    </>
  );
};

export default AccessibilityEnhancer;