import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiPoweredDecisionEngine() {
	return (
		<ServiceLanding
			title="AI-Powered Decision Engine"
			description="Operationalize decisions with explainable AI policies, scenario modeling, and real-time signals. Reduce bias and cycle time with auditable recommendations."
			subtitle="From data to decisions"
			pricePerMonthUSD={299}
			implementationWeeks="2-4 weeks"
			roiNote="Shorten decision cycles by 40–60%"
			features={[
				"Policy graph and rules with LLM assist",
				"Scenario modeling and what-if analysis",
				"Human-in-the-loop approvals",
				"Audit trails and explanations",
				"KPI impact forecasting",
				"APIs and event-driven actions"
			]}
			industries={["Financial Services", "Operations", "Risk", "E-commerce"]}
			canonical="https://ziontechgroup.com/ai-powered-decision-engine"
		/>
	);
}