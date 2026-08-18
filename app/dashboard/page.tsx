import type { Metadata } from 'next';
import AgentDashboard from '@/components/AgentDashboard';

export const metadata: Metadata = {
  title: 'AI Agent Command Center | Zion Tech Group',
  description: 'Real-time monitoring of our autonomous AI agent fleet — task board, delegation log, wave integration progress, and site health.',
  openGraph: {
    title: 'AI Agent Command Center | Zion Tech Group',
    description: 'Real-time monitoring of our autonomous AI agent fleet.',
    url: 'https://ziontechgroup.com/dashboard/',
    type: 'website',
  },
  alternates: { canonical: '/dashboard/' },
};

export default function DashboardPage() {
  return <AgentDashboard defaultView="operations" defaultTab="fleet" />;
}
