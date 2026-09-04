import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Consulting Services | Zion Tech Group",
  description: "Strategic AI consulting for enterprises: adoption roadmaps, vendor selection, governance, and ROI modeling.",
  openGraph: {
    title: "AI Consulting Services | Zion Tech Group",
    description: "Strategic AI consulting for enterprises: adoption roadmaps, vendor selection, governance, and ROI modeling.",
    url: "https://ziontechgroup.com/docs/ai-consulting/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-consulting/" },
};

export default function DocsAiConsultingPage() {
  return (
    <StandardPage
      title="AI Consulting Services"
      subtitle="Strategic AI consulting for enterprises: adoption roadmaps, vendor selection, governance, and ROI modeling."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Consulting" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Strategic AI consulting for enterprises: adoption roadmaps, vendor selection, governance, and ROI modeling.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
