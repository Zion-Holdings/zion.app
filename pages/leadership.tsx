import React from 'react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function Leadership() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="low">
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership</h1>
				<p className="text-gray-300 max-w-3xl">Meet the leaders driving Zion Tech Group forward. For press or speaking requests, contact +1 302 464 0950 or kleber@ziontechgroup.com.</p>
				<div className="mt-8"><a href="/contact/" className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">Contact Us</a></div>
			</div>
		</UltraFuturisticBackground>
	);
}