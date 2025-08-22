import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function RetailTechnologySolutions() {
	return (
		<ServiceLanding
			title="Retail Technology Solutions"
			description="Transform retail with AI-driven demand forecasting, personalization, and omnichannel optimization from store to logistics."
			subtitle="Win every shelf and channel"
			pricePerMonthUSD={3999}
			implementationWeeks="Implementation: 4-8 weeks"
			roiNote="Increase conversion and cut operational costs"
			features={[
				"AI demand sensing and inventory optimization",
				"On-site and CRM personalization",
				"Computer vision for store analytics",
				"Omnichannel orchestration and fulfillment",
				"Dynamic pricing and promotions",
				"Integrations: Shopify, BigCommerce, Salesforce, Snowflake"
			]}
			industries={["Retail", "CPG", "E-commerce"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/retail-technology-solutions"
		/>
	);
}