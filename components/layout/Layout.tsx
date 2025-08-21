import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import UltraAdvancedNavigation from './UltraAdvancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';
import TopContactBar from './TopContactBar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white">
			<UltraAdvancedFuturisticBackground variant="quantum-holographic" intensity={0.85}>
				<TopContactBar />
				<UltraAdvancedNavigation />
				<main className="pt-24 lg:pt-28">
					{children}
				</main>
				<EnhancedFooter />
			</UltraAdvancedFuturisticBackground>
		</div>
	);
};

export default Layout;