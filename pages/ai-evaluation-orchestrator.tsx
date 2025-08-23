import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';

export default function AIEvaluationOrchestratorPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>AI Evaluation Orchestrator | Zion Tech Group</title>
				<meta name="description" content="Automate LLM evals, regression tests, red-teaming, and leaderboards across providers." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-evaluation-orchestrator" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">AI Evaluation Orchestrator</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Automate evaluation pipelines for OpenAI, Anthropic, and more. Track quality over time and prevent regressions.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="font-semibold mb-2">Typical Budget</h2>
						<p className="text-gray-300 text-sm">$50–$400/mo + API usage</p>
					</Card>
					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="font-semibold mb-2">References</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
							<li><a className="text-cyan-300 underline" href="https://openai.com/api/pricing" target="_blank" rel="noopener noreferrer">OpenAI Pricing</a></li>
							<li><a className="text-cyan-300 underline" href="https://www.anthropic.com/pricing" target="_blank" rel="noopener noreferrer">Anthropic Pricing</a></li>
							<li><a className="text-cyan-300 underline" href="https://openrouter.ai/models" target="_blank" rel="noopener noreferrer">OpenRouter Models</a></li>
						</ul>
					</Card>
				</div>
				<div className="mt-8"><a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</a></div>
			</div>
		</UltraFuturisticBackground>
	);
}