import React, { useState, useEffect, useCallback, FocusEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, Keyboard, MousePointer,
  Accessibility, X, Contrast, Type, Ear
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  theme: 'light' | 'dark' | 'auto';
  fontSize: 'normal' | 'large' | 'xlarge';
  lineSpacing: 'normal' | 'relaxed' | 'very-relaxed';
  cursorSize: 'normal' | 'large' | 'xlarge';
  soundEffects: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicators: true,
    colorBlindMode: 'none',
    theme: 'auto',
    fontSize: 'normal',
    lineSpacing: 'normal',
    cursorSize: 'normal',
    soundEffects: false
  });
  const [isOpen, setIsOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    root.classList.toggle('high-contrast', newSettings.highContrast);
    
    // Reduced motion
    root.classList.toggle('reduced-motion', newSettings.reducedMotion);
    
    // Large text
    root.classList.remove('large-text', 'xlarge-text');
    if (newSettings.fontSize === 'large') root.classList.add('large-text');
    if (newSettings.fontSize === 'xlarge') root.classList.add('xlarge-text');
    
    // Line spacing
    root.classList.remove('relaxed-spacing', 'very-relaxed-spacing');
    if (newSettings.lineSpacing === 'relaxed') root.classList.add('relaxed-spacing');
    if (newSettings.lineSpacing === 'very-relaxed') root.classList.add('very-relaxed-spacing');
    
    // Cursor size
    root.classList.remove('large-cursor', 'xlarge-cursor');
    if (newSettings.cursorSize === 'large') root.classList.add('large-cursor');
    if (newSettings.cursorSize === 'xlarge') root.classList.add('xlarge-cursor');
    
    // Color blind modes
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlindMode !== 'none') {
      root.classList.add(newSettings.colorBlindMode);
    }
    
    // Theme
    root.classList.remove('light-theme', 'dark-theme');
    if (newSettings.theme !== 'auto') {
      root.classList.add(`${newSettings.theme}-theme`);
    }
    
    // Focus indicators
    root.classList.toggle('focus-indicators', newSettings.focusIndicators);
    
    // Store settings in localStorage
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
        // Failed to load accessibility settings
      }
    }
  }, [applySettings]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip if target is an input, textarea, or select
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }

      // Enhanced keyboard shortcuts
      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation with visual feedback
          if (e.shiftKey) {
            // Shift+Tab - previous element
            announceToScreenReader('Navigating to previous element');
          } else {
            // Tab - next element
            announceToScreenReader('Navigating to next element');
          }
          break;
        
        case 'Enter':
        case ' ':
          // Enter or Space - activate element
          if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.getAttribute('role') === 'button') {
            announceToScreenReader(`Activating ${target.textContent || 'element'}`);
          }
          break;
        
        case 'Escape':
          // Escape - close modals, dropdowns
          announceToScreenReader('Closing current element');
          break;
        
        case 'h':
        case 'H': {
          // H - go to next heading
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            navigateToNextHeading();
          }
          break;
        }
        
        case 'l':
        case 'L': {
          // L - go to next link
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            navigateToNextLink();
          }
          break;
        }
        
        case 'm':
        case 'M': {
          // M - go to main content
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            navigateToMainContent();
          }
          break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      setCurrentFocus(target);
      
      // Announce focus changes to screen reader
      if (settings.screenReader) {
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('title') || 
                     target.textContent || 
                     target.tagName.toLowerCase();
        announceToScreenReader(`Focused on ${label}`);
      }
      
      // Enhanced focus indicators
      if (settings.focusIndicators) {
        target.style.outline = '3px solid #0891b2';
        target.style.outlineOffset = '2px';
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (settings.focusIndicators) {
        target.style.outline = '';
        target.style.outlineOffset = '';
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [settings.screenReader, settings.focusIndicators]);

  // Navigation functions
  const navigateToNextHeading = useCallback(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const currentIndex = headings.findIndex(h => h === currentFocus);
    const nextIndex = (currentIndex + 1) % headings.length;
    const nextHeading = headings[nextIndex] as HTMLElement;
    
    if (nextHeading) {
      nextHeading.focus();
      nextHeading.scrollIntoView({ behavior: 'smooth', block: 'center' });
      announceToScreenReader(`Navigated to ${nextHeading.textContent}`);
    }
  }, [currentFocus]);

  const navigateToNextLink = useCallback(() => {
    const links = Array.from(document.querySelectorAll('a[href]'));
    const currentIndex = links.findIndex(l => l === currentFocus);
    const nextIndex = (currentIndex + 1) % links.length;
    const nextLink = links[nextIndex] as HTMLElement;
    
    if (nextLink) {
      nextLink.focus();
      nextLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
      announceToScreenReader(`Navigated to link: ${nextLink.textContent}`);
    }
  }, [currentFocus]);

  const navigateToMainContent = useCallback(() => {
    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main) {
      (main as HTMLElement).focus();
      main.scrollIntoView({ behavior: 'smooth', block: 'start' });
      announceToScreenReader('Navigated to main content');
    }
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;
    
    // Create live region for announcements
    let liveRegion = document.getElementById('accessibility-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'accessibility-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = message;
    
    // Add to announcements list
    setAnnouncements(prev => [...prev.slice(-4), message]);
  }, [settings.screenReader]);

  // Sound effects
  const playSoundEffect = useCallback((type: 'focus' | 'error' | 'success') => {
    if (!settings.soundEffects) return;
    
    // Simple sound effects using Web Audio API
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      switch (type) {
        case 'focus':
          oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
          break;
        case 'error':
          oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
          break;
        case 'success':
          oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
          break;
      }
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      // Could not play sound effect
    }
  }, [settings.soundEffects]);

  // Update setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: AccessibilitySettings[keyof AccessibilitySettings]) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    
    // Play sound effect for certain changes
    if (key === 'highContrast' || key === 'largeText' || key === 'reducedMotion') {
      playSoundEffect('success');
    }
  }, [settings, playSoundEffect]);

  // Quick accessibility shortcuts
  const quickActions = [
    { label: 'Toggle High Contrast', action: () => updateSetting('highContrast', !settings.highContrast) },
    { label: 'Toggle Large Text', action: () => updateSetting('fontSize', settings.fontSize === 'normal' ? 'large' : 'normal') },
    { label: 'Toggle Reduced Motion', action: () => updateSetting('reducedMotion', !settings.reducedMotion) },
    { label: 'Toggle Focus Indicators', action: () => updateSetting('focusIndicators', !settings.focusIndicators) },
  ];

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 z-50 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-32 right-4 z-50 bg-gray-900/95 backdrop-blur-sm border border-purple-400/30 rounded-2xl shadow-2xl w-96 max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Accessibility className="w-5 h-5" />
                  <h3 className="font-semibold">Accessibility</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1 rounded transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Quick Actions */}
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-400">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="bg-gray-800/50 hover:bg-gray-700/50 p-2 rounded text-sm text-white transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual Settings */}
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-400 flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Visual Settings</span>
                </h4>
                
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => updateSetting('highContrast', e.target.checked)}
                      className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-white">High Contrast</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={(e) => updateSetting('largeText', e.target.checked)}
                      className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-white">Large Text</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicators}
                      onChange={(e) => updateSetting('focusIndicators', e.target.checked)}
                      className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-white">Focus Indicators</span>
                  </label>
                </div>
              </div>

              {/* Motion Settings */}
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-400 flex items-center space-x-2">
                  <MousePointer className="w-4 h-4" />
                  <span>Motion & Interaction</span>
                </h4>
                
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                      className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-white">Reduced Motion</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                      className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-white">Enhanced Keyboard Navigation</span>
                  </label>
                </div>
              </div>

              {/* Screen Reader */}
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-400 flex items-center space-x-2">
                  <Ear className="w-4 h-4" />
                  <span>Screen Reader</span>
                </h4>
                
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={(e) => updateSetting('screenReader', e.target.checked)}
                      className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-white">Enhanced Screen Reader Support</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.soundEffects}
                      onChange={(e) => updateSetting('soundEffects', e.target.checked)}
                      className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-white">Sound Effects</span>
                  </label>
                </div>
              </div>

              {/* Font Size */}
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-400 flex items-center space-x-2">
                  <Type className="w-4 h-4" />
                  <span>Text Size</span>
                </h4>
                
                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'large', 'xlarge'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting('fontSize', size)}
                      className={`p-2 rounded text-sm transition-colors ${
                        settings.fontSize === size
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      {size === 'normal' ? 'Normal' : size === 'large' ? 'Large' : 'X-Large'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Blind Mode */}
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-400 flex items-center space-x-2">
                  <Contrast className="w-4 h-4" />
                  <span>Color Vision</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-2">
                  {(['none', 'protanopia', 'deuteranopia', 'tritanopia'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => updateSetting('colorBlindMode', mode)}
                      className={`p-2 rounded text-sm transition-colors ${
                        settings.colorBlindMode === mode
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      {mode === 'none' ? 'Normal' : mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-400 flex items-center space-x-2">
                  <Keyboard className="w-4 h-4" />
                  <span>Keyboard Shortcuts</span>
                </h4>
                
                <div className="text-xs text-gray-400 space-y-1">
                  <div>Ctrl/Cmd + H: Next heading</div>
                  <div>Ctrl/Cmd + L: Next link</div>
                  <div>Ctrl/Cmd + M: Main content</div>
                  <div>Tab: Navigate elements</div>
                  <div>Escape: Close/back</div>
                </div>
              </div>

              {/* Recent Announcements */}
              {announcements.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-400">Recent Announcements</h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="bg-gray-800/20 border border-purple-500/30 p-2 rounded text-sm text-purple-300">
                        {announcement}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children with accessibility enhancements */}
      {children}
    </>
  );
};

export default AccessibilityEnhancer;