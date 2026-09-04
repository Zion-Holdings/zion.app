import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Automated Proposal Generation | Zion Tech Group",
  description: "Automate automated proposal generation with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems.",
  openGraph: {
    title: "Automated Proposal Generation | Zion Tech Group",
    description: "Automate automated proposal generation with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems.",
    url: "https://ziontechgroup.com/automated-proposal-generation/",
    type: 'website',
  },
  alternates: { canonical: "/automated-proposal-generation/" },
};

export default function AutomatedProposalGenerationPage() {
  return (
    <StandardPage
      title="Automated Proposal Generation"
      subtitle="Automate automated proposal generation with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Automated Proposal Generation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate automated proposal generation with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
