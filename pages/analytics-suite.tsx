import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AnalyticsSuite() {
	return (
		<ServiceLanding
			title="Privacy-Friendly Analytics Suite"
			description="Lightweight, cookie-less analytics with actionable product and marketing insights while respecting user privacy."
			subtitle="Insights without invasive tracking"
			pricePerMonthUSD={19}
			implementationWeeks="Same day"
			roiNote="Replace heavy tools, speed up pages, and keep key insights"
			features={[
				"Realtime dashboards and funnels",
				"Attribution, events, and goals",
				"API and webhooks",
				"Custom dimensions and UTM tracking",
				"Anomaly alerts",
				"SEO and page-speed overlays",
				"GDPR/CCPA-compliant, no cookies",
				"Migration assistants (GA4, UA)"
			]}
			industries={["Startups", "SMBs", "Agencies", "Publishers"]}
			canonical="https://ziontechgroup.com/analytics-suite"
		/>
	);
}