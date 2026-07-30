// app/industries/healthcare-services/page.tsx
// SEO-optimized landing page for Healthcare IT & Life Sciences
'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { Stethoscope, Shield, FileText, TrendingUp, Calendar, Microscope, Users, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Healthcare IT & Life Sciences AI Solutions | Zion Tech Group',
  description: 'AI solutions for Healthcare IT and Life Sciences. Medical imaging, drug discovery, patient analytics, compliance automation, and telemedicine platforms. Transform healthcare delivery with AI.',
  keywords: 'healthcare IT, life sciences, medical AI, drug discovery, telemedicine, patient analytics, HIPAA compliance, medical imaging, clinical AI',
  alternates: {
    canonical: 'https://ziontechgroup.com/industries/healthcare-services',
  },
};

function HealthcareServicesContent() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalOrganization',
          name: 'Zion Tech Group - Healthcare IT Solutions',
          description: 'Enterprise AI solutions for Healthcare IT and Life Sciences including medical imaging, drug discovery, patient analytics, and telemedicine platforms.',
          url: 'https://ziontechgroup.com/industries/healthcare-services',
          medicalSpecialty: 'Health Informatics',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            countryName: 'USA',
          },
          sameAs: ['https://ziontechgroup.com/industries/healthcare-services'],
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900/20" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl" />

          <div className="container-page relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium mb-6">
                AI-Powered Healthcare Innovation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Revolutionizing{' '}
                <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Healthcare Delivery
                </span>{' '}
                with AI
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                From medical imaging and drug discovery to patient analytics and telemedicine platforms, our AI solutions transform clinical workflows and improve patient outcomes across the healthcare ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="/configurator/"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Get Your Custom Proposal
                </a>
                <a
                  href="tel:+13024640950"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  📞 Call: +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4">
          <div className="container-page">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
              Healthcare AI Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: 'HIPAA-Compliant', desc: 'Bank-level security with full compliance' },
                { icon: TrendingUp, title: '30% Faster Diagnosis', desc: 'AI-assisted medical imaging and analysis' },
                { icon: Calendar, title: 'Reduced Wait Times', desc: 'Optimize patient scheduling and flow' },
                { icon: Microscope, title: 'Drug Discovery AI', desc: 'Accelerate research with ML models' },
                { icon: FileText, title: 'Medical Documentation', desc: 'AI-powered clinical note generation' },
                { icon: Users, title: 'Patient 360°', desc: 'Unified patient records and insights' },
                { icon: ShieldCheck, title: 'Regulatory Automation', desc: 'Automated compliance monitoring' },
                { icon: Stethoscope, title: 'Clinical Decision Support', desc: 'AI recommendations at point-of-care' },
              ].map((b, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <b.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-slate-950/50">
          <div className="container-page">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
              Healthcare AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 'medical-imaging-ai', title: 'Medical Imaging AI', desc: 'AI-powered analysis of X-rays, MRIs, CT scans with 95% accuracy', price: 'From $5,999/mo' },
                { id: 'drug-discovery-platform', title: 'Drug Discovery AI', desc: 'ML models accelerate compound screening and clinical trial design', price: 'Contact us' },
                { id: 'telemedicine-platform', title: 'Telemedicine Platform', desc: 'AI-powered virtual care with diagnostics and triage', price: 'From $4,499/mo' },
                { id: 'patient-analytics', title: 'Patient Analytics', desc: 'Predictive models for readmission risk and treatment optimization', price: 'From $3,999/mo' },
                { id: 'clinical-documentation', title: 'Clinical Documentation', desc: 'AI-generated clinical notes from doctor-patient conversations', price: 'From $2,499/mo' },
                { id: 'hipaa-compliance-automation', title: 'HIPAA Compliance Automation', desc: 'Automated audit trails, monitoring, and reporting', price: 'From $2,999/mo' },
              ].map((s) => (
                <div key={s.id} className="glass-card flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{s.desc}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-300 text-sm font-medium">{s.price}</span>
                    </div>
                    <Link href={`/services/${s.id}`} className="text-sm text-purple-400 hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
          <div className="container-page text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Schedule a free consultation to see how our AI solutions can improve patient outcomes and reduce operational costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/kleber-ziontechgroup" className="btn-primary text-lg px-8 py-4">
                Book Free Consultation
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-8 py-4">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default function HealthcareServicesPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-slate-950">
        <div className="container-page py-20">
          <h1 className="text-4xl font-bold mb-8">Healthcare IT AI Solutions</h1>
          <p className="text-slate-400">Loading...</p>
        </div>
      </main>
    }>
      <HealthcareServicesContent />
    </Suspense>
  );
}