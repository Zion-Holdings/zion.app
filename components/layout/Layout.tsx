import React, { useState } from 'react';
import UltraFuturisticNavigation2034 from './UltraFuturisticNavigation2034';
import UltraFuturisticFooter2034 from './UltraFuturisticFooter2034';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';
import TopContactBar from './TopContactBar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

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
				<UltraFuturisticNavigation2034 onMenuClick={() => setSidebarOpen(true)} />
				<div className="flex">
					<EnhancedSidebar2025 isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
					<main id="main" className="flex-1 pt-24 lg:pt-28">
						{children}
					</main>
				</div>
				<UltraFuturisticFooter2034 />
			</UltraAdvancedFuturisticBackground>
		</div>
	);
};

export default Layout;