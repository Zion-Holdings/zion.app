import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Cybersecurity For Msps Automation Roadmap — Zion Tech Group | Zion Tech Group",
  description: "Expert analysis and practical guidance on cybersecurity for msps automation roadmap for IT leaders, MSPs, and enterprise teams.",
  openGraph: {
    title: "Cybersecurity For Msps Automation Roadmap — Zion Tech Group | Zion Tech Group",
    description: "Expert analysis and practical guidance on cybersecurity for msps automation roadmap for IT leaders, MSPs, and enterprise teams.",
    url: "https://ziontechgroup.com/blog/cybersecurity-for-msps-automation-roadmap/",
    type: 'website',
  },
  alternates: { canonical: "/blog/cybersecurity-for-msps-automation-roadmap/" },
};

export default function BlogCybersecurityForMspsAutomationRoadmapPage() {
  return (
    <StandardPage
      title="Cybersecurity For Msps Automation Roadmap — Zion Tech Group"
      subtitle="Expert analysis and practical guidance on cybersecurity for msps automation roadmap for IT leaders, MSPs, and enterprise teams."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Cybersecurity For Msps Automation Roadmap" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Expert analysis and practical guidance on cybersecurity for msps automation roadmap for IT leaders, MSPs, and enterprise teams.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
