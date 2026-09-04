import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Why Choose Zion Tech Group — AI & IT Services for Enterprise | Zion Tech Group",
  description: "Zion Tech Group delivers AI, automation, and IT services for enterprise companies. Faster than big consultancies, enterprise-grade quality, transparent pricing. See why mid-market and enterprise clients choose Zion.",
  openGraph: {
    title: "Why Choose Zion Tech Group — AI & IT Services for Enterprise | Zion Tech Group",
    description: "Zion Tech Group delivers AI, automation, and IT services for enterprise companies. Faster than big consultancies, enterprise-grade quality, transparent pricing. See why mid-market and enterprise clients choose Zion.",
    url: "https://ziontechgroup.com/why-ai-consulting-firm/",
    type: 'website',
  },
  alternates: { canonical: "/why-ai-consulting-firm/" },
};

export default function WhyAiConsultingFirmPage() {
  return (
    <StandardPage
      title="Why Choose Zion Tech Group — AI & IT Services for Enterprise"
      subtitle="Zion Tech Group delivers AI, automation, and IT services for enterprise companies. Faster than big consultancies, enterprise-grade quality, transparent pricing. See why mid-market and enterprise clients choose Zion."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Why Ai Consulting Firm" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zion Tech Group delivers AI, automation, and IT services for enterprise companies. Faster than big consultancies, enterprise-grade quality, transparent pricing. See why mid-market and enterprise clients choose Zion.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
