import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiPoweredDecisionEngine() {
	return (
		<ServiceLanding
			title="AI-Powered Decision Engine"
			description="Operationalize policy, risk, pricing, and routing decisions with explainable AI and guardrails. Deploy strategies, test variants, and monitor outcomes."
			subtitle="Make better decisions, continuously"
			pricePerMonthUSD={279}
			implementationWeeks="3-7 days"
			roiNote="Teams report 2–5x ROI via faster, consistent decisions and uplift from experimentation"
			features={[
				"Policy and risk decisioning with constraints",
				"Online experimentation (A/B, multi-armed bandits)",
				"Explainability and audit trails",
				"Rules + ML hybrid strategies",
				"Real-time feature engineering and caching",
				"Integrations: Kafka, Snowflake, Redis, REST/gRPC",
				"Drift monitoring and alerts",
				"Versioned strategies with canary rollouts"
			]}
			industries={["Fintech", "SaaS", "Marketplaces", "Logistics"]}
			canonical="https://ziontechgroup.com/ai-powered-decision-engine"
		/>
	);
}