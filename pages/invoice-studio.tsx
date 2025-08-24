import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function InvoiceStudio() {
	return (
		<ServiceLanding
			title="Invoice Studio"
			description="Create, customize, and send invoices with one click. Collect payments, automate reminders, and export to accounting."
			subtitle="Get paid faster"
			pricePerMonthUSD={15}
			implementationWeeks="Instant setup"
			roiNote="Reduce DSO and improve cash flow with automated reminders"
			features={[
				"Custom templates and branding",
				"Email and PDF delivery",
				"Payment links and gateways",
				"Taxes, discounts, and multi-currency",
				"Client portal and status tracking",
				"Exports to QuickBooks/Xero",
				"Recurring invoices and subscriptions",
				"Webhooks and API"
			]}
			industries={["Freelancers", "Agencies", "SMBs", "SaaS"]}
			canonical="https://ziontechgroup.com/invoice-studio"
		/>
	);
}