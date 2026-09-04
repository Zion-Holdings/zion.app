import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Subscribe | Zion Tech Group",
  description: "Explore Subscribe for AI, IT, and automation services.",
  openGraph: {
    title: "Subscribe | Zion Tech Group",
    description: "Explore Subscribe for AI, IT, and automation services.",
    url: "https://ziontechgroup.com/docs/subscribe/",
    type: 'website',
  },
  alternates: { canonical: "/docs/subscribe/" },
};

export default function DocsSubscribePage() {
  return (
    <StandardPage
      title="Subscribe"
      subtitle="Explore Subscribe for AI, IT, and automation services."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Subscribe" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Explore Subscribe for AI, IT, and automation services.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
