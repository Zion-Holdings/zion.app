import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function SmallBusinessWebAnalyticsPage() {
	return (
		<>
			<ServiceLanding
				title="Small Business Web Analytics"
				description="Privacy-friendly website analytics with funnels, events, and UTM tracking—no cookies required. Easy setup, clear insights."
				subtitle="Actionable analytics for non-technical teams"
				pricePerMonthUSD={14}
				implementationWeeks="Same day"
				roiNote="Understand traffic, content, and conversions in minutes"
				features={[
					"Pageviews, events, goals, and funnels",
					"UTM and campaign attribution",
					"Outbound/link tracking and 404s",
					"Email/Slack alerts and reports",
					"Data export and APIs",
					"GDPR/CCPA friendly, no cookies"
				]}
				industries={["Marketing", "Content", "Founders"]}
				canonical="https://ziontechgroup.com/small-business-web-analytics"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://plausible.io/pricing" target="_blank" rel="noreferrer">Plausible</a>, 
					<a className="underline hover:text-cyan-300" href="https://usefathom.com/pricing" target="_blank" rel="noreferrer">Fathom</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.simpleanalytics.com/pricing" target="_blank" rel="noreferrer">Simple Analytics</a>.
				</div>
			</section>
		</>
	);
}