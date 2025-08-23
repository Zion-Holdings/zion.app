import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function BillingAnalytics() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>Billing Analytics | Zion Tech Group</title>
				<meta name="description" content="Revenue dashboards, cohort analysis, churn, expansion, and unit economics with anomaly detection." />
				<link rel="canonical" href="https://ziontechgroup.com/billing-analytics" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-200">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Billing Analytics</h1>
					<p className="mt-4 text-lg text-slate-300">Plug-and-play revenue analytics across Stripe, Recurly, Chargebee, and Braintree.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Metrics</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>MRR, ARR, LTV, CAC, Payback</li>
								<li>Churn and expansion cohorts</li>
								<li>Dunning and failed payment recovery</li>
								<li>Anomaly detection and alerts</li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Pricing (market)</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>$50–$500/mo</li>
								<li>References: <a className="text-cyan-400 underline" href="https://stripe.com/pricing" target="_blank" rel="noreferrer">Stripe</a>, <a className="text-cyan-400 underline" href="https://recurly.com/pricing/" target="_blank" rel="noreferrer">Recurly</a>, <a className="text-cyan-400 underline" href="https://www.chargebee.com/pricing/" target="_blank" rel="noreferrer">Chargebee</a></li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Deliverables</h3>
							<p className="text-slate-300">Dashboards, dbt metrics, and anomaly alerts with Slack/Email integrations.</p>
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