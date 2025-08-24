import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function FintechSolutions() {
	return (
		<ServiceLanding
			title="Fintech Solutions"
			description="AI and quantum-ready platforms for risk, fraud, trading, and customer intelligence with regulatory-grade controls."
			subtitle="Accelerate financial innovation securely"
			pricePerMonthUSD={4999}
			implementationWeeks="Implementation: 6-10 weeks"
			roiNote="Improve risk detection and lower losses"
			features={[
				"Fraud detection and AML analytics",
				"Credit risk and pricing models",
				"Quantum-ready trading optimization",
				"Personalized financial planning experiences",
				"Model governance and auditability",
				"Integrations: FDX, Plaid, Snowflake, Databricks"
			]}
			industries={["Banking", "Payments", "Wealth", "Insurance"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/fintech-solutions"
		/>
	);
}