import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Beta Services | Zion Tech Group",
  description: "Early access — refined based on user feedback",
  openGraph: {
    title: "Beta Services | Zion Tech Group",
    description: "Early access — refined based on user feedback",
    url: "https://ziontechgroup.com/services/stage/beta/",
    type: 'website',
  },
  alternates: { canonical: "/services/stage/beta/" },
};

export default function ServicesStageBetaPage() {
  return (
    <StandardPage
      title="Beta Services"
      subtitle="Early access — refined based on user feedback"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Stage", href: "/services/stage/" },
        { label: "Beta" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Early access — refined based on user feedback</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
