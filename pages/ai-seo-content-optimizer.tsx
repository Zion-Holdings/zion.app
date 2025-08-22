import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AISEOContentOptimizerPage() {
	return (
		<>
			<ServiceLanding
				title="AI SEO Content Optimizer"
				description="Boost rankings with AI‑guided outlines, on‑page suggestions, and competitor gap analysis. Integrates with CMS and tracks impact."
				subtitle="Write what ranks, faster"
				pricePerMonthUSD={59}
				implementationWeeks="Same day"
				roiNote="Ship optimized content 2–3x faster and improve organic traffic"
				features={[
					"Topic clusters and keyword research",
					"Outline generator and brief exports",
					"On‑page checks and schema hints",
					"Competitor gap and internal links",
					"CMS plugins and publishing",
					"Rank tracking and content decay alerts"
				]}
				industries={["Content", "SEO", "Marketing"]}
				canonical="https://ziontechgroup.com/ai-seo-content-optimizer"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://www.surferseo.com/pricing/" target="_blank" rel="noreferrer">SurferSEO</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.semrush.com/prices/" target="_blank" rel="noreferrer">Semrush</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.ahrefs.com/pricing" target="_blank" rel="noreferrer">Ahrefs</a>.
				</div>
			</section>
		</>
	);
}