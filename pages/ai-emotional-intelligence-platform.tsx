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
			<ServiceLanding
				title="AI Emotional Intelligence Platform"
				description="Assess, train, and enhance emotional intelligence in teams using privacy-safe multimodal AI and coaching workflows."
				subtitle="Build empathetic, high-performing teams"
				pricePerMonthUSD={999}
				implementationWeeks="2-3 weeks"
				roiNote="Higher CSAT, better retention, and improved collaboration"
				features={["Multimodal emotion recognition with consent","Personalized EI training plans","Role-play simulations with feedback","Manager dashboards and coaching tips","Privacy-first data handling","Integrations with HRIS and LMS"]}
				industries={["Customer Support", "Sales", "HR", "Healthcare"]}
				url="https://ziontechgroup.com/ai-emotional-intelligence-platform"
			/>
		</>
	);
}

