import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Proposal Detail | Zion Tech Group",
  description: "View and download your custom Zion Tech Group service proposal.",
  openGraph: {
    title: "Proposal Detail | Zion Tech Group",
    description: "View and download your custom Zion Tech Group service proposal.",
    url: "https://ziontechgroup.com/proposals/view/__sample__/",
    type: 'website',
  },
  alternates: { canonical: "/proposals/view/__sample__/" },
};

export default function ProposalsViewSamplePage() {
  return (
    <StandardPage
      title="Proposal Detail"
      subtitle="View and download your custom Zion Tech Group service proposal."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Proposals", href: "/proposals/" },
        { label: "View", href: "/proposals/view/" },
        { label: "__sample__" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">View and download your custom Zion Tech Group service proposal.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
