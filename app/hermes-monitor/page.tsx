import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';
import AgentDashboard from '@/components/AgentDashboard';

export const metadata: Metadata = {
  title: 'Hermes Agent Monitor | Zion Tech Group',
  description:
    'Real-time monitoring dashboard for Hermes AI agent instances. Track agent fleet status, task execution, skill usage, cron job health, and provider credentials.',
  keywords: [
    'Hermes Agent monitor',
    'agent monitoring',
    'AI agent dashboard',
    'agent health',
    'task tracking',
    'skill usage',
    'cron health',
    'provider status',
  ],
  openGraph: {
    title: 'Hermes Agent Monitor | Zion Tech Group',
    description:
      'Real-time monitoring dashboard for Hermes AI agent instances with fleet status, task tracking, and health alerts.',
    url: 'https://ziontechgroup.com/hermes-monitor/',
    type: 'website',
  },
  alternates: { canonical: '/hermes-monitor/' },
};

export default function HermesMonitorPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Hermes Agent Monitor',
          description:
            'Real-time monitoring dashboard for Hermes AI agent instances at Zion Tech Group.',
          applicationCategory: 'BusinessApplication',
          url: 'https://ziontechgroup.com/hermes-monitor/',
        }}
      />
      <StandardPage
        title="Hermes Agent Monitor"
        subtitle="Real-time monitoring dashboard for your Hermes AI agent fleet."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Hermes Agent Monitor' },
        ]}
        actions={[
          { label: 'Book a Consultation', href: '/contact/?service=hermes-monitor', style: 'primary' },
          { label: 'Agent Dashboard', href: '/agents-monitoring/', style: 'secondary' },
        ]}
      >
        <div className="space-y-8">
          <p className="text-slate-300 max-w-3xl">
            Monitor your autonomous AI agent fleet in real time. Track agent status,
            task execution, skill usage, cron job health, and provider credentials —
            all powered by the Hermes Agent platform by Nous Research.
          </p>

          <AgentDashboard defaultView="operations" defaultTab="fleet" />

          <div className="pt-8 border-t border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">Need Managed Monitoring?</h2>
            <p className="text-slate-300 mb-4">
              Zion Tech Group offers full Hermes Agent monitoring, alerting, and 24/7
              operations management. We handle the infrastructure so you can focus
              on business outcomes.
            </p>
            <Link
              href="/contact/?service=hermes-monitor"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              Get Managed Monitoring →
            </Link>
          </div>
        </div>
      </StandardPage>
    </>
  );
}
