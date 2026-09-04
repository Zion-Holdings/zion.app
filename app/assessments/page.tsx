import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Assessments | Zion Tech Group",
  description: "AI-powered IT assessments and audits by Zion Tech Group",
  openGraph: {
    title: "Assessments | Zion Tech Group",
    description: "AI-powered IT assessments and audits by Zion Tech Group",
    url: "https://ziontechgroup.com/assessments/",
    type: 'website',
  },
  alternates: { canonical: "/assessments/" },
};

export default function AssessmentsPage() {
  return (
    <StandardPage
      title="Assessments"
      subtitle="AI-powered IT assessments and audits by Zion Tech Group"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Assessments" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered IT assessments and audits by Zion Tech Group</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
