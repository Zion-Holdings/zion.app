import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function MicroCRMLocalBusinessPage() {
	return (
		<>
			<ServiceLanding
				title="Micro CRM for Local Business"
				description="Simple customer tracking, notes, and appointment reminders—built for solo owners and local teams."
				subtitle="A lightweight, friendly CRM that you’ll actually use"
				pricePerMonthUSD={12}
				implementationWeeks="Same day"
				roiNote="Stay on top of customers without enterprise bloat"
				features={[
					"Contacts, tags, and timelines",
					"Tasks and SMS/email reminders",
					"Pipeline and simple quotes",
					"Import/export and Zapier",
					"Multi‑user with permissions",
					"Mobile‑first UI"
				]}
				industries={["Local Services", "Clinics", "Agencies"]}
				canonical="https://ziontechgroup.com/micro-crm-local-business"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://www.hubspot.com/pricing/crm" target="_blank" rel="noreferrer">HubSpot CRM</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.pipedrive.com/en/pricing" target="_blank" rel="noreferrer">Pipedrive</a>.
				</div>
			</section>
		</>
	);
}