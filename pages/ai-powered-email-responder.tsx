import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIPoweredEmailResponderPage() {
	return (
		<>
			<ServiceLanding
				title="AI-Powered Email Responder"
				description="Autonomously triage, draft, and respond to routine emails with safe approvals, CRM sync, and SLA-aware routing. Reduce response times, eliminate busywork, and keep your inbox under control."
				subtitle="Turn your inbox into a fully managed, SLA-aware assistant"
				pricePerMonthUSD={149}
				implementationWeeks="1-2 weeks"
				roiNote="Save 5–15 hours/week per teammate on email triage and follow-ups"
				features={[
					"Smart labeling, prioritization, and spam filtering",
					"Safe-reply mode with human-in-the-loop approvals",
					"Templates, tone, and brand consistency controls",
					"Calendar coordination and meeting scheduling",
					"CRM auto-logging (HubSpot, Salesforce) and ticket creation",
					"Analytics: response SLAs, volumes, categories"
				]}
				industries={["Sales", "Support", "Operations", "Consulting"]}
				canonical="https://ziontechgroup.com/ai-powered-email-responder"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://workspace.google.com/products/gmail/" target="_blank" rel="noreferrer">Gmail for Work</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.superhuman.com/pricing" target="_blank" rel="noreferrer">Superhuman</a>, 
					<a className="underline hover:text-cyan-300" href="https://hubspot.com/pricing/sales" target="_blank" rel="noreferrer">HubSpot Sales</a> (automation tiers).
				</div>
			</section>
		</>
	);
}