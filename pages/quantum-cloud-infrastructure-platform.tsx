import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function QuantumCloudInfrastructurePlatform() {
	return (
		<ServiceLanding
			title="Quantum Cloud Infrastructure Platform"
			description="Build quantum-ready workloads with hybrid classical-quantum orchestration, secure key distribution, and simulation toolkits."
			subtitle="Future-proof your cloud for the quantum era"
			pricePerMonthUSD={7999}
			implementationWeeks="Implementation: 8-12 weeks"
			roiNote="De-risk quantum adoption while gaining near-term benefits"
			features={[
				"Hybrid workflow orchestration (classical + quantum)",
				"Quantum-safe crypto and key distribution",
				"Gate-level simulators and QAOA toolkits",
				"MLOps + QOps pipelines and observability",
				"Compliance: SOC2, ISO 27001, HIPAA options",
				"Integrations: Braket, Qiskit, Cirq, Azure Quantum"
			]}
			industries={["Finance", "Pharma", "Aerospace", "Government"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/quantum-cloud-infrastructure-platform"
		/>
	);
}