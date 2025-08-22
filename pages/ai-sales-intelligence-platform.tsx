import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiSalesIntelligencePlatform() {
	return (
		<ServiceLanding
			title="AI Sales Intelligence Platform"
			description="Boost sales performance with AI-powered insights, automated research, and personalized outreach. Increase pipeline velocity while reducing manual effort."
			subtitle="Supercharge sales with AI automation"
			pricePerMonthUSD={249}
			implementationWeeks="1-2 weeks"
			roiNote="Teams report 2-5x reply rates and 300% ROI in 90 days"
			features={[
				"Automated prospect research and account insights",
				"Persona-aware sequence generation",
				"Deliverability checks and send-window optimization",
				"CRM sync and engagement analytics",
				"Lead scoring and qualification",
				"Multi-channel (email + LinkedIn) orchestration"
			]}
			industries={["SaaS", "B2B", "Agencies", "Professional Services"]}
			canonical="https://ziontechgroup.com/ai-sales-intelligence-platform"
		/>
	);
}