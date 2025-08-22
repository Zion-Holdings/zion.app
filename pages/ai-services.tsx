import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function AIServicesLanding() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>AI Services | Zion Tech Group</title>
				<meta name="description" content="Explore our AI platforms and solutions including evals, guardrails, agents, and personalization." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-services" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</h1>
				<p className="text-gray-300 max-w-3xl">Production-ready AI services: evals, safety guardrails, RAG agents, personalization, and analytics. Average pricing in Market Pricing. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/services/ai-evaluation-orchestrator">AI Evaluation Orchestrator</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/services/ai-guardrails">AI Guardrails Suite</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/services/agentic-rag">Agentic RAG Platform</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/services/ai-content-personalization-engine">AI Content Personalization</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/services/ai-powered-decision-engine">AI Decision Engine</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/services/ai-autonomous-business-operations">AI Autonomous Business Operations</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/services/ai-support-triage-router">AI Support Triage Router</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/services/ai-code-review-assistant-pro">AI Code Review Assistant Pro</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/services/ai-revenue-forecasting-copilot">AI Revenue Forecasting Copilot</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}
