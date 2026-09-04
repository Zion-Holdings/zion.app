import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Learning Management System (LMS) | Zion Tech Group",
  description: "Manage training: course creation, delivery, tracking, compliance. SCORM and xAPI compliant.",
  openGraph: {
    title: "Learning Management System (LMS) | Zion Tech Group",
    description: "Manage training: course creation, delivery, tracking, compliance. SCORM and xAPI compliant.",
    url: "https://ziontechgroup.com/services/w178-learning-mgmt-system/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-learning-mgmt-system/" },
};

export default function W178LearningMgmtSystemPage() {
  return (
    <StandardPage
      title="Learning Management System (LMS)"
      subtitle="Manage training: course creation, delivery, tracking, compliance. SCORM and xAPI compliant."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Learning Management System (LMS)" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Manage training: course creation, delivery, tracking, compliance. SCORM and xAPI compliant.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607103038) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
