import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiEvaluationOrchestrator() {
	return (
		<ServiceLanding
			title="AI Evaluation Orchestrator"
			description="Automate large-scale LLM evaluations with regression testing, dataset versioning, guardrails, and cost tracking. Integrates with OpenAI, Anthropic, and open-source models."
			subtitle="Automated LLM evals and guardrails at scale"
			pricePerMonthUSD={199}
			implementationWeeks="1-2 days"
			roiNote="Reduce model regressions by 60% and evaluation time by 80%"
			features={[
				"Scenario-based evaluation suites",
				"Golden datasets, metrics, and thresholds",
				"Prompt sensitivity and jailbreak testing",
				"Guardrails and PII/safety checks",
				"CI/CD integration and regression dashboards",
				"Cost tracking per run/model/vendor",
				"Supports OpenAI, Anthropic, Groq, OpenRouter"
			]}
			industries={["Product Engineering", "QA & SRE", "Data Science"]}
			canonical="https://ziontechgroup.com/ai-evaluation-orchestrator"
		/>
	);
}