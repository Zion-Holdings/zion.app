import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Contact | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
				<meta name="description" content="Contact Zion Tech Group: +1 302 464 0950, kleber@ziontechgroup.com, 364 E Main St STE 1008 Middletown DE 19709" />
			</Head>
			<div className="max-w-4xl mx-auto space-y-8">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Get in touch</h1>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 space-y-3">
						<div className="text-slate-300">Phone</div>
						<a className="text-cyan-400 underline" href="tel:+13024640950">+1 302 464 0950</a>
					</div>
					<div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6 space-y-3">
						<div className="text-slate-300">Email</div>
						<a className="text-cyan-400 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
					</div>
					<div className="bg-black/30 rounded-2xl border border-pink-500/30 p-6 md:col-span-2 space-y-3">
						<div className="text-slate-300">Address</div>
						<div className="text-slate-200">364 E Main St STE 1008 Middletown DE 19709</div>
					</div>
				</div>
			</div>
		</div>
	);
}