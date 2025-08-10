import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zion AI Marketplace</title>
        <meta name="description" content="Autonomous AI marketplace and automations" />
      </Head>
      
      <main className="min-h-screen bg-high-contrast-primary text-high-contrast p-6 md:p-10">
        <h1 className="text-2xl md:text-4xl font-semibold">Zion AI Marketplace</h1>
        <p className="text-high-contrast-muted mt-2">Autonomous cloud automations keep the site optimized and up-to-date.</p>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AutomationCard
            title="Talent Profile Optimizer"
            description="Aggregates, enriches, and publishes talent profiles and tags via AI."
            links={[
              { href: '/talent/onboarding', label: 'Submit Your Profile' },
              { href: '/talent', label: 'Browse Talent' },
              { href: '/talent/onboarding', label: 'Get Started' },
            ]}
          />

          <AutomationCard
            title="Search Index Builder"
            description="Builds a client-side search index from site content for fast discovery."
            links={[{ href: '/search/index.json', label: 'View Search Index' }]}
          />

          <AutomationCard
            title="Link Checker"
            description="Scans internal and external links and publishes health reports."
            links={[
              { href: '/reports/links/latest.json', label: 'Latest Link Report' },
            ]}
          />

          <AutomationCard
            title="Lighthouse Reporter"
            description="Audits performance, accessibility, and SEO on a schedule."
            links={[{ href: '/data/reports/lighthouse/latest', label: 'Latest Lighthouse Report' }]}
          />

          <AutomationCard
            title="Content Freshness Auditor"
            description={`Flags pages older than the freshness threshold for proactive updates.`}
            links={[{ href: '/reports/content-freshness.json', label: 'Freshness Summary' }]}
          />

          <AutomationCard
            title="Knowledge Graph Builder"
            description="Connects tags, pages, and talent to reveal topical relationships."
            links={[{ href: '/graph/knowledge-graph.json', label: 'View Knowledge Graph' }]}
          />
        </section>
      </main>
    </div>
  );
};

function AutomationCard(props: {
  title: string;
  description: string;
  links: { href: string; label: string }[];
}) {
  const { title, description, links } = props;
  return (
    <div className="rounded-2xl p-5 border border-[var(--border-primary)] bg-glass/60">
      <h3 className="text-lg md:text-xl font-medium">{title}</h3>
      <p className="text-high-contrast-secondary mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            <a className="inline-block px-3 py-2 rounded-lg bg-[var(--text-accent)] text-black text-sm">{l.label}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Index;