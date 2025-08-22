import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AISalesIntelligencePlatform() {
	return (
		<ServiceLanding
			title="AI Sales Intelligence Platform"
			slug="ai-sales-intelligence-platform"
			description="Auto-prioritize leads, generate personalized outreach, and forecast pipeline with high accuracy. Empower SDRs and AEs with AI copilots embedded in their daily workflows."
			subtitle="Lift conversion rates 15–35% and shorten sales cycles with AI-first workflows."
			pricePerMonthUSD={1499}
			implementationWeeks="Implementation: 1–3 weeks"
			roiNote="Average ROI 3–8x within 60 days"
			features={[
				"AI lead scoring using firmographics, intent, and engagement",
				"One-click hyper-personalized emails and sequences",
				"Meeting prep briefs and objection handling",
				"Forecasting with scenario simulations",
				"CRM automations for notes, tasks, and next steps",
				"Integrations: Salesforce, HubSpot, Gmail/Outlook, Gong, Zoom"
			]}
			industries={["B2B SaaS", "Professional Services", "Manufacturing"]}
			canonical="https://ziontechgroup.com/ai-sales-intelligence-platform"
		/>
	);
}