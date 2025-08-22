import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function EdgeComputingOrchestrationPlatformAliasPage() {
	return (
		<>
			<Head>
				<title>Edge Computing Orchestration Platform | Zion Tech Group</title>
				<meta name="description" content="Distributed orchestration and optimization for edge fleets with placement, telemetry, and policies." />
				<link rel="canonical" href="https://ziontechgroup.com/edge-computing-orchestration" />
			</Head>
			<ServiceLanding
				title="Edge Computing Orchestration Platform"
				description="Deploy, orchestrate, and monitor workloads across edge sites with low latency, offline tolerance, and zero-touch provisioning."
				subtitle="Turn any location into a smart edge"
				pricePerMonthUSD={3499}
				implementationWeeks="4–8 weeks"
				roiNote="Reduce latency and bandwidth costs while improving reliability"
				features={[
					"Fleet provisioning and zero-touch onboarding",
					"Policy-driven placement and rollouts",
					"Local-first processing with cloud sync",
					"Resilient messaging and data replication",
					"Observability and remote diagnostics",
					"Security with TPM/attestation and secrets"
				]}
				industries={["Retail", "Manufacturing", "Energy", "Telco"]}
				canonical="https://ziontechgroup.com/edge-computing-orchestration"
			/>
		</>
	);
}