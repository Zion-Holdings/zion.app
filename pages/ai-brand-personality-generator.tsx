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
			<ServiceLanding
				title="AI Brand Personality Generator"
				description="Generate on-brand voice, tone, and messaging playbooks, and enforce them across channels with real-time QA."
				subtitle="Consistent, on-brand content at scale"
				pricePerMonthUSD={499}
				implementationWeeks="1-2 weeks"
				roiNote="Improve brand consistency and content velocity"
				features={["Voice and tone modeling","Style guide extraction from samples","Guardrails and QA for on-brand output","Multi-channel templates and snippets","Brand compliance checks","Analytics on usage and quality"]}
				industries={["Marketing", "Brand", "Agencies", "SaaS"]}
			/>
		</>
	);
}

