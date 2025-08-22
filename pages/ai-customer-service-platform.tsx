import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiCustomerServicePlatform() {
	return (
		<ServiceLanding
			title="AI-Powered Customer Service Platform"
			description="Resolve tickets faster with AI triage, suggested replies, and knowledge-grounded answers. Reduce handle time and improve CSAT across channels."
			subtitle="Intelligent customer service with AI automation"
			pricePerMonthUSD={199}
			implementationWeeks="2-4 hours"
			roiNote="Organizations report 300%+ ROI via reduced costs and improved satisfaction"
			features={[
				"Smart routing and triage",
				"Suggested replies and macro generation",
				"Knowledge-grounded answers (RAG)",
				"Escalation, analytics, and CSAT",
				"Email, chat, and helpdesk integrations",
				"Human handoff with full context"
			]}
			industries={["Support", "Success", "E-commerce", "SaaS"]}
			canonical="https://ziontechgroup.com/ai-customer-service-platform"
		/>
	);
}