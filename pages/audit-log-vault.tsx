import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { FileText, Check, Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function AuditLogVaultPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Append-only, tamper-evident storage',
    'Flexible retention and legal holds',
    'Cryptographic digests and attestations',
    'Fine-grained search and export bundles',
    'Chain-of-custody and access reviews',
    'Alerts for risky access patterns'
  ];

  return (
    <UltraFuturisticBackground variant="holographic" intensity="high">
      <Head>
        <title>Audit Log Vault | Zion Tech Group</title>
        <meta name="description" content="Immutable, indexed, long-term audit trails for compliance and forensics with search, exports and cryptographic attestations." />
        <link rel="canonical" href="https://ziontechgroup.com/audit-log-vault" />
      </Head>

      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <ShieldCheck className="w-10 h-10" /> Audit Log Vault
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Compliance-first audit log storage and search with WORM options, retention, attestations and exports.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6 bg-black/40 border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
              <p className="text-gray-300 mb-6">Centralize audit logs from apps and platforms into an immutable, indexed store with strong retention controls and cryptographic integrity, ready for SOC 2, HIPAA and ISO reviews.</p>
              <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-400 mt-0.5" /> <span>{f}</span></li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 bg-black/40 border border-gray-700/50">
              <div className="text-sm text-gray-400 mb-1">Pricing</div>
              <div className="text-3xl font-bold text-white">$89<span className="text-base text-gray-400">/month</span></div>
              <div className="text-sm text-gray-400 mt-2">Trial: 14 days • Setup: 30 minutes</div>
              <div className="mt-6 flex gap-3">
                <Button href="/contact" className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">Contact Sales</Button>
                <Button href="https://ziontechgroup.com/audit-log-vault" variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button>
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
                <div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
                <div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</a></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}

