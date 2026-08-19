import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Agent Orchestration | Zion Tech Group',
  description: 'Deploy and manage multi-agent AI systems that automate complex workflows across your organization.',
  keywords: ["AI agents", "multi-agent systems", "automation", "AI orchestration"],
  openGraph: {
    title: 'AI Agent Orchestration | Zion Tech Group',
    description: 'Deploy and manage multi-agent AI systems that automate complex workflows across your organization.',
    url: 'https://ziontechgroup.com/services/ai-agent-orchestration/',
    type: 'website',
  },
  alternates: { canonical: '/services/ai-agent-orchestration/' },
};

export default function Page() {
  return (
    <StandardPage
      title="AI Agent Orchestration"
      subtitle="Deploy and manage multi-agent AI systems that automate complex workflows across your organization."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'AI Agent Orchestration' },
      ]}
      actions={[
        { label: 'Book a call', href: 'https://calendly.com/kleber-ziontechgroup', style: 'primary' },
        { label: 'Explore tools', href: '/tools/', style: 'secondary' },
      ]}
    >
      <div class="grid gap-8 max-w-5xl mx-auto">
        <section class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-2xl font-bold text-white mb-4">Why AI Agent Orchestration?</h2>
            <p class="text-slate-300 leading-relaxed">
              Deploy and manage multi-agent AI systems that automate complex workflows across your organization. Our proven methodology delivers measurable ROI
              within 90 days, with full transparency and enterprise-grade security.
            </p>
          </div>
          <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-white mb-3">Key Features</h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Multi-Agent Deployment</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Workflow Automation</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Agent Monitoring</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Tool Integration</li>
            </ul>
          </div>
        </section>

        <section class="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-700/30 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-white mb-4">Ready to transform your business?</h2>
          <p class="text-slate-300 mb-6">
            Get a free 30-minute scoping call with our AI specialists.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-3 text-center">
              Book Your Free Call
            </a>
            <Link href="/contact/" class="btn-secondary text-lg px-8 py-3 text-center">
              Contact Sales
            </Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "AI Agent Orchestration", "description": "Deploy and manage multi-agent AI systems for workflow automation."}) }}
      />
    </StandardPage>
  );
}
