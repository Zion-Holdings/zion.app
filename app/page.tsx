import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import AgentsMonitoring from '@/components/AgentsMonitoring';

export const metadata: Metadata = {
  title: 'Home | Zion Tech Group',
  description: 'Zion Tech Group is an AI-native IT services company building autonomous operations, managed AI, and enterprise-ready delivery.',
  keywords: ['AI services', 'IT services', 'managed AI', 'cloud migration', 'security compliance', 'automation', 'data analytics', 'Micro-SaaS'],
  openGraph: {
    title: 'Zion Tech Group | AI & IT Company',
    description: 'AI-native IT services: autonomous operations, managed AI, cloud, security, and data.',
    url: 'https://ziontechgroup.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group | AI & IT Company',
    description: 'AI-native IT services: autonomous operations, managed AI, cloud, security, and data.',
  },
  alternates: { canonical: '/' },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  sameAs: [
    'https://linkedin.com/company/ziontechgroup',
    'https://x.com/ziontechgroup',
    'https://github.com/Zion-support',
  ],
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ziontechgroup.com/search/?q={query}',
    'query-input': 'required name=query',
  },
};


export default function HomePage() {
  return (
    <>
    <StandardPage
        title="AI-native IT services"
        subtitle="Autonomous operations, managed AI, and enterprise-ready delivery for teams that want to move fast without breaking trust."
        breadcrumbItems={[
          { label: 'Home' },
        ]}
        actions={[
          { label: 'Start a project', href: '/start-project/', style: 'primary' },
          { label: 'Explore services', href: '/services/', style: 'secondary' },
        ]}
      >
        {/* Quick links */}
        <nav className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="/services/" className="text-sm text-slate-300 hover:text-white">Services</Link>
          <Link href="/partners/" className="text-sm text-slate-300 hover:text-white">Partners</Link>
          <Link href="/case-studies/" className="text-sm text-slate-300 hover:text-white">Case Studies</Link>
          <Link href="/pricing/" className="text-sm text-slate-300 hover:text-white">Pricing</Link>
          <Link href="/contact/" className="text-sm text-slate-300 hover:text-white">Contact</Link>
        </nav>

        {/* Trust signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center">
            <div className="text-white font-bold text-lg">50+</div>
            <div className="text-slate-400 text-xs">Projects delivered</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center">
            <div className="text-white font-bold text-lg">24/7</div>
            <div className="text-slate-400 text-xs">Support coverage</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center">
            <div className="text-white font-bold text-lg">Enterprise-grade</div>
            <div className="text-slate-400 text-xs">Security & compliance</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center">
            <div className="text-white font-bold text-lg">Regulated</div>
            <div className="text-slate-400 text-xs">Industry ready</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <Link href="/services/?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-2">AI & Automation</h3>
            <p className="text-slate-400 text-sm">Strategy, assistants, and autonomous operations.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
          </Link>
          <Link href="/services/?category=cloud" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-2">Cloud & DevOps</h3>
            <p className="text-slate-400 text-sm">Migration, CI/CD, and reliability at scale.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
          </Link>
          <Link href="/services/?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-2">Security & Compliance</h3>
            <p className="text-slate-400 text-sm">Hardened defenses and audit-ready controls.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
          </Link>
          <Link href="/services/?category=data" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-2">Data & Analytics</h3>
            <p className="text-slate-400 text-sm">Warehousing, pipelines, and governed insights.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
          </Link>
          <Link href="/services/?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-2">Automation & Orchestration</h3>
            <p className="text-slate-400 text-sm">Workflow automation, triage, and operational runbooks.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
          </Link>
          <Link href="/services/?category=micro-saas" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-2">Micro-SaaS & Products</h3>
            <p className="text-slate-400 text-sm">Bootstrap and scale niche AI-enabled products.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-purple-500/30 bg-purple-500/10 p-8 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to move fast without breaking trust?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">Start a project with an AI-native partner. We’ll align on outcomes, timeline, and success metrics before we write a single line of code.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/start-project/" className="btn-primary text-center">Start a project</Link>
            <Link href="/contact/" className="btn-secondary text-center">Talk to us</Link>
          </div>
        </div>
    
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">Why Zion</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
            <li>AI-native delivery with measurable outcomes and clear rollback plans.</li>
            <li>Enterprise-grade security, compliance, and reliability built in.</li>
            <li>Collaborative teams that transfer knowledge, not just dependencies.</li>
            <li>Track record across regulated industries and fast-moving startups.</li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/services/" className="btn-primary text-center">Explore services</Link>
            <Link href="/contact/" className="btn-secondary text-center">Contact us</Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">Recent outcomes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <h3 className="text-white font-semibold mb-1">Faster time-to-value</h3>
              <p className="text-slate-400 text-xs">Most engagements show measurable progress in the first 30 days.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Lower operational risk</h3>
              <p className="text-slate-400 text-xs">Rollback-ready plans and observable checkpoints keep work predictable.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Knowledge transfer</h3>
              <p className="text-slate-400 text-xs">Clear ownership, runbooks, and training included with delivery.</p>
            </div>
          </div>
        </div>
    </StandardPage>
    </>
  );
}