import PageWrapper from '@/components/PageWrapper';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Solutions for Healthcare & Life Sciences | Zion Tech Group',
  description: 'HIPAA-compliant AI for healthcare: medical imaging, clinical decision support, patient flow optimization, and drug discovery acceleration.',
  alternates: { canonical: '/industries/healthcare/' },
};

const solutions = [
  {
    title: 'Medical Imaging AI',
    desc: 'Deep-learning models for radiology, pathology, and dermatology — trained on de-identified data with full audit trails.',
    features: ['DICOM/PACS integration', 'FDA-partner model registry', 'Audit-ready MLOps', 'Edge inference (air-gapped)'],
  },
  {
    title: 'Clinical Decision Support',
    desc: 'Real-time recommendation engines that surface relevant patient history, guidelines, and alerting at the point of care.',
    features: ['EHR integration (FHIR)', 'Guideline-aware prompting', 'Risk stratification', 'Explainable AI traces'],
  },
  {
    title: 'Patient Flow Optimization',
    desc: 'Predictive scheduling and resource allocation to reduce wait times and improve bed turnover.',
    features: ['Demand prediction', 'Staffing optimization', 'Capacity forecasting', 'Real-time dashboards'],
  },
  {
    title: 'Drug Discovery Acceleration',
    desc: 'AI-driven compound screening and target identification to shorten the research cycle from years to months.',
    features: ['Molecule generation (GNN)', 'Target-protein interaction', 'ADMET prediction', 'Clinical-trial matching'],
  },
];

const complianceBadges = [
  'HIPAA Compliant',
  'SOC 2 Type II',
  'ISO 27001',
  'GDPR Ready',
  '21 CFR Part 11',
];

export default function HealthcareIndustryPage() {
  return (
    <PageWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              Industry • Healthcare & Life Sciences
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-3">
              AI for Healthcare — Precision, Privacy, and Patient Outcomes
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Zion Tech Group partners with hospitals, health systems, and life-sciences companies
              to deploy AI that accelerates discovery, improves clinical workflows, and delivers
              measurable patient-outcome gains — all under strict compliance frameworks.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-sm text-slate-400 mb-3">Compliance & Certifications:</p>
            <div className="flex flex-wrap gap-3">
              {complianceBadges.map((b) => (
                <span key={b} className="px-4 py-2 bg-emerald-900/20 border border-emerald-500/30 rounded-full text-xs text-emerald-300">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {solutions.map((sol) => (
              <div key={sol.title} className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-3">{sol.title}</h2>
                <p className="text-slate-300 mb-4">{sol.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-400">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/configurator/"
              className="inline-block btn-primary text-lg px-10 py-4"
            >
              ⚡ AI Readiness Assessment for Healthcare
            </Link>
          </div>
        </div>
      </PageWrapper>
  );
}
