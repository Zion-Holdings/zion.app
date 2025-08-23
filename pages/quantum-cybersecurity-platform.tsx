import React from 'react';
import Head from 'next/head';

export default function QuantumCybersecurityPlatformPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white">
			<Head>
				<title>Quantum Cybersecurity Platform | Zion Tech Group</title>
				<meta name="description" content="Quantum-resistant cryptography, key distribution, and zero-trust security architecture." />
				<link rel="canonical" href="https://ziontechgroup.com/quantum-cybersecurity-platform" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Quantum Cybersecurity Platform</h1>
				<p className="text-slate-300">Shield your organization from future quantum threats with NIST-aligned post-quantum cryptography and quantum key distribution integrations.</p>
				<ul className="list-disc list-inside text-slate-300 space-y-1">
					<li>Post-quantum crypto migration planning</li>
					<li>Quantum key distribution integrations</li>
					<li>Zero-trust access and continuous verification</li>
					<li>Threat detection with quantum-safe telemetry</li>
				</ul>
			</div>
		</div>
	);
}