import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AICustomerSuccessPlatform() {
	return (
		<ServiceLanding
			title="AI Customer Success Platform"
			slug="ai-customer-success-platform"
			description="Predict churn, orchestrate proactive outreach, and increase lifetime value. Our AI monitors accounts across product usage, tickets, billing, and NPS to trigger playbooks that prevent churn and expand revenue."
			subtitle="Reduce churn by 20–45% and grow NRR with automated, data-driven customer health."
			pricePerMonthUSD={1999}
			implementationWeeks="Implementation: 2–4 weeks"
			roiNote="Average ROI 4–10x within 90 days"
			features={[
				"Unified customer health scoring (usage, support, sentiment, billing)",
				"Churn risk prediction with explainable insights",
				"Playbook automation (email, CS tasks, in-app guides, offers)",
				"Expansion signals for upsell/cross-sell",
				"Executive QBR reports and cohort analytics",
				"Integrations: HubSpot, Salesforce, Zendesk, Intercom, Segment"
			]}
			industries={["SaaS", "Fintech", "Media", "E‑commerce"]}
			canonical="https://ziontechgroup.com/ai-customer-success-platform"
		/>
	);
}