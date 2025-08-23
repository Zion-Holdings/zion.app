import React from 'react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function IndustrySolutionsIndex() {
	const links = [
		{ href: '/healthcare-solutions', label: 'Healthcare Solutions' },
		{ href: '/financial-solutions', label: 'Financial Services' },
		{ href: '/manufacturing-ai-solutions', label: 'Manufacturing AI' },
		{ href: '/retail-technology-solutions', label: 'Retail Technology' },
		{ href: '/education-technology-solutions', label: 'Education Technology' },
		{ href: '/government-technology-solutions', label: 'Government Solutions' },
		{ href: '/energy-utilities-solutions', label: 'Energy & Utilities' },
		{ href: '/biotech-ai-research-platform', label: 'Biotech AI Research' }
	];
	return (
		<UltraFuturisticBackground variant="quantum" intensity="medium">
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Industry Solutions</h1>
				<p className="text-gray-300 mb-8">Explore our industry-focused solutions. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{links.map((l) => (
						<a key={l.href} href={l.href} className="p-6 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/50 transition-colors">
							<div className="text-xl font-semibold">{l.label}</div>
							<div className="text-gray-400 mt-2">Learn more</div>
						</a>
					))}
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}