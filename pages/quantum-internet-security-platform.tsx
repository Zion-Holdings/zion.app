import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function QuantumInternetSecurityPlatformPage() {
	return (
		<>
			<Head>
				<title>Quantum Internet Security Platform | Zion Tech Group</title>
				<meta name="description" content="Future-proof network security using quantum-safe protocols, QKD integration options, and post-quantum cryptography at scale." />
				<link rel="canonical" href="https://ziontechgroup.com/quantum-internet-security-platform" />
			</Head>
			<ServiceLanding
				title="Quantum Internet Security Platform"
				description="Enable quantum-safe communications with flexible PQC transitions, hybrid key exchange, and policy-driven rollout across apps and services."
				subtitle="Prepare today for tomorrow’s cryptographic landscape"
				pricePerMonthUSD={18999}
				implementationWeeks="6–12 weeks"
				roiNote="Avoid emergency migrations and reduce risk with controlled PQC rollout"
				features={[
					"Hybrid classical + post-quantum key exchange",
					"QKD integration options and key orchestration",
					"Encrypted service mesh with policy controls",
					"Compliance mappings and crypto inventory",
					"Observability for cipher usage and drift",
					"Blue/green cryptography rollout and fallback"
				]}
				industries={["Finance", "Government", "Telecom", "Healthcare"]}
				canonical="https://ziontechgroup.com/quantum-internet-security-platform"
			/>
		</>
	);
}

