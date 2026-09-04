import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Privacy | Zion Tech Group",
  description: "Privacy — Zion Tech Group.",
  openGraph: {
    title: "Privacy | Zion Tech Group",
    description: "Privacy — Zion Tech Group.",
    url: "https://ziontechgroup.com/ai/privacy/",
    type: 'website',
  },
  alternates: { canonical: "/ai/privacy/" },
};

export default function AiPrivacyPage() {
  return (
    <StandardPage
      title="Privacy"
      subtitle="Privacy — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai", href: "/ai/" },
        { label: "Privacy" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Privacy — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
