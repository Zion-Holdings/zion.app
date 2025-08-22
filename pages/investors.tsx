import React from 'react';
import Head from 'next/head';

export default function InvestorsPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Investors | Zion Tech Group</title>
				<meta name="description" content="Investor relations and key metrics overview." />
				<link rel="canonical" href="https://ziontechgroup.com/investors" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Investors</h1>
				<p className="text-slate-300">We pursue durable growth via product‑led innovation and customer outcomes.</p>
				<div className="grid sm:grid-cols-3 gap-4">
					<div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><div className="text-2xl font-bold text-white">500+</div><div className="text-slate-400 text-sm">Services shipped</div></div>
					<div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><div className="text-2xl font-bold text-white">200+</div><div className="text-slate-400 text-sm">Happy clients</div></div>
					<div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20"><div className="text-2xl font-bold text-white">15+</div><div className="text-slate-400 text-sm">Years experience</div></div>
				</div>
				<div className="pt-4 text-slate-300">Contact IR: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
			</div>
		</div>
	);
}