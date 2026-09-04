import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai Devops Automation | Zion Tech Group",
  description: "Professional ai devops automation services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.",
  openGraph: {
    title: "Ai Devops Automation | Zion Tech Group",
    description: "Professional ai devops automation services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.",
    url: "https://ziontechgroup.com/ai-devops-automation/",
    type: 'website',
  },
  alternates: { canonical: "/ai-devops-automation/" },
};

export default function AiDevopsAutomationPage() {
  return (
    <StandardPage
      title="Ai Devops Automation"
      subtitle="Professional ai devops automation services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Devops Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Professional ai devops automation services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
