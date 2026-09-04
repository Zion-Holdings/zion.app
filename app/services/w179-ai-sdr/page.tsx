import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI SDR and Prospecting Agent | Zion Tech Group",
  description: "AI sales development rep: research, outreach, sequences, meeting booking.",
  openGraph: {
    title: "AI SDR and Prospecting Agent | Zion Tech Group",
    description: "AI sales development rep: research, outreach, sequences, meeting booking.",
    url: "https://ziontechgroup.com/services/w179-ai-sdr/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-ai-sdr/" },
};

export default function W179AiSdrPage() {
  return (
    <StandardPage
      title="AI SDR and Prospecting Agent"
      subtitle="AI sales development rep: research, outreach, sequences, meeting booking."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI SDR and Prospecting Agent" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI sales development rep: research, outreach, sequences, meeting booking.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113041) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
