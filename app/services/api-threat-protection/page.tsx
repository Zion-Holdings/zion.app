import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "API Threat Protection Platform | Zion Tech Group",
  description: "Dedicated API security platform that discovers shadow APIs, detects abuse patterns, enforces rate limits, and protects against OWASP API Top 10 threats. Provides real-time threat intelligence and automated response.",
  openGraph: {
    title: "API Threat Protection Platform | Zion Tech Group",
    description: "Dedicated API security platform that discovers shadow APIs, detects abuse patterns, enforces rate limits, and protects against OWASP API Top 10 threats. Provides real-time threat intelligence and automated response.",
    url: "https://ziontechgroup.com/services/api-threat-protection/",
    type: 'website',
  },
  alternates: { canonical: "/services/api-threat-protection/" },
};

export default function ApiThreatProtectionPage() {
  return (
    <StandardPage
      title="API Threat Protection Platform"
      subtitle="Dedicated API security platform that discovers shadow APIs, detects abuse patterns, enforces rate limits, and protects against OWASP API Top 10 threats. Provides real-time threat intelligence and automated response."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "API Threat Protection Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">API Threat Protection Platform</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Get Started</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">📊 ROI Calculator</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Your Current Operations</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Deployment Roadmap</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">1. Asset &amp; Risk Assessment</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Estimated timeline for API Threat Protection Platform — adapt to your team size and complexity.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">24/7 Security Operations Center as a service. Monitor, detect, and respond to threats across your entire infrastructure with certified security analysts.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Comprehensive penetration testing for web applications, networks, APIs, and cloud infrastructure. Manual testing by certified ethical hackers with detailed remediation reports.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Centralized identity management with single sign-on (SSO), multi-factor authentication (MFA), role-based access control (RBAC), and user lifecycle automation. Integrates with 200+ apps.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607104215) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
