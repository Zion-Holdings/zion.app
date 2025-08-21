import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIAutonomousDecisionEnginePage() {
	return (
		<>
			<Head>
				<title>AI Autonomous Decision Engine | Zion Tech Group</title>
				<meta name="description" content="Policy-aware autonomous workflows with human-in-the-loop approvals, rollback, and audits." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-decision-engine" />
			</Head>
			<ServiceLanding serviceId="ai-autonomous-decision-engine" />
		</>
	);
}

