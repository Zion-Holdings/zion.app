import type { AppProps } from 'next/app';
import '../styles/globals.css';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/layout/QuantumHolographicNavbar'), { ssr: false });
const Footer = dynamic(() => import('../components/layout/Footer'));
const SidebarQuickLinks = dynamic(() => import('../components/layout/SidebarQuickLinks'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen bg-black text-white">
			<a href="#main" className="skip-link">Skip to content</a>
			<Navbar />
			<SidebarQuickLinks />
			<main id="main" className="pt-20">
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	);
}