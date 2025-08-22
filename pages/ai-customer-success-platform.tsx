import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiCustomerSuccessPlatform() {
	return (
		<ServiceLanding
			title="AI Customer Success Platform"
			description="Predict churn, identify expansion, and orchestrate customer health actions with AI-driven insights and workflows."
			subtitle="Proactive retention and expansion"
			pricePerMonthUSD={299}
			implementationWeeks="2-5 days"
			roiNote="Teams report 2–4x ROI via reduced churn and increased NRR"
			features={[
				"Churn prediction and health scoring",
				"Playbooks and automated outreach",
				"Onboarding journeys and QBR automation",
				"Renewal and expansion opportunity detection",
				"NPS/CSAT analysis and topic clustering",
				"CRM and support integrations (Salesforce, HubSpot, Zendesk)",
				"Executive dashboards and alerts",
				"Success plan templates and collaboration"
			]}
			industries={["B2B SaaS", "Fintech", "Healthcare", "Professional Services"]}
			canonical="https://ziontechgroup.com/ai-customer-success-platform"
		/>
	);
}