import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function RetailTechnologySolutions() {
	return (
		<ServiceLanding
			title="Retail Technology Solutions"
			slug="retail-technology-solutions"
			description="Optimize merchandising, pricing, demand forecasting, and omni-channel experiences with AI. Personalize at scale while reducing waste and stockouts."
			subtitle="Higher margins and better experiences powered by AI."
			pricePerMonthUSD={1999}
			implementationWeeks="Implementation: 4–8 weeks"
			roiNote="Lift gross margin 2–4 pts and reduce stockouts 10–20%"
			features={[
				"Demand forecasting and dynamic pricing",
				"Assortment optimization and store clustering",
				"Customer 360 and propensity modeling",
				"Store ops: labor planning and task automation",
				"Omni-channel journey orchestration",
				"Integrations: POS, eCom, WMS, ESP, CDP"
			]}
			industries={["Retail", "CPG", "E‑commerce"]}
			canonical="https://ziontechgroup.com/retail-technology-solutions"
		/>
	);
}