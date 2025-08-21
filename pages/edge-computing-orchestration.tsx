import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function EdgeOrchestrationPage() {
	return (
		<>
			<Head>
				<title>Edge Computing Orchestration | Zion Tech Group</title>
				<meta name="description" content="Distributed orchestration and optimization for edge fleets with placement, telemetry, and policies." />
				<link rel="canonical" href="https://ziontechgroup.com/edge-computing-orchestration" />
			</Head>
			<ServiceLanding serviceId="edge-computing-orchestration" />
		</>
	);
}

