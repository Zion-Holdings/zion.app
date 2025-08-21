import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';
import TopContactBar from './TopContactBar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white">
			<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-black/80 focus:text-white focus:border focus:border-cyan-500 focus:rounded px-3 py-2 z-[100]">Skip to content</a>
			<UltraAdvancedFuturisticBackground 
				intensity="high" 
				colorScheme="quantum-fusion"
				particleCount={300}
				animationSpeed={1.5}
				enableHolographic={true}
				enableQuantumEffects={true}
			>
				<TopContactBar />
				<EnhancedNavigation />
				<main id="main" className="pt-24 lg:pt-28">
					{children}
				</main>
				<EnhancedFooter />
			</UltraAdvancedFuturisticBackground>
		</div>
	);
};

export default Layout;