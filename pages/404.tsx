import React from 'react';
import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<div className="min-h-[70vh] flex items-center">
			<div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
				<h1 className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">Page not found</h1>
				<p className="mt-4 text-gray-300 max-w-2xl">The page you’re looking for doesn’t exist or moved. Explore our services below or contact us and we’ll help you find it.</p>

				<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<Link href="/services" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40">Browse all services</Link>
					<Link href="/comprehensive-services-showcase-2025" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-fuchsia-400/40">Full services showcase</Link>
					<Link href="/pricing" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-emerald-400/40">Pricing</Link>
					<Link href="/resources" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40">Resources</Link>
					<Link href="/contact" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-fuchsia-400/40">Contact sales</Link>
					<Link href="/support" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-emerald-400/40">Support</Link>
				</div>

				<div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-gray-400">
					<span>Mobile: +1 302 464 0950</span>
					<a className="underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
					<span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
				</div>
			</div>
		</div>
	);
}