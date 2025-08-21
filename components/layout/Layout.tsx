import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white">
			<UltraAdvancedFuturisticBackground variant="quantum-holographic">
				<EnhancedNavigation />
				<main className="pt-20 lg:pt-24">
					{children}
				</main>
				<EnhancedFooter />
			</UltraAdvancedFuturisticBackground>
		</div>
	);
};

export default Layout;