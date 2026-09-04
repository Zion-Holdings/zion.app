import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Employee Onboarding Platform | Zion Tech Group",
  description: "Automated employee onboarding with task tracking, document collection, and training workflows.",
  openGraph: {
    title: "Employee Onboarding Platform | Zion Tech Group",
    description: "Automated employee onboarding with task tracking, document collection, and training workflows.",
    url: "https://ziontechgroup.com/services/microsaas-employee-onboarding/",
    type: 'website',
  },
  alternates: { canonical: "/services/microsaas-employee-onboarding/" },
};

export default function MicrosaasEmployeeOnboardingPage() {
  return (
    <StandardPage
      title="Employee Onboarding Platform"
      subtitle="Automated employee onboarding with task tracking, document collection, and training workflows."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Employee Onboarding Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automated employee onboarding with task tracking, document collection, and training workflows.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607194948) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
