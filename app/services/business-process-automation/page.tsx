import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Business Process Automation (BPA) Suite | Zion Tech Group",
  description: "Enterprise BPA platform that discovers, models, and automates complex business processes across departments. Combines workflow automation, document processing, and AI decision-making in one platform.",
  openGraph: {
    title: "Business Process Automation (BPA) Suite | Zion Tech Group",
    description: "Enterprise BPA platform that discovers, models, and automates complex business processes across departments. Combines workflow automation, document processing, and AI decision-making in one platform.",
    url: "https://ziontechgroup.com/services/business-process-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/business-process-automation/" },
};

export default function BusinessProcessAutomationPage() {
  return (
    <StandardPage
      title="Business Process Automation (BPA) Suite"
      subtitle="Enterprise BPA platform that discovers, models, and automates complex business processes across departments. Combines workflow automation, document processing, and AI decision-making in one platform."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Business Process Automation (BPA) Suite" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Business Process Automation (BPA) Suite</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Get Started</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">📊 ROI Calculator</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Your Current Operations</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Deployment Roadmap</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">1. Process Discovery</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Estimated timeline for Business Process Automation (BPA) Suite — adapt to your team size and complexity.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Robotic Process Automation with AI. Automate repetitive tasks across desktop, web, and legacy applications. No-code bot builder with computer vision.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">AI-powered workflow automation that goes beyond simple triggers. Understands context, makes decisions, and adapts processes in real-time.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Build AI copilots that embed in your employees workflow. Context-aware assistance in Slack, Teams, email, and browser with guardrails and knowledge grounding.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607200100) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
