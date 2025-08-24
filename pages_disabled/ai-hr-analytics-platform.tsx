import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiHrAnalyticsPlatform() {
	return (
		<ServiceLanding
			title="AI HR Analytics Platform"
			description="Understand attrition, performance, and workforce planning with AI. Combine HRIS, ATS, and engagement data for proactive people decisions."
			subtitle="People insights that drive outcomes"
			pricePerMonthUSD={199}
			implementationWeeks="1-2 weeks"
			roiNote="HR teams report measurable gains in retention and hiring yield"
			features={[
				"Attrition risk scoring and alerting",
				"Diversity and inclusion analytics",
				"Recruiting funnel and hiring yield insights",
				"Performance signal detection and calibration",
				"Headcount planning and skills inventory",
				"Integrations: Workday, BambooHR, Greenhouse, Lever",
				"Compensation benchmarking and ranges",
				"Engagement drivers and action suggestions"
			]}
			industries={["SaaS", "Retail", "Healthcare", "Manufacturing"]}
			canonical="https://ziontechgroup.com/ai-hr-analytics-platform"
		/>
	);
}