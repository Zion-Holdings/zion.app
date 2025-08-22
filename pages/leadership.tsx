import React from 'react';
import Head from 'next/head';

export default function LeadershipPage() {
	return (
		<>
			<Head>
				<title>Leadership | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/leadership" />
			</Head>
			<div className="container mx-auto px-4 py-24 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Leadership</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Our leadership team combines deep expertise in AI, cloud, and enterprise technology with a track record of building scalable platforms and reliable services.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="p-6 rounded-xl bg-black/40 border border-gray-700/50">
						<h2 className="text-xl font-semibold mb-2">Contact</h2>
						<ul className="text-gray-300 space-y-2">
							<li><a className="text-cyan-300 underline" href="tel:+13024640950">+1 302 464 0950</a></li>
							<li><a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
							<li><a className="text-cyan-300 underline" target="_blank" rel="noopener noreferrer" href={`https://maps.google.com/?q=${encodeURIComponent('364 E Main St STE 1008 Middletown DE 19709')}`}>364 E Main St STE 1008 Middletown DE 19709</a></li>
						</ul>
					</div>
					<div className="p-6 rounded-xl bg-black/40 border border-gray-700/50">
						<h2 className="text-xl font-semibold mb-2">Vision</h2>
						<p className="text-gray-300">We deliver practical automation with measurable ROI across AI assistants, observability, security, and FinOps, aligning to transparent, vendor-verifiable pricing.</p>
					</div>
				</div>
			</div>
		</>
	);
}