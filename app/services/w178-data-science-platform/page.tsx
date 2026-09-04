import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Data Science and ML Platform | Zion Tech Group",
  description: "Managed data science environment: Jupyter, GPU notebooks, experiment tracking, model deployment.",
  openGraph: {
    title: "Data Science and ML Platform | Zion Tech Group",
    description: "Managed data science environment: Jupyter, GPU notebooks, experiment tracking, model deployment.",
    url: "https://ziontechgroup.com/services/w178-data-science-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-data-science-platform/" },
};

export default function W178DataSciencePlatformPage() {
  return (
    <StandardPage
      title="Data Science and ML Platform"
      subtitle="Managed data science environment: Jupyter, GPU notebooks, experiment tracking, model deployment."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Data Science and ML Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Managed data science environment: Jupyter, GPU notebooks, experiment tracking, model deployment.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113332) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
