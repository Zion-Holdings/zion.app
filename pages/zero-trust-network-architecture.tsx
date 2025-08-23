import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function ZeroTrustPage() {
	return (
		<>
			<Head>
				<title>Zero Trust Network Architecture | Zion Tech Group</title>
				<meta name="description" content="Design and roll out Zero Trust with identity-aware proxies, device posture, and policy-as-code. Enterprise-grade, market-referenced." />
				<link rel="canonical" href="https://ziontechgroup.com/zero-trust-network-architecture" />
			</Head>
			<ServiceLanding
				title="Zero Trust Network Architecture"
				description="Design and implement end-to-end zero trust with identity-aware segmentation, continuous verification, and least-privilege access."
				subtitle="Secure by default across users, devices, and services"
				pricePerMonthUSD={3999}
				implementationWeeks="6-10 weeks"
				roiNote="Reduce breach risk and lateral movement; improve audit readiness"
				features={["Identity-aware microsegmentation","Device posture and continuous verification","Contextual access policies","Just-in-time privileged access","Service-to-service mTLS and policy","Unified logs, SIEM/SOX-ready reporting"]}
				industries={["Enterprise IT", "Finance", "Healthcare", "SaaS"]}
			/>
		</>
	);
}

