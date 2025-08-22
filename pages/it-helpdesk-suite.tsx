import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function ITHelpdeskSuitePage() {
	return (
		<>
			<ServiceLanding
				title="IT Helpdesk Suite"
				description="Ticketing, SLAs, knowledge base, and self-service portal designed for MSPs and internal IT. Integrates with email, chat, and asset inventory."
				subtitle="Modern ITSM for fast, transparent support"
				pricePerMonthUSD={59}
				implementationWeeks="2-3 weeks"
				roiNote="Resolve incidents faster and improve CSAT with automation"
				features={[
					"Omnichannel intake (email, chat, portal)",
					"SLAs, escalations, and automation rules",
					"Knowledge base with AI answers",
					"Change, problem, and asset links",
					"Surveys, CSAT, and reporting",
					"SSO/SCIM and role-based access"
				]}
				industries={["MSPs", "IT Teams", "Support"]}
				canonical="https://ziontechgroup.com/it-helpdesk-suite"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://www.atlassian.com/software/jira/service-management/pricing" target="_blank" rel="noreferrer">Jira Service Management</a>, 
					<a className="underline hover:text-cyan-300" href="https://freshdesk.com/pricing" target="_blank" rel="noreferrer">Freshdesk</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.zendesk.com/pricing/" target="_blank" rel="noreferrer">Zendesk</a>.
				</div>
			</section>
		</>
	);
}