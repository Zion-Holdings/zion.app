import React from 'react';
import Link from 'next/link';

export default function AIMeetingTranscriberPro() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">AI Meeting Transcriber Pro</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Record, transcribe, summarize, and assign action items from meetings across Zoom, Google Meet, and Teams with enterprise-grade privacy.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Accurate Transcription', desc: 'Multi-speaker diarization, domain tuning, and timestamps.' },
							{ title: 'AI Summaries', desc: 'Executive summaries, highlights, and sentiment analysis.' },
							{ title: 'Action Items', desc: 'Auto-detected tasks with assignees and due dates synced to Jira/Asana.' },
							{ title: 'Privacy & Security', desc: 'SOC2-ready controls, data retention policies, and redaction.' },
							{ title: 'Integrations', desc: 'Zoom, Google Meet, Microsoft Teams, Slack, Asana, Jira.' },
							{ title: 'APIs', desc: 'Webhook callbacks and export to data warehouse.' }
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
							<div className="rounded-2xl border border-sky-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">1000 mins/mo, core features.</p>
								<p className="mt-4 text-3xl font-bold">$29<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">5,000 mins/mo, action items, integrations.</p>
								<p className="mt-4 text-3xl font-bold">$99<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Unlimited, SSO, data residency, admin controls.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://otter.ai/pricing" target="_blank" rel="noreferrer">Otter.ai</a>, <a className="underline hover:text-cyan-300" href="https://fireflies.ai/pricing" target="_blank" rel="noreferrer">Fireflies</a>, <a className="underline hover:text-cyan-300" href="https://www.fathom.video/pricing" target="_blank" rel="noreferrer">Fathom</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-sky-400 text-black font-semibold">Summarize My Meetings</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}

