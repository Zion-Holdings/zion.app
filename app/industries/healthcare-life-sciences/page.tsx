
import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Healthcare & Life Sciences | Zion Tech Group',
  description: 'AI medical diagnosis, drug discovery, patient scheduling, clinical data analytics, and HIPAA-compliant healthcare technology solutions.',
  keywords: 'healthcare AI, medical AI, drug discovery, clinical data analytics, HIPAA compliant, patient scheduling, healthcare automation',
  alternates: { canonical: '/industries/healthcare-life-sciences' },
};

const SERVICES = [
  {
    title: 'AI Medical Diagnosis Assistant',
    slug: '/services/ai-medical-diagnosis-assistant',
    description: 'AI-powered diagnostic assistance with differential diagnosis suggestions, medical image analysis, and clinical decision support. Reduces diagnostic errors by up to 30%.',
    icon: '🏥',
    category: 'ai',
    ROI: '30% error reduction'
  },
  {
    title: 'AI Drug Discovery & Molecular Design',
    slug: '/services/ai-drug-discovery',
    description: 'Generative AI for molecular design, compound screening, and drug discovery optimization. Accelerate research timelines by 50% with AI-assisted molecular modeling.',
    icon: '🧬',
    category: 'ai',
    ROI: '50% faster discovery'
  },
  {
    title: 'Clinical Data Analytics Platform',
    slug: '/services/clinical-data-analytics',
    description: 'HIPAA-compliant analytics for patient outcomes, clinical trial optimization, and population health management. Real-time insights with automated anomaly detection.',
    icon: '📊',
    category: 'data',
    ROI: 'Real-time analytics'
  },
  {
    title: 'AI Patient Scheduling & Resource Optimization',
    slug: '/services/ai-patient-scheduling',
    description: 'Intelligent appointment scheduling, bed management, and resource allocation. Reduce wait times by 40% and improve patient satisfaction.',
    icon: '📅',
    category: 'automation',
    ROI: '40% wait time reduction'
  },
  {
    title: 'Telemedicine Platform & AI Triage',
    slug: '/services/telemedicine-platform',
    description: 'AI-powered virtual care platform with symptom triage, prescription management, and remote patient monitoring. Scale telehealth capacity 3x.',
    icon: '🩺',
    category: 'ai',
    ROI: '3x capacity increase'
  },
  {
    title: 'Medical Imaging & Computer Vision',
    slug: '/services/ai-medical-imaging',
    description: 'AI-powered medical image analysis for radiology, pathology, and ophthalmology. Automated detection and measurement with 95% accuracy.',
    icon: '👁️',
    category: 'ai',
    ROI: '95% accuracy'
  },
];

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm mb-6">
              <span className="text-green-400">●</span> HIPAA-COMPLIANT AI HEALTHCARE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Healthcare & Life Sciences
              </span>{' '}
              <span className="text-white">AI Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI medical diagnosis, drug discovery, patient care automation, and HIPAA-compliant 
              healthcare technology platforms. Transform patient outcomes and accelerate research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">
                ⚡ Get HIPAA Assessment →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse Healthcare Services
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-1">30%</div>
                <div className="text-sm text-slate-400">Diagnostic Error Reduction</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-1">50%</div>
                <div className="text-sm text-slate-400">Faster Drug Discovery</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-blue-400 mb-1">40%</div>
                <div className="text-sm text-slate-400">Wait Time Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Solutions */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                AI-Powered Healthcare Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              HIPAA-compliant AI solutions for diagnosis, drug discovery, patient care, and clinical operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="text-xs text-cyan-400 font-medium">{service.ROI}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all"
            >
              View All Healthcare Services →
            </Link>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance CTA */}
      <section className="py-20">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              HIPAA-Compliant AI Innovation
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free HIPAA compliance assessment and healthcare technology roadmap. 
            Our AI agents ensure security, privacy, and regulatory compliance from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book HIPAA Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}