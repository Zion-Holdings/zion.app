import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, VolumeX, Eye, EyeOff, Keyboard, 
  MousePointer, Smartphone, Monitor, SkipForward
} from 'lucide-react';

export default function AccessibilityEnhancer() {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highlighter: false,
    fontSize: 16,
    lineSpacing: 1.5,
    colorBlindMode: 'none'
  });
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  
  const focusRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }
  }, [highContrast, largeText, reducedMotion]);

    // Font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    
    // Line spacing
    root.style.setProperty('--line-spacing', newSettings.lineSpacing.toString());

    // Color blind modes
    if (newSettings.colorBlindMode !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.filter = filters[newSettings.colorBlindMode];
    } else {
      root.style.filter = 'none';
    }
  };

  useEffect(() => {
    applySettings(settings);
  }, [settings]);

  // Handle click outside to close settings
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Text-to-speech functionality
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speechRate;
      utterance.onstart = () => setIsReading(true);
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleLargeText = () => {
    const newValue = !largeText;
    setLargeText(newValue);
    if (newValue) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    if (newValue) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  };

  const focusFirstInteractive = () => {
    const firstInteractive = document.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;
    if (firstInteractive) {
      firstInteractive.focus();
    }
  };

  const focusMainContent = () => {
    const main = document.querySelector('main') || document.querySelector('#main-content');
    if (main) {
      (main as HTMLElement).focus();
    }
  };



  // Keyboard navigation enhancement
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onEscape) {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape]);

  return <>{children}</>;
}

// Screen reader only text
export function SrOnly({ children }: { children: React.ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

// Live region for announcements
export function LiveRegion({ 
  children, 
  ariaLive = 'polite' 
}: { 
  children: React.ReactNode; 
  ariaLive?: 'polite' | 'assertive' | 'off' 
}) {
  return (
    <div aria-live={ariaLive} aria-atomic="true" className="sr-only">
      {children}
    </div>
  );
}

// Skip to content link
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg"
    >
      Skip to main content
    </a>
  );
}

// Enhanced button with accessibility
export function AccessibleButton({
  children,
  onClick,
  className = "",
  disabled = false,
  ariaLabel,
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  [key: string]: any;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}