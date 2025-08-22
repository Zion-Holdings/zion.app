import React from 'react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function EntertainmentMediaSolutions() {
	const links = [
		{ href: '/virtual-event-hologram-platform', label: 'Virtual Event Hologram Platform' },
		{ href: '/ai-content-generator', label: 'AI Content Generator' },
		{ href: '/ai-autonomous-marketing-platform', label: 'AI Autonomous Marketing' }
	];
	return (
		<UltraFuturisticBackground variant="quantum" intensity="medium">
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">Entertainment & Media Solutions</h1>
				<p className="text-gray-300 mb-8">Explore AI-powered solutions for media production, events, and marketing.</p>
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