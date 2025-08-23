import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiHealthcareAnalytics() {
	return (
		<ServiceLanding
			title="AI Healthcare Analytics & Patient Intelligence Platform"
			description="Analyze patient data, predict outcomes, and optimize care delivery with AI. Improve outcomes and reduce costs with explainable insights."
			subtitle="Transform healthcare data into insights"
			pricePerMonthUSD={5999}
			implementationWeeks="6-8 weeks"
			roiNote="Healthcare organizations report 300% ROI through improved outcomes and reduced costs"
			features={[
				"AI patient outcome prediction",
				"Clinical decision support",
				"Population health analytics",
				"Risk stratification",
				"Care pathway optimization",
				"Interoperability and security"
			]}
			industries={["Healthcare", "Hospitals", "Payers", "Providers"]}
			url="https://ziontechgroup.com/ai-healthcare-analytics"
		/>
	);
}