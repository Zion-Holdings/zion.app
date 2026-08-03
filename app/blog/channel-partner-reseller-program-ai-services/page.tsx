import { Metadata } from 'next';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';
import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata = {
  title: 'Channel Partner and Reseller Program for AI Services | Zion Tech Group',
  description:
    'Resellers expand AI delivery without delivery risk. Zion Tech Group provides pricing guardrails, templates, and co-selling support.',
  openGraph: {
    title: 'Channel Partner and Reseller Program for AI Services',
    description:
      'Expand AI delivery without delivery risk with pricing guardrails, templates, and co-selling support.',
    url: 'https://ziontechgroup.com/blog/channel-partner-reseller-program-ai-services',
    type: 'article',
  },
  alternates: { canonical: 'https://ziontechgroup.com/blog/channel-partner-reseller-program-ai-services' },
};

export default function ChannelPartnerResellerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <ArticleStructuredData
        title={metadata.title as string}
        description={metadata.description as string}
        canonical={metadata.alternates?.canonical as string}
        publishedAt="2026-07-27"
        updatedAt="2026-07-27"
      />
      <SiteBreadcrumbs items={[{ label:'Home',href:'/'},{label:'Blog',href:'/blog'},{label:'Partner Program',href:'/blog/channel-partner-reseller-program-ai-services'}]} />
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100">Channel Partner and Reseller Program for AI Services</h1>
        <p className="text-slate-300 text-lg">Resellers expand AI delivery without delivery risk. We provide pricing guardrails, templates, and co-selling support.</p>
      </header>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-100">Why this matters</h2>
        <p className="text-slate-300">Partners need repeatable models and margin protection. A good program removes delivery ambiguity and accelerates trust.</p>
        <ul className="list-disc pl-6 text-slate-300 space-y-1">
          <li>Pricing guardrails with clear minimum margins and scope rules.</li>
          <li>Co-selling playbooks for discovery, demo, and proposal generation.</li>
          <li>Support templates, onboarding checklists, and escalation paths.</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-100">Practical use cases</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-1">
          <li>Resale of AI support automation suites to vertical customers.</li>
          <li>Co-delivery with technology partners on integration-heavy accounts.</li>
          <li>Landed expansion through managed services and retainers.</li>
        </ul>
      </section>
    </main>
  );
}
