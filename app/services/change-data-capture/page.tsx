import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Change Data Capture | Zion Tech Group",
  description: "Change Data Capture from Zion Tech Group.",
  openGraph: {
    title: "Change Data Capture | Zion Tech Group",
    description: "Change Data Capture from Zion Tech Group.",
    url: "https://ziontechgroup.com/services/change-data-capture/",
    type: 'website',
  },
  alternates: { canonical: "/services/change-data-capture/" },
};

export default function ChangeDataCapturePage() {
  return (
    <StandardPage
      title="Change Data Capture"
      subtitle="Change Data Capture from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Change Data Capture" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Change Data Capture from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614104006) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
