import Link from 'next/link';

export const metadata = { title: 'Free Resources', description: 'Free AI tools, guides, templates, and resources from Zion Tech Group.' };

export default function FreeResourcesPage() {
  const resources = [
    { title: 'AI Tools Directory', emoji: '🧠', desc: 'Curated list of 100+ free AI tools for business, design, development, and marketing.', href: '/docs/FREE-AI-TOOLS' },
    { title: 'API Registry & Setup Guide', emoji: '🔑', desc: 'Complete guide to getting API keys for 12+ AI providers with free tiers.', href: '/docs/API_REGISTRY' },
    { title: 'AI Automation Strategy Guide', emoji: '🤖', desc: 'How to implement AI automation in your organization, from proof of concept to full deployment.', href: '/blog/ai-driven-marketing-automation-strategies' },
    { title: 'Email Agent V36 Documentation', emoji: '📧', desc: 'Intelligent email responder with case-by-case analysis, reply-all guarantee, and multi-provider AI.', href: '/docs/API_REGISTRY' },
    { title: 'Security Best Practices', emoji: '🔒', desc: 'Enterprise security checklist: Zero Trust, DLP, encryption, and compliance frameworks.', href: '/blog/ai-security-best-practices-protecting-your-ai-systems-from-emerging-threats' },
    { title: 'Cloud Migration Playbook', emoji: '☁️', desc: 'Step-by-step guide to migrating legacy systems to cloud-native architecture.', href: '/blog/cloud-migration-and-ai-modernizing-infrastructure-for-intelligent-workloads' },
    { title: 'AI ROI Calculator', emoji: '📊', desc: 'Calculate the return on investment for your AI projects with our interactive tool.', href: '/roi-calculator' },
    { title: 'LLM Comparison Guide', emoji: '⚖️', desc: 'Compare OpenAI, Anthropic, Google Gemini, Mistral, and open-source models for your use case.', href: '/docs/OPENROUTER-SETUP' },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Free Resources</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Free Resources & Guides</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Guides, tools, templates, and documentation to help you succeed with AI and IT transformation.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((r, i) => (
              <Link key={i} href={r.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl">{r.emoji}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
