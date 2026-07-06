import type { Metadata } from 'next';
import AgentDashboard from '@/components/AgentDashboard';

export const metadata: Metadata = {
  title: 'AI Agent Operations Center — Live Monitoring | Zion Tech Group',
  description: 'Real-time monitoring of Zion Tech Group AI agent fleet. Watch autonomous agents build, test, and deploy services 24/7. Track actions, uptime, and performance.',
  alternates: { canonical: 'https://ziontechgroup.com/agents-monitoring' },
};

export default function AgentsMonitoringPage() {
  return <AgentDashboard />;
}
