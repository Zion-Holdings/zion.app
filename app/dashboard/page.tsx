// app/dashboard/page.tsx — Full Ops dashboard with all 5 tabs
import { type Metadata } from 'next';
import AgentDashboard from '@/components/AgentDashboard';

export const metadata: Metadata = {
  title: 'AI Agent Dashboard — Zion Tech Group',
  description: 'Real-time monitoring of our AI agent fleet. Fleet status, wave integrations, task board, activity log, and showcase view.',
  alternates: {
    canonical: 'https://ziontechgroup.com/dashboard/',
  },
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-8">
      <div className="container-page">
        <AgentDashboard defaultView="operations" />
      </div>
    </main>
  );
}
