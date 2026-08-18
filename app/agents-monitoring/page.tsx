import type { Metadata } from 'next';
import AgentDashboard from '@/components/AgentDashboard';

export const metadata: Metadata = {
  title: 'AI Agents Monitoring | Zion Tech Group',
  description: 'Monitoring, observability, and reliability dashboard for AI agents.',
  openGraph: {
    title: 'AI Agents Monitoring | Zion Tech Group',
    description: 'Operational visibility for AI agents and automated workflows.',
    url: 'https://ziontechgroup.com/agents-monitoring/',
    type: 'website',
  },
  alternates: { canonical: '/agents-monitoring/' },
};

export default function AgentsMonitoringPage() {
  return <AgentDashboard defaultView="client" defaultTab="showcase" />;
}
