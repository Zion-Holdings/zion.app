import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Type, Contrast, 
  MousePointer, Keyboard, Headphones, 
  Settings, X, Plus, Minus, RotateCcw, CheckCircle,
  AlertTriangle, Info, Maximize2, Minimize2, Accessibility
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
}

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  severity: 'low' | 'medium' | 'high';
  category: 'contrast' | 'navigation' | 'semantics' | 'keyboard' | 'screen-reader';
}

interface AccessibilityEnhancerProps {
  isVisible?: boolean;
  onToggle?: (visible: boolean) => void;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  isVisible = false, 
  onToggle 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindness: 'none',
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    wordSpacing: 0
  });
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [currentIssue, setCurrentIssue] = useState<AccessibilityIssue | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());


  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (newSettings.highContrast) {
      body.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      body.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text mode
    if (newSettings.largeText) {
      body.classList.add('large-text');
      root.style.setProperty('--font-size-base', '20px');
      root.style.setProperty('--line-height-base', '1.8');
    } else {
      body.classList.remove('large-text');
      root.style.removeProperty('--font-size-base');
      root.style.removeProperty('--line-height-base');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      body.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      body.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Focus indicators
    if (newSettings.focusIndicators) {
      body.classList.add('focus-visible');
      root.style.setProperty('--focus-outline', '3px solid #00ffff');
      root.style.setProperty('--focus-outline-offset', '2px');
    } else {
      body.classList.remove('focus-visible');
      root.style.removeProperty('--focus-outline');
      root.style.removeProperty('--focus-outline-offset');
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      body.classList.add(`colorblind-${newSettings.colorBlindness}`);
    } else {
      body.classList.remove('colorblind-protanopia', 'colorblind-deuteranopia', 'colorblind-tritanopia');
    }

    // Typography settings
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);
    root.style.setProperty('--word-spacing', `${newSettings.wordSpacing}px`);

    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load saved settings
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

  // Accessibility audit
  const runAccessibilityAudit = useCallback(async () => {
    setIsAuditing(true);
    const newIssues: AccessibilityIssue[] = [];

    try {
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          newIssues.push({
            type: 'error',
            message: 'Image missing alt text or aria-label',
            element: img,
            severity: 'medium',
            category: 'semantics'
          });
        }
      });

      // Check for proper heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          newIssues.push({
            type: 'warning',
            message: `Heading level skipped: ${previousLevel} → ${level}`,
            element: heading as HTMLElement,
            severity: 'medium',
            category: 'semantics'
          });
        }
        previousLevel = level;
      });

      // Check for proper form labels
      const formControls = document.querySelectorAll('input, select, textarea');
      formControls.forEach(control => {
        const id = control.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = control.getAttribute('aria-label');
        
        if (!label && !ariaLabel && !control.getAttribute('aria-labelledby')) {
          newIssues.push({
            type: 'error',
            message: 'Form control missing label or aria-label',
            element: control as HTMLElement,
            severity: 'high',
            category: 'semantics'
          });
        }
      });

      // Check for sufficient color contrast
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach(element => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        // Simple contrast check (this is a simplified version)
        if (color === backgroundColor) {
          newIssues.push({
            type: 'warning',
            message: 'Text and background colors may be too similar',
            element: element as HTMLElement,
            severity: 'medium',
            category: 'contrast'
          });
        }
      });

      // Check for keyboard navigation
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
      interactiveElements.forEach(element => {
        const tabIndex = element.getAttribute('tabindex');
        if (tabIndex === '-1' && !element.getAttribute('aria-hidden')) {
          newIssues.push({
            type: 'warning',
            message: 'Interactive element not keyboard accessible',
            element: element as HTMLElement,
            severity: 'medium',
            category: 'keyboard'
          });
        }
      });

      // Check for ARIA attributes
      const ariaElements = document.querySelectorAll('[aria-*]');
      ariaElements.forEach(element => {
        const ariaLabel = element.getAttribute('aria-label');
        const ariaLabelledby = element.getAttribute('aria-labelledby');
        
        if (ariaLabel && ariaLabelledby) {
          newIssues.push({
            type: 'warning',
            message: 'Element has both aria-label and aria-labelledby',
            element: element as HTMLElement,
            severity: 'low',
            category: 'semantics'
          });
        }
      });

      setIssues(newIssues);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Accessibility audit failed:', error);
    } finally {
      setIsAuditing(false);
    }
  }, []);

  // Navigate to next/previous issue
  const navigateIssue = useCallback((direction: 'next' | 'previous') => {
    if (issues.length === 0) return;

    const currentIndex = currentIssue ? issues.findIndex(issue => issue === currentIssue) : -1;
    let newIndex: number;

    if (direction === 'next') {
      newIndex = currentIndex < issues.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : issues.length - 1;
    }

    const newIssue = issues[newIndex];
    setCurrentIssue(newIssue);

    // Scroll to and highlight the element
    if (newIssue.element) {
      newIssue.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      newIssue.element.classList.add('accessibility-highlight');
      setTimeout(() => {
        newIssue.element?.classList.remove('accessibility-highlight');
      }, 3000);
    }
  }, [issues, currentIssue]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'Tab': {
          // Enhanced tab navigation
          e.preventDefault();
          const focusableElements = Array.from(
            document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])')
          ).filter(el => {
            const style = window.getComputedStyle(el);
            return style.display !== 'none' && style.visibility !== 'hidden';
          }) as HTMLElement[];

          const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
          const nextIndex = e.shiftKey 
            ? (currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1)
            : (currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0);

          focusableElements[nextIndex]?.focus();
          break;
        }

        case 'Escape': {
          // Close modals or return to main content
          const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
          const openModal = Array.from(modals).find(modal => 
            window.getComputedStyle(modal).display !== 'none'
          );
          
          if (openModal) {
            (openModal as HTMLElement).focus();
          } else {
            // Return to main content
            const main = document.querySelector('main, [role="main"]') as HTMLElement;
            main?.focus();
          }
          break;
        }

        case 'h': {
          // Navigate to next heading
          if (e.ctrlKey) {
            e.preventDefault();
            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')) as HTMLElement[];
            const currentHeading = headings.find(h => h === document.activeElement);
            const currentIndex = currentHeading ? headings.indexOf(currentHeading) : -1;
            const nextIndex = currentIndex < headings.length - 1 ? currentIndex + 1 : 0;
            headings[nextIndex]?.focus();
          }
          break;
        }

        case 'l': {
          // Navigate to next link
          if (e.ctrlKey) {
            e.preventDefault();
            const links = Array.from(document.querySelectorAll('a[href]')) as HTMLElement[];
            const currentLink = links.find(l => l === document.activeElement);
            const currentIndex = currentLink ? links.indexOf(currentLink) : -1;
            const nextIndex = currentIndex < links.length - 1 ? currentIndex + 1 : 0;
            links[nextIndex]?.focus();
          }
          break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  useEffect(() => {
    if (!settings.screenReader) return;

    const announce = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
    };

    // Announce page changes
    const observer = new (window as any).MutationObserver((mutations: any) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'H1' || element.tagName === 'H2') {
                announce(`New section: ${element.textContent}`);
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [settings.screenReader]);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleSetting = (key: keyof AccessibilitySettings, value?: AccessibilitySettings[keyof AccessibilitySettings]) => {
    const newSettings = { ...settings };
    if (value !== undefined) {
      (newSettings as any)[key] = value;
    } else {
      (newSettings as any)[key] = !(newSettings as any)[key];
    }
    applySettings(newSettings);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-black/90 backdrop-blur-xl border border-green-500/30 rounded-2xl shadow-2xl shadow-green-500/25 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-green-500/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse" />
            <h3 className="text-white font-semibold text-sm">Accessibility</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleExpanded}
              className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
              title={isExpanded ? 'Minimize' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => onToggle?.(false)}
              className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-64'}`}>
          <div className="p-4 space-y-4">
            {/* Quick Toggles */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`p-3 rounded-lg transition-colors ${
                  settings.highContrast 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
                title="High Contrast Mode"
              >
                <Contrast className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">High Contrast</span>
              </button>

              <button
                onClick={() => toggleSetting('largeText')}
                className={`p-3 rounded-lg transition-colors ${
                  settings.largeText 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
                title="Large Text Mode"
              >
                <Type className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">Large Text</span>
              </button>

              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`p-3 rounded-lg transition-colors ${
                  settings.reducedMotion 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
                title="Reduced Motion"
              >
                <RotateCcw className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">Reduced Motion</span>
              </button>

              <button
                onClick={() => toggleSetting('focusIndicators')}
                className={`p-3 rounded-lg transition-colors ${
                  settings.focusIndicators 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
                title="Focus Indicators"
              >
                <MousePointer className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">Focus Indicators</span>
              </button>
            </div>

            {/* Typography Controls */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <Type className="w-4 h-4 text-blue-400" />
                Typography
              </h4>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Font Size:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleSetting('fontSize', Math.max(12, settings.fontSize - 2))}
                      className="w-6 h-6 rounded bg-white/10 text-white/60 hover:bg-white/20"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-white font-medium w-8 text-center">{settings.fontSize}px</span>
                    <button
                      onClick={() => toggleSetting('fontSize', Math.min(32, settings.fontSize + 2))}
                      className="w-6 h-6 rounded bg-white/10 text-white/60 hover:bg-white/20"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Line Height:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleSetting('lineHeight', Math.max(1.2, settings.lineHeight - 0.1))}
                      className="w-6 h-6 rounded bg-white/10 text-white/60 hover:bg-white/20"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-white font-medium w-8 text-center">{settings.lineHeight}</span>
                    <button
                      onClick={() => toggleSetting('lineHeight', Math.min(2.5, settings.lineHeight + 0.1))}
                      className="w-6 h-6 rounded bg-white/10 text-white/60 hover:bg-white/20"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Blindness Options */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <Eye className="w-4 h-4 text-purple-400" />
                Color Vision
              </h4>
              <div className="flex gap-2">
                {(['none', 'protanopia', 'deuteranopia', 'tritanopia'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleSetting('colorBlindness', type)}
                    className={`px-3 py-2 text-xs rounded-lg transition-colors ${
                      settings.colorBlindness === type
                        ? 'bg-green-500 text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Accessibility Issues */}
            {issues.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  Issues Found: {issues.length}
                </h4>
                <div className="space-y-2 max-h-24 overflow-y-auto">
                  {issues.slice(0, 3).map((issue, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                        issue.severity === 'high' ? 'bg-red-400' :
                        issue.severity === 'medium' ? 'bg-yellow-400' : 'bg-blue-400'
                      }`} />
                      <span className="text-white/80 leading-relaxed">{issue.message}</span>
                    </div>
                  ))}
                  {issues.length > 3 && (
                    <div className="text-xs text-blue-400">
                      +{issues.length - 3} more issues
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Last Update */}
            <div className="text-center text-xs text-white/40">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3 border-t border-green-500/20 bg-white/5">
          <div className="flex gap-2">
            <button
              onClick={runAccessibilityAudit}
              disabled={isAuditing}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-green-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAuditing ? (
                <>
                  <Settings className="w-4 h-4 animate-spin" />
                  Auditing...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Run Audit
                </>
              )}
            </button>
            
            {issues.length > 0 && (
              <button
                onClick={() => navigateIssue('next')}
                className="px-3 py-2 bg-white/10 text-white/60 hover:bg-white/20 rounded-lg transition-colors"
                title="Next Issue"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AccessibilityEnhancer;