import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Clinical Trial Management Platform | Zion Tech Group",
  description: "Streamline clinical trials with AI-powered patient recruitment, site selection, and protocol optimization. Real-time monitoring, adverse event detection, and regulatory submission automation.",
  openGraph: {
    title: "AI Clinical Trial Management Platform | Zion Tech Group",
    description: "Streamline clinical trials with AI-powered patient recruitment, site selection, and protocol optimization. Real-time monitoring, adverse event detection, and regulatory submission automation.",
    url: "https://ziontechgroup.com/services/clinical-trial-management/",
    type: 'website',
  },
  alternates: { canonical: "/services/clinical-trial-management/" },
};

export default function ClinicalTrialManagementPage() {
  return (
    <StandardPage
      title="AI Clinical Trial Management Platform"
      subtitle="Streamline clinical trials with AI-powered patient recruitment, site selection, and protocol optimization. Real-time monitoring, adverse event detection, and regulatory submission automation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Clinical Trial Management Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">AI Clinical Trial Management Platform</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Get Started</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">📊 ROI Calculator</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Your Current Operations</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Deployment Roadmap</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">1. Requirements &amp; Design</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Estimated timeline for AI Clinical Trial Management Platform — adapt to your team size and complexity.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">HIPAA-compliant telehealth platform with video consultations, e-prescribing, patient scheduling, and integrated billing. Supports multi-provider practices.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Complete telehealth solution for healthcare providers with HD video consultations, e-prescribing, appointment scheduling, and integrated billing. HIPAA-compliant with EHR integration and patient portal.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">HL7 FHIR-compliant data integration platform that connects EHRs, labs, pharmacies, and medical devices. Real-time data exchange with patient identity matching and consent management.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607112056) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
