import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Social Media Scheduler Pro | Zion Tech Group",
  description: "Multi-platform social media scheduling with AI content suggestions, analytics, and team collaboration.",
  openGraph: {
    title: "Social Media Scheduler Pro | Zion Tech Group",
    description: "Multi-platform social media scheduling with AI content suggestions, analytics, and team collaboration.",
    url: "https://ziontechgroup.com/services/microsaas-social-media-scheduler/",
    type: 'website',
  },
  alternates: { canonical: "/services/microsaas-social-media-scheduler/" },
};

export default function MicrosaasSocialMediaSchedulerPage() {
  return (
    <StandardPage
      title="Social Media Scheduler Pro"
      subtitle="Multi-platform social media scheduling with AI content suggestions, analytics, and team collaboration."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Social Media Scheduler Pro" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Multi-platform social media scheduling with AI content suggestions, analytics, and team collaboration.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607204537) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
