'use client';

import Link from 'next/link';

export const metadata = {
  title: 'Healthcare AI Solutions | Zion Tech Group',
  description: 'AI-driven healthcare technology for patient care, drug discovery, medical imaging, and clinical operations. HIPAA-compliant solutions.',
};

const healthcareServices = [
  {
    id: 'ai-drug-discovery',
    title: 'AI Drug Discovery & Molecular Design',
    description: 'Accelerate pharmaceutical research with AI-powered molecular design, target prediction, and compound optimization.',
    icon: '🧬',
    href: '/services/ai-drug-discovery/',
    pricing: 'Custom',
    category: 'ai',
  },
  {
    id: 'ai-medical-imaging-analysis',
    title: 'Medical Imaging Analysis',
    description: 'Computer vision for radiology, pathology, and medical imaging with automated anomaly detection.',
    icon: '🩺',
    href: '/services/ai-medical-imaging-analysis',
    pricing: 'From $199/mo',
    category: 'ai',
  },
  {
    id: 'ai-clinical-trial-optimization',
    title: 'Clinical Trial Optimization',
    description: 'AI-powered patient recruitment, trial design, and outcome prediction for faster drug development.',
    icon: '🔬',
    href: '/services/ai-clinical-trial-optimization',
    pricing: 'Custom',
    category: 'ai',
  },
  {
    id: 'ai-patient-data-analytics',
    title: 'Patient Data Analytics',
    description: 'Predictive analytics for patient outcomes, readmission risk, and personalized treatment recommendations.',
    icon: '📊',
    href: '/services/ai-patient-data-analytics',
    pricing: 'From $149/mo',
    category: 'ai',
  },
  {
    id: 'ai-telemedicine-platform',
    title: 'AI Telemedicine Platform',
    description: 'Virtual care with AI triage, symptom analysis, and automated appointment scheduling.',
    icon: '📞',
    href: '/services/ai-telemedicine-platform',
    pricing: 'From $99/mo',
    category: 'ai',
  },
  {
    id: 'ai-healthcare-cost-management',
    title: 'Healthcare Cost Management',
    description: 'Reduce administrative costs and optimize resource allocation with AI-driven healthcare analytics.',
    icon: '💰',
    href: '/services/ai-healthcare-cost-management',
    pricing: 'Custom',
    category: 'ai',
  },
];

export default function HealthcareIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(236,72,153,0.15),rgba(165,130,250,0.12))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm mb-6">
            <span className="text-green-400">●</span> HIPAA-Compliant AI Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent">
              AI Solutions for Healthcare
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform patient care, accelerate research, and reduce costs with our HIPAA-compliant AI solutions. 
            From drug discovery to telemedicine, we build intelligent healthcare technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              📞 Get Healthcare Consultation
            </Link>
            <Link href="/services/?category=ai" className="btn-secondary text-lg px-8 py-4">
              🧠 View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950/30">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-pink-400">12+</div>
              <div className="text-sm text-slate-400 mt-1">Healthcare Services</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-emerald-400">HIPAA</div>
              <div className="text-sm text-slate-400 mt-1">Compliant</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-sm text-slate-400 mt-1">AI Monitoring</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-purple-400">99.9%</div>
              <div className="text-sm text-slate-400 mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Healthcare AI Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              AI-powered tools for drug discovery, medical imaging, clinical operations, and patient care.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareServices.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-purple-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-pink-500/20 text-pink-300 px-2 py-1 rounded">
                    {service.category === 'ai' ? 'AI Service' : 'Solution'}
                  </span>
                  <span className="text-xs text-slate-500">{service.pricing}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-950/30 rounded-t-3xl">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Healthcare AI?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built for healthcare professionals with security, compliance, and clinical accuracy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                title: 'HIPAA Compliant', 
                desc: 'Full data privacy and security compliance for patient information',
                icon: '🔒'
              },
              { 
                title: 'FDA-Ready', 
                desc: 'Solutions designed for regulatory approval and clinical validation',
                icon: '✅'
              },
              { 
                title: '24/7 Monitoring', 
                desc: 'Continuous AI performance monitoring and model updates',
                icon: '⏱️'
              },
              { 
                title: 'Clinical Accuracy', 
                desc: 'Validated against medical standards and peer-reviewed benchmarks',
                icon: '🩺'
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Healthcare?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your healthcare AI needs. We'll provide a custom proposal with implementation timeline and ROI projections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              📞 Book Healthcare Consultation
            </Link>
            <Link href="/request-proposal/" className="btn-secondary text-lg px-8 py-4">
              📋 Request Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}