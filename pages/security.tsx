import React from 'react';
import Head from 'next/head';
import { Shield, Lock, ShieldAlert, Check, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { Button } from '../components/ui/Button';

export default function SecurityPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    { title: 'Post-Quantum Cryptography', desc: 'Implement NIST PQC standards (CRYSTALS-Kyber/Dilithium) and hybrid TLS for future-proof security.', icon: <Shield className="w-6 h-6 text-cyan-400" /> },
    { title: 'AI Threat Detection', desc: 'Behavioral analytics and anomaly detection with real-time response playbooks and SOAR integrations.', icon: <ShieldAlert className="w-6 h-6 text-purple-400" /> },
    { title: 'Zero-Trust Architecture', desc: 'Identity-first, continuous verification across users, devices, and workloads (ZTA blueprints).', icon: <Lock className="w-6 h-6 text-pink-400" /> },
    { title: 'Cloud Security Hardening', desc: 'CSPM, CIEM, and IaC scanning; guardrails for AWS, Azure, and GCP with policy-as-code.', icon: <Check className="w-6 h-6 text-emerald-400" /> },
  ];

  const packages = [
    { name: 'Starter', price: '$1,500 one-time + $299/month', items: ['Security posture review', 'CIS/NIST gap analysis', 'Cloud baseline guardrails', '24/7 monitoring lite'] },
    { name: 'Growth', price: '$3,500 one-time + $699/month', items: ['ZTA blueprint + pilot', 'SAST/DAST/Secrets CI', 'SIEM + SOAR setup', 'Managed detection & response'] },
    { name: 'Enterprise', price: 'Custom (from $2,500/month)', items: ['PQC roadmap & hybrid TLS', 'Red/Blue/Purple team ops', 'Incident response retainer', 'Tabletop exercises & training'] },
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Security | Zion Tech Group</title>
        <meta name="description" content="Quantum-ready cybersecurity, zero-trust, and AI-driven threat detection. Practical blueprints, managed services, and compliance enablement." />
        <link rel="canonical" href="https://ziontechgroup.com/security" />
      </Head>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Security, Evolved</h1>
          <p className="text-xl text-gray-300">Post-quantum cryptography, AI threat detection, and zero-trust architectures delivered with actionable roadmaps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f) => (
            <div key={f.title} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-400" /> <span>{i}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="flex items-center justify-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><span>{contactInfo.mobile}</span></div>
            <div className="flex items-center justify-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><span>{contactInfo.email}</span></div>
            <div className="flex items-center justify-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><span className="text-xs">{contactInfo.address}</span></div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Security</Button>
            <a href="https://ziontechgroup.com/quantum-cybersecurity" className="text-cyan-400 hover:text-white inline-flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Learn more</a>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

