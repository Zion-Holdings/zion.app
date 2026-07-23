import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AI-First APM & Observability | Zion Tech Group',
  description: 'AI-first APM and observability for IT teams: anomaly detection, root-cause hints, SLO tracking, and incident acceleration.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container-page max-w-4xl">
        <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'AI-First APM', href: '/services/ai-first-application-performance-monitoring-and-observability-for-it-in-2026/' }]} className="mb-8" />
        <div className="glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">AI-First APM & Observability</h1>
          <p className="text-slate-400 text-sm mt-1">IT • platform engineering • observability</p>
          <p className="text-slate-300 text-base leading-relaxed mt-4">AI-assisted application performance monitoring and observability for faster incident response and fewer outages.</p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a href="mailto:kleber@ziontechgroup.com?subject=AI%20APM%20and%20Observability" className="btn-primary">Contact Us</a>
            <a href="/services/" className="btn-secondary">All services</a>
          </div>
        </div>
      </div>
    </div>
  );
}
