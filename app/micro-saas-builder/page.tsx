import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Micro SaaS Builder | Zion Tech Group",
  description: "Micro SaaS builder: ideation, MVP development, growth automation, and monetization for niche software products.",
  openGraph: {
    title: "Micro SaaS Builder | Zion Tech Group",
    description: "Micro SaaS builder: ideation, MVP development, growth automation, and monetization for niche software products.",
    url: "https://ziontechgroup.com/micro-saas-builder/",
    type: 'website',
  },
  alternates: { canonical: "/micro-saas-builder/" },
};

export default function MicroSaasBuilderPage() {
  return (
    <StandardPage
      title="Micro SaaS Builder"
      subtitle="Micro SaaS builder: ideation, MVP development, growth automation, and monetization for niche software products."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Micro Saas Builder" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Micro SaaS builder: ideation, MVP development, growth automation, and monetization for niche software products.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
