import Link from 'next/link';

export default function SidebarQuickLinks() {
	return (
		<div className="hidden lg:block fixed left-4 top-28 z-40">
			<nav className="space-y-2 bg-black/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-3">
				<Link href="/services" className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">Services</Link>
				<Link href="/pricing" className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">Pricing</Link>
				<Link href="/market-pricing" className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">Market Pricing</Link>
				<Link href="/contact" className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">Contact</Link>
				<div className="pt-2 border-t border-cyan-500/20 mt-2">
					<a href="tel:+13024640950" className="block px-3 py-2 rounded-lg text-cyan-300 hover:text-white hover:bg-white/5">Call: +1 302 464 0950</a>
					<a href="mailto:kleber@ziontechgroup.com" className="block px-3 py-2 rounded-lg text-cyan-300 hover:text-white hover:bg-white/5">Email Us</a>
				</div>
			</nav>
		</div>
	);
}