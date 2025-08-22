import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

const ext = (url: string) => (
	<a className="text-cyan-400 underline" href={url} target="_blank" rel="noopener noreferrer">{url.replace('https://', '')}</a>
);

export default function EnergyUtilitiesSolutionsPage() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>Energy & Utilities Solutions | Zion Tech Group</title>
				<meta name="description" content="Grid intelligence, demand forecasting, predictive maintenance and carbon reporting with AI and IoT for energy and utilities." />
				<link rel="canonical" href="https://ziontechgroup.com/energy-utilities-solutions" />
			</Head>

			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto space-y-10">
					<header className="text-center space-y-4">
						<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
							Energy & Utilities Solutions
						</h1>
						<p className="text-slate-300 max-w-3xl mx-auto">AI and IoT-driven solutions for grid optimization, demand forecasting, predictive maintenance, emissions reporting, and customer experience. Built for utilities, energy retailers, and renewable operators.</p>
					</header>

					<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-black/40 rounded-2xl border border-cyan-500/30 p-6">
							<h2 className="text-2xl font-semibold mb-2">Capabilities</h2>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Demand forecasting (15m–hourly granularity) with weather & event features</li>
								<li>Predictive maintenance for transformers, turbines and line assets</li>
								<li>Real-time anomaly detection for generation, storage and consumption</li>
								<li>AMI/SCADA data ingestion, quality checks and digital twin modeling</li>
								<li>Carbon accounting and emissions reporting automation</li>
								<li>Self-service analytics dashboards and alerting</li>
							</ul>
						</div>
						<div className="bg-black/40 rounded-2xl border border-purple-500/30 p-6">
							<h2 className="text-2xl font-semibold mb-2">Benefits</h2>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Reduce technical losses and outages with early warnings</li>
								<li>Improve forecast accuracy to optimize procurement and dispatch</li>
								<li>Lower O&M costs through condition-based maintenance</li>
								<li>Automate ESG and regulatory reporting with audit trails</li>
								<li>Enhance customer CX with proactive notifications</li>
							</ul>
						</div>
					</section>

					<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-black/40 rounded-2xl border border-emerald-500/30 p-6">
							<h3 className="text-xl font-semibold mb-2">Typical Packages</h3>
							<ul className="text-slate-300 space-y-1">
								<li>Starter (pilot region): $8k–$15k/month</li>
								<li>Pro (multi-region): $20k–$45k/month</li>
								<li>Enterprise (fleet-wide): custom</li>
							</ul>
						</div>
						<div className="bg-black/40 rounded-2xl border border-blue-500/30 p-6">
							<h3 className="text-xl font-semibold mb-2">References</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>AMI/MDM: {ext('https://www.itron.com/na/solutions/what-we-enable/advanced-metering-infrastructure')}</li>
								<li>SCADA: {ext('https://www.gevernova.com/grid-solutions/products/automation-and-protection/scada-systems')}</li>
								<li>Forecasting: {ext('https://aws.amazon.com/forecast/pricing/')}</li>
								<li>ESG reporting: {ext('https://www.workiva.com/en/pricing')}</li>
							</ul>
						</div>
						<div className="bg-black/40 rounded-2xl border border-amber-500/30 p-6">
							<h3 className="text-xl font-semibold mb-2">Contact</h3>
							<ul className="text-slate-300 space-y-1">
								<li>Mobile: <a className="text-cyan-400" href={`tel:${contactInfo.mobile}`}>{contactInfo.mobile}</a></li>
								<li>E-mail: <a className="text-cyan-400" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
								<li>Address: <span className="text-slate-300">{contactInfo.address}</span></li>
								<li>Website: <a className="text-cyan-400" href={contactInfo.website} target="_blank" rel="noopener noreferrer">ziontechgroup.com</a></li>
							</ul>
						</div>
					</section>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}