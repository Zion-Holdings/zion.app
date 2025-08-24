import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, FileText, Eye, Volume2, VolumeX, Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { useTheme } from '@/components/ThemeProvider';

interface AccessibilityMenuProps {
  className?: string;
}

export function AccessibilityMenu({ className }: AccessibilityMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('dark');

  useEffect(() => {
    // Apply accessibility settings
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.documentElement.classList.toggle('high-contrast', highContrast);
    document.documentElement.classList.toggle('reduced-motion', reducedMotion);
  }, [fontSize, highContrast, reducedMotion]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };

  const toggleMuted = () => {
    setMuted(!muted);
  };

  const cycleTheme = () => {
    const themes = ['light', 'dark', 'system'] as const;
    const currentIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setCurrentTheme(nextTheme);
  };

  return (
    <div className={`fixed top-6 left-6 z-50 ${className}`}>
      {/* Main accessibility button */}
      <Button
        onClick={toggleMenu}
        className="w-12 h-12 rounded-full bg-zion-purple hover:bg-zion-purple-dark shadow-lg"
        size="icon"
        aria-label="Accessibility menu"
        aria-expanded={isOpen}
      >
        <Settings className="w-5 h-5" />
      </Button>

      {/* Accessibility menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-80 bg-white dark:bg-zion-slate border border-zion-cyan/20 rounded-xl shadow-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-zion-slate dark:text-white mb-4">
              Accessibility Settings
            </h3>

            {/* Font size controls */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-zion-cyan" />
                  <span className="text-sm text-zion-slate dark:text-white">Font Size</span>
                </div>
                <span className="text-xs text-zion-slate-light dark:text-zion-slate-light">
                  {fontSize}px
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={decreaseFontSize}
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  disabled={fontSize <= 12}
                >
                  A-
                </Button>
                <Button
                  onClick={resetFontSize}
                  size="sm"
                  variant="outline"
                  className="flex-1"
                >
                  Reset
                </Button>
                <Button
                  onClick={increaseFontSize}
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  disabled={fontSize >= 24}
                >
                  A+
                </Button>
              </div>
            </div>

            {/* High contrast toggle */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-zion-cyan" />
                <span className="text-sm text-zion-slate dark:text-white">High Contrast</span>
              </div>
              <Button
                onClick={toggleHighContrast}
                variant={highContrast ? "default" : "outline"}
                size="sm"
                className={highContrast ? "bg-zion-cyan" : ""}
              >
                {highContrast ? "On" : "Off"}
              </Button>
            </div>

            {/* Reduced motion toggle */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-zion-cyan" />
                <span className="text-sm text-zion-slate dark:text-white">Reduced Motion</span>
              </div>
              <Button
                onClick={toggleReducedMotion}
                variant={reducedMotion ? "default" : "outline"}
                size="sm"
                className={reducedMotion ? "bg-zion-cyan" : ""}
              >
                {reducedMotion ? "On" : "Off"}
              </Button>
            </div>

            {/* Theme toggle */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-zion-cyan" />
                <span className="text-sm text-zion-slate dark:text-white">Theme</span>
              </div>
              <Button
                onClick={cycleTheme}
                variant="outline"
                size="sm"
                className="capitalize"
              >
                {currentTheme}
              </Button>
            </div>

            {/* Mute toggle */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {muted ? (
                  <VolumeX className="w-4 h-4 text-zion-cyan" />
                ) : (
                  <Volume2 className="w-4 h-4 text-zion-cyan" />
                )}
                <span className="text-sm text-zion-slate dark:text-white">
                  {muted ? "Unmute" : "Mute"}
                </span>
              </div>
              <Button
                onClick={toggleMuted}
                variant={muted ? "default" : "outline"}
                size="sm"
                className={muted ? "bg-zion-cyan" : ""}
              >
                {muted ? "On" : "Off"}
              </Button>
            </div>

            {/* Close button */}
            <Button
              onClick={toggleMenu}
              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            >
              Close
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}