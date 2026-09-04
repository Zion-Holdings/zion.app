import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Success Stories | Zion Tech Group",
  description: "Zion Tech Group success stories: AI automation, SOC modernization, cloud cost optimization, and staff augmentation results.",
  openGraph: {
    title: "Success Stories | Zion Tech Group",
    description: "Zion Tech Group success stories: AI automation, SOC modernization, cloud cost optimization, and staff augmentation results.",
    url: "https://ziontechgroup.com/docs/success-stories/",
    type: 'website',
  },
  alternates: { canonical: "/docs/success-stories/" },
};

export default function DocsSuccessStoriesPage() {
  return (
    <StandardPage
      title="Success Stories"
      subtitle="Zion Tech Group success stories: AI automation, SOC modernization, cloud cost optimization, and staff augmentation results."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Success Stories" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion Tech Group success stories: AI automation, SOC modernization, cloud cost optimization, and staff augmentation results.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
