import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Social Media Scheduler | Zion Tech Group",
  description: "Schedule and publish content across all major platforms. AI-powered optimal timing, hashtag suggestions, analytics dashboard, and team collaboration.",
  openGraph: {
    title: "Social Media Scheduler | Zion Tech Group",
    description: "Schedule and publish content across all major platforms. AI-powered optimal timing, hashtag suggestions, analytics dashboard, and team collaboration.",
    url: "https://ziontechgroup.com/services/social-media-scheduler/",
    type: 'website',
  },
  alternates: { canonical: "/services/social-media-scheduler/" },
};

export default function SocialMediaSchedulerPage() {
  return (
    <StandardPage
      title="Social Media Scheduler"
      subtitle="Schedule and publish content across all major platforms. AI-powered optimal timing, hashtag suggestions, analytics dashboard, and team collaboration."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Social Media Scheduler" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Schedule and publish content across all major platforms. AI-powered optimal timing, hashtag suggestions, analytics dashboard, and team collaboration.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607112001) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
