import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Reseller Program Setup for AI & IT Services | Zion Tech Group",
  description: "Resell AI and IT services under your brand with Zion reseller pricing, onboarding, and enablement materials.",
  openGraph: {
    title: "Reseller Program Setup for AI & IT Services | Zion Tech Group",
    description: "Resell AI and IT services under your brand with Zion reseller pricing, onboarding, and enablement materials.",
    url: "https://ziontechgroup.com/docs/reseller-program-setup/",
    type: 'website',
  },
  alternates: { canonical: "/docs/reseller-program-setup/" },
};

export default function DocsResellerProgramSetupPage() {
  return (
    <StandardPage
      title="Reseller Program Setup for AI & IT Services"
      subtitle="Resell AI and IT services under your brand with Zion reseller pricing, onboarding, and enablement materials."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Reseller Program Setup" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Resell AI and IT services under your brand with Zion reseller pricing, onboarding, and enablement materials.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
