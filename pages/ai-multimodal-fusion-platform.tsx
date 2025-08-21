import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function MultimodalFusionPage() {
	return (
		<>
			<Head>
				<title>AI Multimodal Fusion Platform | Zion Tech Group</title>
				<meta name="description" content="Unify text, image, audio, and video intelligence with guardrails, evals, and observability. Market-aligned pricing and real integrations." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-multimodal-fusion-platform" />
			</Head>
			<ServiceLanding serviceId="ai-multimodal-fusion-platform" />
		</>
	);
}

