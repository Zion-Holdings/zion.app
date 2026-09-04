import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Plane DevOps Project Management | Zion Tech Group",
  description: "Open-source alternative to Jira and Linear built for modern engineering teams. Combines issue tracking, sprint planning, cycle analytics, and release management in a blazing-fast interface with AI-powered workload balanc",
  openGraph: {
    title: "Plane DevOps Project Management | Zion Tech Group",
    description: "Open-source alternative to Jira and Linear built for modern engineering teams. Combines issue tracking, sprint planning, cycle analytics, and release management in a blazing-fast interface with AI-powered workload balanc",
    url: "https://ziontechgroup.com/services/devops-plane-project-management/",
    type: 'website',
  },
  alternates: { canonical: "/services/devops-plane-project-management/" },
};

export default function DevopsPlaneProjectManagementPage() {
  return (
    <StandardPage
      title="Plane DevOps Project Management"
      subtitle="Open-source alternative to Jira and Linear built for modern engineering teams. Combines issue tracking, sprint planning, cycle analytics, and release management in a blazing-fast interface with AI-powered workload balanc"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Plane DevOps Project Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Open-source alternative to Jira and Linear built for modern engineering teams. Combines issue tracking, sprint planning, cycle analytics, and release management in a blazing-fast interface with AI-powered workload balanc</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607114708) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
