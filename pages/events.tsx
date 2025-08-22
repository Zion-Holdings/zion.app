import React from 'react';
import Head from 'next/head';

export default function EventsPage() {
	const upcomingEvents = [
		{
			title: 'AI Innovation Summit 2025',
			date: '2025-09-15',
			location: 'San Francisco, CA',
			description: 'Explore the latest in AI, automation, and quantum technologies with industry leaders.',
			ctaHref: '/contact',
			ctaText: 'Request Invite'
		},
		{
			title: 'Enterprise IT Modernization Workshop',
			date: '2025-10-03',
			location: 'Virtual Event',
			description: 'Hands-on workshop on modernizing enterprise IT with zero-downtime migrations and observability.',
			ctaHref: '/contact',
			ctaText: 'Reserve Seat'
		}
	];

	return (
		<>
			<Head>
				<title>Events | Zion Tech Group</title>
				<meta name="description" content="Join Zion Tech Group at upcoming events, conferences, and workshops. Meet our team and see our solutions in action." />
				<link rel="canonical" href="https://ziontechgroup.com/events/" />
			</Head>

			<section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
						Events
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Meet us at conferences, summits, and workshops around the world.
					</p>
				</div>
			</section>

			<section className="py-12 bg-gradient-to-b from-gray-900 to-black">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
					{upcomingEvents.map((evt) => (
						<div key={evt.title} className="p-8 rounded-2xl border border-gray-800 bg-gray-900/40">
							<h2 className="text-2xl font-semibold text-white mb-2">{evt.title}</h2>
							<div className="text-sm text-gray-400 mb-4">{new Date(evt.date).toLocaleDateString()}</div>
							<div className="text-sm text-gray-400 mb-4">{evt.location}</div>
							<p className="text-gray-300 mb-6">{evt.description}</p>
							<a href={evt.ctaHref} className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700">
								{evt.ctaText}
							</a>
						</div>
					))}
				</div>
			</section>
		</>
	);
}