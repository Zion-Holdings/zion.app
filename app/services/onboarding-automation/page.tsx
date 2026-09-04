import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Customer Onboarding Automation | Zion Tech Group",
  description: "Automate customer onboarding with guided workflows, email sequences, in-app walkthroughs, and progress tracking. Reduces time-to-value and churn.",
  openGraph: {
    title: "Customer Onboarding Automation | Zion Tech Group",
    description: "Automate customer onboarding with guided workflows, email sequences, in-app walkthroughs, and progress tracking. Reduces time-to-value and churn.",
    url: "https://ziontechgroup.com/services/onboarding-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/onboarding-automation/" },
};

export default function OnboardingAutomationPage() {
  return (
    <StandardPage
      title="Customer Onboarding Automation"
      subtitle="Automate customer onboarding with guided workflows, email sequences, in-app walkthroughs, and progress tracking. Reduces time-to-value and churn."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Customer Onboarding Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate customer onboarding with guided workflows, email sequences, in-app walkthroughs, and progress tracking. Reduces time-to-value and churn.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607202632) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
