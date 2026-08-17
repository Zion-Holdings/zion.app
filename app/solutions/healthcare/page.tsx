import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Healthcare & Life Sciences | Zion Tech Group',
  description: 'AI and IT solutions for healthcare. Medical imaging, clinical decision support, EHR integration, telemedicine, HIPAA compliance.',
  alternates: { canonical: '/solutions/healthcare' },
};

const services = [
  { icon: '🧠', name: 'AI Medical Diagnosis Assistant', href: '/ai-medical-diagnosis-assistant', desc: 'AI-powered clinical decision support with 94% diagnostic accuracy.' },
  { icon: '📊', name: 'Healthcare Analytics', href: '/data-analytics-bi', desc: 'Patient outcome prediction, resource optimization, population health analytics.' },
  { icon: '☁️', name: 'Cloud Healthcare Infrastructure', href: '/cloud-infrastructure', desc: 'HIPAA-compliant cloud infrastructure for healthcare organizations.' },
  { icon: '🔒', name: 'Healthcare Cybersecurity', href: '/cybersecurity', desc: 'HIPAA-compliant security monitoring, data protection, and incident response.' },
  { icon: '📱', name: 'Telemedicine Platform', href: '/telemedicine', desc: 'Video consultations, patient scheduling, and remote monitoring.' },
  { icon: '📋', name: 'EHR Integration', href: '/ai-smart-invoice', desc: 'Seamless EHR/EMR integration with HL7 FHIR standards.' },
];

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <PageWrapper>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Healthcare</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Healthcare & Life Sciences</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            AI-powered solutions for hospitals, clinics, pharma, and life sciences. HIPAA compliant, clinically validated.
          </p>
        </div>
      </PageWrapper>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link key={i} href={s.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{s.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="accent">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need Custom Healthcare Solutions?</h2>
          <p className="text-slate-300 mb-6">Our team has deep expertise in healthcare IT, HIPAA compliance, and clinical workflows.</p>
          <Link href="/consultation" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white">Schedule a Consultation</Link>
        </div>
      </Section>
    </main>
  );
}