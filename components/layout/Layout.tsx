import React from 'react';
import UltraAdvancedNavigation from './UltraAdvancedNavigation';
import NeoFuturisticFooter from './NeoFuturisticFooter';
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';
import TopContactBar from './TopContactBar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white overflow-x-hidden">
			<UltraAdvancedFuturisticBackground variant="quantum-holographic" intensity={0.85}>
				<TopContactBar />
				<UltraAdvancedNavigation />
				<main className="pt-24 lg:pt-28 overflow-x-hidden">
					{children}
				</main>
				<NeoFuturisticFooter />
			</UltraAdvancedFuturisticBackground>
		</div>
	);
};

export default Layout;