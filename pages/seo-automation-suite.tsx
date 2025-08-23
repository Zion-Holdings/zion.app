import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function SeoAutomationSuite() {
	return (
		<ServiceLanding
			title="SEO Automation Suite"
			description="Automate technical SEO checks, sitemap and schema generation, link auditing, and Lighthouse/CLS/INP monitoring with weekly reports and fix suggestions."
			subtitle="Technical SEO automation and continuous monitoring"
			pricePerMonthUSD={149}
			implementationWeeks="2-3 days"
			roiNote="Improve organic traffic 10–30% via consistent technical hygiene"
			features={[
				"Automated sitemaps and schema.org generation",
				"Broken link and redirect audits",
				"Lighthouse budgets with alerts",
				"INP/CLS/LCP Web Vitals tracking",
				"Robots, meta, and canonical validation",
				"Weekly reports with prioritized fixes"
			]}
			industries={["E-commerce", "B2B SaaS", "Publishers"]}
			url="https://ziontechgroup.com/seo-automation-suite"
		/>
	);
}