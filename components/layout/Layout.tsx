import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import UltraFuturisticFooter2034 from './UltraFuturisticFooter2034';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraAdvancedFuturisticBackground from './UltraAdvancedFuturisticBackground';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Futuristic Background */}
      <UltraAdvancedFuturisticBackground />
      
      {/* Top Contact Bar */}
      <TopContactBar />
      
      {/* Navigation */}
      <EnhancedNavigation2025 />
      
      {/* Sidebar */}
      <EnhancedSidebar2025 />
      
      {/* Main Content */}
      <main className="relative z-10 pt-32 lg:pt-36 lg:ml-80">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <UltraFuturisticFooter2034 />
      
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse z-50"></div>
      <div className="fixed top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000 z-50"></div>
      <div className="fixed bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-2000 z-50"></div>
      <div className="fixed bottom-20 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-3000 z-50"></div>
      
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 left-6 z-50 lg:hidden w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={() => setSidebarOpen(false)}>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Zion Tech Group</h2>
                    <p className="text-xs text-gray-400">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Mobile Navigation Content */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-300 px-3">Main Navigation</h3>
                  <div className="space-y-1">
                    <a href="/" className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors duration-200">
                      Home
                    </a>
                    <a href="/comprehensive-services-showcase-2025" className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors duration-200">
                      All Services
                    </a>
                    <a href="/pricing" className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors duration-200">
                      Pricing
                    </a>
                    <a href="/contact" className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors duration-200">
                      Contact
                    </a>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-300 px-3">Quick Services</h3>
                  <div className="space-y-1">
                    <a href="/ai-consciousness-evolution-platform" className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors duration-200">
                      AI Consciousness Evolution
                    </a>
                    <a href="/quantum-computing-as-a-service" className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors duration-200">
                      Quantum Computing
                    </a>
                    <a href="/zero-trust-security-architecture" className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors duration-200">
                      Zero Trust Security
                    </a>
                    <a href="/ai-business-intelligence-suite" className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors duration-200">
                      AI Business Intelligence
                    </a>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="pt-4 border-t border-gray-800">
                  <a
                    href="/contact"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
