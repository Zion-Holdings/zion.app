import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="mt-16 border-t border-cyan-500/20 bg-black/70 backdrop-blur-xl">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
					<div>
						<h4 className="text-sm font-semibold text-cyan-300 mb-4">Company</h4>
						<ul className="space-y-2 text-gray-300">
							<li><Link href="/about" className="hover:text-white">About</Link></li>
							<li><Link href="/news" className="hover:text-white">News</Link></li>
							<li><Link href="/partners" className="hover:text-white">Partners</Link></li>
							<li><Link href="/locations" className="hover:text-white">Locations</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-cyan-300 mb-4">Services</h4>
						<ul className="space-y-2 text-gray-300">
							<li><Link href="/services" className="hover:text-white">All Services</Link></li>
							<li><Link href="/it-services" className="hover:text-white">IT Services</Link></li>
							<li><Link href="/ai-services" className="hover:text-white">AI Services</Link></li>
							<li><Link href="/micro-saas" className="hover:text-white">Micro SaaS</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-cyan-300 mb-4">Solutions</h4>
						<ul className="space-y-2 text-gray-300">
							<li><Link href="/solutions" className="hover:text-white">Business Solutions</Link></li>
							<li><Link href="/security" className="hover:text-white">Security</Link></li>
							<li><Link href="/sustainability" className="hover:text-white">Sustainability</Link></li>
							<li><Link href="/white-papers" className="hover:text-white">White Papers</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-cyan-300 mb-4">Resources</h4>
						<ul className="space-y-2 text-gray-300">
							<li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
							<li><Link href="/market-pricing" className="hover:text-white">Market Pricing</Link></li>
							<li><Link href="/support" className="hover:text-white">Support</Link></li>
							<li><Link href="/terms" className="hover:text-white">Terms</Link></li>
							<li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-cyan-300 mb-4">Contact</h4>
						<ul className="space-y-2 text-gray-300">
							<li><a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a></li>
							<li><a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a></li>
							<li>
								<a href="https://maps.google.com/?q=364 E Main St STE 1008 Middletown DE 19709" target="_blank" rel="noopener noreferrer" className="hover:text-white">
									364 E Main St STE 1008 Middletown DE 19709
								</a>
							</li>
							<li><Link href="/contact" className="hover:text-white">Contact Form</Link></li>
						</ul>
					</div>
				</div>
				<div className="mt-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</div>
			</div>
		</footer>
	);
}