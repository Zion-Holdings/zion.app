import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Redirecting… | Zion Tech Group",
  description: "Redirecting… — Zion Tech Group.",
  openGraph: {
    title: "Redirecting… | Zion Tech Group",
    description: "Redirecting… — Zion Tech Group.",
    url: "https://ziontechgroup.com/blog/ai-driven-marketing-automation-strategies/",
    type: 'website',
  },
  alternates: { canonical: "/blog/ai-driven-marketing-automation-strategies/" },
};

export default function BlogAiDrivenMarketingAutomationStrategiesPage() {
  return (
    <StandardPage
      title="Redirecting…"
      subtitle="Redirecting… — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Ai Driven Marketing Automation Strategies" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Redirecting… — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
