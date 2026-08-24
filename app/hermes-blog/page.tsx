import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import HermesAdvertBanner from '@/components/HermesAdvertBanner';

export const metadata: Metadata = {
  title: 'Hermes Agent Blog — AI Agent Insights & Case Studies | Zion Tech Group',
  description:
    'The Hermes Agent blog from Zion Tech Group. Deep dives on autonomous AI agents, multi-agent swarms, skills systems, CI/CD automation, SEO content generation, and enterprise case studies.',
  keywords: [
    'Hermes Agent',
    'Nous Research',
    'AI agent blog',
    'autonomous agents',
    'multi-agent systems',
    'skills system',
    'cron automation',
    'MCP integration',
    'Bot Mode',
    'CI/CD automation',
    'SEO content generation',
    'growth automation',
    'agentic workflows',
  ],
  openGraph: {
    title: 'Hermes Agent Blog — AI Agent Insights & Case Studies | Zion Tech Group',
    description:
      'Deep dives on autonomous AI agents, self-improving skills, 20+ platform gateway, and real production results from Zion Tech Group.',
    url: 'https://ziontechgroup.com/hermes-blog/',
    type: 'website',
  },
  alternates: { canonical: '/hermes-blog/' },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often do you publish new Hermes Agent content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We publish new technical deep-dives and case studies weekly. Subscribe to our Telegram channel or check back regularly for updates on skills, automation, and production results.',
      },
    },
    {
      '@type': 'Question',
      name: 'What topics do you cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cover the full spectrum: skills system deep-dives, cron automation with Telegram alerts, multi-agent swarm orchestration, CI/CD autonomous repair, SEO content generation at scale, MCP integration, Bot Mode, and real enterprise case studies.',
      },
    },
  ],
};

const BLOG_CATEGORIES = [
  {
    name: 'Platform Deep-Dives',
    icon: '🧠',
    desc: 'Technical deep-dives into Hermes architecture, skills system, memory, and MCP integration.',
    posts: [
      { title: 'Hermes Agent: The Self-Improving AI Agent Platform That Grows With You', href: '/blog/hermes-agent-self-improving-ai-platform/', read: '12 min' },
      { title: 'The Skills System: How Hermes Agents Learn and Remember', href: '/blog/hermes-agent-skills-system-deep-dive/', read: '14 min' },
      { title: 'How Hermes Agent Connects to 6,000+ MCP Servers', href: '/blog/hermes-agent-mcp-integration/', read: '10 min' },
      { title: 'Multi-Agent Coordination Protocol: How Agents Cooperate', href: '/blog/hermes-multi-agent-coordination-protocol/', read: '11 min' },
    ],
  },
  {
    name: 'Use Cases & Tutorials',
    icon: '🛠️',
    desc: 'Real-world workflows: CI/CD automation, SEO content generation, security auditing, and growth pipelines.',
    posts: [
      { title: 'Hermes Agent Use Cases: Business IT Automation', href: '/blog/hermes-agent-use-cases-business-it/', read: '11 min' },
      { title: 'Hermes Agent: Crescimento Explosivo — 16K to 97K Services', href: '/blog/hermes-agent-crescimento-explosivo/', read: '8 min' },
      { title: 'Como Empresas Usam Agentes Hermes para Criar Catálogos de Serviços', href: '/blog/empresas-hermesses-agent-catalogo/', read: '7 min' },
      { title: 'Como Criar um Catálogo de Serviços Infinito com Agentes de IA', href: '/blog/hermes-agent-criar-catalogo-servicos-infinito/', read: '9 min' },
    ],
  },
  {
    name: 'Automation & Cron',
    icon: '⏰',
    desc: 'Cron-driven automation, Telegram delivery, and autonomous monitoring at Zion Tech Group.',
    posts: [
      { title: 'Hermes Agent Cron Automation with Telegram Delivery', href: '/blog/hermes-agent-cron-automation-telegram/', read: '9 min' },
      { title: 'Hermes Agent Content Publishing & Distribution Pipeline', href: '/blog/hermes-agent-content-publishing-distribution/', read: '8 min' },
    ],
  },
  {
    name: 'Industry Comparisons',
    icon: '⚖️',
    desc: 'How Hermes stacks up against Claude Code, OpenClaw, OpenHands, and other AI agent platforms.',
    posts: [
      { title: 'Hermes Agents vs. Competitors 2026: The Definitive Comparison', href: '/blog/hermes-agents-vs-competitors-2026/', read: '13 min' },
      { title: 'The Complete Guide to Hermes Agents vs. Claude Code', href: '/blog/hermes-agents-complete-guide/', read: '15 min' },
      { title: 'Hermes Agent vs Claude Code: The Self-Improving Edge', href: '/blog/hermes-agent-self-improving-ai-platform/', read: '12 min' },
    ],
  },
];

const PRODUCTION_STATS = [
  { value: '10', label: 'Active Agents' },
  { value: '2,600+', label: 'Monthly Tasks' },
  { value: '350+', label: 'Skills Installed' },
  { value: '20+', label: 'Platform Integrations' },
  { value: '16,600+', label: 'Services Cataloged' },
  { value: '99.99%', label: 'Fleet Uptime' },
];

export default function HermesBlogPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <StandardPage
        title="Hermes Agent Blog"
        subtitle="Deep-dives, case studies, and tutorials from the team running Hermes Agent in production at Zion Tech Group."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Hermes Agents', href: '/hermes-agents/' },
          { label: 'Blog' },
        ]}
        actions={[
          { label: 'Book a Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
          { label: 'Live Dashboard', href: '/agents-monitoring/', style: 'secondary' },
        ]}
      >
        <div className="space-y-16">
          {/* Hero Stats */}
          <section>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-white mb-6 text-center">Our Agent Fleet in Production</h2>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {PRODUCTION_STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Categories */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {BLOG_CATEGORIES.map((cat) => (
                <div key={cat.name} className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-xl font-semibold text-white">{cat.name}</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{cat.desc}</p>
                  <ul className="space-y-2">
                    {cat.posts.map((post) => (
                      <li key={post.href}>
                        <Link
                          href={post.href}
                          className="text-purple-300 hover:text-purple-200 text-sm font-medium hover:underline"
                        >
                          {post.title}
                        </Link>
                        <span className="text-xs text-slate-500 ml-2">({post.read} read)</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Featured: Complete Guide */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Featured: Complete Guide</h2>
            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/40">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-mono rounded-full border border-purple-500/20 mb-4">
                    Featured Article
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Hermes Agents: The Complete 2026 Guide
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    The definitive guide to Hermes Agent — the open-source platform by Nous Research
                    for building, deploying, and managing autonomous AI agent fleets. Covers architecture,
                    skills system, Bot Mode, MCP integration, and production deployment patterns.
                  </p>
                  <Link
                    href="/blog/hermes-agents-complete-guide/"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all text-sm"
                  >
                    Read the Complete Guide →
                  </Link>
                </div>
                <div className="md:w-1/2 p-8 bg-slate-900/60 border-t md:border-t-0 md:border-l border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Topics Covered</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">✓</span> Platform architecture
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">✓</span> Skills system deep-dive
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">✓</span> Multi-agent swarm orchestration
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">✓</span> CI/CD & SEO automation
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">✓</span> Security & compliance
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">✓</span> Production deployment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* All Posts CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">All Hermes Agent Blog Posts</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Browse the complete archive of Hermes Agent technical articles, case studies, and tutorials.
            </p>
            <Link
              href="/blog?tag=hermes-agent"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
            >
              View All Blog Posts →
            </Link>
          </section>
        </div>
      </StandardPage>
      <HermesAdvertBanner />
    </>
  );
}
