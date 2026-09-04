import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "EdTech Learning Platform | Zion Tech Group",
  description: "Modern LMS with AI personalization, gamification, and virtual classroom capabilities.",
  openGraph: {
    title: "EdTech Learning Platform | Zion Tech Group",
    description: "Modern LMS with AI personalization, gamification, and virtual classroom capabilities.",
    url: "https://ziontechgroup.com/services/it-edtech-learning-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/it-edtech-learning-platform/" },
};

export default function ItEdtechLearningPlatformPage() {
  return (
    <StandardPage
      title="EdTech Learning Platform"
      subtitle="Modern LMS with AI personalization, gamification, and virtual classroom capabilities."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "EdTech Learning Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Modern LMS with AI personalization, gamification, and virtual classroom capabilities.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614140119) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
