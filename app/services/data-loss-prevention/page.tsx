import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Data Loss Prevention (DLP) | Zion Tech Group",
  description: "Enterprise DLP solution monitoring data at rest, in transit, and in use. Content inspection, endpoint agents, cloud access security broker, and incident response.",
  openGraph: {
    title: "Data Loss Prevention (DLP) | Zion Tech Group",
    description: "Enterprise DLP solution monitoring data at rest, in transit, and in use. Content inspection, endpoint agents, cloud access security broker, and incident response.",
    url: "https://ziontechgroup.com/services/data-loss-prevention/",
    type: 'website',
  },
  alternates: { canonical: "/services/data-loss-prevention/" },
};

export default function DataLossPreventionPage() {
  return (
    <StandardPage
      title="Data Loss Prevention (DLP)"
      subtitle="Enterprise DLP solution monitoring data at rest, in transit, and in use. Content inspection, endpoint agents, cloud access security broker, and incident response."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Data Loss Prevention (DLP)" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Data Loss Prevention (DLP)</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Get Started</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">📊 ROI Calculator</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Your Current Operations</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Deployment Roadmap</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">1. Asset &amp; Risk Assessment</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Estimated timeline for Data Loss Prevention (DLP) — adapt to your team size and complexity.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">24/7 Security Operations Center as a service. Monitor, detect, and respond to threats across your entire infrastructure with certified security analysts.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Comprehensive penetration testing for web applications, networks, APIs, and cloud infrastructure. Manual testing by certified ethical hackers with detailed remediation reports.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Centralized identity management with single sign-on (SSO), multi-factor authentication (MFA), role-based access control (RBAC), and user lifecycle automation. Integrates with 200+ apps.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607195231) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
