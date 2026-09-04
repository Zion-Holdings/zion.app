import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "IT Staff Augmentation | Zion Tech Group",
  description: "Scale your IT team with Zion",
  openGraph: {
    title: "IT Staff Augmentation | Zion Tech Group",
    description: "Scale your IT team with Zion",
    url: "https://ziontechgroup.com/docs/it-staff-augmentation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/it-staff-augmentation/" },
};

export default function DocsItStaffAugmentationPage() {
  return (
    <StandardPage
      title="IT Staff Augmentation"
      subtitle="Scale your IT team with Zion"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "It Staff Augmentation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Scale your IT team with Zion</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
