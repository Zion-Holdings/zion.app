import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function EnergyUtilitiesSolutions() {
	return (
		<ServiceLanding
			title="Energy & Utilities Solutions"
			description="Grid forecasting, asset intelligence, and outage management with AI—improving reliability and sustainability."
			subtitle="Build resilient, efficient energy systems"
			pricePerMonthUSD={4999}
			implementationWeeks="Implementation: 6-10 weeks"
			roiNote="Lower SAIDI/SAIFI and O&M costs"
			features={[
				"Load and price forecasting",
				"Predictive maintenance for assets",
				"DER orchestration and flexibility",
				"Outage prediction and crew dispatch",
				"Regulatory reporting and analytics",
				"Integrations: OSIsoft PI, SCADA, ESRI, Snowflake"
			]}
			industries={["Utilities", "Renewables", "Oil & Gas"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/energy-utilities-solutions"
		/>
	);
}