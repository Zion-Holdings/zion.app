import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "It Staff Augmentation | Zion Tech Group",
  description: "Professional it staff augmentation services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.",
  openGraph: {
    title: "It Staff Augmentation | Zion Tech Group",
    description: "Professional it staff augmentation services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.",
    url: "https://ziontechgroup.com/it-staff-augmentation/",
    type: 'website',
  },
  alternates: { canonical: "/it-staff-augmentation/" },
};

export default function ItStaffAugmentationPage() {
  return (
    <StandardPage
      title="It Staff Augmentation"
      subtitle="Professional it staff augmentation services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "It Staff Augmentation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Professional it staff augmentation services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
