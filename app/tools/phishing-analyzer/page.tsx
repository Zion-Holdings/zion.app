---
name: phishing-analyzer
route: /tools/phishing-analyzer
description: Free phishing analyzer tool from Zion Tech Group — inspect links, headers, and risk signals instantly.
---

import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Phishing Analyzer | Zion Tech Group',
  description: 'Free phishing analyzer tool from Zion Tech Group. Inspect links, headers, and risk signals instantly.',
  openGraph: {
    title: 'Phishing Analyzer | Zion Tech Group',
    description: 'Free phishing analyzer tool from Zion Tech Group. Inspect links, headers, and risk signals instantly.',
    url: 'https://ziontechgroup.com/tools/phishing-analyzer',
    type: 'website',
  },
  alternates: { canonical: '/tools/phishing-analyzer/' },
};

export default function PhishingAnalyzerPage() {
  return (
    <StandardPage
      title="Phishing Analyzer"
      subtitle="Analyze emails and URLs for phishing indicators in seconds."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Phishing Analyzer' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">AI & Automation</h3>
          <p className="text-slate-400 text-sm">Deploy AI triage, knowledge-base assistants, and workflow automation.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">Cloud & DevOps</h3>
          <p className="text-slate-400 text-sm">Migrate workloads, tighten observability, and reduce cloud spend.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">Cybersecurity</h3>
          <p className="text-slate-400 text-sm">Penetration testing, identity flows, and incident-response playbooks.</p>
        </div>
      </div>
    </StandardPage>
  );
}
