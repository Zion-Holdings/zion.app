import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI BDR SDR Roi And Cost Model — Zion Tech Group | Zion Tech Group",
  description: "Expert analysis and practical guidance on ai bdr sdr roi and cost model for IT leaders, MSPs, and enterprise teams.",
  openGraph: {
    title: "AI BDR SDR Roi And Cost Model — Zion Tech Group | Zion Tech Group",
    description: "Expert analysis and practical guidance on ai bdr sdr roi and cost model for IT leaders, MSPs, and enterprise teams.",
    url: "https://ziontechgroup.com/blog/ai-bdr-sdr-roi-and-cost-model/",
    type: 'website',
  },
  alternates: { canonical: "/blog/ai-bdr-sdr-roi-and-cost-model/" },
};

export default function BlogAiBdrSdrRoiAndCostModelPage() {
  return (
    <StandardPage
      title="AI BDR SDR Roi And Cost Model — Zion Tech Group"
      subtitle="Expert analysis and practical guidance on ai bdr sdr roi and cost model for IT leaders, MSPs, and enterprise teams."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Ai Bdr Sdr Roi And Cost Model" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Expert analysis and practical guidance on ai bdr sdr roi and cost model for IT leaders, MSPs, and enterprise teams.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
