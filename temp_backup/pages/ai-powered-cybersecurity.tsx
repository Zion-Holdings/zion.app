import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIPoweredCybersecurity() {
	return (
		<ServiceLanding
			title="AI-Powered Cybersecurity"
			description="Detect, prioritize, and remediate threats faster with AI-driven detection, investigation, and response across cloud and endpoints."
			subtitle="Proactive defense with intelligent automation"
			pricePerMonthUSD={3499}
			implementationWeeks="Implementation: 3-6 weeks"
			roiNote="Reduce mean time to detect/respond by 60-80%"
			features={[
				"Behavioral analytics and anomaly detection",
				"LLM-assisted investigation and SOAR",
				"Attack path and blast-radius analysis",
				"Cloud posture and config drift detection",
				"Threat intel and automatic enrichment",
				"Integrations: CrowdStrike, SentinelOne, Splunk, Wiz"
			]}
			industries={["Finance", "Healthcare", "SaaS", "Public Sector"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/ai-powered-cybersecurity"
		/>
	);
}