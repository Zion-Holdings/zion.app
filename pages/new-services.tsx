import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';

const items = [
	{ name: 'AI Customer Journey Analytics', href: '/ai-customer-journey-analytics', blurb: 'Funnels, cohorts, LTV and churn prediction.' },
	{ name: 'AI UGC Moderation', href: '/ai-ugc-moderation', blurb: 'Policy-driven moderation across text, image, and video.' },
	{ name: 'Privacy Compliance Automation', href: '/privacy-compliance-automation', blurb: 'Automate DSARs, data mapping, and evidence.' },
	{ name: 'Zero-Downtime Migration', href: '/zero-downtime-migration', blurb: 'Blue/green, CDC, and rollback-safe migrations.' },
	{ name: 'AI Product Feedback Insights', href: '/ai-product-feedback-insights', blurb: 'Multi-source feedback with topic modeling.' },
	{ name: 'Agentic Sales Outreach', href: '/agentic-sales-outreach', blurb: 'Autonomous prospecting and sequencing.' },
	{ name: 'Multi-Cloud Disaster Recovery', href: '/multi-cloud-disaster-recovery', blurb: 'Cross-cloud replication and drills.' },
	{ name: 'AI Ad Creative Generator', href: '/ai-ad-creative-generator', blurb: 'Generate on-brand ad creatives and variants.' },
	{ name: 'AI Voice Agent Platform', href: '/ai-voice-agent-platform', blurb: 'Natural voice agents for support and sales.' },
	{ name: 'Data Contracts & Governance', href: '/data-contracts-governance', blurb: 'Contracts, lineage, and quality SLAs.' },
	{ name: 'PII Detection & Redaction', href: '/pii-detection-redaction', blurb: 'Detect and redact sensitive data.' },
	{ name: 'Billing Analytics', href: '/billing-analytics', blurb: 'Revenue, churn, and anomaly dashboards.' }
];

export default function NewServices() {
	return (
		<UltraFuturisticBackground intensity="high" variant="quantum">
			<SEO title="New Services | Zion Tech Group" description="Explore our latest micro SAAS, IT, and AI solutions with transparent pricing." url="https://ziontechgroup.com/new-services/" />
			<div className="container mx-auto px-4 py-16 text-white">
				<div className="text-center max-w-3xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">New Services</h1>
					<p className="mt-3 text-gray-300">Fresh, productized offerings ready to deploy. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
					<div className="mt-6 flex gap-3 justify-center">
						<Link href="/pricing" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">Pricing</Link>
						<Link href="/market-pricing" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Market Links</Link>
						<Link href="/contact" className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200">Contact Sales</Link>
					</div>
				</div>
				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{items.map((it) => (
						<Link key={it.href} href={it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors">
							<h3 className="text-xl font-semibold text-white">{it.name}</h3>
							<p className="mt-2 text-gray-300">{it.blurb}</p>
							<div className="mt-4 text-cyan-300">Learn more →</div>
						</Link>
					))}
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}