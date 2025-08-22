import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiHrAnalyticsPlatform() {
	return (
		<ServiceLanding
			title="AI HR Analytics Platform"
			description="Comprehensive HR analytics to analyze employee data, predict turnover, and guide people decisions. Reduce HR costs and improve satisfaction."
			subtitle="People intelligence with AI"
			pricePerMonthUSD={2999}
			implementationWeeks="3-4 weeks"
			roiNote="300% ROI via improved retention and reduced costs"
			features={[
				"Turnover prediction",
				"Engagement analytics",
				"Performance prediction",
				"Diversity & inclusion metrics",
				"Headcount and comp forecasting",
				"Privacy and governance controls"
			]}
			industries={["Enterprise", "Mid-market", "Healthcare", "Financial Services"]}
			canonical="https://ziontechgroup.com/ai-hr-analytics-platform"
		/>
	);
}