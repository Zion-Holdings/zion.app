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
			<ServiceLanding serviceId="zero-trust-network-architecture" />
		</>
	);
}

