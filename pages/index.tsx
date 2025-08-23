import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Zion Tech Group — AI, Quantum, and Enterprise Solutions</title>
				<meta name="description" content="Transform your business with AI automation, quantum-grade security, and enterprise IT solutions. Explore services, pricing, and case-ready offerings." />
				<link rel="canonical" href="https://ziontechgroup.com/" />
			</Head>
			<section className="relative px-6 py-24 sm:py-28 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
						Revolutionary Technology Solutions
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						AI-native automation, quantum-secure infrastructure, and enterprise-grade platforms — delivered with measurable outcomes.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link href="/services" className="rounded-md bg-white/10 px-5 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20">
							Explore Services
						</Link>
						<Link href="/pricing" className="text-base font-semibold leading-6 text-white/80 hover:text-white">
							View Pricing <span aria-hidden>→</span>
						</Link>
					</div>
				</div>
			</section>

			<section className="px-6 pb-20 lg:px-8">
				<div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 sm:grid-cols-2">
					<div className="rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5">
						<h2 className="text-xl font-semibold">Enterprise AI</h2>
						<p className="mt-2 text-gray-300">RAG, agentic automation, and AI ops engineered for reliability and scale.</p>
					</div>
					<div className="rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5">
						<h2 className="text-xl font-semibold">Quantum Security</h2>
						<p className="mt-2 text-gray-300">Post-quantum cryptography, zero trust, and end-to-end secure communications.</p>
					</div>
					<div className="rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5">
						<h2 className="text-xl font-semibold">Cloud & Edge</h2>
						<p className="mt-2 text-gray-300">SLO-driven platforms, serverless, and global edge orchestration.</p>
					</div>
					<div className="rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5">
						<h2 className="text-xl font-semibold">Micro SaaS</h2>
						<p className="mt-2 text-gray-300">Targeted products with rapid time-to-value and integrated growth loops.</p>
					</div>
				</div>
				<div className="mt-10 text-center">
					<Link href="/contact" className="text-base font-semibold leading-6 text-white/80 hover:text-white">
						Talk to an expert <span aria-hidden>→</span>
					</Link>
				</div>
			</section>
		</>
	);
}
