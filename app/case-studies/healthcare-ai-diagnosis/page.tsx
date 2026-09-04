import Link from 'next/link';

export const metadata = {
  title: 'AI-Powered Medical Diagnosis Platform | Healthcare AI Case Study',
  description: 'Case study: How Zion Tech Group implemented AI-powered medical diagnosis for healthcare clients, achieving 40% faster diagnosis and 25% reduction in misdiagnosis.',
  keywords: 'healthcare AI, medical diagnosis, case study, AI implementation, healthcare technology',
};

export default function HealthcareAIDiagnosisCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CaseStudy',
            name: 'AI-Powered Medical Diagnosis Platform',
            description: 'How Zion Tech Group implemented AI diagnostic assistance achieving 40% faster diagnosis and 25% reduction in misdiagnosis.',
            author: {
              '@type': 'Organization',
              name: 'Zion Tech Group'
            },
            datePublished: '2026-07-27',
            industry: 'Healthcare',
            totalTime: 'P12W'
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto">
            <Link href="/case-studies" className="text-purple-400 hover:underline text-sm mb-6 inline-block">
              ← Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Medical Diagnosis Platform
              </span>
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300">Healthcare</span>
              <span className="text-slate-400 text-sm">📅 12 weeks</span>
            </div>
            <p className="text-xl text-slate-300 mb-8">
              AI diagnostic assistance with machine learning models trained on 10M+ medical records, providing real-time differential diagnosis suggestions with confidence scoring.
            </p>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Key Results
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">40%</div>
              <div className="text-slate-300 text-sm">Faster Diagnosis</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">25%</div>
              <div className="text-slate-300 text-sm">Misdiagnosis Reduction</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-slate-300 text-sm">Cost Savings</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">95%</div>
              <div className="text-slate-300 text-sm">Diagnostic Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-8">
              <p className="text-slate-300">
                Manual diagnosis processes were slow and error-prone, leading to delayed patient care and potential misdiagnosis. 
                Healthcare providers relied on physician expertise alone, with average diagnosis times of 2-4 hours per case. 
                The traditional approach resulted in inconsistent results and high cognitive load on medical staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-8">
              <p className="text-slate-300 mb-4">
                We deployed an AI diagnostic assistance platform using machine learning models trained on 10M+ medical records. 
                The system provides real-time differential diagnosis suggestions with confidence scoring and evidence-based recommendations.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">Key Technologies:</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">•</span> Machine Learning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">•</span> Computer Vision
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">•</span> Natural Language Processing
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Features:</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">•</span> Real-time Analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">•</span> Differential Diagnosis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">•</span> Confidence Scoring
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
            <div className="bg-gradient-to-r from-emerald-900/20 via-cyan-900/20 to-purple-900/20 border border-emerald-500/20 rounded-2xl p-6 mb-8">
              <p className="text-slate-300 mb-4">
                The AI-powered medical diagnosis platform transformed the healthcare provider's diagnostic capabilities, 
                delivering measurable improvements across all key metrics.
              </p>
              <blockquote className="text-slate-200 italic mb-4 p-4 border-l-4 border-purple-500/40 bg-slate-900/40">
                "The AI diagnostic assistant has revolutionized our clinical workflow. 
                We're seeing faster, more accurate diagnoses and patients are getting the care they need sooner."
              </blockquote>
              <p className="text-slate-300 text-sm">— Dr. Maria Santos, Chief Medical Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-emerald-900/20 to-cyan-900/20">
        <div className="container-page max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready for Healthcare AI Solutions?
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get AI solutions tailored for healthcare. HIPAA-compliant, secure, and designed for real medical practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary text-lg px-10 py-4">
              🏥 Browse Healthcare Services
            </Link>
            <a href="tel:+13024640950" className="btn-secondary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}