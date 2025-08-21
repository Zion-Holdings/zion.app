import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function EmotionalIQPage() {
	return (
		<>
			<Head>
				<title>AI Emotional Intelligence Platform | Zion Tech Group</title>
				<meta name="description" content="Sentiment and tone intelligence across email, chat, and calls with coaching loops." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-emotional-intelligence-platform" />
			</Head>
			<ServiceLanding serviceId="ai-emotional-intelligence-platform" />
		</>
	);
}

