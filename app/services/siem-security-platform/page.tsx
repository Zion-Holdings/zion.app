import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'SIEM Security Platform | Zion Tech Group',
  description: 'Managed SIEM security monitoring, alert triage, and incident response support for modern IT environments.',
};

export default function SiemSecurityPlatformPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'SIEM Security Platform', href: '/services/siem-security-platform/' }]} className="mb-8" />
        <h1 className="text-4xl font-bold text-white mb-4">SIEM Security Platform</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">Detect, investigate, and respond to threats faster with structured telemetry, correlation rules, and guided response playbooks.</p>
        <ul className="mt-6 list-disc pl-6 text-slate-300 space-y-1 max-w-3xl">
          <li>Log aggregation and normalization</li>
          <li>Alert correlation and noise reduction</li>
          <li>Guided incident response playbooks</li>
          <li>Executive threat reporting</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact/" className="btn-primary">Request a security review</a>
          <a href="/services/" className="btn-secondary">All services</a>
          <a href="/newsroom/" className="btn-secondary">Security updates</a>
        </div>
      </div>
    </main>
  );
}
