import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Robotic Process Automation (RPA) Platform | Zion Tech Group",
  description: "Enterprise RPA platform that automates repetitive business processes using software robots. No-code bot builder, AI-powered document understanding, and centralized bot orchestration with monitoring.",
  openGraph: {
    title: "Robotic Process Automation (RPA) Platform | Zion Tech Group",
    description: "Enterprise RPA platform that automates repetitive business processes using software robots. No-code bot builder, AI-powered document understanding, and centralized bot orchestration with monitoring.",
    url: "https://ziontechgroup.com/services/robotic-process-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/robotic-process-automation/" },
};

export default function RoboticProcessAutomationPage() {
  return (
    <StandardPage
      title="Robotic Process Automation (RPA) Platform"
      subtitle="Enterprise RPA platform that automates repetitive business processes using software robots. No-code bot builder, AI-powered document understanding, and centralized bot orchestration with monitoring."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Robotic Process Automation (RPA) Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Enterprise RPA platform that automates repetitive business processes using software robots. No-code bot builder, AI-powered document understanding, and centralized bot orchestration with monitoring.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607193241) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
