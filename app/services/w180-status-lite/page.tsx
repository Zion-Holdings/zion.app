import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "StatusLite \u2014 Service Status Page | Zion Tech Group",
  description: "Beautiful status pages: real-time monitoring, incident management.",
  openGraph: {
    title: "StatusLite \u2014 Service Status Page | Zion Tech Group",
    description: "Beautiful status pages: real-time monitoring, incident management.",
    url: "https://ziontechgroup.com/services/w180-status-lite/",
    type: 'website',
  },
  alternates: { canonical: "/services/w180-status-lite/" },
};

export default function W180StatusLitePage() {
  return (
    <StandardPage
      title="StatusLite \u2014 Service Status Page"
      subtitle="Beautiful status pages: real-time monitoring, incident management."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "StatusLite \u2014 Service Status Page" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Beautiful status pages: real-time monitoring, incident management.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113219) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
