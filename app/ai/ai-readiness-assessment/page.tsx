import Link from 'next/link';

export const metadata = {
  title: 'AI Readiness Assessment | Zion Tech Group',
  description: "Free AI readiness assessment to evaluate your organization's preparedness for AI adoption and transformation.",
  alternates: { canonical: '/ai/ai-readiness-assessment/' },
};

export default function AIReadinessAssessmentPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-20">
        <div className="container-page">
          <div className="mb-10">
            <Link href="/ai/" className="text-purple-400 hover:text-purple-300 text-sm mb-6 inline-block">← AI Solutions</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Readiness Assessment</h1>
            <p className="text-slate-300 text-lg">
              Evaluate your organization's preparedness for AI adoption with our comprehensive assessment framework.
            </p>
          </div>

          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">What We Assess</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Data Infrastructure</h3>
                  <p className="text-slate-400 text-sm">Quality, availability, and governance of your data assets.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Technical Maturity</h3>
                  <p className="text-slate-400 text-sm">Existing infrastructure, tools, and cloud readiness.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Talent & Skills</h3>
                  <p className="text-slate-400 text-sm">Team capabilities and upskilling requirements.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Use Case Alignment</h3>
                  <p className="text-slate-400 text-sm">Business problems suitable for AI solutions.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Change Management</h3>
                  <p className="text-slate-400 text-sm">Organizational readiness and adoption strategy.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Governance & Ethics</h3>
                  <p className="text-slate-400 text-sm">Compliance, security, and responsible AI practices.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Assessment Report Includes</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✓</span>
                <span>Roadmap with prioritized AI initiatives and timelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✓</span>
                <span>Gap analysis for data, talent, and technology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✓</span>
                <span>Risk assessment and mitigation strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✓</span>
                <span>ROI projections for recommended AI initiatives</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/ai/" className="btn-primary text-lg px-8 py-3">
              Get Your Free AI Readiness Audit →
            </Link>
          </div>
        </div>
      </main>
    </main>
  );
}
