import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Type, Palette, 
  MousePointer, ArrowUp, Settings, X, Check
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
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
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
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
      root.style.setProperty('--focus-ring', '2px solid #06b6d4');
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
      highSaturation: false,
      focusIndicator: true,
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

export default AccessibilityEnhancer;