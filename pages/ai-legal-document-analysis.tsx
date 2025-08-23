import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiLegalDocumentAnalysis() {
	return (
		<ServiceLanding
			title="AI Legal Document Analysis & Contract Review Platform"
			description="Review contracts, identify risks, and generate insights with AI. Reduce review time and improve accuracy with auditable recommendations."
			subtitle="Accelerate legal review with AI"
			pricePerMonthUSD={2999}
			implementationWeeks="2-3 weeks"
			roiNote="Legal teams report 400% ROI from efficiency and risk reduction"
			features={[
				"AI contract analysis and review",
				"Risk identification and assessment",
				"Key clause extraction and suggestions",
				"Compliance and policy checks",
				"Playbooks and negotiation aids",
				"Audit trails and redlines]}
			]}
			industries={["Legal", "Enterprise", "Procurement", "Compliance"]}
			canonical="https://ziontechgroup.com/ai-legal-document-analysis]}
		/>
	);
}