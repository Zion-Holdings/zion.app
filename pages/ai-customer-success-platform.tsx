import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiCustomerSuccessPlatform() {
	return (
		<ServiceLanding
			title="AI Customer Success Platform"
			description="Predict churn, prioritize health interventions, and engage customers with AI. Drive expansion and retention with proactive success playbooks."
			subtitle="Predict and prevent churn"
			pricePerMonthUSD={199}
			implementationWeeks="2 weeks"
			roiNote="Lift retention 3–8 pts; increase NRR"
			features={[
				"Customer health scoring and alerts",
				"Proactive playbooks and tasking",
				"NPS/CSAT ingestion and theme clustering",
				"Auto-summaries and QBR packs",
				"CRM and support integrations",
				"Expansion opportunity detection"
			]}
			industries={["SaaS", "Marketplaces", "Fintech", "B2B"]}
			canonical="https://ziontechgroup.com/ai-customer-success-platform"
		/>
	);
}