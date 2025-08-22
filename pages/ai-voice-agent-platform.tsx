import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function AIVoiceAgentPlatform() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>AI Voice Agent Platform | Zion Tech Group</title>
				<meta name="description" content="Natural phone agents with IVR, call routing, CRM actions, and analytics." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-voice-agent-platform" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-200">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Voice Agent Platform</h1>
					<p className="mt-4 text-lg text-slate-300">Autonomous voice agents for support and sales: speech-to-speech with tools and guardrails.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Capabilities</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>STT/TTS with interruptibility</li>
								<li>CRM/Helpdesk integration</li>
								<li>Tool calls: scheduling, lookups, updates</li>
								<li>Compliance and redaction</li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Pricing (market)</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>$0.02–$0.15/minute usage</li>
								<li>References: <a className="text-cyan-400 underline" href="https://openai.com/api/pricing" target="_blank" rel="noreferrer">OpenAI Realtime</a>, <a className="text-cyan-400 underline" href="https://www.twilio.com/voice/pricing" target="_blank" rel="noreferrer">Twilio Voice</a></li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Use cases</h3>
							<p className="text-slate-300">Tier-1 support, appointment booking, lead qualification, and collections.</p>
						</div>
					</div>
					<div className="mt-10 flex flex-wrap gap-3">
						<a href="/pricing" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">View Pricing</a>
						<a href="/market-pricing" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Market Pricing</a>
						<a href="/contact" className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200">Contact Sales</a>
					</div>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}