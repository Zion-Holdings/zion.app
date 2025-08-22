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
			<ServiceLanding
				title="Blockchain Infrastructure Platform"
				description="Operate enterprise-grade nodes, indexing, and secure key management with SLAs, observability, and auditability."
				subtitle="Reliable blockchain infrastructure for production workloads"
				pricePerMonthUSD={2499}
				implementationWeeks="2-4 weeks"
				roiNote="Reduce infra toil and incidents; 2–3x ROI versus DIY"
				features={["Managed nodes with multi-region failover","Archive and tracing nodes","Secure HSM-backed key custody","Indexing and subgraph hosting","Webhooks and event streams","Policy-based transaction approvals","Compliance reporting and audit logs","24/7 SRE support"]}
				industries={["Fintech", "Exchanges", "Gaming", "Enterprises"]}
				canonical="https://ziontechgroup.com/blockchain-infrastructure-platform"
			/>
		</>
	);
}

