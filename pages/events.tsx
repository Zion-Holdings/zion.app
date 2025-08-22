import React from 'react';
import SEO from '../components/SEO';

export default function EventsPage() {
	return (
		<>
			<SEO title="Events | Zion Tech Group" description="Upcoming events, conferences, and community sessions hosted by Zion Tech Group." />
			<section className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-6">Events</h1>
				<p className="text-gray-300 mb-8 max-w-2xl">Join our upcoming events, webinars, and community sessions. Stay tuned for announcements and registrations.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<article className="p-6 rounded-xl border border-white/10 bg-white/5">
						<h2 className="text-2xl font-semibold mb-2">No upcoming events</h2>
						<p className="text-gray-400">We are planning our next schedule. Check back soon or follow us on LinkedIn for updates.</p>
					</article>
				</div>
			</section>
		</>
	);
}