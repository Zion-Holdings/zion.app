import React from 'react';
import Head from 'next/head';

export default function DiversityInclusionPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Diversity & Inclusion | Zion Tech Group</title>
				<meta name="description" content="Our commitment to diversity, equity, and inclusion." />
				<link rel="canonical" href="https://ziontechgroup.com/diversity-inclusion" />
			</Head>
			<div className="max-w-4xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Diversity & Inclusion</h1>
				<p className="text-slate-300">We believe diverse teams build better products. We foster inclusive hiring, growth, and a respectful workplace.</p>
				<ul className="list-disc list-inside text-slate-300 space-y-1">
					<li>Inclusive hiring practices and diverse panels</li>
					<li>Equal opportunities and career development</li>
					<li>Respectful, safe, and collaborative culture</li>
				</ul>
			</div>
		</div>
	);
}