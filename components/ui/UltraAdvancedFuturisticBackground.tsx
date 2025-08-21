import React from 'react';
import UltraAdvancedFuturisticBackgroundV2 from './UltraAdvancedFuturisticBackgroundV2';

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'hybrid';
  particleCount?: number;
  animationSpeed?: number;
  enableGlitch?: boolean;
  enableHologram?: boolean;
  enableQuantum?: boolean;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  children: React.ReactNode;
}

export default function UltraAdvancedFuturisticBackground(props: UltraAdvancedFuturisticBackgroundProps) {
  return <UltraAdvancedFuturisticBackgroundV2 {...props} />;
}