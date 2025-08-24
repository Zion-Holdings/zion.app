import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';

export default function CommunityPage() {
	const socials = [
		{ name: 'Twitter/X', href: 'https://twitter.com/ziontechgroup' },
		{ name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup' },
		{ name: 'GitHub', href: 'https://github.com/Zion-Holdings' },
		{ name: 'YouTube', href: 'https://youtube.com/@ziontechgroup' }
	];
	return (
		<UltraFuturisticBackground variant="quantum" intensity="medium">
			<Head>
				<title>Community | Zion Tech Group</title>
				<meta name="description" content="Join the Zion Tech Group community: forums coming soon, follow our updates, contribute, and learn." />
				<link rel="canonical" href="https://ziontechgroup.com/community" />
			</Head>
			<div className="container mx-auto px-4 py-16 space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Community</h1>
				<p className="text-gray-300 max-w-3xl">We’re building a vibrant community around AI, micro SAAS, and enterprise IT. Follow us and participate.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Card className="p-6 bg-black/40 border border-gray-700/50">
						<h3 className="text-white text-lg font-semibold mb-2">Get Help</h3>
						<p className="text-gray-300 mb-3">Documentation, FAQ, and support channels.</p>
						<a href="/support" className="text-cyan-400 hover:text-cyan-300">Support Center →</a>
					</Card>
					<Card className="p-6 bg-black/40 border border-gray-700/50">
						<h3 className="text-white text-lg font-semibold mb-2">Developer Docs</h3>
						<p className="text-gray-300 mb-3">API reference and integration guides.</p>
						<a href="/docs" className="text-cyan-400 hover:text-cyan-300">Read Docs →</a>
					</Card>
					<Card className="p-6 bg-black/40 border border-gray-700/50">
						<h3 className="text-white text-lg font-semibold mb-2">Connect</h3>
						<ul className="text-gray-300 space-y-2">
							{socials.map(s => (
								<li key={s.name}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">{s.name}</a></li>
							))}
						</ul>
					</Card>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}