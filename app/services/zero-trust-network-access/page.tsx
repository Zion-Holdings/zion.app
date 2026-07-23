import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Zero Trust Network Access | Zion Tech Group',
  description: 'Zero trust network access with identity-centric access controls, device posture checks, and least-privilege enforcement.',
};

export default function ZeroTrustNetworkAccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'Zero Trust Network Access', href: '/services/zero-trust-network-access/' }]} className="mb-8" />
        <h1 className="text-4xl font-bold text-white mb-4">Zero Trust Network Access</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">Move beyond perimeter-based access to identity-centric controls, device posture validation, and least-privilege enforcement.</p>
        <ul className="mt-6 list-disc pl-6 text-slate-300 space-y-1 max-w-3xl">
          <li>Identity and context-based access policies</li>
          <li>Device posture and compliance checks</li>
          <li>Application-level segmentation</li>
          <li>Session logging and audit evidence</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact/" className="btn-primary">Start an architecture review</a>
          <a href="/services/" className="btn-secondary">All services</a>
          <a href="/free-services-and-tools/" className="btn-secondary">Free tools</a>
        </div>
      </div>
    </main>
  );
}
