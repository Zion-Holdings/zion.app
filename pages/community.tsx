import React from 'react';
import SEO from '../components/SEO';

export default function Community() {
	return (
		<>
			<SEO title="Community | Zion Tech Group" description="Join the community for Q&A, tutorials, and product feedback." canonical="https://ziontechgroup.com/community/" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Community</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">Ask questions, share best practices, and help others succeed with Zion platforms.</p>
					<ul className="mt-6 space-y-3 text-gray-300">
						<li><a className="text-cyan-300 hover:text-cyan-200" href="https://github.com/Zion-Holdings" target="_blank" rel="noreferrer">GitHub</a> — source and issues</li>
						<li><a className="text-cyan-300 hover:text-cyan-200" href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noreferrer">LinkedIn</a> — updates and thought leadership</li>
						<li><a className="text-cyan-300 hover:text-cyan-200" href="https://twitter.com/ziontechgroup" target="_blank" rel="noreferrer">Twitter</a> — quick product news</li>
					</ul>
				</div>
			</section>
		</>
	);
}