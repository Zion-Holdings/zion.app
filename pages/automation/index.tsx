import Link from 'next/link';

export default function AutomationIndex() {
  const cards = [
    { href: '/automation/marketplace-enrichment', title: 'Marketplace Enrichment', desc: 'AI-generated summaries, tags, and tiers for services' },
    { href: '/automation/quote-requests', title: 'Quote Requests Log', desc: 'Synced requests from Supabase with AI summaries' },
    { href: '/automation/autodocs', title: 'Autodocs', desc: 'Automated documentation generated from code' },
    { href: '/automation/services-schema', title: 'Services Schema', desc: 'schema.org JSON-LD for services for SEO' },
    { href: '/automation/broken-links', title: 'Broken Links Report', desc: 'External link status across docs' },
    { href: '/automation/bundle-report', title: 'Bundle Size Report', desc: 'Build artifact size snapshot for performance' },
  ];
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-white">Autonomous Cloud Automations</h1>
      <p className="text-white/80 mt-2">These automations run in the cloud, require no human interaction, and sync updates back to the repository automatically.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {cards.map((c) => (
          <Link key={c.href} href={c.href}>
            <a className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="text-white font-medium">{c.title}</div>
              <div className="text-white/70 text-sm mt-1">{c.desc}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}