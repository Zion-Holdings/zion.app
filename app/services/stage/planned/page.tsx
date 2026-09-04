import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Coming Soon Services | Zion Tech Group",
  description: "In the pipeline — scheduled for release",
  openGraph: {
    title: "Coming Soon Services | Zion Tech Group",
    description: "In the pipeline — scheduled for release",
    url: "https://ziontechgroup.com/services/stage/planned/",
    type: 'website',
  },
  alternates: { canonical: "/services/stage/planned/" },
};

export default function ServicesStagePlannedPage() {
  return (
    <StandardPage
      title="Coming Soon Services"
      subtitle="In the pipeline — scheduled for release"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Stage", href: "/services/stage/" },
        { label: "Planned" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">In the pipeline — scheduled for release</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
