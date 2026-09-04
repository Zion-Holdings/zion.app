import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Agriculture Automation | Zion Tech Group",
  description: "IoT-powered smart farming platform. Automated irrigation, soil monitoring, crop health analysis via drone imagery, and yield prediction.",
  openGraph: {
    title: "Agriculture Automation | Zion Tech Group",
    description: "IoT-powered smart farming platform. Automated irrigation, soil monitoring, crop health analysis via drone imagery, and yield prediction.",
    url: "https://ziontechgroup.com/services/agriculture-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/agriculture-automation/" },
};

export default function AgricultureAutomationPage() {
  return (
    <StandardPage
      title="Agriculture Automation"
      subtitle="IoT-powered smart farming platform. Automated irrigation, soil monitoring, crop health analysis via drone imagery, and yield prediction."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Agriculture Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Agriculture Automation</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Get Started</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">📊 ROI Calculator</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Your Current Operations</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Deployment Roadmap</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">1. Process Discovery</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Estimated timeline for Agriculture Automation — adapt to your team size and complexity.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Robotic Process Automation with AI. Automate repetitive tasks across desktop, web, and legacy applications. No-code bot builder with computer vision.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">AI-powered workflow automation that goes beyond simple triggers. Understands context, makes decisions, and adapts processes in real-time.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Build AI copilots that embed in your employees workflow. Context-aware assistance in Slack, Teams, email, and browser with guardrails and knowledge grounding.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607200508) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
