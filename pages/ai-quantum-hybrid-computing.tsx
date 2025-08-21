import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIQuantumHybridPage() {
	return (
		<>
			<Head>
				<title>AI + Quantum Hybrid Computing | Zion Tech Group</title>
				<meta name="description" content="Hybrid orchestration for optimization and simulation workloads with quantum backends." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-quantum-hybrid-computing" />
			</Head>
			<ServiceLanding serviceId="ai-quantum-hybrid-computing" />
		</>
	);
}

