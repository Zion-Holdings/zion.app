import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiAutonomousResearchAssistant() {
	return (
		<ServiceLanding
			title="AI Autonomous Research Assistant"
			description="Continuously research competitors, markets, and technology with agentic AI. Summarize findings, cite sources, and notify stakeholders."
			subtitle="Always-on market and technical research"
			pricePerMonthUSD={179}
			implementationWeeks="3-5 days"
			roiNote="Teams report 5–10 hours saved per week per person"
			features={[
				"Competitive landscape monitoring and alerts",
				"Summaries with citations and links",
				"Research briefs and weekly digests",
				"Custom topic tracking and stakeholders",
				"Integrations: Slack, Email, Notion, Confluence",
				"Model routing with cost controls",
				"Safe browsing and jailbreak resistance",
				"One-click share and exports"
			]}
			industries={["SaaS", "Consulting", "VC/PE", "Enterprises"]}
			canonical="https://ziontechgroup.com/ai-autonomous-research-assistant"
		/>
	);
}