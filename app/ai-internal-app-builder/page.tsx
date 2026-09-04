import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Internal App Builder | Zion Tech Group",
  description: "Zion Tech Group internal app builder services for IT teams and enterprises.",
  openGraph: {
    title: "Internal App Builder | Zion Tech Group",
    description: "Zion Tech Group internal app builder services for IT teams and enterprises.",
    url: "https://ziontechgroup.com/ai-internal-app-builder/",
    type: 'website',
  },
  alternates: { canonical: "/ai-internal-app-builder/" },
};

export default function AiInternalAppBuilderPage() {
  return (
    <StandardPage
      title="Internal App Builder"
      subtitle="Zion Tech Group internal app builder services for IT teams and enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Internal App Builder" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zion Tech Group internal app builder services for IT teams and enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
