import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "W178 Timesheet Lite | Zion Tech Group",
  description: "W178 Timesheet Lite from Zion Tech Group.",
  openGraph: {
    title: "W178 Timesheet Lite | Zion Tech Group",
    description: "W178 Timesheet Lite from Zion Tech Group.",
    url: "https://ziontechgroup.com/services/w178-timesheet-lite/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-timesheet-lite/" },
};

export default function W178TimesheetLitePage() {
  return (
    <StandardPage
      title="W178 Timesheet Lite"
      subtitle="W178 Timesheet Lite from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "W178 Timesheet Lite" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">W178 Timesheet Lite from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608114000) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
