import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Zion Tech Group | AI & IT Solutions | Zion Tech Group",
  description: "AI applications, secure engineering, and scalable delivery for modern teams. Zion Tech Group.",
  openGraph: {
    title: "Zion Tech Group | AI & IT Solutions | Zion Tech Group",
    description: "AI applications, secure engineering, and scalable delivery for modern teams. Zion Tech Group.",
    url: "https://ziontechgroup.com/ai-industry/finance/",
    type: 'website',
  },
  alternates: { canonical: "/ai-industry/finance/" },
};

export default function FinancePage() {
  return (
    <StandardPage
      title="Zion Tech Group | AI & IT Solutions"
      subtitle="AI applications, secure engineering, and scalable delivery for modern teams. Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Industry", href: "/ai-industry/" },
        { label: "Zion Tech Group | AI & IT Solutions" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">AI for finance</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260420065854) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
