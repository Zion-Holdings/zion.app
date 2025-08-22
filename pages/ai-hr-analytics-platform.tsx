import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiHrAnalyticsPlatform() {
	return (
		<ServiceLanding
			title="AI HR Analytics & People Intelligence Platform"
			description="Transform HR data into actionable insights with AI-driven analytics. Predict turnover, measure engagement, and make better people decisions."
			subtitle="Data-driven HR with AI analytics"
			pricePerMonthUSD={2999}
			implementationWeeks="3-4 weeks"
			roiNote="Organizations report ~3x ROI via improved retention and efficiency"
			features={[
				"Turnover and flight-risk prediction",
				"Engagement and sentiment analysis",
				"Diversity, equity, and inclusion dashboards",
				"Skills mapping and internal mobility",
				"Workforce forecasting and capacity planning",
				"Integrations: Workday, BambooHR, Greenhouse, Okta",
				"Compliance and policy insights",
				"Executive reporting and drilldowns"
			]}
			industries={["Enterprise", "Mid-Market", "HR Consulting"]}
			canonical="https://ziontechgroup.com/ai-hr-analytics-platform"
		/>
	);
}