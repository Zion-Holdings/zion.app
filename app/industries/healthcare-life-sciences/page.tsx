import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Healthcare & Life Sciences | Zion Tech Group',
  description: 'AI-powered healthcare and life sciences solutions including diagnostic assistance, drug discovery, clinical trial optimization, and hospital operations. HIPAA-compliant AI solutions for healthcare providers, pharmaceutical companies, and life sciences organizations.',
  keywords: 'healthcare AI, medical AI, drug discovery, clinical trials, hospital operations, HIPAA compliant, healthcare automation',
  alternates: { canonical: '/industries/healthcare-life-sciences' },
};

const HEALTHCARE_SERVICES = [
  {
    id: 'ai-healthcare-diagnosis',
    title: 'AI Healthcare Diagnostic Assistant',
    description: 'AI-powered diagnostic support for healthcare professionals. Analyzes medical images, patient data, and medical history to assist in accurate diagnosis with 95% accuracy.',
    features: [
      'Medical image analysis',
      'Patient data interpretation',
      'Differential diagnosis suggestions',
      'Medical history correlation',
      'Clinical decision support'
    ],
    roi: '30% faster diagnosis',
    stats: '95% accuracy, 24/7 availability',
    category: 'Healthcare AI'
  },
  {
    id: 'ai-drug-discovery',
    title: 'AI Drug Discovery & Molecular Design',
    description: 'Accelerate pharmaceutical research with AI-powered drug discovery. Predict molecular properties, design novel compounds, and reduce R&D costs by 40-60%.',
    features: [
      'Molecular property prediction',
      'Novel compound design',
      'ADMET prediction',
      'Target identification',
      'Lead optimization'
    ],
    roi: '50% faster drug discovery',
    stats: '1000x faster screening, 90% accuracy',
    category: 'Pharma AI'
  },
  {
    id: 'ai-clinical-trial-optimization',
    title: 'AI Clinical Trial Optimization Platform',
    description: 'Optimize clinical trial design, patient recruitment, and trial monitoring using predictive analytics and real-time data analysis.',
    features: [
      'Patient recruitment optimization',
      'Trial design simulation',
      'Real-time monitoring',
      'Adverse event prediction',
      'Site selection analytics'
    ],
    roi: '40% faster trial completion',
    stats: '60% better recruitment, 99% compliance',
    category: 'Clinical AI'
  },
  {
    id: 'ai-hospital-operations',
    title: 'AI Hospital Operations Optimization',
    description: 'Optimize hospital workflows, bed management, staff scheduling, and patient flow using predictive analytics and machine learning.',
    features: [
      'Bed management optimization',
      'Staff scheduling',
      'Patient flow prediction',
      'Resource allocation',
      'Emergency department optimization'
    ],
    roi: '25% operational cost reduction',
    stats: '30% better bed utilization, 99.9% uptime',
    category: 'Hospital AI'
  },
  {
    id: 'ai-telemedicine-platform',
    title: 'AI-Powered Telemedicine Platform',
    description: 'AI-driven virtual healthcare platform with symptom checking, triage recommendations, and remote patient monitoring. Reduce wait times by 50% and improve patient outcomes.',
    features: [
      'Symptom analysis',
      'Triage recommendations',
      'Remote monitoring',
      'Appointment scheduling',
      'Follow-up reminders'
    ],
    roi: '50% wait time reduction',
    stats: '99% uptime, 24/7 availability',
    category: 'Telehealth AI'
  }
];

export default function HealthcareLifeSciencesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* JSON-LD Structured Data for Healthcare */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Healthcare AI Solutions - Zion Tech Group',
            'description': 'AI-powered healthcare and life sciences solutions including diagnostic assistance, drug discovery, clinical trial optimization, and hospital operations. HIPAA-compliant AI solutions for healthcare providers, pharmaceutical companies, and life sciences organizations.',
            'url': 'https://ziontechgroup.com/industries/healthcare-life-sciences/',
            'mainEntity': [
              {
                '@type': 'Service',
                'name': 'AI Healthcare Diagnostic Assistant',
                'description': 'AI-powered diagnostic support with 95% accuracy for medical professionals',
                'category': 'Healthcare AI',
                'provider': {
                  '@type': 'Organization',
                  'name': 'Zion Tech Group',
                  'url': 'https://ziontechgroup.com'
                },
                'offers': {
                  '@type': 'Offer',
                  'priceCurrency': 'USD',
                  'price': '1999',
                  'description': 'HIPAA-compliant diagnostic AI platform'
                },
                'audience': {
                  '@type': 'Audience',
                  'audienceType': 'Healthcare providers, hospitals, clinics'
                }
              }
            ],
            'keywords': 'healthcare AI, medical AI, drug discovery, clinical trials, hospital automation, HIPAA compliant'
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm mb-6">
            <span className="text-green-400">●</span> HIPAA-Compliant Healthcare AI
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Healthcare & Life Sciences
            </span>{' '}
            <span className="text-white">AI Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform healthcare with AI-powered diagnostic assistance, drug discovery, 
            clinical trial optimization, and hospital operations — built for HIPAA compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              ⚡ Get Healthcare AI Assessment →
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-10 py-4">
              🛠️ Browse Healthcare Services
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
              <div className="text-2xl font-bold text-cyan-400 mb-1">95%</div>
              <div className="text-sm text-slate-400">Diagnostic Accuracy</div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400 mb-1">50%</div>
              <div className="text-sm text-slate-400">Faster Drug Discovery</div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
              <div className="text-2xl font-bold text-blue-400 mb-1">40%</div>
              <div className="text-sm text-slate-400">Trial Completion Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Healthcare AI Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Proven AI solutions for healthcare diagnostics, drug discovery, clinical trials, and hospital operations — trusted by healthcare organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {HEALTHCARE_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}/`}
                className="group rounded-2xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800/80 hover:border-blue-500/40 p-6 transition-all"
              >
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 mb-3 line-clamp-3">{service.description}</p>
                <div className="text-xs text-blue-400 font-medium">{service.stats}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all"
            >
              View All Healthcare Services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Transform Patient Care with AI
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free healthcare AI audit from our AI agents. Discover how AI can improve diagnosis accuracy, 
            accelerate drug discovery, and optimize hospital operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Healthcare Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}