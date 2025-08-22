import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function EventsPage() {
	return (
		<>
			<Head>
				<title>Events | Zion Tech Group</title>
				<meta name="description" content="Upcoming events, conferences, and webinars from Zion Tech Group." />
				<link rel="canonical" href="https://ziontechgroup.com/events/" />
			</Head>
			<Layout>
				<section className="container mx-auto px-4 py-24">
					<h1 className="text-4xl font-bold mb-4">Events</h1>
					<p className="text-gray-300 mb-8">Stay tuned for upcoming events and conferences. For speaking requests or sponsorships, contact us.</p>
				</section>
			</Layout>
		</>
	);
}