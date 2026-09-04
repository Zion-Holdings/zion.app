import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Social Media Command Center | Zion Tech Group",
  description: "Schedule, publish, and analyze across all social platforms from one dashboard. AI suggests optimal posting times, generates hashtag sets, and creates content calendars.",
  openGraph: {
    title: "Social Media Command Center | Zion Tech Group",
    description: "Schedule, publish, and analyze across all social platforms from one dashboard. AI suggests optimal posting times, generates hashtag sets, and creates content calendars.",
    url: "https://ziontechgroup.com/services/saas-social-scheduler/",
    type: 'website',
  },
  alternates: { canonical: "/services/saas-social-scheduler/" },
};

export default function SaasSocialSchedulerPage() {
  return (
    <StandardPage
      title="Social Media Command Center"
      subtitle="Schedule, publish, and analyze across all social platforms from one dashboard. AI suggests optimal posting times, generates hashtag sets, and creates content calendars."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Social Media Command Center" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Schedule, publish, and analyze across all social platforms from one dashboard. AI suggests optimal posting times, generates hashtag sets, and creates content calendars.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607115017) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
