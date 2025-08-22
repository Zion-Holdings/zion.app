import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiHealthcareAnalytics() {
	return (
		<ServiceLanding
			title="AI Healthcare Analytics & Patient Intelligence"
			description="Predict outcomes, stratify risk, and optimize clinical operations with compliant AI analytics across EHR, claims, and device data."
			subtitle="Transform care delivery with predictive insights"
			pricePerMonthUSD={5999}
			implementationWeeks="6-8 weeks"
			roiNote="Providers report 3x ROI through improved outcomes and operational efficiency"
			features={[
				"Outcome prediction for readmission and LOS",
				"Population health cohorts and risk stratification",
				"Clinical decision support with explainability",
				"Care pathway optimization and scheduling",
				"Device streaming and anomaly detection",
				"HIPAA-ready data pipelines and governance",
				"Quality measures and reimbursement optimization",
				"Patient engagement and personalization"
			]}
			industries={["Hospitals", "Payers", "Life Sciences", "Telehealth"]}
			canonical="https://ziontechgroup.com/ai-healthcare-analytics"
		/>
	);
}