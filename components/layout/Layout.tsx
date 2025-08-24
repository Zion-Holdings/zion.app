import React from 'react';
import FuturisticNav from './FuturisticNav';
import FuturisticFooter from './FuturisticFooter';
import AnimatedBackground from '../ui/AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
  backgroundIntensity?: 'low' | 'medium' | 'high' | 'extreme';
  backgroundTheme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-fusion';
  backgroundParticleCount?: number;
  backgroundAnimationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white">
			<UltraAdvancedFuturisticBackground variant="neural-quantum-cyberpunk" intensity="high">
				<QuantumHolographicNavbar />
				<main className="pt-24 lg:pt-28">
					{children}
				</main>
				<NeoFuturisticFooter />
			</UltraAdvancedFuturisticBackground>
		</div>
	);
};

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated background */}
      <AnimatedBackground variant="stars" intensity="low" />
      
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
      <FuturisticFooter />
    </div>
  );
};
