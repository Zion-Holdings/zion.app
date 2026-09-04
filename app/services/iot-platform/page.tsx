import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "iot platform | Zion Tech Group",
  description: "iot platform — Zion Tech Group.",
  openGraph: {
    title: "iot platform | Zion Tech Group",
    description: "iot platform — Zion Tech Group.",
    url: "https://ziontechgroup.com/services/iot-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/iot-platform/" },
};

export default function ServicesIotPlatformPage() {
  return (
    <StandardPage
      title="iot platform"
      subtitle="iot platform — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Iot Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">iot platform — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
