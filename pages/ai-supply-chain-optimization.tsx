import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiSupplyChainOptimization() {
	return (
		<ServiceLanding
			title="AI Supply Chain Optimization"
			description="Optimize demand forecasting, inventory planning, procurement, and logistics with an end-to-end AI platform. Reduce stockouts, improve OTIF, and cut logistics costs."
			subtitle="Forecast, plan, and orchestrate your supply chain with AI"
			pricePerMonthUSD={4999}
			implementationWeeks="4-6 weeks"
			roiNote="Typical 4x ROI from reduced inventory and logistics costs"
			features={[
				"AI demand forecasting with weather, events, and macro signals",
				"Inventory optimization and safety stock recommendations",
				"Dynamic reorder points and automated PO generation",
				"Logistics route optimization and carrier selection",
				"Supplier risk scoring and lead time variability modeling",
				"Scenario planning and S&OP simulation",
				"SKU rationalization and assortment optimization",
				"Real-time anomaly detection on orders and shipments"
			]}
			industries={["Retail", "CPG", "Manufacturing", "E‑commerce", "Pharma"]}
			canonical="https://ziontechgroup.com/ai-supply-chain-optimization"
		/>
	);
}