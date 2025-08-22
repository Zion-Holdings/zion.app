import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function WebinarsPage() {
	const pageTitle = 'Webinars | Zion Tech Group';
	const pageDescription = 'Watch live and on-demand webinars on AI, quantum computing, and modern SaaS.';
	return (
		<>
			<SEO title={pageTitle} description={pageDescription} canonical="/webinars" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 max-w-5xl">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">Webinars</h1>
					<p className="mt-4 text-lg text-gray-300">Stay ahead with deep-dives into AI safety, RAG evaluation, quantum infrastructure, and enterprise automation.</p>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="p-6 rounded-lg bg-white/5 border border-white/10">
							<h2 className="text-xl font-semibold">On-demand library coming soon</h2>
							<p className="mt-2 text-gray-300">We are preparing a curated list of upcoming and recorded webinars. Follow us on LinkedIn for announcements.</p>
						</div>
					</div>

					<div className="mt-12 flex items-center gap-4">
						<Link href="/events" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">View Events</Link>
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Contact Us</Link>
					</div>
				</div>
			</section>
		</>
	);
}