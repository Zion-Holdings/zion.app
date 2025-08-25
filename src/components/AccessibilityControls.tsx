import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  RotateCcw,
  Keyboard,
  MousePointer,
  Accessibility,
  HelpCircle
} from 'lucide-react';

interface AccessibilityControlsProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function AccessibilityControls({ position = 'bottom-right' }: AccessibilityControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mutedAudio, setMutedAudio] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Alt + H for high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        setHighContrast(prev => !prev);
      }
      
      // Alt + L for large text
      if (event.altKey && event.key === 'l') {
        event.preventDefault();
        setLargeText(prev => !prev);
      }
      
      // Alt + M for reduced motion
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        setReducedMotion(prev => !prev);
      }
      
      // Alt + Z for zoom reset
      if (event.altKey && event.key === 'z') {
        event.preventDefault();
        setZoomLevel(100);
      }
      
      // Escape to close panel
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    if (highContrast) {
      root.style.setProperty('--high-contrast', '1');
      root.classList.add('high-contrast');
    } else {
      root.style.setProperty('--high-contrast', '0');
      root.classList.remove('high-contrast');
    }
    
    if (largeText) {
      root.style.setProperty('--text-scale', '1.2');
      root.classList.add('large-text');
    } else {
      root.style.setProperty('--text-scale', '1');
      root.classList.remove('large-text');
    }
    
    if (reducedMotion) {
      root.style.setProperty('--reduced-motion', '1');
      root.classList.add('reduced-motion');
    } else {
      root.style.setProperty('--reduced-motion', '0');
      root.classList.remove('reduced-motion');
    }
    
    // Apply zoom
    root.style.setProperty('--zoom-level', `${zoomLevel / 100}`);
  }, [highContrast, largeText, reducedMotion, zoomLevel]);

  // Reset all settings
  const resetAll = () => {
    setHighContrast(false);
    setLargeText(false);
    setReducedMotion(false);
    setMutedAudio(false);
    setZoomLevel(100);
  };

  // Save settings to localStorage
  const saveSettings = () => {
    const settings = {
      highContrast,
      largeText,
      reducedMotion,
      mutedAudio,
      zoomLevel
    };
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  };

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const settings = JSON.parse(saved);
        setHighContrast(settings.highContrast || false);
        setLargeText(settings.largeText || false);
        setReducedMotion(settings.reducedMotion || false);
        setMutedAudio(settings.mutedAudio || false);
        setZoomLevel(settings.zoomLevel || 100);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Auto-save settings
  useEffect(() => {
    saveSettings();
  }, [highContrast, largeText, reducedMotion, mutedAudio, zoomLevel]);

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  const keyboardShortcuts = [
    { key: 'Alt + A', description: 'Toggle accessibility panel' },
    { key: 'Alt + H', description: 'Toggle high contrast' },
    { key: 'Alt + L', description: 'Toggle large text' },
    { key: 'Alt + M', description: 'Toggle reduced motion' },
    { key: 'Alt + Z', description: 'Reset zoom' },
    { key: 'Escape', description: 'Close panel' }
  ];

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-zion-blue-dark border-2 border-zion-cyan/50 rounded-full flex items-center justify-center text-zion-cyan hover:bg-zion-cyan/20 hover:border-zion-cyan transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
        aria-label="Accessibility controls"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div 
          className="absolute bottom-16 right-0 w-80 bg-zion-blue-dark border border-zion-cyan/30 rounded-lg shadow-2xl backdrop-blur-sm"
          role="dialog"
          aria-label="Accessibility settings"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Accessibility className="w-5 h-5 mr-2 text-zion-cyan" />
              Accessibility
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Contrast className="w-5 h-5 text-zion-cyan" />
                <div>
                  <label htmlFor="high-contrast" className="text-white font-medium">
                    High Contrast
                  </label>
                  <p className="text-sm text-gray-400">Enhanced color contrast</p>
                </div>
              </div>
              <button
                id="high-contrast"
                onClick={() => setHighContrast(!highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                  highContrast ? 'bg-zion-cyan' : 'bg-gray-600'
                }`}
                aria-pressed={highContrast}
                aria-label="Toggle high contrast mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Type className="w-5 h-5 text-zion-cyan" />
                <div>
                  <label htmlFor="large-text" className="text-white font-medium">
                    Large Text
                  </label>
                  <p className="text-sm text-gray-400">Increase text size</p>
                </div>
              </div>
              <button
                id="large-text"
                onClick={() => setLargeText(!largeText)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                  largeText ? 'bg-zion-cyan' : 'bg-gray-600'
                }`}
                aria-pressed={largeText}
                aria-label="Toggle large text mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MousePointer className="w-5 h-5 text-zion-cyan" />
                <div>
                  <label htmlFor="reduced-motion" className="text-white font-medium">
                    Reduced Motion
                  </label>
                  <p className="text-sm text-gray-400">Minimize animations</p>
                </div>
              </div>
              <button
                id="reduced-motion"
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                  reducedMotion ? 'bg-zion-cyan' : 'bg-gray-600'
                }`}
                aria-pressed={reducedMotion}
                aria-label="Toggle reduced motion mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Zoom Control */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <ZoomIn className="w-5 h-5 text-zion-cyan" />
                <label className="text-white font-medium">Zoom Level</label>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
                  className="p-2 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-white min-w-[3rem] text-center">{zoomLevel}%</span>
                <button
                  onClick={() => setZoomLevel(Math.min(200, zoomLevel + 10))}
                  className="p-2 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="space-y-2">
              <button
                onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
                className="flex items-center space-x-3 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                aria-expanded={showKeyboardShortcuts}
              >
                <Keyboard className="w-5 h-5" />
                <span className="font-medium">Keyboard Shortcuts</span>
                <HelpCircle className="w-4 h-4" />
              </button>
              
              {showKeyboardShortcuts && (
                <div className="ml-8 space-y-2 text-sm">
                  {keyboardShortcuts.map((shortcut, index) => (
                    <div key={index} className="flex justify-between text-gray-300">
                      <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">{shortcut.key}</kbd>
                      <span>{shortcut.description}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reset Button */}
            <button
              onClick={resetAll}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
              aria-label="Reset all accessibility settings"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}