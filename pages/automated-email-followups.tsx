import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AutomatedEmailFollowupsPage() {
	return (
		<>
			<ServiceLanding
				title="Automated Email Follow‑ups"
				description="Never drop a lead again. Schedule smart sequences with AI‑drafted replies, auto‑stops on reply, and CRM sync across your pipeline."
				subtitle="Consistent, on‑brand follow‑ups at scale"
				pricePerMonthUSD={39}
				implementationWeeks="< 1 week"
				roiNote="Lift reply rates and move deals forward automatically"
				features={[
					"Multi‑step sequences with time windows",
					"AI reply drafts and personalization",
					"Stops on reply and intent detection",
					"CRM sync (HubSpot, Salesforce)",
					"Shared templates and team analytics",
					"Compliance: unsubscribe and domain warmup tips"
				]}
				industries={["Sales", "Success", "Founders"]}
				canonical="https://ziontechgroup.com/automated-email-followups"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://lemlist.com/pricing" target="_blank" rel="noreferrer">Lemlist</a>, 
					<a className="underline hover:text-cyan-300" href="https://mailshake.com/pricing/" target="_blank" rel="noreferrer">Mailshake</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.outreach.io/pricing" target="_blank" rel="noreferrer">Outreach</a>.
				</div>
			</section>
		</>
	);
}