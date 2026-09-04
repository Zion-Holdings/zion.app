import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Providers | Zion Tech Group",
  description: "Provider resources and onboarding for Zion Tech Group technology and channel partners.",
  openGraph: {
    title: "Providers | Zion Tech Group",
    description: "Provider resources and onboarding for Zion Tech Group technology and channel partners.",
    url: "https://ziontechgroup.com/docs/providers/",
    type: 'website',
  },
  alternates: { canonical: "/docs/providers/" },
};

export default function DocsProvidersPage() {
  return (
    <StandardPage
      title="Providers"
      subtitle="Provider resources and onboarding for Zion Tech Group technology and channel partners."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Providers" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Provider resources and onboarding for Zion Tech Group technology and channel partners.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
