import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { Smartphone, CheckCircle, ExternalLink, Shield } from 'lucide-react';

export default function MDMPage() {
  const features = [
    'Zero-touch enrollment (Apple DEP/ABM, Android Zero-Touch)',
    'Device posture checks, compliance policies, and remediation',
    'App management, OS updates, remote lock/wipe, geofencing',
    'Identity integration (SAML/SCIM) and conditional access',
    'Kiosk/COPE/COBO support with granular restrictions',
  ];

  const pricing = [
    { tier: 'SMB (up to 100 devices)', range: '$300–$1,000/month', note: 'Based on device count and features' },
    { tier: 'Mid-market (100–1,000 devices)', range: '$1,000–$7,000/month', note: 'Advanced policies, integrations, support' },
    { tier: 'Enterprise (1,000+ devices)', range: 'Custom', note: 'SLA, multi-tenant, dedicated support' },
  ];

  const references = [
    { name: 'Microsoft Intune pricing', url: 'https://www.microsoft.com/en-us/security/business/microsoft-intune/pricing' },
    { name: 'Jamf pricing', url: 'https://www.jamf.com/pricing/' },
    { name: 'VMware Workspace ONE pricing', url: 'https://www.vmware.com/products/workspace-one/pricing.html' },
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Mobile Device Management (MDM) | Zion Tech Group</title>
        <meta name="description" content="Modern MDM with zero-touch enrollment, compliance policies, app management, and identity integration." />
        <link rel="canonical" href="https://ziontechgroup.com/mobile-device-management" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Mobile Device Management (MDM)</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Secure, compliant device fleets across iOS, Android, macOS, and Windows.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Talk to an Engineer</Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4">Market Pricing</Button>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Typical Pricing Ranges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricing.map((p) => (
                <div key={p.tier} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <div className="text-gray-400 text-sm mb-1">{p.tier}</div>
                  <div className="text-2xl font-bold text-white">{p.range}</div>
                  <div className="text-sm text-gray-400 mt-2">{p.note}</div>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-400 mt-3 text-center">We align with leading platforms like Intune, Jamf, and Workspace ONE.</div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Vendor References</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {references.map((r) => (
                <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="px-4 py-3 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 inline-flex items-center gap-2 text-cyan-300">
                  <ExternalLink className="w-4 h-4" />
                  <span>{r.name}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-gray-300">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>SAML/SCIM, device attestation, and compliance-ready audit logs</span>
            </div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}