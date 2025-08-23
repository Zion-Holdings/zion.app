import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function IntelligentHrAnalyticsPlatform() {
	return (
		<ServiceLanding
			title="AI HR Analytics & People Intelligence Platform"
			description="Transform HR data into actionable insights with AI. Predict turnover, measure engagement, and guide better people decisions with privacy and governance."
			subtitle="Data-driven HR decisions"
			pricePerMonthUSD={2999}
			implementationWeeks="3-5 weeks"
			roiNote="Reduce attrition risk and HR costs by 25%+"
			features={[
				"Turnover prediction and risk scoring",
				"Engagement analytics and sentiment",
				"Hiring funnel insights and quality of hire",
				"Diversity & equity metrics",
				"Comp plan and headcount forecasting",
				"Privacy-preserving data pipelines]}
			]}
			industries={["Enterprise", "Mid-market", "Healthcare", "Financial Services", "Manufacturing"]}
			canonical="https://ziontechgroup.com/intelligent-hr-analytics-platform]}
		/>
	);
}