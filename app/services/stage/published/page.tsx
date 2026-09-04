import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Published Services | Zion Tech Group",
  description: "Live production services available now",
  openGraph: {
    title: "Published Services | Zion Tech Group",
    description: "Live production services available now",
    url: "https://ziontechgroup.com/services/stage/published/",
    type: 'website',
  },
  alternates: { canonical: "/services/stage/published/" },
};

export default function ServicesStagePublishedPage() {
  return (
    <StandardPage
      title="Published Services"
      subtitle="Live production services available now"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Stage", href: "/services/stage/" },
        { label: "Published" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Live production services available now</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
