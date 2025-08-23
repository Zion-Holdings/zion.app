import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiCustomerServicePlatform() {
	return (
		<ServiceLanding
			title="AI-Powered Customer Service Platform"
			description="Deliver instant, accurate support with AI chat, ticket triage, and automated resolutions. Reduce response times and support costs while improving CSAT."
			subtitle="Intelligent customer service with AI automation"
			pricePerMonthUSD={199}
			implementationWeeks="2-4 hours"
			roiNote="Organizations report ~3x ROI via deflection and faster resolutions"
			features={[
				"AI chatbots with retrieval-augmented answers",
				"Ticket classification, routing, and summarization",
				"Auto-drafting of replies and macros",
				"Multilingual support and tone control",
				"Help center content generation and refresh",
				"Integrations: Zendesk, Freshdesk, Intercom, Salesforce",
				"Voice IVR handoff and call summarization",
				"Workflow analytics and CSAT tracking"
			]}
			industries={["E-commerce", "SaaS", "Telecom", "Financial Services"]}
			url="https://ziontechgroup.com/ai-customer-service-platform"
		/>
	);
}