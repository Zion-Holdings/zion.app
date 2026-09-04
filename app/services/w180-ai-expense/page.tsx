import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Expense Report Auditor | Zion Tech Group",
  description: "Automate expense auditing: receipt verification, policy checking, duplicate detection.",
  openGraph: {
    title: "AI Expense Report Auditor | Zion Tech Group",
    description: "Automate expense auditing: receipt verification, policy checking, duplicate detection.",
    url: "https://ziontechgroup.com/services/w180-ai-expense/",
    type: 'website',
  },
  alternates: { canonical: "/services/w180-ai-expense/" },
};

export default function W180AiExpensePage() {
  return (
    <StandardPage
      title="AI Expense Report Auditor"
      subtitle="Automate expense auditing: receipt verification, policy checking, duplicate detection."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Expense Report Auditor" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate expense auditing: receipt verification, policy checking, duplicate detection.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607103753) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
