import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'System Status | Zion Tech Group',
  description: 'Real-time status of Zion Tech Group services.',
  alternates: { canonical: '/status/' },
};

export default function StatusPage() {
  return (
    <PageTemplate
      title="System Status"
      description="Live platform health is available on the dedicated service health page."
      category="System Status"
      heroIcon="📡"
      actions={[
        { label: 'View Service Health', href: '/status/service-health', style: 'primary' },
        { label: 'Back to Dashboard', href: '/dashboard', style: 'secondary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Status', href: '/status' },
      ]}
      layout="hero"
      showBottomCta={false}
    >
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-slate-400">
          Our infrastructure is monitored 24/7 by autonomous agents. Visit the service health
          page for live uptime, response time, and incident history across all 42,000+ services.
        </p>
      </div>
    </PageTemplate>
  );
}