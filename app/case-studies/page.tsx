import Link from 'next/link';

export const metadata = {
  title: 'Case Studies',
  description: 'Real-world case studies showcasing how Zion Tech Group delivers AI and IT solutions across industries.',
};

export default function CaseStudiesPage() {
  const studies = [
    { industry: 'Healthcare', title: 'AI Diagnostics for Hospital Network', challenge: '10 hospitals with diagnostic delays and radiologist shortages.', solution: 'Deployed AI diagnostic imaging with 94% accuracy, reducing read times from 48h to 2h.', results: ['87% faster diagnosis', '30% better outcomes', '2.4M annual savings'], services: ['AI Medical Diagnosis', 'HL7/FHIR Integration', 'HIPAA Compliance'] },
    { industry: 'Financial Services', title: 'Fraud Detection for Regional Bank', challenge: 'High fraud losses across 200K accounts.', solution: 'Real-time ML fraud detection with behavioral analytics.', results: ['94% detection rate', 'Low false positives', '12M saved annually'], services: ['Fraud Detection AI', 'Real-time Analytics', 'SOC 2'] },
    { industry: 'E-Commerce', title: 'Personalization for Fashion Retailer', challenge: 'Low conversion rate and high cart abandonment.', solution: 'AI recommendation engine with dynamic pricing.', results: ['340% conversion increase', '28% higher AOV', '62% less abandonment'], services: ['AI Recommendations', 'Dynamic Pricing', 'Email Automation'] },
    { industry: 'Manufacturing', title: 'Predictive Maintenance for Auto Supplier', challenge: 'Significant unplanned downtime across 5 production lines.', solution: 'IoT sensor network with ML failure prediction.', results: ['73% downtime reduction', '99% prediction accuracy', 'Major cost savings'], services: ['Predictive Maintenance', 'IoT Integration', 'Digital Twin'] },
    { industry: 'Logistics', title: 'Route Optimization for 3PL Provider', challenge: 'High fuel costs and low on-time delivery rate.', solution: 'AI route optimization with real-time traffic and weather.', results: ['22% fuel savings', '96% on-time delivery', '18% more deliveries'], services: ['Route Optimization', 'Fleet Management', 'Real-time Tracking'] },
    { industry: 'Legal', title: 'Contract Intelligence for Law Firm', challenge: 'Manual contract review consuming 40+ hours per week.', solution: 'AI contract analyzer extracting clauses and risks automatically.', results: ['65% faster review', '99% clause detection', '4x throughput'], services: ['Legal Document AI', 'Contract Lifecycle', 'Risk Assessment'] },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Case Studies</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Real Results, <span className="text-purple-400">Real Impact</span></h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">See how Zion Tech Group helps organizations transform with AI and IT solutions.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {studies.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <span className="text-xs font-semibold text-purple-400 uppercase">{s.industry}</span>
              <h2 className="text-xl font-bold text-white mt-2 mb-3">{s.title}</h2>
              <div className="grid gap-4 sm:grid-cols-3 text-sm">
                <div><p className="text-red-400 font-semibold mb-1">Challenge</p><p className="text-slate-300">{s.challenge}</p></div>
                <div><p className="text-blue-400 font-semibold mb-1">Solution</p><p className="text-slate-300">{s.solution}</p></div>
                <div><p className="text-emerald-400 font-semibold mb-1">Results</p><ul className="text-slate-300 space-y-1">{s.results.map((r,j) => <li key={j}>{r}</li>)}</ul></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}
