import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
  });

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const handleSettingChange = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: false,
    };
    setSettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
    applySettings(defaultSettings);
  };

  return (
    <>
      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
        <a href="#main-content" className="bg-zion-cyan text-white px-4 py-2 rounded-md">
          Skip to main content
        </a>
        <a href="#navigation" className="bg-zion-cyan text-white px-4 py-2 rounded-md ml-2">
          Skip to navigation
        </a>
      </div>

      {/* Accessibility Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 hover:bg-zion-cyan/10"
        aria-label="Accessibility Settings"
      >
        <span className="text-zion-cyan">A</span>
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <Card className="fixed top-16 right-4 w-80 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 shadow-2xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-zion-cyan">A</span>
                Accessibility Settings
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close accessibility settings"
              >
                ×
              </Button>
            </div>
            <CardDescription>
              Customize your experience for better accessibility
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Visual Enhancements */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <span>👁️</span>
                Visual Enhancements
              </h4>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="high-contrast" className="text-sm">
                  High Contrast
                </Label>
                <Switch
                  id="high-contrast"
                  checked={settings.highContrast}
                  onCheckedChange={(checked) => handleSettingChange('highContrast', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="large-text" className="text-sm">
                  Large Text
                </Label>
                <Switch
                  id="large-text"
                  checked={settings.largeText}
                  onCheckedChange={(checked) => handleSettingChange('largeText', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="focus-indicator" className="text-sm">
                  Enhanced Focus
                </Label>
                <Switch
                  id="focus-indicator"
                  checked={settings.focusIndicator}
                  onCheckedChange={(checked) => handleSettingChange('focusIndicator', checked)}
                />
              </div>
            </div>
            
            <Separator />
            
            {/* Motion and Navigation */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <span>🖱️</span>
                Navigation & Motion
              </h4>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="reduced-motion" className="text-sm">
                  Reduced Motion
                </Label>
                <Switch
                  id="reduced-motion"
                  checked={settings.reducedMotion}
                  onCheckedChange={(checked) => handleSettingChange('reducedMotion', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="keyboard-nav" className="text-sm">
                  Keyboard Navigation
                </Label>
                <Switch
                  id="keyboard-nav"
                  checked={settings.keyboardNavigation}
                  onCheckedChange={(checked) => handleSettingChange('keyboardNavigation', checked)}
                />
              </div>
            </div>
            
            <Separator />
            
            {/* Screen Reader */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <span>🔊</span>
                Screen Reader
              </h4>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="screen-reader" className="text-sm">
                  Enhanced Support
                </Label>
                <Switch
                  id="screen-reader"
                  checked={settings.screenReader}
                  onCheckedChange={(checked) => handleSettingChange('screenReader', checked)}
                />
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="pt-2">
              <Button
                onClick={resetSettings}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <span className="mr-2">⚙️</span>
                Reset to Defaults
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}

// CSS classes for accessibility features
export const accessibilityStyles = `
  /* High Contrast Mode */
  .high-contrast {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --primary: 0 0% 100%;
    --secondary: 0 0% 20%;
    --muted: 0 0% 20%;
    --accent: 0 0% 100%;
    --border: 0 0% 100%;
    --input: 0 0% 100%;
    --ring: 0 0% 100%;
  }
  
  /* Large Text Mode */
  .large-text {
    font-size: 1.2em;
    line-height: 1.6;
  }
  
  .large-text h1 { font-size: 2.5em; }
  .large-text h2 { font-size: 2em; }
  .large-text h3 { font-size: 1.75em; }
  .large-text p { font-size: 1.2em; }
  
  /* Reduced Motion */
  .reduced-motion *, .reduced-motion *::before, .reduced-motion *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Focus Indicator */
  .focus-visible:focus {
    outline: 3px solid hsl(var(--ring));
    outline-offset: 2px;
  }
  
  /* Screen Reader Only */
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
  
  /* Focus visible utility */
  .focus-visible:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
  }
`;