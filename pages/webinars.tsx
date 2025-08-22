import React from 'react';
import SEO from '../components/SEO';

export default function WebinarsPage() {
	return (
		<>
			<SEO title="Webinars | Zion Tech Group" description="Live and on-demand webinars from Zion Tech Group." />
			<section className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-6">Webinars</h1>
				<p className="text-gray-300 mb-8 max-w-2xl">Explore our upcoming and past webinars covering AI, automation, cloud, and quantum security.</p>
				<div className="space-y-4">
					<article className="p-6 rounded-xl border border-white/10 bg-white/5">
						<h2 className="text-2xl font-semibold mb-2">No scheduled webinars</h2>
						<p className="text-gray-400">New sessions will be announced soon. Follow us on LinkedIn for updates.</p>
					</article>
				</div>
			</section>
		</>
	);
}