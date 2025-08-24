import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function KeywordResearchEngine() {
	return (
		<ServiceLanding
			title="Keyword Research Engine"
			description="Discover low-competition, high-intent keywords with SERP analysis and clustering to unlock compounding organic growth."
			subtitle="Find opportunities competitors miss"
			pricePerMonthUSD={49}
			implementationWeeks="Instant setup"
			roiNote="Publish smarter content and reduce CAC with targeted intent"
			features={[
				"Keyword discovery and intent classification",
				"SERP analysis and difficulty scoring",
				"Topic clustering and content briefs",
				"Long-tail and questions mining",
				"Exports to CMS and editors",
				"Competitor comparisons and tracking",
				"International and locale support",
				"API and CSV export"
			]}
			industries={["Content Publishers", "E-commerce", "Agencies", "SMBs"]}
			canonical="https://ziontechgroup.com/keyword-research-engine"
		/>
	);
}