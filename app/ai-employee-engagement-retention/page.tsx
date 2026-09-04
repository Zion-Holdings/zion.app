import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Employee Engagement Retention | Zion Tech Group",
  description: "Zion Tech Group employee engagement retention services for IT teams and enterprises.",
  openGraph: {
    title: "Employee Engagement Retention | Zion Tech Group",
    description: "Zion Tech Group employee engagement retention services for IT teams and enterprises.",
    url: "https://ziontechgroup.com/ai-employee-engagement-retention/",
    type: 'website',
  },
  alternates: { canonical: "/ai-employee-engagement-retention/" },
};

export default function AiEmployeeEngagementRetentionPage() {
  return (
    <StandardPage
      title="Employee Engagement Retention"
      subtitle="Zion Tech Group employee engagement retention services for IT teams and enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Employee Engagement Retention" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zion Tech Group employee engagement retention services for IT teams and enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
