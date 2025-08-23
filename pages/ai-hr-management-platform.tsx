import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiHrManagementPlatform() {
	return (
		<ServiceLanding
			title="AI-Powered HR Management Platform"
			description="Automate recruitment workflows, onboarding, performance reviews, and workforce planning with AI. Reduce admin time and improve HR decision-making."
			subtitle="Intelligent HR automation with AI-driven insights"
			pricePerMonthUSD={349}
			implementationWeeks="3-5 days"
			roiNote="HR teams report ~4x ROI via automation and better retention"
			features={[
				"AI-powered job descriptions and candidate sourcing",
				"Resume screening and interview scheduling",
				"Onboarding checklists and policy automation",
				"Performance review assistance and goal tracking",
				"Compensation banding and equity benchmarking",
				"HRIS and ATS integrations (Workday, BambooHR, Greenhouse)",
				"Policy Q&A and employee knowledge base",
				"Headcount planning and attrition alerts"
			]}
			industries={["SMB", "Mid-Market", "Enterprise"]}
			url="https://ziontechgroup.com/ai-hr-management-platform"
		/>
	);
}