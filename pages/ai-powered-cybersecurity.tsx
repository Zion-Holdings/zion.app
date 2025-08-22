import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIPoweredCybersecurityPage() {
	return (
		<>
			<Head>
				<title>AI-Powered Cybersecurity | Zion Tech Group</title>
				<meta name="description" content="Intelligent threat detection, triage, and response with AI-driven detections, enrichment, and automated playbooks across cloud and endpoint." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-powered-cybersecurity" />
			</Head>
			<ServiceLanding
				title="AI-Powered Cybersecurity"
				description="Modernize your SOC with AI: combine signals from EDR, cloud, identity, and network to detect, prioritize, and contain threats automatically."
				subtitle="From noisy alerts to actionable, automated defense"
				pricePerMonthUSD={4999}
				implementationWeeks="3–6 weeks"
				roiNote="Reduce MTTD/MTTR and analyst toil; increase coverage and resilience"
				features={[
					"Behavioral detections and UEBA",
					"Threat intel enrichment and scoring",
					"Automated containment and response",
					"Identity-centric detections and hardening",
					"Cloud posture and workload protections",
					"Integrations: CrowdStrike, SentinelOne, Microsoft Defender, Okta, Wiz"
				]}
				industries={["Finance", "Healthcare", "SaaS", "Manufacturing"]}
				canonical="https://ziontechgroup.com/ai-powered-cybersecurity"
			/>
		</>
	);
}