import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Enterprise Knowledge Management | Zion Tech Group",
  description: "AI-powered knowledge management: auto-organize, answer questions, surface relevant info.",
  openGraph: {
    title: "Enterprise Knowledge Management | Zion Tech Group",
    description: "AI-powered knowledge management: auto-organize, answer questions, surface relevant info.",
    url: "https://ziontechgroup.com/services/w179-knowledge-mgmt/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-knowledge-mgmt/" },
};

export default function W179KnowledgeMgmtPage() {
  return (
    <StandardPage
      title="Enterprise Knowledge Management"
      subtitle="AI-powered knowledge management: auto-organize, answer questions, surface relevant info."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Enterprise Knowledge Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered knowledge management: auto-organize, answer questions, surface relevant info.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608110727) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
