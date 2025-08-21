import React from 'react';
import NeoFuturisticNavigation from './NeoFuturisticNavigation';
import NeoFuturisticFooter from './NeoFuturisticFooter';
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white">
			<UltraAdvancedFuturisticBackground variant="quantum-holographic">
				<div className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-cyan-900/60 to-purple-900/60 backdrop-blur border-b border-cyan-700/30">
					<div className="max-w-7xl mx-auto px-4 py-2 text-xs flex items-center justify-center gap-6 text-gray-200">
						<span>Mobile: +1 302 464 0950</span>
						<span>Email: kleber@ziontechgroup.com</span>
						<span className="hidden md:inline">Address: 364 E Main St STE 1008 Middletown DE 19709</span>
					</div>
				</div>
				<NeoFuturisticNavigation />
				<main className="pt-24 lg:pt-28">
					{children}
				</main>
				<NeoFuturisticFooter />
			</UltraAdvancedFuturisticBackground>
		</div>
	);
};

export default Layout;