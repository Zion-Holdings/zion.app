import React from 'react';
import Head from 'next/head';
import { Check, Shield, ShieldAlert, Lock, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function AIGuardrailsPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	const features = [
		'Prompt/output policy engine with allow/deny lists',
		'Jailbreak and prompt injection detection',
		'PII/PHI detection and redaction',
		'Toxicity, bias and safety classifiers',
		'Human handoff flows and escalation policies',
		'Audit logs, alerting and exportable evidence'
	];

	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>AI Guardrails Suite | Zion Tech Group</title>
				<meta name="description" content="Production-grade safety and governance for AI apps: policy enforcement, jailbreak detection, PII/PHI controls and audit logs with SDKs and proxies." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-guardrails" />
			</Head>

			<section className="min-h-screen pt-28 pb-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-400 via-red-500 to-orange-500 bg-clip-text text-transparent">AI Guardrails Suite</h1>
						<p className="mt-4 text-xl text-gray-300">Safety and governance for LLM apps with minimal integration and strong guarantees.</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
						<Card className="lg:col-span-2 bg-black/30 border border-rose-500/30">
							<div className="p-6">
								<h2 className="text-2xl font-semibold text-white mb-4">Capabilities</h2>
								<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
									{features.map((f) => (
										<li key={f} className="flex items-start gap-2 text-gray-200"><Check className="w-5 h-5 text-emerald-400 mt-0.5" /> <span>{f}</span></li>
									))}
								</ul>
							</div>
						</Card>
						<Card className="bg-black/30 border border-rose-500/30">
							<div className="p-6">
								<div className="text-3xl font-bold text-white">Starting at $199<span className="text-base text-gray-400">/month</span></div>
								<div className="text-sm text-gray-400 mt-1">14-day trial • Setup: 30 minutes</div>
								<div className="mt-4">
									<Button href="/contact" className="w-full bg-gradient-to-r from-rose-500 to-orange-600 text-white">Request Demo</Button>
								</div>
							</div>
						</Card>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
						<Card className="p-6 bg-black/30 border border-purple-500/30">
							<h3 className="text-lg font-semibold mb-2">SDKs & Proxies</h3>
							<p className="text-gray-300 text-sm">Drop-in Node/Python SDKs and gateway proxy for provider-agnostic guardrail enforcement.</p>
						</Card>
						<Card className="p-6 bg-black/30 border border-emerald-500/30">
							<h3 className="text-lg font-semibold mb-2">Compliance</h3>
							<p className="text-gray-300 text-sm">SOC 2-friendly audit logs, policy-as-code, and retention controls for evidence collection.</p>
						</Card>
						<Card className="p-6 bg-black/30 border border-cyan-500/30">
							<h3 className="text-lg font-semibold mb-2">Integrations</h3>
							<p className="text-gray-300 text-sm">Slack, PagerDuty, Datadog and SIEM integrations for alerting and incident response.</p>
						</Card>
					</div>

					<div className="bg-black/20 border border-rose-500/30 rounded-2xl p-6">
						<h3 className="text-xl font-semibold text-white mb-4 text-center">Contact</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
							<div className="flex items-center justify-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /> <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`}>{contactInfo.mobile}</a></div>
							<div className="flex items-center justify-center gap-2 text-purple-400"><Mail className="w-4 h-4" /> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div>
							<div className="flex items-center justify-center gap-2 text-emerald-400"><MapPin className="w-4 h-4" /> <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs">{contactInfo.address}</a></div>
						</div>
						<div className="text-center mt-6">
							<Button href="/services" variant="outline" className="border-rose-500 text-rose-400">Explore Services <ExternalLink className="w-4 h-4 ml-2" /></Button>
						</div>
					</div>
				</div>
			</section>
		</UltraAdvancedFuturisticBackground>
	);
}