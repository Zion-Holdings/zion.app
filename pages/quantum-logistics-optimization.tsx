import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function QuantumLogisticsOptimization() {
	return (
		<ServiceLanding
			title="Quantum Logistics Optimization"
			description="Optimize complex routing, fleet allocation, and scheduling using quantum-inspired algorithms at scale."
			subtitle="Cut logistics costs and delivery times"
			pricePerMonthUSD={4999}
			implementationWeeks="Implementation: 4-8 weeks"
			roiNote="Typical ROI: 200-400% via route and capacity optimization"
			features={[
				"VRP, TSP, and multi-depot optimization",
				"Real-time replanning under constraints",
				"Carbon-aware routing options",
				"Carrier and lane optimization",
				"Digital twin scenario testing",
				"Integrations: Snowflake, Kafka, SAP, Oracle"
			]}
			industries={["Logistics", "Retail", "Manufacturing", "E-commerce"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/quantum-logistics-optimization"
		/>
	);
}