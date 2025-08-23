import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function SmartCrmIntelligenceSuite() {
	return (
		<ServiceLanding
			title="Smart CRM Intelligence Suite"
			description="Augment your CRM with AI-driven lead scoring, next-best-action, auto-enrichment, and pipeline risk forecasts. Works with Salesforce, HubSpot, and Pipedrive."
			subtitle="AI signals and automation for your CRM"
			pricePerMonthUSD={299}
			implementationWeeks="1-2 weeks"
			roiNote="Sales teams report 15–25% lift in conversion rates"
			features={[
				"AI lead and account scoring",
				"Next-best-action recommendations",
				"Auto-enrichment and dedupe",
				"Meeting and email summarization",
				"Forecast health and risk alerts",
				"Salesforce/HubSpot/Pipedrive integrations"
			]}
			industries={["Sales", "RevOps", "B2B SaaS"]}
			canonical="https://ziontechgroup.com/smart-crm-intelligence-suite"
		/>
	);
}