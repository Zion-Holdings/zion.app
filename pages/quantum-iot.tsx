import NextHead from 'next/head';
import { Wifi, Check, Phone, Mail, MapPin } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function QuantumIoTPage() {
  const service = enhancedRealMicroSaasServices.find(s => (s.link || '').endsWith('/quantum-iot'));
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <UltraAdvancedFuturisticBackground>
      <NextHead>
        <title>{service?.name || 'Quantum IoT Platform'} - Zion Tech Group</title>
        <meta name="description" content={service?.description || 'Quantum-secured IoT management with device identity, telemetry, and OTA updates.'} />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-iot" />
      </NextHead>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Wifi className="w-10 h-10" />{service?.name || 'Quantum IoT Platform'}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service?.tagline || 'Secure device onboarding, telemetry pipelines, and edge policy with quantum-safe crypto.'}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
              <p className="text-slate-300 mb-6">{service?.description || 'Device identity, fleet management, OTA updates, and secured telemetry ingestion with policies.'}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(service?.features?.slice(0, 12) || ['Quantum-safe identity', 'Fleet mgmt & OTA', 'Edge policy', 'Telemetry pipelines', 'Digital twins', 'SLO dashboards']).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white">{service?.price || 'Starting at $4,999'}<span className="text-slate-400 text-base">{service?.period || '/month'}</span></div>
                </div>
              </div>
              <Button href="/contact" variant="quantum" size="lg" className="w-full">Plan a Pilot</Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

