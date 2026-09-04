import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "IT Consulting Services | Zion Tech Group",
  description: "IT consulting services: cloud migration, DevOps, security, data engineering, and AI implementation.",
  openGraph: {
    title: "IT Consulting Services | Zion Tech Group",
    description: "IT consulting services: cloud migration, DevOps, security, data engineering, and AI implementation.",
    url: "https://ziontechgroup.com/docs/it-consulting/",
    type: 'website',
  },
  alternates: { canonical: "/docs/it-consulting/" },
};

export default function DocsItConsultingPage() {
  return (
    <StandardPage
      title="IT Consulting Services"
      subtitle="IT consulting services: cloud migration, DevOps, security, data engineering, and AI implementation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "It Consulting" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">IT consulting services: cloud migration, DevOps, security, data engineering, and AI implementation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
