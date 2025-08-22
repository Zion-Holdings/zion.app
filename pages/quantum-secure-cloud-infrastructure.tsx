import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function QuantumSecureCloudInfrastructurePage() {
	return (
		<>
			<Head>
				<title>Quantum-Secure Cloud Infrastructure | Zion Tech Group</title>
				<meta name="description" content="Unbreakable quantum-resistant security for cloud workloads with post-quantum crypto, key management, and end-to-end policy controls." />
				<link rel="canonical" href="https://ziontechgroup.com/quantum-secure-cloud-infrastructure" />
			</Head>
			<ServiceLanding
				title="Quantum-Secure Cloud Infrastructure"
				description="Harden your cloud with quantum-resistant cryptography, hardware root-of-trust, confidential computing, and zero-trust service mesh. Delivered as a managed reference architecture with controls, observability, and compliance baked in."
				subtitle="Post-quantum security foundations for mission-critical systems"
				pricePerMonthUSD={28999}
				implementationWeeks="6–10 weeks"
				roiNote="Reduce breach surface and compliance costs; future-proof against quantum threats"
				features={[
					"Post-quantum TLS and key management (PQ-KMS)",
					"Confidential computing with attestation and runtime policy",
					"mTLS service mesh with identity-aware policies",
					"Hardware-backed secrets and secure enclaves",
					"Centralized audit with tamper-evident logs",
					"Compliance mappings (SOC 2, ISO 27001, HIPAA, PCI)"
				]}
				industries={["Finance", "Healthcare", "Public Sector", "SaaS"]}
				canonical="https://ziontechgroup.com/quantum-secure-cloud-infrastructure"
			/>
		</>
	);
}