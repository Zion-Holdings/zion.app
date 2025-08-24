import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function HealthcareAISolutions() {
	return (
		<ServiceLanding
			title="Healthcare AI Solutions"
			slug="healthcare-ai-solutions"
			description="Deploy AI for diagnostics assistance, care management, operational optimization, and compliance workflows. Improve outcomes while protecting patient privacy."
			subtitle="Clinically aware AI that augments providers and reduces administrative burden."
			pricePerMonthUSD={2999}
			implementationWeeks="Implementation: 6–12 weeks"
			roiNote="Reduce admin time 20–40% and improve throughput"
			features={[
				"Clinical note summarization and coding (CPT/ICD)",
				"Diagnostic support with literature grounding",
				"Prior auth automation and appeals drafts",
				"Capacity forecasting and staffing optimization",
				"HIPAA-compliant data pipelines and audit",
				"EHR integrations: HL7/FHIR, Epic, Cerner"
			]}
			industries={["Hospitals", "Clinics", "Payers", "HealthTech"]}
			canonical="https://ziontechgroup.com/healthcare-ai-solutions"
		/>
	);
}