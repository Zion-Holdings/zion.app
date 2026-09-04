import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Digital Experience Monitoring (DEM) | Zion Tech Group",
  description: "End-user experience monitoring platform that tracks application performance from the user's perspective. Synthetic monitoring, real user monitoring (RUM), and session replay combined with AI-powered root cause analysis.",
  openGraph: {
    title: "Digital Experience Monitoring (DEM) | Zion Tech Group",
    description: "End-user experience monitoring platform that tracks application performance from the user's perspective. Synthetic monitoring, real user monitoring (RUM), and session replay combined with AI-powered root cause analysis.",
    url: "https://ziontechgroup.com/services/digital-experience-monitoring/",
    type: 'website',
  },
  alternates: { canonical: "/services/digital-experience-monitoring/" },
};

export default function DigitalExperienceMonitoringPage() {
  return (
    <StandardPage
      title="Digital Experience Monitoring (DEM)"
      subtitle="End-user experience monitoring platform that tracks application performance from the user's perspective. Synthetic monitoring, real user monitoring (RUM), and session replay combined with AI-powered root cause analysis."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Digital Experience Monitoring (DEM)" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">End-user experience monitoring platform that tracks application performance from the user&#x27;s perspective. Synthetic monitoring, real user monitoring (RUM), and session replay combined with AI-powered root cause analysis.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607200253) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
