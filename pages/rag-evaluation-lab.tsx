import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function RAGEvaluationLab() {
	return (
		<div className="relative isolate">
			<SEO title="RAG Evaluation Lab — Zion Tech Group" description="Continuously evaluate RAG with golden datasets, grounding scores, and CI quality gates." />
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">RAG Evaluation Lab</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Continuously evaluate Retrieval-Augmented Generation (RAG) systems with golden datasets, synthetic scenarios, grounding scores, and automated regression alerts. Ship reliable AI assistants with measurable quality.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Grounding & Faithfulness', desc: 'Measure factual consistency, citation quality, and hallucination rate.' },
							{ title: 'Golden Datasets', desc: 'Curate and run task-specific datasets for repeatable evaluation.' },
							{ title: 'Scenario Evals', desc: 'Synthetic and real-world tests across intents, domains, and edge cases.' },
							{ title: 'CI/CD Quality Gates', desc: 'Fail builds on regressions; compare models and versions.' },
							{ title: 'Offline & Canary', desc: 'Pre-release offline runs and live traffic canaries with alerts.' },
							{ title: 'Dashboards & Reports', desc: 'Team dashboards, API access, and exportable reports.' }
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))}
					</div>

					<div className="mt-12">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Offline evals, 3 projects, 10k runs/mo.</p>
								<p className="mt-4 text-3xl font-bold">$149<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-blue-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Live canaries, alerts, 10 projects, 100k runs/mo.</p>
								<p className="mt-4 text-3xl font-bold">$449<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-purple-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">SSO, SOC 2, private networking, custom limits.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://humanloop.com" target="_blank" rel="noreferrer">Humanloop</a>, <a className="underline hover:text-cyan-300" href="https://arize.com" target="_blank" rel="noreferrer">Arize</a>, <a className="underline hover:text-cyan-300" href="https://promptfoo.dev" target="_blank" rel="noreferrer">promptfoo</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold">Start Evaluating</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}