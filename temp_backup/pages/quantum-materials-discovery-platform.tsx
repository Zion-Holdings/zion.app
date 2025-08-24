import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function QuantumMaterialsDiscoveryPlatform() {
	return (
		<ServiceLanding
			title="Quantum Materials Discovery Platform"
			description="Accelerate materials discovery using quantum-inspired simulations and AI-guided exploration to identify optimal compounds and structures."
			subtitle="Reduce discovery cycles from years to months"
			pricePerMonthUSD={9999}
			implementationWeeks="Implementation: 8-12 weeks"
			roiNote="Up to 10x productivity gains in R&D"
			features={[
				"Quantum-inspired simulation pipelines",
				"Multi-objective optimization (cost, stability, performance)",
				"Active learning with lab-in-the-loop",
				"Secure data governance and IP protection",
				"Visualization and collaboration workspace",
				"Integrations: AWS Braket, Azure Quantum, Databricks"
			]}
			industries={["Energy", "Semiconductors", "Pharma", "Aerospace"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/quantum-materials-discovery-platform"
		/>
	);
}