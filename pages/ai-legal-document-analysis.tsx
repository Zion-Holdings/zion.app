import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiLegalDocumentAnalysis() {
	return (
		<ServiceLanding
			title="AI Legal Document Analysis & Contract Review"
			description="Analyze NDAs, MSAs, SOWs, and complex agreements with AI-powered clause extraction, risk detection, and negotiation guidance."
			subtitle="Accelerate legal reviews with intelligent automation"
			pricePerMonthUSD={2999}
			implementationWeeks="2-3 weeks"
			roiNote="Legal teams report 4x ROI via faster reviews and lower outside counsel spend"
			features={[
				"Clause detection with risk scoring and fallback suggestions",
				"Obligation extraction and workflow tracking",
				"Deviation detection against playbooks and standards",
				"Redline recommendations and negotiation assistant",
				"Data room scanning and duplicate detection",
				"Integrated e-sign and matter management hooks",
				"PII/PHI detection and privacy posture checks",
				"Audit trail and export to DOCX/PDF"
			]}
			industries={["Legal", "SaaS", "Enterprise Procurement", "Finance", "Healthcare"]}
			canonical="https://ziontechgroup.com/ai-legal-document-analysis"
		/>
	);
}