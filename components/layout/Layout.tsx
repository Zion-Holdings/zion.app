import React from 'react';
import RevolutionaryNavigation from './RevolutionaryNavigation';
import NeoFuturisticFooter from './NeoFuturisticFooter';
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white">
			<UltraAdvancedFuturisticBackground variant="quantum-holographic">
				<RevolutionaryNavigation />
				<main className="pt-24 lg:pt-28">
					{children}
				</main>
				<NeoFuturisticFooter />
			</UltraAdvancedFuturisticBackground>
		</div>
	);
};

export default Layout;