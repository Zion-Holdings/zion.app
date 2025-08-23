import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function QuantumEnergyPlatformPage() {
	return (
		<UltraFuturisticBackground variant="holographic" intensity="high">
			<Head>
				<title>Quantum Energy Platform | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/quantum-energy-platform" />
				<meta name="description" content="Fusion and quantum energy simulations for next-generation power systems." />
			</Head>
			<div className="container mx-auto px-4 py-24 text-white">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">Quantum Energy Platform</h1>
				<p className="text-gray-300 max-w-3xl">Fusion and quantum energy simulations for next-generation power systems. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
			</div>
		</UltraFuturisticBackground>
	);
}