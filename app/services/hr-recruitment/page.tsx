import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "HR Recruitment Platform | Zion Tech Group",
  description: "End-to-end recruitment management. AI resume screening, interview scheduling, candidate scoring, offer management, and onboarding automation.",
  openGraph: {
    title: "HR Recruitment Platform | Zion Tech Group",
    description: "End-to-end recruitment management. AI resume screening, interview scheduling, candidate scoring, offer management, and onboarding automation.",
    url: "https://ziontechgroup.com/services/hr-recruitment/",
    type: 'website',
  },
  alternates: { canonical: "/services/hr-recruitment/" },
};

export default function HrRecruitmentPage() {
  return (
    <StandardPage
      title="HR Recruitment Platform"
      subtitle="End-to-end recruitment management. AI resume screening, interview scheduling, candidate scoring, offer management, and onboarding automation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "HR Recruitment Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">End-to-end recruitment management. AI resume screening, interview scheduling, candidate scoring, offer management, and onboarding automation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607115038) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
