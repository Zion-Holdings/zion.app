'use client';

import { ReactNode } from 'react';
import TopContactBar from './TopContactBar';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraAdvancedFuturisticBackground from '../backgrounds/UltraAdvancedFuturisticBackground';
import UltraFuturisticFooter2034 from './UltraFuturisticFooter2034';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
  showBackground?: boolean;
  backgroundTheme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk';
  backgroundIntensity?: 'low' | 'medium' | 'high';
}

export default function Layout({
  children,
  showSidebar = true,
  showBackground = true,
  backgroundTheme = 'quantum',
  backgroundIntensity = 'medium'
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Futuristic Background */}
      {showBackground && (
        <UltraAdvancedFuturisticBackground
          theme={backgroundTheme}
          intensity={backgroundIntensity}
        >
          {/* Background content if needed */}
        </UltraAdvancedFuturisticBackground>
      )}

      {/* Top Contact Bar */}
      <TopContactBar />

      {/* Main Navigation */}
      <EnhancedNavigation2025 />

      {/* Layout Container */}
      <div className="flex min-h-screen pt-32">
        {/* Sidebar */}
        {showSidebar && (
          <div className="hidden lg:block lg:w-80 lg:flex-shrink-0">
            <EnhancedSidebar2025 />
          </div>
        )}

        {/* Main Content */}
        <main className={`flex-1 ${showSidebar ? 'lg:ml-0' : ''}`}>
          <div className="relative z-10">
            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <UltraFuturisticFooter2034 />

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <button className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-110 transition-all duration-200 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-110 transition-all duration-200 flex items-center justify-center lg:bottom-6 lg:right-6"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Page Loading Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 animate-pulse">
        <div className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>
      </div>
    </div>
  );
}
