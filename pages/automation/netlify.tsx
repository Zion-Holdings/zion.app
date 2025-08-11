import Head from 'next/head';
import Link from 'next/link';
import { Rocket, Gauge, Palette, Layers } from 'lucide-react';

export default function NetlifyAutomations() {
  const items = [
    {
      title: 'Frontpage Enhancer',
      desc: 'Updates promos, sections, and deep links for the front experience.',
      href: '/.netlify/functions/frontpage-enhancer',
      icon: Rocket,
      schedule: 'Every 4 hours',
    },
    {
      title: 'Design Evolution',
      desc: 'Futuristic visual + layout improvements on a cadence.',
      href: '/.netlify/functions/design-evolution-scheduler',
      icon: Palette,
      schedule: 'Twice daily',
    },
    {
      title: 'Content Refresh',
      desc: 'Regenerates sitemap, search index, and README artifacts.',
      href: '/.netlify/functions/content-refresh-scheduler',
      icon: Layers,
      schedule: 'Daily 02:00',
    },
    {
      title: 'Dependency Upgrades',
      desc: 'Runs orchestrator for safe minor/patch upgrades.',
      href: '/.netlify/functions/deps-scheduler',
      icon: Gauge,
      schedule: 'Daily 01:00',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Netlify Automations — Zion</title>
        <meta name="description" content="Non-GitHub automations powered by Netlify Scheduled Functions." />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-2">Netlify Automations</h1>
        <p className="text-white/70 mb-8">These scheduled functions run our autonomous agents without GitHub Actions.</p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, href, icon: Icon, schedule }) => (
            <a key={title} href={href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-1 text-sm text-white/75">{desc}</p>
              <div className="mt-3 text-xs text-cyan-300/90">{schedule} — Run now →</div>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/automation"><a className="text-cyan-300 underline">Back to Automation Hub</a></Link>
        </div>
      </main>
    </div>
  );
}