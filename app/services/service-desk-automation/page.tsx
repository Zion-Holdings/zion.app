import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Service Desk & IT Support | Zion Tech Group",
  description: "AI-powered IT service desk that automates ticket classification, routing, and resolution. Chatbot handles L1 requests automatically, escalates complex issues to human agents, and learns from resolved tickets.",
  openGraph: {
    title: "AI Service Desk & IT Support | Zion Tech Group",
    description: "AI-powered IT service desk that automates ticket classification, routing, and resolution. Chatbot handles L1 requests automatically, escalates complex issues to human agents, and learns from resolved tickets.",
    url: "https://ziontechgroup.com/services/service-desk-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/service-desk-automation/" },
};

export default function ServiceDeskAutomationPage() {
  return (
    <StandardPage
      title="AI Service Desk & IT Support"
      subtitle="AI-powered IT service desk that automates ticket classification, routing, and resolution. Chatbot handles L1 requests automatically, escalates complex issues to human agents, and learns from resolved tickets."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Service Desk & IT Support" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered IT service desk that automates ticket classification, routing, and resolution. Chatbot handles L1 requests automatically, escalates complex issues to human agents, and learns from resolved tickets.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607205254) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
