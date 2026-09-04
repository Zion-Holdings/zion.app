import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Revenue Calculator | Zion Tech Group",
  description: "Estimate your revenue potential with Zion",
  openGraph: {
    title: "Revenue Calculator | Zion Tech Group",
    description: "Estimate your revenue potential with Zion",
    url: "https://ziontechgroup.com/docs/revenue-calculator/",
    type: 'website',
  },
  alternates: { canonical: "/docs/revenue-calculator/" },
};

export default function DocsRevenueCalculatorPage() {
  return (
    <StandardPage
      title="Revenue Calculator"
      subtitle="Estimate your revenue potential with Zion"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Revenue Calculator" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Estimate your revenue potential with Zion</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
