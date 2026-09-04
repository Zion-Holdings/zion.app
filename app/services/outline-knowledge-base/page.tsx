import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Outline Knowledge Base | Zion Tech Group",
  description: "Beautiful, open-source knowledge base and documentation platform designed for teams that want a self-hosted alternative to Notion or Confluence. Features a real-time collaborative editor, hierarchical document organizati",
  openGraph: {
    title: "Outline Knowledge Base | Zion Tech Group",
    description: "Beautiful, open-source knowledge base and documentation platform designed for teams that want a self-hosted alternative to Notion or Confluence. Features a real-time collaborative editor, hierarchical document organizati",
    url: "https://ziontechgroup.com/services/outline-knowledge-base/",
    type: 'website',
  },
  alternates: { canonical: "/services/outline-knowledge-base/" },
};

export default function OutlineKnowledgeBasePage() {
  return (
    <StandardPage
      title="Outline Knowledge Base"
      subtitle="Beautiful, open-source knowledge base and documentation platform designed for teams that want a self-hosted alternative to Notion or Confluence. Features a real-time collaborative editor, hierarchical document organizati"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Outline Knowledge Base" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Beautiful, open-source knowledge base and documentation platform designed for teams that want a self-hosted alternative to Notion or Confluence. Features a real-time collaborative editor, hierarchical document organizati</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607104935) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
