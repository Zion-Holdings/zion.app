import Link from 'next/link';

export const metadata = {
  title: 'Free AI IT Tools | Zion Tech Group',
  description: 'Free AI IT tools for developers, sysadmins, and IT teams. Monitor, debug, and optimize your infrastructure with our suite of AI-powered tools.',
  keywords: ['AI IT tools', 'free tools', 'infrastructure', 'monitoring', 'Zion Tech Group'],
  authors: { name: 'Zion Tech Group' },
  openGraph: {
    title: 'Free AI IT Tools | Zion Tech Group',
    description: 'Free AI IT tools for developers, sysadmins, and IT teams.',
    url: 'https://ziontechgroup.com/free-ai-it-tools/',
    type: 'article',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: 'https://ziontechgroup.com/free-ai-it-tools/' },
};

export default function FreeAIToolsPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Free AI IT Tools' }
          ]} 
          className="mb-8" 
        />
        
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Free AI IT Tools
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            AI-powered tools for developers, sysadmins, and IT teams
          </p>
        </header>

        <section className="prose prose-invert max-w-none">
          <h2>Why AI-Powered IT Tools Matter</h2>
          <p>
            Modern IT teams face increasing pressure to maintain reliability while reducing costs. 
            Our free AI tools provide immediate value by automating routine tasks and providing 
            actionable insights.
          </p>

          <h2>Available Tools</h2>
          <ul>
            <li><strong>AI Code Review</strong> - Automated code quality and security analysis with fix suggestions</li>
            <li><strong>Infrastructure Monitor</strong> - Real-time system health insights and anomaly detection</li>
            <li><strong>Cost Optimizer</strong> - Cloud spend reduction recommendations with actionable alerts</li>
            <li><strong>Incident Triage</strong> - AI-powered issue classification, prioritization, and resolution guidance</li>
          </ul>

          <h2>Getting Started</h2>
          <p>
            All tools are free to use with no account required. Simply visit a tool and start using it immediately.
          </p>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Need Enterprise Solutions?</h2>
            <p className="text-slate-300">Get tailored AI solutions for your specific infrastructure challenges.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link 
                href="/contact/" 
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Explore Our Services</h2>
            <p className="text-slate-300">See how we can transform your IT operations.</p>
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