import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Project Time Tracker | Zion Tech Group",
  description: "Time tracking and project management for teams. Automatic time capture, project budgeting, client billing, and productivity analytics.",
  openGraph: {
    title: "Project Time Tracker | Zion Tech Group",
    description: "Time tracking and project management for teams. Automatic time capture, project budgeting, client billing, and productivity analytics.",
    url: "https://ziontechgroup.com/services/project-time-tracker/",
    type: 'website',
  },
  alternates: { canonical: "/services/project-time-tracker/" },
};

export default function ProjectTimeTrackerPage() {
  return (
    <StandardPage
      title="Project Time Tracker"
      subtitle="Time tracking and project management for teams. Automatic time capture, project budgeting, client billing, and productivity analytics."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Project Time Tracker" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Time tracking and project management for teams. Automatic time capture, project budgeting, client billing, and productivity analytics.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614132213) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
