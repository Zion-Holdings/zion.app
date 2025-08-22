import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function WebinarsPage() {
	return (
		<>
			<Head>
				<title>Webinars | Zion Tech Group</title>
				<meta name="description" content="On-demand and upcoming webinars from Zion Tech Group." />
				<link rel="canonical" href="https://ziontechgroup.com/webinars/" />
			</Head>
			<Layout>
				<section className="min-h-[60vh] px-4 py-24">
					<h1 className="text-5xl font-bold mb-4">Webinars</h1>
					<p className="text-gray-300 mb-8">Explore our on-demand sessions and register for upcoming webinars.</p>
				</section>
			</Layout>
		</>
	);
}