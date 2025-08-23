import React, { useState, useEffect } from 'react';
import UltraFuturisticNavigation2045 from './UltraFuturisticNavigation2045';
import UltraFuturisticFooter2045 from './UltraFuturisticFooter2045';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import MobileOptimizer from '../MobileOptimizer';
import CookieConsentBanner from '../CookieConsentBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [showMobileOptimizer, setShowMobileOptimizer] = useState(false);
  const [showTools, setShowTools] = useState(false);

  // Keyboard shortcuts for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Alt + P: Toggle Performance Monitor
      if (e.ctrlKey && e.altKey && e.key === 'p') {
        e.preventDefault();
        setShowPerformanceMonitor(prev => !prev);
      }
      
      // Ctrl + Alt + A: Toggle Accessibility Panel
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        e.preventDefault();
        setShowAccessibility(prev => !prev);
      }
      
      // Ctrl + Alt + M: Toggle Mobile Optimizer
      if (e.ctrlKey && e.altKey && e.key === 'm') {
        e.preventDefault();
        setShowMobileOptimizer(prev => !prev);
      }
      
      // Ctrl + Alt + T: Toggle All Tools
      if (e.ctrlKey && e.altKey && e.key === 't') {
        e.preventDefault();
        setShowTools(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-hide tools after inactivity
  useEffect(() => {
    if (showTools) {
      const timer = setTimeout(() => {
        setShowTools(false);
      }, 300000); // 5 minutes

      return () => clearTimeout(timer);
    }
  }, [showTools]);

  // Toggle all tools
  const toggleAllTools = () => {
    const newState = !showTools;
    setShowTools(newState);
    setShowPerformanceMonitor(newState);
    setShowAccessibility(newState);
    setShowMobileOptimizer(newState);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      
      {/* Futuristic Background */}
      <UltraFuturisticBackground2036 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Navigation */}
        <UltraFuturisticNavigation2045 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main id="main" role="main" className="flex-1 pt-32 lg:pt-36">
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2045 />
      </div>

      {/* Enhanced Accessibility and Performance Tools */}
      <AccessibilityEnhancer 
        isVisible={showAccessibility} 
        onToggle={setShowAccessibility} 
      />
      <PerformanceMonitor 
        isVisible={showPerformanceMonitor} 
        onToggle={setShowPerformanceMonitor} 
      />
      <MobileOptimizer 
        isVisible={showMobileOptimizer} 
        onToggle={setShowMobileOptimizer} 
      />
      
      {/* Cookie Consent Banner */}
      <CookieConsentBanner />

      {/* Tools Toggle Button */}
      <button
        onClick={toggleAllTools}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 p-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Toggle accessibility and performance tools"
        title="Toggle Tools (Ctrl + Alt + T)"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {/* Keyboard Shortcuts Info */}
      <div className="fixed top-4 left-4 z-30 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-xs text-white/60">
        <div className="font-medium mb-2">Keyboard Shortcuts:</div>
        <div className="space-y-1">
          <div><kbd className="px-1 py-0.5 bg-white/10 rounded">Ctrl + Alt + A</kbd> Accessibility</div>
          <div><kbd className="px-1 py-0.5 bg-white/10 rounded">Ctrl + Alt + P</kbd> Performance</div>
          <div><kbd className="px-1 py-0.5 bg-white/10 rounded">Ctrl + Alt + M</kbd> Mobile</div>
          <div><kbd className="px-1 py-0.5 bg-white/10 rounded">Ctrl + Alt + T</kbd> All Tools</div>
        </div>
      </div>

      {/* Global CSS for accessibility features */}
      <style jsx global>{`
        /* Skip link styles */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: white;
          padding: 8px;
          text-decoration: none;
          z-index: 10000;
          border-radius: 4px;
        }
        
        .skip-link:focus {
          top: 6px;
        }

        /* Accessibility highlight for audit issues */
        .accessibility-highlight {
          outline: 3px solid #ff6b6b !important;
          outline-offset: 2px !important;
          animation: accessibility-pulse 2s ease-in-out infinite;
        }

        @keyframes accessibility-pulse {
          0%, 100% { outline-color: #ff6b6b; }
          50% { outline-color: #ff8e8e; }
        }

        /* High contrast mode */
        .high-contrast {
          --text-color: #ffffff !important;
          --bg-color: #000000 !important;
          --accent-color: #ffff00 !important;
        }

        .high-contrast * {
          background-color: var(--bg-color) !important;
          color: var(--text-color) !important;
          border-color: var(--accent-color) !important;
        }

        /* Large text mode */
        .large-text {
          --font-size-base: 20px !important;
          --line-height-base: 1.8 !important;
        }

        .large-text * {
          font-size: var(--font-size-base) !important;
          line-height: var(--line-height-base) !important;
        }

        /* Reduced motion */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.1s !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.1s !important;
        }

        /* Focus indicators */
        .focus-visible *:focus {
          outline: var(--focus-outline, 3px solid #00ffff) !important;
          outline-offset: var(--focus-outline-offset, 2px) !important;
        }

        /* Color blindness simulation */
        .colorblind-protanopia {
          filter: url('#protanopia-filter') !important;
        }

        .colorblind-deuteranopia {
          filter: url('#deuteranopia-filter') !important;
        }

        .colorblind-tritanopia {
          filter: url('#tritanopia-filter') !important;
        }

        /* Mobile optimizations */
        .mobile-optimized {
          --touch-target-size: 44px !important;
        }

        .mobile-optimized button,
        .mobile-optimized a,
        .mobile-optimized input {
          min-height: var(--touch-target-size) !important;
          min-width: var(--touch-target-size) !important;
        }

        .low-bandwidth * {
          animation-duration: 0.05s !important;
          transition-duration: 0.05s !important;
        }

        /* Performance modes */
        .performance-mode {
          --animation-duration: 0.3s !important;
          --transition-duration: 0.3s !important;
        }

        .battery-saver {
          --animation-duration: 0.5s !important;
          --transition-duration: 0.5s !important;
        }

        /* Screen reader only content */
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

        /* CSS Custom Properties for dynamic theming */
        :root {
          --font-size: 16px;
          --line-height: 1.5;
          --letter-spacing: 0px;
          --word-spacing: 0px;
          --animation-duration: 0.3s;
          --transition-duration: 0.3s;
        }

        /* Apply custom typography */
        * {
          font-size: var(--font-size);
          line-height: var(--line-height);
          letter-spacing: var(--letter-spacing);
          word-spacing: var(--word-spacing);
        }

        /* Enhanced focus styles */
        *:focus-visible {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
        }

        /* Improved button and link styles */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible {
          outline: 3px solid #00ffff;
          outline-offset: 2px;
        }

        /* High contrast focus styles */
        .high-contrast *:focus-visible {
          outline: 3px solid var(--accent-color);
          outline-offset: 2px;
        }
      `}</style>

      {/* SVG Filters for Color Blindness Simulation */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="protanopia-filter">
            <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="deuteranopia-filter">
            <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="tritanopia-filter">
            <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
