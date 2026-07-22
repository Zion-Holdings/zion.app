import Link from 'next/link';

export const metadata = {
  title: 'Free AI & IT Tools | Zion Tech Group',
  description: 'Access free AI tools, IT automation scripts, health checks, and readiness audits for IT managers and MSPs.',
};

export default function FreeToolsHubPage() {
  const toolCategories = [
    {
      title: 'AI-Powered Utilities',
      icon: '🤖',
      tools: [
        { name: 'AI Code Review Assistant', desc: 'Paste code for instant AI review — security, performance, style.', href: '/tools/ai-code-review', status: 'live' },
        { name: 'Log Error Explainer', desc: 'Paste an error log; get plain-English root cause and fix steps.', href: '/tools/log-error-explainer', status: 'live' },
        { name: 'AI Support Triage', desc: 'Paste an incident; get severity, likely causes, and remediation steps.', href: '/tools/ai-support-triage', status: 'live' },
        { name: 'Incident Runbook Generator', desc: 'Describe a scenario; get a structured runbook with escalation paths.', href: '/tools/incident-runbook-generator', status: 'beta' },
      ],
    },
    {
      title: 'IT Health & Monitoring',
      icon: '📊',
      tools: [
        { name: 'System Health Check Script', desc: 'Cross-platform bash/Python script for CPU, disk, memory, services.', href: '/tools/health-check-script', status: 'live' },
        { name: 'SSL Certificate Checker', desc: 'Scan domains for expiry, chain validity, and TLS config issues.', href: '/tools/ssl-checker', status: 'live' },
        { name: 'Port & Service Scanner', desc: 'Fast TCP/UDP scan with service fingerprinting.', href: '/tools/port-scanner', status: 'live' },
        { name: 'DNS Propagation Checker', desc: 'Verify DNS records across global resolvers in seconds.', href: '/tools/dns-checker', status: 'live' },
        { name: 'Cron Job Validator', desc: 'Paste crontab; get syntax validation and next-run preview.', href: '/tools/cron-validator', status: 'live' },
        { name: 'Log Pattern Anomaly Detector', desc: 'Upload logs; detect unusual frequency spikes or new error types.', href: '/tools/log-anomaly-detector', status: 'beta' },
      ],
    },
    {
      title: 'Automation & Workflow',
      icon: '⚡',
      tools: [
        { name: 'Resume Screener', desc: 'Compare a resume to a job description and get a match score.', href: '/tools/resume-screener', status: 'live' },
        { name: 'Tech Stack Recommender', desc: 'Select project type and constraints; get a modern stack recommendation.', href: '/tools/tech-stack-recommender', status: 'live' },
      ],
    },
    {
      title: 'Security & Compliance',
      icon: '🔒',
      tools: [
        { name: 'Secrets Scanner', desc: 'Scan repos, Docker images, or pasted text for leaked secrets.', href: '/tools/secrets-scanner', status: 'live' },
        { name: 'IAM Policy Analyzer', desc: 'AWS/GCP/Azure policies → least-privilege recommendations.', href: '/tools/iam-analyzer', status: 'beta' },
        { name: 'CVE Impact Calculator', desc: 'Input CVE + your stack; get exploitability and blast radius.', href: '/tools/cve-calculator', status: 'live' },
        { name: 'Compliance Gap Mapper', desc: 'Select framework (SOC2, ISO27001, HIPAA); get control checklist.', href: '/tools/compliance-gapper', status: 'beta' },
        { name: 'Phishing Email Analyzer', desc: 'Forward suspicious email; get header analysis and IOCs.', href: '/tools/phishing-analyzer', status: 'live' },
      ],
    },
    {
      title: 'Readiness & Assessment',
      icon: '📋',
      tools: [
        { name: 'AI Readiness Audit', desc: '20-question assessment → maturity score + prioritized roadmap.', href: '/tools/ai-readiness-audit', status: 'live' },
        { name: 'Cloud Migration Readiness', desc: 'Score workloads on 7 dimensions; get migration wave plan.', href: '/tools/cloud-migration-readiness', status: 'live' },
        { name: 'DevOps Maturity Assessment', desc: 'DORA metrics questionnaire → benchmark + improvement backlog.', href: '/tools/devops-maturity', status: 'live' },
        { name: 'Incident Response Maturity', desc: 'NIST 800-61 aligned assessment with tabletop scenarios.', href: '/tools/ir-maturity', status: 'beta' },
        { name: 'Data Governance Scorecard', desc: 'Evaluate data quality, lineage, privacy, and ownership.', href: '/tools/data-governance-scorecard', status: 'beta' },
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
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">Production-grade utilities, scripts, and assessments — no sign-up, no limits, no telemetry. Built by engineers for engineers.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/tools/ai-readiness-audit" className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500 transition-colors">Start AI Readiness Audit</Link>
              <Link href="/tools/health-check-script" className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-purple-500 transition-colors">Download Health Check Script</Link>
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
            <Link href="/tools/contribute" className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500 transition-colors">Contribute a Tool</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
