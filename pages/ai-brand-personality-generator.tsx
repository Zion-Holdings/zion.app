import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function BrandPersonalityPage() {
	return (
		<>
			<Head>
				<title>AI Brand Personality Generator | Zion Tech Group</title>
				<meta name="description" content="Generate consistent brand voice, tone, and messaging packs with analytics. Fast setup and transparent pricing." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-brand-personality-generator" />
			</Head>
			<ServiceLanding serviceId="ai-brand-personality-generator" />
		</>
	);
}

