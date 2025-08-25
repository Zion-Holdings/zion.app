import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Contrast, 
  Type, 
  Move, 
  Settings,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';

interface AccessibilityControlsProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({ 
  position = 'bottom-right' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mutedAudio, setMutedAudio] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(true);

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedLargeText = localStorage.getItem('largeText') === 'true';
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const savedMutedAudio = localStorage.getItem('mutedAudio') === 'true';
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    setHighContrast(savedHighContrast);
    setLargeText(savedLargeText);
    setReducedMotion(savedReducedMotion);
    setMutedAudio(savedMutedAudio);
    setDarkMode(savedDarkMode);

    // Apply saved preferences
    applyAccessibilitySettings(savedHighContrast, savedLargeText, savedReducedMotion, savedMutedAudio, savedDarkMode);
  }, []);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = (
    contrast: boolean, 
    text: boolean, 
    motion: boolean, 
    audio: boolean, 
    dark: boolean
  ) => {
    const root = document.documentElement;
    
    // High contrast
    if (contrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (text) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (motion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Dark mode
    if (dark) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
  };

  // Handle setting changes
  const handleSettingChange = (setting: string, value: boolean) => {
    switch (setting) {
      case 'highContrast':
        setHighContrast(value);
        localStorage.setItem('highContrast', value.toString());
        break;
      case 'largeText':
        setLargeText(value);
        localStorage.setItem('largeText', value.toString());
        break;
      case 'reducedMotion':
        setReducedMotion(value);
        localStorage.setItem('reducedMotion', value.toString());
        break;
      case 'mutedAudio':
        setMutedAudio(value);
        localStorage.setItem('mutedAudio', value.toString());
        break;
      case 'darkMode':
        setDarkMode(value);
        localStorage.setItem('darkMode', value.toString());
        break;
    }
    
    // Apply all current settings
    applyAccessibilitySettings(highContrast, largeText, reducedMotion, mutedAudio, darkMode);
  };

  // Reset all settings to default
  const resetSettings = () => {
    setHighContrast(false);
    setLargeText(false);
    setReducedMotion(false);
    setMutedAudio(false);
    setDarkMode(false);
    
    localStorage.removeItem('highContrast');
    localStorage.removeItem('largeText');
    localStorage.removeItem('reducedMotion');
    localStorage.removeItem('mutedAudio');
    localStorage.removeItem('darkMode');
    
    applyAccessibilitySettings(false, false, false, false, false);
    
    // Show notification
    setShowNotifications(true);
    setTimeout(() => setShowNotifications(false), 3000);
  };

  // Get position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
      default:
        return 'bottom-4 right-4';
    }
  };

  return (
    <>
      {/* Main Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full hover:bg-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-black`}
        aria-label="Accessibility controls"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Settings className="w-6 h-6 text-zion-cyan" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Panel */}
          <div className={`fixed ${getPositionClasses()} z-50 w-80 max-h-96 overflow-y-auto bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/30 rounded-2xl shadow-2xl shadow-zion-cyan/10`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
              <h2 className="text-lg font-semibold text-white">Accessibility Controls</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-zion-cyan/20 rounded-full transition-colors duration-200"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5 text-zion-cyan" />
              </button>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Contrast className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <label htmlFor="highContrast" className="text-sm font-medium text-white">
                      High Contrast
                    </label>
                    <p className="text-xs text-gray-400">Enhanced color contrast</p>
                  </div>
                </div>
                <button
                  id="highContrast"
                  onClick={() => handleSettingChange('highContrast', !highContrast)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                    highContrast ? 'bg-zion-cyan' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={highContrast}
                  aria-labelledby="highContrast"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
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
                    <label htmlFor="largeText" className="text-sm font-medium text-white">
                      Large Text
                    </label>
                    <p className="text-xs text-gray-400">Increased font sizes</p>
                  </div>
                </div>
                <button
                  id="largeText"
                  onClick={() => handleSettingChange('largeText', !largeText)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                    largeText ? 'bg-zion-cyan' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={largeText}
                  aria-labelledby="largeText"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      largeText ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Move className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <label htmlFor="reducedMotion" className="text-sm font-medium text-white">
                      Reduced Motion
                    </label>
                    <p className="text-xs text-gray-400">Minimize animations</p>
                  </div>
                </div>
                <button
                  id="reducedMotion"
                  onClick={() => handleSettingChange('reducedMotion', !reducedMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                    reducedMotion ? 'bg-zion-cyan' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={reducedMotion}
                  aria-labelledby="reducedMotion"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Muted Audio */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {mutedAudio ? (
                    <VolumeX className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-zion-cyan" />
                  )}
                  <div>
                    <label htmlFor="mutedAudio" className="text-sm font-medium text-white">
                      Mute Audio
                    </label>
                    <p className="text-xs text-gray-400">Disable sound effects</p>
                  </div>
                </div>
                <button
                  id="mutedAudio"
                  onClick={() => handleSettingChange('mutedAudio', !mutedAudio)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                    mutedAudio ? 'bg-zion-cyan' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={mutedAudio}
                  aria-labelledby="mutedAudio"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      mutedAudio ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {darkMode ? (
                    <Moon className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <Sun className="w-5 h-5 text-zion-cyan" />
                  )}
                  <div>
                    <label htmlFor="darkMode" className="text-sm font-medium text-white">
                      Dark Mode
                    </label>
                    <p className="text-xs text-gray-400">Dark color scheme</p>
                  </div>
                </div>
                <button
                  id="darkMode"
                  onClick={() => handleSettingChange('darkMode', !darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                    darkMode ? 'bg-zion-cyan' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={darkMode}
                  aria-labelledby="darkMode"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-zion-cyan/20">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 text-sm font-medium text-zion-cyan border border-zion-cyan/30 rounded-lg hover:bg-zion-cyan/20 hover:border-zion-cyan/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
                >
                  Reset to Defaults
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {showNotifications && (
        <div className={`fixed ${getPositionClasses()} z-50 flex items-center space-x-2 px-4 py-2 bg-green-600/90 backdrop-blur-sm border border-green-400/30 rounded-lg shadow-lg transition-all duration-300`}>
          <Check className="w-4 h-4 text-white" />
          <span className="text-sm text-white">Settings reset successfully</span>
        </div>
      )}
    </>
  );
};

export default AccessibilityControls;