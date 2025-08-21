import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function MentalHealthCompanionPage() {
	return (
		<>
			<Head>
				<title>AI Mental Health Companion | Zion Tech Group</title>
				<meta name="description" content="Evidence-based, privacy-first mental health support with escalation handoffs and safety controls." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-mental-health-companion" />
			</Head>
			<ServiceLanding serviceId="ai-mental-health-companion" />
		</>
	);
}

