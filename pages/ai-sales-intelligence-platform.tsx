import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiSalesIntelligencePlatform() {
	return (
		<ServiceLanding
			title="AI Sales Intelligence Platform"
			description="Boost sales performance with AI-powered prospecting, lead scoring, and pipeline insights. Automate research and outreach to increase conversion rates and revenue."
			subtitle="Supercharge your sales with AI"
			pricePerMonthUSD={249}
			implementationWeeks="1-2 hours"
			roiNote="Teams report up to 5x ROI from productivity and win-rate gains"
			features={[
				"Automated prospect research and enrichment",
				"AI lead scoring and intent signals",
				"Email and LinkedIn sequencing with personalization",
				"Meeting summaries and next-step extraction",
				"Pipeline risk alerts and forecast improvements",
				"CRM sync (Salesforce, HubSpot, Pipedrive)",
				"Competitor intelligence and objection handling",
				"Account-based insights and territory planning"
			]}
			industries={["B2B SaaS", "Professional Services", "Manufacturing", "Financial Services"]}
			canonical="https://ziontechgroup.com/ai-sales-intelligence-platform"
		/>
	);
}