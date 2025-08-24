import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function FintechSolutions() {
	return (
		<ServiceLanding
			title="Fintech AI Solutions"
			slug="fintech-solutions"
			description="AI solutions for fraud detection, risk scoring, KYC/AML automation, and real-time decisioning. Improve compliance and customer experience across the lifecycle."
			subtitle="Smarter finance with lower risk and faster time to yes."
			pricePerMonthUSD={2799}
			implementationWeeks="Implementation: 4–8 weeks"
			roiNote="Reduce fraud loss 15–35% and manual review by 30–50%"
			features={[
				"Transaction anomaly detection and entity resolution",
				"Credit risk models with explainability",
				"KYC/AML case automation and SAR drafts",
				"Collections optimization and next-best-action",
				"Realtime rules with feature store integration",
				"Integrations: Core banking, KYC, payments, CRMs"
			]}
			industries={["Fintech", "Banking", "Lending", "Payments"]}
			canonical="https://ziontechgroup.com/fintech-solutions"
		/>
	);
}