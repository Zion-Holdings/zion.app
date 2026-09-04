import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Integrations — Zion Tech Group | Zion Tech Group",
  description: "Integrate Zion AI services with your stack. REST APIs, webhooks, and native connectors for automation, observability, and security.",
  openGraph: {
    title: "Integrations — Zion Tech Group | Zion Tech Group",
    description: "Integrate Zion AI services with your stack. REST APIs, webhooks, and native connectors for automation, observability, and security.",
    url: "https://ziontechgroup.com/integrations/",
    type: 'website',
  },
  alternates: { canonical: "/integrations/" },
};

export default function IntegrationsPage() {
  return (
    <StandardPage
      title="Integrations — Zion Tech Group"
      subtitle="Integrate Zion AI services with your stack. REST APIs, webhooks, and native connectors for automation, observability, and security."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Integrations" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Integrate Zion AI services with your stack. REST APIs, webhooks, and native connectors for automation, observability, and security.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
