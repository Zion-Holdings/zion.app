import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function ITServicesPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Enterprise IT Services | Cloud, Security, SSO, Monitoring</title>
        <meta name="description" content="Managed IT, SSO/SCIM, SOC2 readiness, TLS monitoring, SLO/uptime, and cost optimization delivered as productized services." />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enterprise IT Services
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Outcome-focused IT with clear SLAs. Implement SSO, SOC 2 evidence, TLS and domain monitoring,
              and uptime/SLO status pages with fast onboarding.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/services" variant="primary">Browse All Services</Button>
              <Button href="/market-pricing" variant="secondary">See Market Pricing</Button>
              <Button href="/contact" variant="secondary">Contact Sales</Button>
            </div>
            <div className="text-sm text-slate-400">
              Contact: <a className="underline text-cyan-300" href="tel:+13024640950">{contactInfo.mobile}</a> •
              <a className="underline text-purple-300 ml-1" href="mailto:kleber@ziontechgroup.com">{contactInfo.email}</a>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">SSO/SCIM-in-a-Box</h2>
              <p className="text-slate-300 mb-3">Enterprise sign-on and provisioning with Okta/Entra/WorkOS adapters.</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>SSO + SCIM adapters</li>
                <li>Audit logging and admin UX</li>
                <li>Playbooks for app teams</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">SOC 2 Readiness</h2>
              <p className="text-slate-300 mb-3">Policy kits, evidence workflows and gap analysis to accelerate audits.</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>Controls mapping</li>
                <li>Automated evidence capture</li>
                <li>Audit timelines</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Monitoring & SLOs</h2>
              <p className="text-slate-300 mb-3">TLS, domains/DNS, uptime and SLO status pages with alerts.</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>TLS and DNS monitoring</li>
                <li>Public status pages</li>
                <li>PagerDuty/Slack integration</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-3xl font-bold">Pricing References</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Auth0/Okta/WorkOS SSO: <a className="text-cyan-300 underline" href={`https://workos.com/pricing`} target="_blank" rel="noopener noreferrer">workos.com/pricing</a></li>
              <li>Cloud security (Wiz/Prisma): <a className="text-cyan-300 underline" href={`https://www.wiz.io/pricing`} target="_blank" rel="noopener noreferrer">wiz.io/pricing</a></li>
              <li>Cloudflare Zero Trust: <a className="text-cyan-300 underline" href={`https://www.cloudflare.com/products/zero-trust/pricing/`} target="_blank" rel="noopener noreferrer">cloudflare.com/zero-trust/pricing</a></li>
            </ul>
            <div className="text-sm text-slate-400">Typical SMB budgets: $200–$5,000/month depending on seats and scope.</div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
