import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function EcommerceReturnsManagementPage() {
	return (
		<>
			<ServiceLanding
				title="E‑commerce Returns Management"
				description="Automate RMA flows, label generation, and refunds with branded portals, policy checks, and warehouse integrations to reduce costs and improve CX."
				subtitle="Delight customers while controlling return costs"
				pricePerMonthUSD={79}
				implementationWeeks="1-2 weeks"
				roiNote="Cut manual handling and improve repeat purchase rates"
				features={[
					"Self-service returns portal with policy guardrails",
					"Carrier labels, pickup scheduling, and exchanges",
					"Inventory restock, refurbish, and dispositions",
					"Shopify/WooCommerce/BigCommerce integrations",
					"Fraud checks and abuse prevention",
					"Analytics: reasons, refund %, and time-to-close"
				]}
				industries={["E‑commerce", "Retail"]}
				canonical="https://ziontechgroup.com/ecommerce-returns-management"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://www.loopreturns.com/pricing" target="_blank" rel="noreferrer">Loop Returns</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.returnly.com/" target="_blank" rel="noreferrer">Returnly</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.narvar.com/returns" target="_blank" rel="noreferrer">Narvar</a>.
				</div>
			</section>
		</>
	);
}