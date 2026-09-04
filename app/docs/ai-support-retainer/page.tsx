import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Support Retainer | Zion Tech Group",
  description: "Zion Tech Group offers AI-powered support retainers for faster resolution, lower ticket volume, and higher customer satisfaction.",
  openGraph: {
    title: "AI Support Retainer | Zion Tech Group",
    description: "Zion Tech Group offers AI-powered support retainers for faster resolution, lower ticket volume, and higher customer satisfaction.",
    url: "https://ziontechgroup.com/docs/ai-support-retainer/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-support-retainer/" },
};

export default function DocsAiSupportRetainerPage() {
  return (
    <StandardPage
      title="AI Support Retainer"
      subtitle="Zion Tech Group offers AI-powered support retainers for faster resolution, lower ticket volume, and higher customer satisfaction."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Support Retainer" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group offers AI-powered support retainers for faster resolution, lower ticket volume, and higher customer satisfaction.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
