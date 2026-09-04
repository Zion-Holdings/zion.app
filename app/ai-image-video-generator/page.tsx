import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Image Video Generator | Zion Tech Group",
  description: "Zion Tech Group image video generator services for IT teams and enterprises.",
  openGraph: {
    title: "Image Video Generator | Zion Tech Group",
    description: "Zion Tech Group image video generator services for IT teams and enterprises.",
    url: "https://ziontechgroup.com/ai-image-video-generator/",
    type: 'website',
  },
  alternates: { canonical: "/ai-image-video-generator/" },
};

export default function AiImageVideoGeneratorPage() {
  return (
    <StandardPage
      title="Image Video Generator"
      subtitle="Zion Tech Group image video generator services for IT teams and enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Image Video Generator" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zion Tech Group image video generator services for IT teams and enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
