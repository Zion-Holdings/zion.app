import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import UltraFuturisticFooter2034 from './UltraFuturisticFooter2034';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraAdvancedFuturisticBackground from '../backgrounds/UltraAdvancedFuturisticBackground';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
  backgroundIntensity?: 'low' | 'medium' | 'high' | 'extreme';
  backgroundTheme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-fusion';
  backgroundParticleCount?: number;
  backgroundAnimationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
}

export default function Layout({ 
  children, 
  backgroundIntensity = 'medium',
  backgroundTheme = 'quantum',
  backgroundParticleCount = 200,
  backgroundAnimationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Contact Bar */}
      <TopContactBar />
      
      {/* Navigation */}
      <EnhancedNavigation2025 />
      
      {/* Sidebar */}
      <EnhancedSidebar2025 />
      
      {/* Main Content */}
      <main className="pt-20">
        <UltraAdvancedFuturisticBackground
          intensity={backgroundIntensity}
          theme={backgroundTheme}
          particleCount={backgroundParticleCount}
          animationSpeed={backgroundAnimationSpeed}
          enableHolographic={enableHolographic}
          enableQuantumEffects={enableQuantumEffects}
        >
          {children}
        </UltraAdvancedFuturisticBackground>
      </main>
      
      {/* Footer */}
      <UltraFuturisticFooter2034 />
    </div>
  );
}
