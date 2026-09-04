import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Patient No-Show Predictor | Zion Tech Group",
  description: "Predict patient no-shows: risk scoring, automated reminders, overbooking optimization.",
  openGraph: {
    title: "AI Patient No-Show Predictor | Zion Tech Group",
    description: "Predict patient no-shows: risk scoring, automated reminders, overbooking optimization.",
    url: "https://ziontechgroup.com/services/w178-ai-patient-no-show/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-ai-patient-no-show/" },
};

export default function W178AiPatientNoShowPage() {
  return (
    <StandardPage
      title="AI Patient No-Show Predictor"
      subtitle="Predict patient no-shows: risk scoring, automated reminders, overbooking optimization."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Patient No-Show Predictor" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Predict patient no-shows: risk scoring, automated reminders, overbooking optimization.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607103934) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
