import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Contact Center Consulting | Zion Tech Group",
  description: "AI contact center consulting: strategy, vendor selection, automation roadmap, and managed implementation.",
  openGraph: {
    title: "AI Contact Center Consulting | Zion Tech Group",
    description: "AI contact center consulting: strategy, vendor selection, automation roadmap, and managed implementation.",
    url: "https://ziontechgroup.com/docs/ai-contact-center-consulting/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-contact-center-consulting/" },
};

export default function DocsAiContactCenterConsultingPage() {
  return (
    <StandardPage
      title="AI Contact Center Consulting"
      subtitle="AI contact center consulting: strategy, vendor selection, automation roadmap, and managed implementation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Contact Center Consulting" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI contact center consulting: strategy, vendor selection, automation roadmap, and managed implementation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
