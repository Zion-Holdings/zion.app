import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function AICustomerJourneyAnalytics() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>AI Customer Journey Analytics | Zion Tech Group</title>
				<meta name="description" content="Unify events across web, app, and CRM to visualize funnels, cohorts, and churn risk with predictive AI." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-customer-journey-analytics" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-200">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Customer Journey Analytics</h1>
					<p className="mt-4 text-lg text-slate-300">Event unification, funnel analytics, churn prediction, and LTV modeling across marketing, product, and sales.</p>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Key Features</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Event pipelines (web/app/CRM) and identity stitching</li>
								<li>Funnels, cohorts, retention and LTV analytics</li>
								<li>Predictive churn and upsell propensity models</li>
								<li>Attribution (multi-touch) and experiment analysis</li>
								<li>Warehouse-native or managed storage</li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Deliverables</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Event schema and tracking plan</li>
								<li>dbt models and dashboards (Looker/Metabase/Mode)</li>
								<li>Predictive models with monitoring</li>
								<li>Playbooks for churn prevention and upsell</li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Pricing (market)</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Starter: $200–$1,000/mo + usage</li>
								<li>Growth: $1,000–$5,000/mo</li>
								<li>References: <a className="text-cyan-400 underline" href="https://segment.com/pricing" target="_blank" rel="noreferrer">segment.com/pricing</a>, <a className="text-cyan-400 underline" href="https://mixpanel.com/pricing/" target="_blank" rel="noreferrer">mixpanel.com/pricing</a>, <a className="text-cyan-400 underline" href="https://heap.io/pricing" target="_blank" rel="noreferrer">heap.io/pricing</a></li>
							</ul>
						</div>
					</div>

					<div className="mt-10 flex flex-wrap gap-3">
						<a href="/pricing" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">View Pricing</a>
						<a href="/market-pricing" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Market Pricing</a>
						<a href="/contact" className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200">Contact Sales</a>
					</div>
					<div className="mt-4 text-sm text-slate-400">Mobile: +1 302 464 0950 • Email: kleber@ziontechgroup.com</div>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}