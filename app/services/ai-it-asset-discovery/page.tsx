import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI IT Asset Discovery Service | Zion Tech Group",
  description: "Automated IT asset discovery and inventory management: find every device, software license, cloud resource, and SaaS subscription across your environment — with AI-powered classification and ownership mapping.",
  openGraph: {
    title: "AI IT Asset Discovery Service | Zion Tech Group",
    description: "Automated IT asset discovery and inventory management: find every device, software license, cloud resource, and SaaS subscription across your environment — with AI-powered classification and ownership mapping.",
    url: "https://ziontechgroup.com/services/ai-it-asset-discovery/",
    type: 'website',
  },
  alternates: { canonical: "/services/ai-it-asset-discovery/" },
};

export default function ServicesAiItAssetDiscoveryPage() {
  return (
    <StandardPage
      title="AI IT Asset Discovery Service"
      subtitle="Automated IT asset discovery and inventory management: find every device, software license, cloud resource, and SaaS subscription across your environment — with AI-powered classification and ownership mapping."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Ai It Asset Discovery" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automated IT asset discovery and inventory management: find every device, software license, cloud resource, and SaaS subscription across your environment — with AI-powered classification and ownership mapping.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
