import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Homepage2025 from '../components/Homepage2025';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title>Zion Tech Group | Micro SaaS, AI, IT & Quantum Solutions</title>
				<meta name="description" content="Real micro SaaS, AI, and IT services with transparent pricing and fast onboarding. Contact +1 302 464 0950 or kleber@ziontechgroup.com." />
				<link rel="canonical" href="https://ziontechgroup.com/" />
			</Head>
			<Homepage2025 />
		</Layout>
	);
}
