import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AffiliateMarketingTrackerPage() {
	return (
		<>
			<ServiceLanding
				title="Affiliate Marketing Tracking Platform"
				description="Track referrals, manage payouts, and optimize affiliate performance with fraud checks, dynamic links, and partner analytics."
				subtitle="All-in-one affiliate tracking and payouts"
				pricePerMonthUSD={99}
				implementationWeeks="1-2 weeks"
				roiNote="Grow partner-driven revenue with transparent analytics"
				features={[
					"Custom referral links and deep links",
					"Coupon code attribution and multi-touch",
					"Fraud detection and IP/device checks",
					"Automated payouts and tax forms",
					"Partner CRM and communication portal",
					"Conversion funnels and cohort analysis"
				]}
				industries={["E‑commerce", "SaaS", "Marketplaces"]}
				canonical="https://ziontechgroup.com/affiliate-marketing-tracker"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://tapfiliate.com/pricing/" target="_blank" rel="noreferrer">Tapfiliate</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.refersion.com/pricing" target="_blank" rel="noreferrer">Refersion</a>, 
					<a className="underline hover:text-cyan-300" href="https://partnerstack.com/pricing" target="_blank" rel="noreferrer">PartnerStack</a>.
				</div>
			</section>
		</>
	);
}