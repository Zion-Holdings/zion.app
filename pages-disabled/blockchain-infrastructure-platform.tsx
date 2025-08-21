import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function BlockchainInfraPage() {
	return (
		<>
			<Head>
				<title>Blockchain Infrastructure Platform | Zion Tech Group</title>
				<meta name="description" content="Enterprise-grade nodes, indexing, and HSM-backed key management with SLAs and audit logs." />
				<link rel="canonical" href="https://ziontechgroup.com/blockchain-infrastructure-platform" />
			</Head>
			<ServiceLanding serviceId="blockchain-infrastructure-platform" />
		</>
	);
}

