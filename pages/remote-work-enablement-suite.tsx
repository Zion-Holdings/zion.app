import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function RemoteWorkEnablementSuitePage() {
	return (
		<>
			<ServiceLanding
				title="Remote Work Enablement Suite"
				description="Fix remote friction: async standups, decision logs, onboarding flows, knowledge base, and meeting hygiene—under one roof."
				subtitle="Operate like a high‑trust remote team"
				pricePerMonthUSD={49}
				implementationWeeks="1-2 weeks"
				roiNote="Cut meeting time and ramp new hires faster"
				features={[
					"Async updates and blockers",
					"Decision records and runbooks",
					"Onboarding checklists and templates",
					"Meeting hygiene coach and agendas",
					"Knowledge base and search",
					"SSO and role permissions"
				]}
				industries={["Remote Teams", "Startups", "Agencies"]}
				canonical="https://ziontechgroup.com/remote-work-enablement-suite"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://linear.app/pricing" target="_blank" rel="noreferrer">Linear</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.atlassian.com/software/confluence/pricing" target="_blank" rel="noreferrer">Confluence</a>, 
					<a className="underline hover:text-cyan-300" href="https://slite.com/pricing" target="_blank" rel="noreferrer">Slite</a>.
				</div>
			</section>
		</>
	);
}