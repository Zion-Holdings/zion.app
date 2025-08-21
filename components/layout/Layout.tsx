import React, { useState } from 'react';
import UltraFuturisticNavigation2035 from './UltraFuturisticNavigation2035';
import UltraFuturisticFooter2035 from './UltraFuturisticFooter2035';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2035 from '../ui/UltraFuturisticBackground2035';
import TopContactBar from './TopContactBar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="min-h-screen bg-black text-white">
			<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-black/80 focus:text-white focus:border focus:border-cyan-500 focus:rounded px-3 py-2 z-[100]">Skip to content</a>
			<UltraFuturisticBackground2035 
				intensity="high" 
				colorScheme="quantum-fusion"
				particleCount={400}
				animationSpeed={1.8}
				enableHolographic={true}
				enableQuantumEffects={true}
				enableNeonEffects={true}
				enableSpaceTime={true}
			>
				<TopContactBar />
				<UltraFuturisticNavigation2035 onMenuClick={() => setSidebarOpen(true)} />
				<div className="flex">
					<EnhancedSidebar2025 isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
					<main id="main" className="flex-1 pt-24 lg:pt-28">
						{children}
					</main>
				</div>
				<UltraFuturisticFooter2035 />
			</UltraFuturisticBackground2035>
		</div>
	);
};

export default Layout;