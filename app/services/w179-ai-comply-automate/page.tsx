import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Compliance Automation | Zion Tech Group",
  description: "Automate regulatory compliance: change monitoring, control testing, evidence collection.",
  openGraph: {
    title: "AI Compliance Automation | Zion Tech Group",
    description: "Automate regulatory compliance: change monitoring, control testing, evidence collection.",
    url: "https://ziontechgroup.com/services/w179-ai-comply-automate/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-ai-comply-automate/" },
};

export default function W179AiComplyAutomatePage() {
  return (
    <StandardPage
      title="AI Compliance Automation"
      subtitle="Automate regulatory compliance: change monitoring, control testing, evidence collection."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Compliance Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate regulatory compliance: change monitoring, control testing, evidence collection.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608112016) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
