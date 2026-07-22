import Link from 'next/link';

export const metadata = {
  title: 'Free AI & IT Tools | Zion Tech Group',
  description: 'Access free AI tools, IT automation utilities, health checks, and readiness audits for IT managers and MSPs.',
};

export default function FreeToolsHubPage() {
  const toolCategories = [
    {
      title: 'AI & Support',
      icon: '🤖',
      tools: [
        { name: 'AI Code Review Assistant', desc: 'Paste code for instant review of security, performance, and style risks.', href: '/tools/ai-code-review', status: 'live' },
        { name: 'AI Support Triage', desc: 'Paste an incident to get severity, likely causes, and remediation steps.', href: '/tools/ai-support-triage', status: 'live' },
        { name: 'AI Content Generator', desc: 'Turn a topic and audience into a content outline.', href: '/tools/ai-content-generator', status: 'live' },
        { name: 'AI Image Alt Writer', desc: 'Generate short and long alt text from image descriptions.', href: '/tools/ai-image-alt-writer', status: 'live' },
      ],
    },
    {
      title: 'Operations',
      icon: '📋',
      tools: [
        { name: 'Incident Postmortem', desc: 'Generate a lightweight postmortem draft from incident inputs.', href: '/tools/incident-postmortem', status: 'live' },
        { name: 'Incident Timeline Builder', desc: 'Build a clear incident timeline from timestamped events.', href: '/tools/incident-timeline-builder', status: 'live' },
        { name: 'Incident Severity Calculator', desc: 'Calculate reproducible incident severity from impact dimensions.', href: '/tools/incident-severity-calculator', status: 'live' },
        { name: 'Change Risk Analyzer', desc: 'Estimate deployment change risk from scope, blast radius, and readiness controls.', href: '/tools/change-risk-analyzer', status: 'live' },
      ],
    },
    {
      title: 'Cloud & Cost',
      icon: '☁️',
      tools: [
        { name: 'Cloud Cost Estimator', desc: 'Compare estimated AWS/GCP/Azure spend and optimization tips.', href: '/tools/cloud-cost-estimator', status: 'live' },
        { name: 'Tech Stack Recommender', desc: 'Get a curated modern stack recommendation by project profile.', href: '/tools/tech-stack-recommender', status: 'live' },
      ],
    },
    {
      title: 'DevOps & Config',
      icon: '⚙️',
      tools: [
        { name: 'Command Generator', desc: 'Describe a goal and get likely CLI commands for common platforms.', href: '/tools/command-generator', status: 'live' },
        { name: 'Docker Compose Generator', desc: 'Generate a basic docker-compose skeleton for app + database services.', href: '/tools/docker-compose-generator', status: 'live' },
        { name: 'Config Validator', desc: 'Paste a YAML-like config and get basic sanity checks.', href: '/tools/config-validator', status: 'live' },
        { name: 'Markdown Table Generator', desc: 'Paste CSV-like text and generate a markdown table.', href: '/tools/markdown-table-generator', status: 'live' },
        { name: 'HTTP Status Reference', desc: 'Quick lookup for HTTP status codes with meanings and common causes.', href: '/tools/http-status-reference', status: 'live' },
        { name: 'Release Notes Generator', desc: 'Paste change items and generate clean user-facing release notes.', href: '/tools/release-notes-generator', status: 'live' },
      ],
    },
    {
      title: 'Security & Verification',
      icon: '🔒',
      tools: [
        { name: 'JWT Inspector', desc: 'Decode JWT headers, payloads, and inspect claims locally.', href: '/tools/jwt-inspector', status: 'live' },
        { name: 'Phishing Email Analyzer', desc: 'Analyze suspicious emails for header issues and indicators of compromise.', href: '/tools/phishing-analyzer', status: 'live' },
      ],
    },
    {
      title: 'HR & Readiness',
      icon: '📋',
      tools: [
        { name: 'Resume Screener', desc: 'Compare a resume to a job description and get a match score.', href: '/tools/resume-screener', status: 'live' },
        { name: 'Onboarding Checklist', desc: 'Generate a practical new hire checklist from role inputs.', href: '/tools/onboarding-checklist', status: 'live' },
        { name: 'AI Readiness Audit', desc: 'Assess organizational AI maturity and get a prioritized roadmap.', href: '/tools/ai-readiness-audit', status: 'live' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-400">Free Resources</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Free AI & IT Tools</h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">Practical utilities built by engineers for engineers. No sign-up, no limits, no telemetry.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/tools/ai-readiness-audit" className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500 transition-colors">Start AI Readiness Audit</Link>
              <Link href="/free-tools" className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-purple-500 transition-colors">Browse all tools</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {toolCategories.map((cat, catIdx) => (
            <div key={cat.title} className="mb-16">
              <div className="mb-8 flex items-center gap-3">
                <span className="text-3xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold text-white">{cat.title}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.tools.map((tool, toolIdx) => (
                  <Link key={tool.name} href={tool.href} className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="mb-3 flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{tool.name}</h3>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${tool.status === 'live' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>{tool.status === 'live' ? 'Live' : 'Beta'}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">{tool.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                      <span>Open tool</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Want the Source Code?</h2>
          <p className="mb-8 text-slate-300">Every tool is open-source under MIT. Fork, customize, self-host, or contribute improvements.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="https://github.com/Zion-support/zion-support.github.io/tree/main/app/tools" className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-purple-500 transition-colors" target="_blank" rel="noopener noreferrer">View on GitHub</Link>
            <Link href="/contact" className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500 transition-colors">Request a tool</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
