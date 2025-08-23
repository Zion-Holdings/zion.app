import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Type, Palette, 
  MousePointer, ArrowUp, Settings, X, Check
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  soundEffects: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showUI?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showUI = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'medium',
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    soundEffects: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Performance optimization: Memoized settings application
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--motion-reduced', 'true');
      root.classList.add('motion-reduced');
    } else {
      root.style.removeProperty('--motion-reduced');
      root.classList.remove('motion-reduced');
    }

    // Apply high saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation', '1.5');
      root.style.filter = 'saturate(1.5)';
    } else {
      root.style.removeProperty('--saturation');
      root.style.filter = 'none';
    }

    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-visible', '2px solid #3b82f6');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // Apply sound effects
    if (newSettings.soundEffects) {
      root.style.setProperty('--sound-enabled', 'true');
    } else {
      root.style.setProperty('--sound-enabled', 'false');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, [enabled]);

  // Performance optimization: Load saved settings
  useEffect(() => {
    if (!enabled) return;

    try {
      const saved = localStorage.getItem('accessibility-settings');
      if (saved) {
        const savedSettings = JSON.parse(saved);
        setSettings(savedSettings);
        applySettings(savedSettings);
      }
    } catch (error) {
      console.warn('Failed to load accessibility settings:', error);
    }
  }, [enabled, applySettings]);

  // Performance optimization: Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Performance optimization: Keyboard shortcuts
  useEffect(() => {
    if (!enabled || !showUI) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [enabled, showUI]);

  // Performance optimization: Auto-hide UI
  useEffect(() => {
    if (!enabled || !showUI || !isVisible) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [enabled, showUI, isVisible]);

  // Performance optimization: Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  // Performance optimization: Reset settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      `}</style>
    </>
=======
      soundEffects: false
    };
    setSettings(defaultSettings);
  }, []);

  if (!enabled || !showUI || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl shadow-cyan-500/20 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-cyan-400">Accessibility</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close accessibility panel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-3">
        {/* High Contrast */}
        <button
          onClick={() => toggleSetting('highContrast')}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
            settings.highContrast 
              ? 'bg-cyan-500/20 border border-cyan-400/50' 
              : 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/30'
          }`}
          aria-pressed={settings.highContrast}
        >
          <div className="flex items-center space-x-3">
            <Palette className={`w-4 h-4 ${settings.highContrast ? 'text-cyan-400' : 'text-gray-400'}`} />
            <span className="text-sm text-white">High Contrast</span>
          </div>
          {settings.highContrast && <Check className="w-4 h-4 text-cyan-400" />}
        </button>

        {/* Large Text */}
        <button
          onClick={() => toggleSetting('largeText')}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
            settings.largeText 
              ? 'bg-cyan-500/20 border border-cyan-400/50' 
              : 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/30'
          }`}
          aria-pressed={settings.largeText}
        >
          <div className="flex items-center space-x-3">
            <Type className={`w-4 h-4 ${settings.largeText ? 'text-cyan-400' : 'text-gray-400'}`} />
            <span className="text-sm text-white">Large Text</span>
          </div>
          {settings.largeText && <Check className="w-4 h-4 text-cyan-400" />}
        </button>

        {/* Reduced Motion */}
        <button
          onClick={() => toggleSetting('reducedMotion')}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
            settings.reducedMotion 
              ? 'bg-cyan-500/20 border border-cyan-400/50' 
              : 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/30'
          }`}
          aria-pressed={settings.reducedMotion}
        >
          <div className="flex items-center space-x-3">
            <MousePointer className={`w-4 h-4 ${settings.reducedMotion ? 'text-cyan-400' : 'text-gray-400'}`} />
            <span className="text-sm text-white">Reduced Motion</span>
          </div>
          {settings.reducedMotion && <Check className="w-4 h-4 text-cyan-400" />}
        </button>

        {/* High Saturation */}
        <button
          onClick={() => toggleSetting('highSaturation')}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
            settings.highSaturation 
              ? 'bg-cyan-500/20 border border-cyan-400/50' 
              : 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/30'
          }`}
          aria-pressed={settings.highSaturation}
        >
          <div className="flex items-center space-x-3">
            <Eye className={`w-4 h-4 ${settings.highSaturation ? 'text-cyan-400' : 'text-gray-400'}`} />
            <span className="text-sm text-white">High Saturation</span>
          </div>
          {settings.highSaturation && <Check className="w-4 h-4 text-cyan-400" />}
        </button>

        {/* Focus Indicator */}
        <button
          onClick={() => toggleSetting('focusIndicator')}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
            settings.focusIndicator 
              ? 'bg-cyan-500/20 border border-cyan-400/50' 
              : 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/30'
          }`}
          aria-pressed={settings.focusIndicator}
        >
          <div className="flex items-center space-x-3">
            <ArrowUp className={`w-4 h-4 ${settings.focusIndicator ? 'text-cyan-400' : 'text-gray-400'}`} />
            <span className="text-sm text-white">Focus Indicator</span>
          </div>
          {settings.focusIndicator && <Check className="w-4 h-4 text-cyan-400" />}
        </button>

        {/* Sound Effects */}
        <button
          onClick={() => toggleSetting('soundEffects')}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
            settings.soundEffects 
              ? 'bg-cyan-500/20 border border-cyan-400/50' 
              : 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/30'
          }`}
          aria-pressed={settings.soundEffects}
        >
          <div className="flex items-center space-x-3">
            {settings.soundEffects ? (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-gray-400" />
            )}
            <span className="text-sm text-white">Sound Effects</span>
          </div>
          {settings.soundEffects && <Check className="w-4 h-4 text-cyan-400" />}
        </button>
      </div>

      {/* Reset Button */}
      <button
        onClick={resetSettings}
        className="w-full mt-4 p-2 text-xs text-gray-400 hover:text-white transition-colors border border-gray-700/50 hover:border-cyan-400/30 rounded-lg"
      >
        Reset to Defaults
      </button>
      
      <div className="mt-3 pt-2 border-t border-gray-700 text-xs text-gray-400">
        Press Ctrl+Shift+A to toggle • Auto-hides in 15s
      </div>
    </div>
  );
};

// Keyboard Navigation Hook
export const useKeyboardNavigation = (items: string[], onSelect: (item: string) => void) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev => (prev + 1) % items.length);
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex(prev => (prev - 1 + items.length) % items.length);
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          onSelect(items[selectedIndex]);
          break;
        case 'Home':
          event.preventDefault();
          setSelectedIndex(0);
          break;
        case 'End':
          event.preventDefault();
          setSelectedIndex(items.length - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onSelect]);

  return { selectedIndex, setSelectedIndex };
};

// Focus Trap Hook
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }, [isActive]);

  return containerRef;
};

// Screen Reader Announcement Hook
export const useScreenReaderAnnouncement = () => {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return announce;
};

// Skip Link Component
export const SkipLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
  >
    {children}
  </a>
);

// Screen Reader Only Text
export const SrOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// Export the main provider component as default
export default AccessibilityProvider;