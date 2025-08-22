import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiPoweredCybersecurity() {
	return (
		<ServiceLanding
			title="AI-Powered Cybersecurity"
			description="Detect, prioritize, and respond to threats with AI-driven analytics, anomaly detection, and automated playbooks."
			subtitle="Find and fix risks faster"
			pricePerMonthUSD={2999}
			implementationWeeks="3-6 weeks"
			roiNote="Reduce mean time to detect/respond by up to 50%"
			features={[
				"Threat detection with LLM-assisted triage",
				"Anomaly detection on logs/events",
				"SOAR playbooks and auto-remediation",
				"Attack surface and posture management",
				"Integrations: CrowdStrike, Wiz, Snyk, Splunk",
				"Compliance reporting and evidence"
			]}
			industries={["SaaS", "Finance", "Healthcare", "Retail"]}
			canonical="https://ziontechgroup.com/ai-powered-cybersecurity"
		/>
	);
}