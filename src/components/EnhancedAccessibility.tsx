import React, { useState, useEffect, useCallback } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  RotateCcw,
  Accessibility,
  Keyboard,
  MousePointer
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  zoomLevel: number;
  focusIndicator: boolean;
  screenReaderMode: boolean;
}

const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    soundEnabled: true,
    zoomLevel: 100,
    focusIndicator: true,
    screenReaderMode: false
  });

  const [announcement, setAnnouncement] = useState('');

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Zoom level
    root.style.fontSize = `${newSettings.zoomLevel}%`;
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Screen reader mode
    if (newSettings.screenReaderMode) {
      root.setAttribute('aria-live', 'polite');
      root.setAttribute('aria-atomic', 'true');
    } else {
      root.removeAttribute('aria-live');
      root.removeAttribute('aria-atomic');
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback((newSettings: AccessibilitySettings) => {
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
    setSettings(newSettings);
  }, [applySettings]);

  // Update individual setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    saveSettings(newSettings);
    
    // Announce changes for screen readers
    const announcements = {
      highContrast: value ? 'High contrast mode enabled' : 'High contrast mode disabled',
      largeText: value ? 'Large text mode enabled' : 'Large text mode disabled',
      reducedMotion: value ? 'Reduced motion enabled' : 'Reduced motion disabled',
      soundEnabled: value ? 'Sound enabled' : 'Sound disabled',
      focusIndicator: value ? 'Focus indicators enabled' : 'Focus indicators disabled',
      screenReaderMode: value ? 'Screen reader mode enabled' : 'Screen reader mode disabled'
    };
    
    if (announcements[key]) {
      setAnnouncement(announcements[key]);
      setTimeout(() => setAnnouncement(''), 3000);
    }
  }, [settings, saveSettings]);

  // Zoom controls
  const zoomIn = useCallback(() => {
    const newZoom = Math.min(settings.zoomLevel + 25, 200);
    updateSetting('zoomLevel', newZoom);
  }, [settings.zoomLevel, updateSetting]);

  const zoomOut = useCallback(() => {
    const newZoom = Math.max(settings.zoomLevel - 25, 75);
    updateSetting('zoomLevel', newZoom);
  }, [settings.zoomLevel, updateSetting]);

  const resetZoom = useCallback(() => {
    updateSetting('zoomLevel', 100);
  }, [updateSetting]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + = for zoom in
      if ((e.ctrlKey || e.metaKey) && e.key === '=') {
        e.preventDefault();
        zoomIn();
      }
      // Ctrl/Cmd + - for zoom out
      if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault();
        zoomOut();
      }
      // Ctrl/Cmd + 0 for reset zoom
      if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault();
        resetZoom();
      }
      // Alt + A for accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, zoomIn, zoomOut, resetZoom]);

  // Announcement for screen readers
  useEffect(() => {
    if (announcement) {
      const announcementDiv = document.createElement('div');
      announcementDiv.setAttribute('aria-live', 'polite');
      announcementDiv.setAttribute('aria-atomic', 'true');
      announcementDiv.className = 'sr-only';
      announcementDiv.textContent = announcement;
      document.body.appendChild(announcementDiv);
      
      setTimeout(() => {
        document.body.removeChild(announcementDiv);
      }, 100);
    }
  }, [announcement]);

  return (
    <>
      {/* Accessibility Announcements */}
      {announcement && (
        <div 
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
          role="status"
          aria-live="polite"
        >
          {announcement}
        </div>
      )}

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility size={24} />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div 
          id="accessibility-panel"
          className="fixed bottom-24 right-6 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto"
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-describedby="accessibility-description"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 dark:text-white">
              Accessibility Settings
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close accessibility settings"
            >
              ×
            </button>
          </div>
          
          <p id="accessibility-description" className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Customize your experience with these accessibility options
          </p>

          {/* High Contrast */}
          <div className="mb-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <Contrast size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                High Contrast
              </span>
            </label>
          </div>

          {/* Large Text */}
          <div className="mb-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <Type size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Large Text
              </span>
            </label>
          </div>

          {/* Reduced Motion */}
          <div className="mb-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <Eye size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Reduced Motion
              </span>
            </label>
          </div>

          {/* Sound Toggle */}
          <div className="mb-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={(e) => updateSetting('soundEnabled', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              {settings.soundEnabled ? (
                <Volume2 size={20} className="text-gray-600 dark:text-gray-400" />
              ) : (
                <VolumeX size={20} className="text-gray-600 dark:text-gray-400" />
              )}
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Sound {settings.soundEnabled ? 'Enabled' : 'Disabled'}
              </span>
            </label>
          </div>

          {/* Focus Indicators */}
          <div className="mb-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.focusIndicator}
                onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <MousePointer size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Focus Indicators
              </span>
            </label>
          </div>

          {/* Screen Reader Mode */}
          <div className="mb-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.screenReaderMode}
                onChange={(e) => updateSetting('screenReaderMode', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <Keyboard size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Screen Reader Mode
              </span>
            </label>
          </div>

          {/* Zoom Controls */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Zoom Level: {settings.zoomLevel}%
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={zoomOut}
                className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
                aria-label="Zoom out"
              >
                <ZoomOut size={16} />
              </button>
              <button
                onClick={resetZoom}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded text-sm"
                aria-label="Reset zoom to 100%"
              >
                Reset
              </button>
              <button
                onClick={zoomIn}
                className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
                aria-label="Zoom in"
              >
                <ZoomIn size={16} />
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="text-xs text-gray-500 dark:text-gray-400 border-t pt-4">
            <p className="font-medium mb-2">Keyboard Shortcuts:</p>
            <ul className="space-y-1">
              <li>Ctrl/Cmd + = : Zoom In</li>
              <li>Ctrl/Cmd + - : Zoom Out</li>
              <li>Ctrl/Cmd + 0 : Reset Zoom</li>
              <li>Alt + A : Toggle Panel</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibility;