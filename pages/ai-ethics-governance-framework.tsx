import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIEthicsGovernanceFramework() {
	return (
		<ServiceLanding
			title="AI Ethics & Governance Framework"
			slug="ai-ethics-governance-framework"
			description="Operationalize responsible AI with policies, risk assessments, model monitoring, and documentation. Align with global standards and regulatory expectations."
			subtitle="Ship trustworthy AI with auditable controls and continuous oversight."
			pricePerMonthUSD={1599}
			implementationWeeks="Implementation: 3–6 weeks"
			roiNote="Reduce compliance risk and accelerate approvals"
			features={[
				"AI risk register and DPIA templates",
				"Bias/fairness tests, red-teaming workflows",
				"Model cards, data sheets, and change logs",
				"Prompt governance and access controls",
				"Regulatory mapping (EU AI Act, NIST AI RMF)",
				"Training and incident response runbooks"
			]}
			industries={["Finance", "Healthcare", "Public Sector", "SaaS"]}
			canonical="https://ziontechgroup.com/ai-ethics-governance-framework"
		/>
	);
}