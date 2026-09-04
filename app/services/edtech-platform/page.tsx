import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "EdTech Learning Platform | Zion Tech Group",
  description: "White-label online learning platform. Course builder, video hosting, quizzes, certificates, and student progress analytics. Supports SCORM and xAPI.",
  openGraph: {
    title: "EdTech Learning Platform | Zion Tech Group",
    description: "White-label online learning platform. Course builder, video hosting, quizzes, certificates, and student progress analytics. Supports SCORM and xAPI.",
    url: "https://ziontechgroup.com/services/edtech-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/edtech-platform/" },
};

export default function EdtechPlatformPage() {
  return (
    <StandardPage
      title="EdTech Learning Platform"
      subtitle="White-label online learning platform. Course builder, video hosting, quizzes, certificates, and student progress analytics. Supports SCORM and xAPI."
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
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">White-label online learning platform. Course builder, video hosting, quizzes, certificates, and student progress analytics. Supports SCORM and xAPI.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607200400) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
