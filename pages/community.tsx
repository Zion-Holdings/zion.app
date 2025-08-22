import React from 'react';
import Head from 'next/head';

export default function CommunityPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Community | Zion Tech Group</title>
				<meta name="description" content="Community forum and resources for Zion Tech Group users" />
				<link rel="canonical" href="https://ziontechgroup.com/community" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-8">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Community</h1>
				<p className="text-slate-300">Join our community. Ask questions, share solutions, and learn best practices.</p>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Get Help</h2>
						<p className="text-slate-300">Visit the <a className="text-cyan-400 underline" href="/support">Support Center</a> or email <a className="text-purple-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
					</div>
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Follow Us</h2>
						<ul className="text-slate-300 space-y-1">
							<li><a className="text-cyan-400" href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
							<li><a className="text-cyan-400" href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer">GitHub</a></li>
							<li><a className="text-cyan-400" href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer">Instagram</a></li>
							<li><a className="text-cyan-400" href="https://youtube.com/@ziontechgroup" target="_blank" rel="noopener noreferrer">YouTube</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}