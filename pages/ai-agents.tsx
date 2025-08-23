import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { Button } from '../components/ui/Button';
import { Bot, ListTree, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react';

export default function AIAgentsPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	const plans = [
		{ name: 'Builder', price: '$249/month', items: ['3 agents', 'Tools: web, code, docs', 'JSON events stream', 'Retry and timeouts'] },
		{ name: 'Scale', price: '$799/month', items: ['10 agents', 'Graph planner', 'Long-term memory', 'Slack/Jira integration'] },
		{ name: 'Enterprise', price: 'Custom', items: ['Unlimited agents', 'Private infra', 'SLA & audit logs', 'SSO/SAML'] },
	];

	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>AI Multi-Agent Orchestrator | Zion Tech Group</title>
				<meta name="description" content="Coordinate specialist AI agents with a graph planner, tools, streaming events, and auditability." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-agents" />
			</Head>

			<div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-4xl mx-auto mb-12">
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Multi-Agent Orchestrator</h1>
					<p className="text-xl text-gray-300">Assign roles, define plans, and execute workflows with reliable, observable multi-agent AI.</p>
					<div className="mt-6 flex justify-center gap-3">
						<Button variant="primary" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">
							<Rocket className="w-4 h-4 mr-2" />Book a Demo
						</Button>
						<Button variant="outline" className="border-gray-600 text-gray-200">
							Read Docs
						</Button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
					{plans.map((p) => (
						<div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
							<h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
							<div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
							<ul className="space-y-2 text-gray-300 text-sm">
								{p.items.map((i) => (
									<li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-400" /> <span>{i}</span></li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="max-w-3xl mx-auto mt-4 bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
						<div className="flex items-center justify-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><span>{contactInfo.mobile}</span></div>
						<div className="flex items-center justify-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><span>{contactInfo.email}</span></div>
						<div className="flex items-center justify-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><span className="text-xs">{contactInfo.address}</span></div>
					</div>
					<div className="text-center">
						<Button variant="primary" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">
							Talk to Engineering
						</Button>
					</div>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}