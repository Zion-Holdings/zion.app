import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiSupplyChainOptimization() {
	return (
		<ServiceLanding
			title="AI Supply Chain Optimization Platform"
			description="Predict demand, optimize inventory, and streamline logistics with AI. Reduce costs while improving service levels across your supply chain."
			subtitle="Optimize inventory, logistics, and forecasting"
			pricePerMonthUSD={4999}
			implementationWeeks="4-6 weeks"
			roiNote="Companies report 400% ROI via reduced costs and improved service levels"
			features={[
				"AI demand forecasting",
				"Inventory optimization",
				"Logistics route planning",
				"Supplier risk signals",
				"Lead time variance analytics",
				"What-if simulations]}
			]}
			industries={["Retail", "Manufacturing", "CPG", "Logistics"]}
			canonical="https://ziontechgroup.com/ai-supply-chain-optimization]}
		/>
	);
}