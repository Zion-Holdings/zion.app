import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "MenuBuilder - Digital Menu Creator | Zion Tech Group",
  description: "Create digital menus: QR code menus, online ordering, daily specials. For restaurants.",
  openGraph: {
    title: "MenuBuilder - Digital Menu Creator | Zion Tech Group",
    description: "Create digital menus: QR code menus, online ordering, daily specials. For restaurants.",
    url: "https://ziontechgroup.com/services/w179-menu-builder/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-menu-builder/" },
};

export default function W179MenuBuilderPage() {
  return (
    <StandardPage
      title="MenuBuilder - Digital Menu Creator"
      subtitle="Create digital menus: QR code menus, online ordering, daily specials. For restaurants."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "MenuBuilder - Digital Menu Creator" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Create digital menus: QR code menus, online ordering, daily specials. For restaurants.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607101900) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
