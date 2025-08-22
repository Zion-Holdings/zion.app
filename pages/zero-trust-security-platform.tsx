import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function ZeroTrustSecurityPlatformPage() {
	return (
		<>
			<Head>
				<title>Zero Trust Security Platform | Zion Tech Group</title>
				<meta name="description" content="Design and implement zero trust with identity-aware segmentation, continuous verification, and least-privilege access across users, devices, and services." />
				<link rel="canonical" href="https://ziontechgroup.com/zero-trust-network-architecture" />
			</Head>
			<ServiceLanding
				title="Zero Trust Security Platform"
				description="Identity-aware microsegmentation, device posture checks, contextual access policies, and service-to-service mTLS delivered as a managed platform."
				subtitle="Never trust, always verify—applied end to end"
				pricePerMonthUSD={3999}
				implementationWeeks="6–10 weeks"
				roiNote="Reduce lateral movement and audit burden"
				features={[
					"Identity-aware microsegmentation",
					"Device posture and continuous verification",
					"Contextual access policies and JIT access",
					"Service-to-service mTLS and policy",
					"Unified logs, SIEM integrations, SOX-ready reports",
					"Blueprints for multi-cloud and hybrid"
				]}
				industries={["Enterprise IT", "Finance", "Healthcare", "SaaS"]}
				canonical="https://ziontechgroup.com/zero-trust-network-architecture"
			/>
		</>
	);
}