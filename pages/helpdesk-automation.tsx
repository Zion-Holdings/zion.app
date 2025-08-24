import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function HelpdeskAutomation() {
	return (
		<ServiceLanding
			title="AI Helpdesk & Customer Support Platform"
			description="Unified ticketing, knowledge base, live chat, and AI agents to resolve issues faster and elevate customer satisfaction."
			subtitle="Faster resolution, happier customers"
			pricePerMonthUSD={199}
			implementationWeeks="1-2 weeks"
			roiNote="Reduce response time by 40–60% and improve CSAT by 20–30%"
			features={[
				"Multi-channel ticketing (email, chat, web, social)",
				"AI triage, intent detection, and auto-routing",
				"Self-service knowledge base with AI search",
				"Chatbots and agent copilot",
				"SLAs, macros, and workflow automation",
				"Customer portal and satisfaction surveys",
				"CRM and incident tool integrations",
				"Analytics, CSAT/NPS, and quality scoring"
			]}
			industries={["B2B SaaS", "E-commerce", "Fintech", "Healthcare", "Professional Services"]}
			canonical="https://ziontechgroup.com/helpdesk-automation"
		/>
	);
}