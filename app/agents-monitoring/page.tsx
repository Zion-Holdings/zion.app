// app/agents-monitoring/page.tsx — Public client-facing monitoring page
import { type Metadata } from 'next';
import AgentDashboard from '@/components/AgentDashboard';

export const metadata: Metadata = {
  title: 'AI Agent Monitoring — Zion Tech Group',
  description: 'Watch our AI agent fleet work in real time. Live fleet status, service catalog count, and wave integration progress.',
  alternates: {
    canonical: 'https://ziontechgroup.com/agents-monitoring/',
  },
};

export default function AgentsMonitoringPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-8">
      <div className="container-page">
        <AgentDashboard defaultView="client" />
      </div>
    </main>
  );
}
