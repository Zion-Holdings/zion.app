import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Kong Gateway API Management | Zion Tech Group",
  description: "Enterprise API gateway for managing, securing, and scaling microservices. Features rate limiting, authentication, request/response transformation, plugin ecosystem, and real-time analytics. Handles billions of API calls ",
  openGraph: {
    title: "Kong Gateway API Management | Zion Tech Group",
    description: "Enterprise API gateway for managing, securing, and scaling microservices. Features rate limiting, authentication, request/response transformation, plugin ecosystem, and real-time analytics. Handles billions of API calls ",
    url: "https://ziontechgroup.com/services/api-gateway-kong-enterprise/",
    type: 'website',
  },
  alternates: { canonical: "/services/api-gateway-kong-enterprise/" },
};

export default function ApiGatewayKongEnterprisePage() {
  return (
    <StandardPage
      title="Kong Gateway API Management"
      subtitle="Enterprise API gateway for managing, securing, and scaling microservices. Features rate limiting, authentication, request/response transformation, plugin ecosystem, and real-time analytics. Handles billions of API calls "
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Kong Gateway API Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Kong Gateway API Management</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Get Started</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">📊 ROI Calculator</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Your Current Operations</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Deployment Roadmap</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">1. Discovery &amp; Planning</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Estimated timeline for Kong Gateway API Management — adapt to your team size and complexity.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Replace VPN with Zero Trust architecture. Verify every user and device before granting access to any application. Micro-segmentation, continuous authentication, and least-privilege access built in.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Enterprise-grade BDR with automated backups, instant virtualization, and 1-hour RPO/RTO guarantees. Protects physical servers, VMs, cloud workloads, and SaaS data. Tested monthly with documented recovery reports.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Unified management across AWS, Azure, GCP, and on-premise infrastructure. Auto-optimize costs, enforce policies, and provide single-pane visibility. Includes FinOps cost recommendations.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614101845) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
