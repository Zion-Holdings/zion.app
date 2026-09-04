import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Proposal & RFP Response Platform | Zion Tech Group",
  description: "AI-powered proposal management platform that automates RFP responses, proposal creation, and contract drafting. Content library, collaboration workflows, and win rate analytics.",
  openGraph: {
    title: "AI Proposal & RFP Response Platform | Zion Tech Group",
    description: "AI-powered proposal management platform that automates RFP responses, proposal creation, and contract drafting. Content library, collaboration workflows, and win rate analytics.",
    url: "https://ziontechgroup.com/services/proposal-software/",
    type: 'website',
  },
  alternates: { canonical: "/services/proposal-software/" },
};

export default function ProposalSoftwarePage() {
  return (
    <StandardPage
      title="AI Proposal & RFP Response Platform"
      subtitle="AI-powered proposal management platform that automates RFP responses, proposal creation, and contract drafting. Content library, collaboration workflows, and win rate analytics."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Proposal & RFP Response Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered proposal management platform that automates RFP responses, proposal creation, and contract drafting. Content library, collaboration workflows, and win rate analytics.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607204752) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
