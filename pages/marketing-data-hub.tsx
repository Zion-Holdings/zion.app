import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function MarketingDataHubPage() {
	return (
		<>
			<ServiceLanding
				title="Marketing Data Hub"
				description="Unify ad spend, web analytics, and CRM data into one warehouse, with dashboards and attribution out‑of‑the‑box."
				subtitle="All your marketing data, finally together"
				pricePerMonthUSD={79}
				implementationWeeks="2-4 weeks"
				roiNote="Trust your numbers and allocate budget with confidence"
				features={[
					"Connectors for Google/Facebook/LinkedIn Ads",
					"UTM normalization and channel mapping",
					"Web analytics + CRM joins",
					"Attribution models and cohort reports",
					"Warehouse sync (BigQuery/Snowflake)",
					"dbt models and Looker/Metabase dashboards"
				]}
				industries={["Marketing", "Growth", "Analytics"]}
				canonical="https://ziontechgroup.com/marketing-data-hub"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://stitchdata.com/pricing/" target="_blank" rel="noreferrer">Stitch</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.fivetran.com/pricing" target="_blank" rel="noreferrer">Fivetran</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.supermetrics.com/pricing" target="_blank" rel="noreferrer">Supermetrics</a>.
				</div>
			</section>
		</>
	);
}