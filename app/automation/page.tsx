import Link from 'next/link';

export const metadata = {
  title: 'AI Automation & Orchestration | Zion Tech Group',
  description: 'Enterprise AI automation and workflow orchestration services. Build resilient AI systems that scale with your business needs.',
  keywords: ['AI automation', 'workflow orchestration', 'enterprise AI', 'process automation', 'Zion Tech Group'],
  authors: { name: 'Zion Tech Group' },
  openGraph: {
    title: 'AI Automation & Orchestration | Zion Tech Group',
    description: 'Enterprise AI automation and workflow orchestration services.',
    url: 'https://ziontechgroup.com/automation/',
    type: 'article',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: 'https://ziontechgroup.com/automation/' },
};

export default function AutomationPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
          AI Automation & Orchestration
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Build resilient AI-powered automation systems at scale
        </p>
        
        <section className="prose prose-invert max-w-none">
          <h2>Why Intelligent Automation Matters</h2>
          <p>
            Modern enterprises need automation that's aware, adaptive, and integrated. 
            Our AI automation services deliver systems that learn and improve over time.
          </p>

          <h2>Our Automation Capabilities</h2>
          <ul>
            <li><strong>Process Discovery & Mapping</strong> - AI-powered workflow analysis to identify automation opportunities</li>
            <li><strong>Intelligent Workflows</strong> - AI-driven orchestration with human-in-the-loop escalation paths</li>
            <li><strong>RPA + AI Hybrid</strong> - Combine robotic process automation with AI for complex decision making</li>
            <li><strong>Agentic Workflows</strong> - Autonomous AI agents for multi-step business processes</li>
            <li><strong>Event-Driven Automation</strong> - Real-time triggers and reactions based on business events</li>
          </ul>

          <h2>Implementation Approach</h2>
          <ol>
            <li><strong>Discovery Phase</strong> - Map current processes and identify high-impact automation targets</li>
            <li><strong>Design Phase</strong> - Build resilient workflows with proper error handling and monitoring</li>
            <li><strong>Deployment Phase</strong> - Controlled rollout with observability and rollback capabilities</li>
            <li><strong>Optimization Phase</strong> - Continuous improvement through AI-driven insights</li>
          </ol>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Start a Project</h2>
            <p className="text-slate-300">Begin your automation journey with a discovery session.</p>
            <div className="mt-4">
              <Link href="/contact/" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 inline-block">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">View All Services</h2>
            <p className="text-slate-300">Explore our complete service catalog.</p>
            <Link
              href="/services/"
              className="mt-4 inline-block rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Our Services
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}