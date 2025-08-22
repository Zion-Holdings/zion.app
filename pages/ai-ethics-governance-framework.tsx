import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIEthicsGovernanceFramework() {
	return (
		<ServiceLanding
			title="AI Ethics & Governance Framework"
			description="Operationalize responsible AI with policy, risk controls, monitoring, and compliance automation aligned to global standards."
			subtitle="Responsible AI, end-to-end"
			pricePerMonthUSD={1999}
			implementationWeeks="Implementation: 3-6 weeks"
			roiNote="Reduce compliance risk and accelerate AI adoption"
			features={[
				"Policy templates aligned to NIST AI RMF, ISO/IEC",
				"Model cards, data lineage, and audit trails",
				"Bias detection, red-teaming, and evals",
				"PII handling, privacy impact assessments",
				"Human-in-the-loop controls and approvals",
				"Integrations: OpenAI, Vertex, Bedrock, Databricks"
			]}
			industries={["Regulated industries", "Healthcare", "Finance", "Public Sector"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/ai-ethics-governance-framework"
		/>
	);
}