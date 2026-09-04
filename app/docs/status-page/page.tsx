import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Status Page | Zion Tech Group",
  description: "Current system status and uptime for Zion Tech Group services.",
  openGraph: {
    title: "Status Page | Zion Tech Group",
    description: "Current system status and uptime for Zion Tech Group services.",
    url: "https://ziontechgroup.com/docs/status-page/",
    type: 'website',
  },
  alternates: { canonical: "/docs/status-page/" },
};

export default function DocsStatusPagePage() {
  return (
    <StandardPage
      title="Status Page"
      subtitle="Current system status and uptime for Zion Tech Group services."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Status Page" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Current system status and uptime for Zion Tech Group services.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
