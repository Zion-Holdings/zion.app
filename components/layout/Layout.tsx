import React from 'react';
import QuantumHolographicNavbar from './QuantumHolographicNavbar';
import NeoFuturisticFooter from './NeoFuturisticFooter';
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';

interface LayoutProps {
	children: React.ReactNode;
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

export default Layout;