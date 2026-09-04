import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Pricing | Zion Tech Group",
  description: "Transparent pricing for AI, automation, cybersecurity, cloud, and managed IT services.",
  openGraph: {
    title: "Pricing | Zion Tech Group",
    description: "Transparent pricing for AI, automation, cybersecurity, cloud, and managed IT services.",
    url: "https://ziontechgroup.com/docs/pricing/",
    type: 'website',
  },
  alternates: { canonical: "/docs/pricing/" },
};

export default function DocsPricingPage() {
  return (
    <StandardPage
      title="Pricing"
      subtitle="Transparent pricing for AI, automation, cybersecurity, cloud, and managed IT services."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Pricing" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Transparent pricing for AI, automation, cybersecurity, cloud, and managed IT services.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
