import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "CRM Integration Services for B2B Enterprises | Zion Tech Group",
  description: "Zion Tech Group provides CRM integration services powered by Composio — connecting HubSpot, Salesforce, Linear, Notion, Gmail, and 1,000+ apps into unified automation workflows for B2B enterprises.",
  openGraph: {
    title: "CRM Integration Services for B2B Enterprises | Zion Tech Group",
    description: "Zion Tech Group provides CRM integration services powered by Composio — connecting HubSpot, Salesforce, Linear, Notion, Gmail, and 1,000+ apps into unified automation workflows for B2B enterprises.",
    url: "https://ziontechgroup.com/docs/services/crm-integration-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/services/crm-integration-services/" },
};

export default function DocsServicesCrmIntegrationServicesPage() {
  return (
    <StandardPage
      title="CRM Integration Services for B2B Enterprises"
      subtitle="Zion Tech Group provides CRM integration services powered by Composio — connecting HubSpot, Salesforce, Linear, Notion, Gmail, and 1,000+ apps into unified automation workflows for B2B enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Services", href: "/docs/services/" },
        { label: "Crm Integration Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group provides CRM integration services powered by Composio — connecting HubSpot, Salesforce, Linear, Notion, Gmail, and 1,000+ apps into unified automation workflows for B2B enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
