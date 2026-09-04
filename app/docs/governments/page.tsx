import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Government | Zion Tech Group",
  description: "AI and IT solutions for government: secure infrastructure, citizen services automation, compliance, and data sovereignty.",
  openGraph: {
    title: "Government | Zion Tech Group",
    description: "AI and IT solutions for government: secure infrastructure, citizen services automation, compliance, and data sovereignty.",
    url: "https://ziontechgroup.com/docs/governments/",
    type: 'website',
  },
  alternates: { canonical: "/docs/governments/" },
};

export default function DocsGovernmentsPage() {
  return (
    <StandardPage
      title="Government"
      subtitle="AI and IT solutions for government: secure infrastructure, citizen services automation, compliance, and data sovereignty."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Governments" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI and IT solutions for government: secure infrastructure, citizen services automation, compliance, and data sovereignty.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
