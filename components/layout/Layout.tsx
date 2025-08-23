import React from 'react';
import UltraAdvancedNavigation from './UltraAdvancedNavigation';
import UltraFuturisticFooter2046 from './UltraFuturisticFooter2046';
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';
import TopContactBar from './TopContactBar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white overflow-x-hidden">
			<UltraAdvancedFuturisticBackground>
				<TopContactBar />
				<UltraAdvancedNavigation />
				<main className="pt-24 lg:pt-28 overflow-x-hidden">
					{children}
				</main>
				<UltraFuturisticFooter2046 />
			</UltraAdvancedFuturisticBackground>
		</div>
	);
};

export default Layout;