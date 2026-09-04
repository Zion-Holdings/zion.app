import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Digital Transformation Consulting | Zion Tech Group",
  description: "End-to-end digital transformation consulting: strategy, AI adoption, cloud migration, and change management.",
  openGraph: {
    title: "Digital Transformation Consulting | Zion Tech Group",
    description: "End-to-end digital transformation consulting: strategy, AI adoption, cloud migration, and change management.",
    url: "https://ziontechgroup.com/digital-transformation-consulting/",
    type: 'website',
  },
  alternates: { canonical: "/digital-transformation-consulting/" },
};

export default function DigitalTransformationConsultingPage() {
  return (
    <StandardPage
      title="Digital Transformation Consulting"
      subtitle="End-to-end digital transformation consulting: strategy, AI adoption, cloud migration, and change management."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Digital Transformation Consulting" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">End-to-end digital transformation consulting: strategy, AI adoption, cloud migration, and change management.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
