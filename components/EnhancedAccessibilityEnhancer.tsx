import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Keyboard, Mouse, 
  Smartphone, Monitor, Globe, Settings, CheckCircle, 
  AlertTriangle, Info, X, ChevronDown, ChevronUp,
  Accessibility, Contrast, Type, ZoomIn, ZoomOut
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  lineSpacing: 'tight' | 'normal' | 'loose';
  cursorSize: 'small' | 'medium' | 'large';
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  severity: 'high' | 'medium' | 'low';
  fix?: string;
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    colorBlindness: 'none',
    fontSize: 'medium',
    lineSpacing: 'normal',
    cursorSize: 'medium'
  });
  
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState<'settings' | 'issues' | 'help'>('settings');
  const [zoomLevel, setZoomLevel] = useState(100);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

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

    // Apply color blindness simulation
    document.documentElement.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (updatedSettings.colorBlindness !== 'none') {
      document.documentElement.classList.add(updatedSettings.colorBlindness);
    }

    // Apply font size
    document.documentElement.classList.remove('text-small', 'text-medium', 'text-large', 'text-extra-large');
    document.documentElement.classList.add(`text-${updatedSettings.fontSize}`);

    // Apply line spacing
    document.documentElement.classList.remove('line-tight', 'line-normal', 'line-loose');
    document.documentElement.classList.add(`line-${updatedSettings.lineSpacing}`);

    // Apply cursor size
    document.documentElement.classList.remove('cursor-small', 'cursor-medium', 'cursor-large');
    document.documentElement.classList.add(`cursor-${updatedSettings.cursorSize}`);

    // Store in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

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

  // Scan for accessibility issues
  const scanAccessibility = useCallback(async () => {
    setIsScanning(true);
    const newIssues: AccessibilityIssue[] = [];

    try {
      // Check for missing alt text on images
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          newIssues.push({
            id: `img-alt-${index}`,
            type: 'error',
            message: 'Image missing alt text or aria-label',
            element: img.tagName.toLowerCase(),
            severity: 'high',
            fix: 'Add alt text or aria-label attribute to image'
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
            id: `heading-structure-${index}`,
            type: 'warning',
            message: 'Heading structure skips levels',
            element: heading.tagName.toLowerCase(),
            severity: 'medium',
            fix: 'Ensure heading levels are sequential (h1 → h2 → h3)'
          });
        }
        previousLevel = level;
      });

      // Check for form labels
      const formInputs = document.querySelectorAll('input, select, textarea');
      formInputs.forEach((input, index) => {
        const id = input.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        
        if (!label && !ariaLabel && !input.getAttribute('aria-labelledby')) {
          newIssues.push({
            id: `form-label-${index}`,
            type: 'error',
            message: 'Form input missing label or aria-label',
            element: input.tagName.toLowerCase(),
            severity: 'high',
            fix: 'Add label element or aria-label attribute'
          });
        }
      });

      // Check for keyboard navigation
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
      interactiveElements.forEach((element, index) => {
        if (element instanceof HTMLElement) {
          if (element.tabIndex < 0 && !element.hasAttribute('aria-hidden')) {
            newIssues.push({
              id: `keyboard-nav-${index}`,
              type: 'warning',
              message: 'Interactive element not keyboard accessible',
              element: element.tagName.toLowerCase(),
              severity: 'medium',
              fix: 'Ensure element is keyboard accessible or add aria-hidden if decorative'
            });
          }
        }
      });

      // Check for color contrast (simplified)
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element, index) => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        // Basic contrast check (simplified)
        if (color === backgroundColor || color === 'transparent') {
          newIssues.push({
            id: `contrast-${index}`,
            type: 'warning',
            message: 'Potential color contrast issue',
            element: element.tagName.toLowerCase(),
            severity: 'medium',
            fix: 'Ensure sufficient color contrast between text and background'
          });
        }
      });

      // Check for ARIA attributes
      const ariaElements = document.querySelectorAll('[aria-*]');
      ariaElements.forEach((element, index) => {
        const ariaLabel = element.getAttribute('aria-label');
        const ariaLabelledby = element.getAttribute('aria-labelledby');
        
        if (ariaLabel && ariaLabelledby) {
          newIssues.push({
            id: `aria-conflict-${index}`,
            type: 'warning',
            message: 'Conflicting ARIA attributes',
            element: element.tagName.toLowerCase(),
            severity: 'medium',
            fix: 'Use either aria-label or aria-labelledby, not both'
          });
        }
      });

    } catch (error) {
      console.error('Accessibility scan error:', error);
    }

    setIssues(newIssues);
    setIsScanning(false);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    if (settings.keyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          focusableElementsRef.current = Array.from(focusableElements) as HTMLElement[];
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [settings.keyboardNavigation]);

  // Apply focus indicators
  useEffect(() => {
    if (settings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }
  }, [settings.focusIndicator]);

  // Zoom functionality
  const handleZoom = useCallback((direction: 'in' | 'out') => {
    const newZoom = direction === 'in' ? Math.min(zoomLevel + 25, 200) : Math.max(zoomLevel - 25, 50);
    setZoomLevel(newZoom);
    
    // Apply zoom to document
    document.body.style.transform = `scale(${newZoom / 100})`;
    document.body.style.transformOrigin = 'top left';
  }, [zoomLevel]);

  const resetZoom = useCallback(() => {
    setZoomLevel(100);
    document.body.style.transform = 'scale(1)';
  }, []);

  // Get issue count by type
  const getIssueCount = (type: string) => issues.filter(issue => issue.type === type).length;

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  // Get severity icon
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'medium': return <AlertTriangle className="w-4 h-4" />;
      case 'low': return <Info className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-7 h-7 mx-auto" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed left-0 top-0 h-full w-96 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-50 overflow-hidden"
            ref={containerRef}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Accessibility className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Accessibility</h2>
                  <p className="text-sm text-cyan-400">Enhanced user experience</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-cyan-500/20">
              {[
                { id: 'settings', label: 'Settings', icon: Settings },
                { id: 'issues', label: 'Issues', icon: AlertTriangle, count: issues.length },
                { id: 'help', label: 'Help', icon: Info }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 transition-colors ${
                    activeTab === tab.id
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                  aria-label={`Switch to ${tab.label} tab`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                  {tab.count !== undefined && tab.count > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {activeTab === 'settings' && (
                  <motion.div
                    key="settings"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    {/* Visual Enhancements */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                        <Eye className="w-5 h-5 text-cyan-400" />
                        <span>Visual Enhancements</span>
                      </h3>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.highContrast}
                            onChange={(e) => applySettings({ highContrast: e.target.checked })}
                            className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                          />
                          <span className="text-white">High Contrast Mode</span>
                        </label>
                        
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.largeText}
                            onChange={(e) => applySettings({ largeText: e.target.checked })}
                            className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                          />
                          <span className="text-white">Large Text</span>
                        </label>
                        
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.reducedMotion}
                            onChange={(e) => applySettings({ reducedMotion: e.target.checked })}
                            className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                          />
                          <span className="text-white">Reduced Motion</span>
                        </label>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                        <Keyboard className="w-5 h-5 text-cyan-400" />
                        <span>Navigation</span>
                      </h3>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.keyboardNavigation}
                            onChange={(e) => applySettings({ keyboardNavigation: e.target.checked })}
                            className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                          />
                          <span className="text-white">Enhanced Keyboard Navigation</span>
                        </label>
                        
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.focusIndicator}
                            onChange={(e) => applySettings({ focusIndicator: e.target.checked })}
                            className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                          />
                          <span className="text-white">Focus Indicators</span>
                        </label>
                      </div>
                    </div>

                    {/* Text Settings */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                        <Type className="w-5 h-5 text-cyan-400" />
                        <span>Text Settings</span>
                      </h3>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm text-gray-300 mb-2">Font Size</label>
                          <select
                            value={settings.fontSize}
                            onChange={(e) => applySettings({ fontSize: e.target.value as any })}
                            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          >
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="extra-large">Extra Large</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-300 mb-2">Line Spacing</label>
                          <select
                            value={settings.lineSpacing}
                            onChange={(e) => applySettings({ lineSpacing: e.target.value as any })}
                            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          >
                            <option value="tight">Tight</option>
                            <option value="normal">Normal</option>
                            <option value="loose">Loose</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Color Blindness */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                        <Contrast className="w-5 h-5 text-cyan-400" />
                        <span>Color Vision</span>
                      </h3>
                      
                      <div>
                        <select
                          value={settings.colorBlindness}
                          onChange={(e) => applySettings({ colorBlindness: e.target.value as any })}
                          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="none">Normal Vision</option>
                          <option value="protanopia">Protanopia (Red-Blind)</option>
                          <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                          <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                        </select>
                      </div>
                    </div>

                    {/* Zoom Controls */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                        <ZoomIn className="w-5 h-5 text-cyan-400" />
                        <span>Zoom Controls</span>
                      </h3>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleZoom('out')}
                          className="p-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                          aria-label="Zoom out"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        
                        <span className="text-white min-w-[60px] text-center">{zoomLevel}%</span>
                        
                        <button
                          onClick={() => handleZoom('in')}
                          className="p-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                          aria-label="Zoom in"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                        
                        <button
                          onClick={resetZoom}
                          className="px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'issues' && (
                  <motion.div
                    key="issues"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">Accessibility Issues</h3>
                      <button
                        onClick={scanAccessibility}
                        disabled={isScanning}
                        className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors border border-cyan-500/30 disabled:opacity-50"
                      >
                        {isScanning ? 'Scanning...' : 'Scan Now'}
                      </button>
                    </div>

                    {issues.length === 0 ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        <p className="text-gray-400">No accessibility issues found!</p>
                        <p className="text-sm text-gray-500 mt-2">Your page meets accessibility standards.</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {issues.map((issue) => (
                          <div
                            key={issue.id}
                            className={`p-4 rounded-lg border-l-4 ${
                              issue.type === 'error' ? 'border-red-500 bg-red-500/10' :
                              issue.type === 'warning' ? 'border-yellow-500 bg-yellow-500/10' :
                              'border-blue-500 bg-blue-500/10'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`mt-1 ${getSeverityColor(issue.severity)}`}>
                                {getSeverityIcon(issue.severity)}
                              </div>
                              <div className="flex-1">
                                <h5 className="font-semibold text-white mb-1">{issue.message}</h5>
                                {issue.element && (
                                  <p className="text-sm text-gray-300 mb-2">Element: {issue.element}</p>
                                )}
                                {issue.fix && (
                                  <p className="text-sm text-gray-400">{issue.fix}</p>
                                )}
                                <div className="mt-2">
                                  <span className={`text-xs px-2 py-1 rounded-full ${
                                    issue.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                                    issue.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-blue-500/20 text-blue-400'
                                  }`}>
                                    {issue.severity} priority
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'help' && (
                  <motion.div
                    key="help"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-white">Accessibility Help</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h4 className="font-medium text-white mb-2">Keyboard Navigation</h4>
                        <p className="text-sm text-gray-300 mb-2">Use Tab to navigate between interactive elements.</p>
                        <p className="text-sm text-gray-300">Use Enter or Space to activate buttons and links.</p>
                      </div>
                      
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h4 className="font-medium text-white mb-2">Screen Reader Support</h4>
                        <p className="text-sm text-gray-300 mb-2">All content is properly labeled for screen readers.</p>
                        <p className="text-sm text-gray-300">Use semantic HTML elements for better navigation.</p>
                      </div>
                      
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h4 className="font-medium text-white mb-2">Visual Enhancements</h4>
                        <p className="text-sm text-gray-300 mb-2">Enable high contrast mode for better visibility.</p>
                        <p className="text-sm text-gray-300">Adjust text size and spacing for comfortable reading.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;