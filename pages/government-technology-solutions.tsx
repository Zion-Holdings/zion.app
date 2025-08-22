import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function GovernmentTechnologySolutions() {
	return (
		<ServiceLanding
			title="Government Technology Solutions"
			description="Secure, compliant AI and digital platforms for agencies—improving service delivery, transparency, and mission outcomes."
			subtitle="Modernize with security and accountability"
			pricePerMonthUSD={5999}
			implementationWeeks="Implementation: 8-12 weeks"
			roiNote="Faster services at lower cost with improved oversight"
			features={[
				"Case management and digital services",
				"AI document processing and discovery",
				"Citizen experience personalization",
				"Security, logging, and data sovereignty",
				"Accessibility and multilingual support",
				"FedRAMP/SOC2 paths; integrations: ServiceNow, Salesforce"
			]}
			industries={["Federal", "State", "Local", "Defense"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/government-technology-solutions"
		/>
	);
}