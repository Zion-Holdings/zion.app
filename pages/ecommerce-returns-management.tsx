import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function EcommerceReturnsManagement() {
	return (
		<ServiceLanding
			title="E-commerce Returns Management System"
			description="Automate return requests, generate labels, track RMAs, and streamline refunds/exchanges for a delightful post-purchase experience."
			subtitle="Frictionless returns at scale"
			pricePerMonthUSD={129}
			implementationWeeks="1-2 weeks"
			roiNote="Lower support load by 25–40% and improve repeat purchases"
			features={[
				"Self-service returns portal and RMA workflows",
				"Automated label generation and tracking",
				"Refunds, exchanges, and store credit rules",
				"Fraud checks and policy enforcement",
				"Email/SMS notifications and status updates",
				"E-commerce integrations (Shopify, WooCommerce, BigCommerce)",
				"Warehouse and 3PL integrations",
				"Analytics on returns reasons and costs"
			]}
			industries={["E-commerce", "Retail", "Marketplaces"]}
			canonical="https://ziontechgroup.com/ecommerce-returns-management"
		/>
	);
}