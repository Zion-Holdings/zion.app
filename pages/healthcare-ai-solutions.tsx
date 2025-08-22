import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function HealthcareAISolutions() {
	return (
		<ServiceLanding
			title="Healthcare AI Solutions"
			description="AI platforms for diagnostics, patient intelligence, and population health—built with compliance, privacy, and safety in mind."
			subtitle="Improve outcomes while reducing costs"
			pricePerMonthUSD={5999}
			implementationWeeks="Implementation: 6-10 weeks"
			roiNote="Hospitals report 20-30% improved outcomes and cost reduction"
			features={[
				"Clinical decision support and triage",
				"Patient risk stratification and outreach",
				"Operational optimization and staffing",
				"Radiology and pathology assistance",
				"De-identification and PHI governance",
				"Integrations: Epic, Cerner, HL7/FHIR, Snowflake"
			]}
			industries={["Hospitals", "Payers", "Providers", "Life Sciences"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/healthcare-ai-solutions"
		/>
	);
}