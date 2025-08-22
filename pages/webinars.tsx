import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function WebinarsPage() {
	return (
		<>
			<Head>
				<title>Webinars | Zion Tech Group</title>
				<meta name="description" content="Upcoming webinars and on-demand sessions from Zion Tech Group." />
				<link rel="canonical" href="https://ziontechgroup.com/webinars/" />
			</Head>
			<Layout>
				<section className="container mx-auto px-4 py-24">
					<h1 className="text-4xl font-bold mb-4">Webinars</h1>
					<p className="text-gray-300 mb-8">Explore our upcoming webinars and on-demand sessions covering AI, cloud, data, and more.</p>
				</section>
			</Layout>
		</>
	);
}