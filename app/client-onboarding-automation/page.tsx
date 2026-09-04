import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Client Onboarding Automation | Zion Tech Group",
  description: "Automate client onboarding automation with Zion Tech Group. Increase recurring revenue and reduce manual work with proven IT automation systems.",
  openGraph: {
    title: "Client Onboarding Automation | Zion Tech Group",
    description: "Automate client onboarding automation with Zion Tech Group. Increase recurring revenue and reduce manual work with proven IT automation systems.",
    url: "https://ziontechgroup.com/client-onboarding-automation/",
    type: 'website',
  },
  alternates: { canonical: "/client-onboarding-automation/" },
};

export default function ClientOnboardingAutomationPage() {
  return (
    <StandardPage
      title="Client Onboarding Automation"
      subtitle="Automate client onboarding automation with Zion Tech Group. Increase recurring revenue and reduce manual work with proven IT automation systems."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Client Onboarding Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate client onboarding automation with Zion Tech Group. Increase recurring revenue and reduce manual work with proven IT automation systems.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
