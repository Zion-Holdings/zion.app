import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Implementation FAQ | Zion Tech Group",
  description: "Answers to common questions about AI implementation, costs, timeline, ROI, and choosing the right AI solutions for your business.",
  openGraph: {
    title: "AI Implementation FAQ | Zion Tech Group",
    description: "Answers to common questions about AI implementation, costs, timeline, ROI, and choosing the right AI solutions for your business.",
    url: "https://ziontechgroup.com/docs/ai-faq/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-faq/" },
};

export default function DocsAiFaqPage() {
  return (
    <StandardPage
      title="AI Implementation FAQ"
      subtitle="Answers to common questions about AI implementation, costs, timeline, ROI, and choosing the right AI solutions for your business."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Faq" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Answers to common questions about AI implementation, costs, timeline, ROI, and choosing the right AI solutions for your business.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
