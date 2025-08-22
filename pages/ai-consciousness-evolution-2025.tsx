import React from 'react';
import Link from 'next/link';

export default function AIConsciousnessEvolution2025() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Consciousness Evolution 2025</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Exploring emotional intelligence, self-awareness, and ethical cognition in next-generation AI systems. Practical frameworks and applied research for responsible AI capabilities.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Emotional Intelligence', desc: 'Affective state modeling, sentiment grounding, empathy protocols.' },
							{ title: 'Self-Reflection', desc: 'Goal alignment, memory scaffolds, metacognition safety checks.' },
							{ title: 'Ethical Governance', desc: 'Value alignment, policy constraints, oversight and auditability.' },
							{ title: 'Safety Guardrails', desc: 'Normative constraints, red-teaming, and risk measurement.' },
							{ title: 'Human-in-the-Loop', desc: 'Instruction tuning loops and corrective feedback mechanisms.' },
							{ title: 'Applications', desc: 'Enterprise copilots, healthcare triage, autonomy primitives.' }
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))}
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold">Discuss a Pilot</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}