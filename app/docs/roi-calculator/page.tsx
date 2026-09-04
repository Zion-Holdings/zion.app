import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI ROI Calculator | Zion Tech Group",
  description: "Calculate your AI implementation ROI with our free interactive calculator. Discover cost savings, revenue growth, and payback period for your AI investment.",
  openGraph: {
    title: "AI ROI Calculator | Zion Tech Group",
    description: "Calculate your AI implementation ROI with our free interactive calculator. Discover cost savings, revenue growth, and payback period for your AI investment.",
    url: "https://ziontechgroup.com/docs/roi-calculator/",
    type: 'website',
  },
  alternates: { canonical: "/docs/roi-calculator/" },
};

export default function DocsRoiCalculatorPage() {
  return (
    <StandardPage
      title="AI ROI Calculator"
      subtitle="Calculate your AI implementation ROI with our free interactive calculator. Discover cost savings, revenue growth, and payback period for your AI investment."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Roi Calculator" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Calculate your AI implementation ROI with our free interactive calculator. Discover cost savings, revenue growth, and payback period for your AI investment.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
