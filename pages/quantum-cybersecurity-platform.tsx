import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function QuantumCybersecurityPlatform() {
	return (
		<ServiceLanding
			title="Quantum Cybersecurity Platform"
			slug="quantum-cybersecurity-platform"
			description="Prepare for post-quantum threats with crypto-agile key management, lattice-based algorithms, and hybrid TLS. Assess, migrate, and monitor with expert guidance."
			subtitle="Future-proof your security posture with quantum-safe cryptography."
			pricePerMonthUSD={2499}
			implementationWeeks="Implementation: 4–10 weeks"
			roiNote="Reduce breach risk and compliance exposure"
			features={[
				"PQ-readiness assessment and SBOM crypto inventory",
				"Hybrid key exchange (Kyber + classical) rollouts",
				"HSM/KMS integration and crypto agility",
				"Network and app compatibility testing",
				"Operational runbooks and policy updates",
				"Training for security, platform, and app teams"
			]}
			industries={["Finance", "Government", "Healthcare", "Enterprise IT"]}
			canonical="https://ziontechgroup.com/quantum-cybersecurity-platform"
		/>
	);
}