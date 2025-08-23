import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function IntelligentContentAutomationPlatform() {
	return (
		<ServiceLanding
			title="Intelligent Content Automation Platform"
			description="Automate briefs, drafts, and on-brand content with AI guardrails. Generate, review, and publish faster across channels with embedded quality checks."
			subtitle="On-brand content at scale"
			pricePerMonthUSD={149}
			implementationWeeks="1 week"
			roiNote="Cut production time by 50–70% while improving consistency"
			features={[
				"Brief generation and editorial workflows",
				"Brand voice profiles and approvals",
				"Entity coverage and SEO suggestions",
				"Multi-channel exports (blog, ads, social)",
				"Plagiarism, toxicity, and bias checks",
				"CMS integrations and scheduling"
			]}
			industries={["Marketing", "Agencies", "E-commerce", "Media"]}
			canonical="https://ziontechgroup.com/intelligent-content-automation-platform"
		/>
	);
}