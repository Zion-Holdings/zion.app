import React from 'react';
import Link from 'next/link';

export default function AIContentGenerator() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-rose-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">AI Content Generator</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Generate on-brand blog posts, landing pages, and social content with reusable templates, SEO optimization, and review workflows.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Templates', desc: 'Brand voice, tone, and structure controls for teams.' },
							{ title: 'SEO', desc: 'Keyword suggestions, schema, and internal link hints.' },
							{ title: 'Multichannel', desc: 'Export to CMS and schedule to social platforms.' },
							{ title: 'Review Workflow', desc: 'Editorial approvals and change history.' },
							{ title: 'Localization', desc: 'Translate and adapt content for regions.' },
							{ title: 'Integrations', desc: 'WordPress, Webflow, HubSpot, Notion.' }
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
							<div className="rounded-2xl border border-rose-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">50k tokens/mo, 3 templates.</p>
								<p className="mt-4 text-3xl font-bold">$29<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">500k tokens/mo, SEO, workflows.</p>
								<p className="mt-4 text-3xl font-bold">$99<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Unlimited, SSO, brand governance.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.jasper.ai/pricing" target="_blank" rel="noreferrer">Jasper</a>, <a className="underline hover:text-cyan-300" href="https://www.copy.ai/pricing" target="_blank" rel="noreferrer">Copy.ai</a>, <a className="underline hover:text-cyan-300" href="https://writesonic.com/pricing" target="_blank" rel="noreferrer">Writesonic</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-rose-400 text-black font-semibold">Generate Content</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}