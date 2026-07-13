import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Agents Monitoring | Zion Tech Group',
  description: 'Monitor AI agents, automations, and operational telemetry in one place.'
};

export default function AgentsMonitoring() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Agents Monitoring' }]} />
      <div className="container">
        <h1>Agents Monitoring</h1>
        <p className="lead">Unified visibility into automation agents, workflows, and system health.</p>
        <div className="grid">
          <div className="card">
            <h3>AI Agents</h3>
            <p>Track active automations, failures, and throughput.</p>
            <Link href="/services/ai-chatbot-builder/">Explore AI Chatbot Builder</Link>
          </div>
          <div className="card">
            <h3>Ops Telemetry</h3>
            <p>Monitor alerts, incidents, and remediation status.</p>
            <Link href="/services/managed-observability-247/">Explore Observability</Link>
          </div>
          <div className="card">
            <h3>Security Signals</h3>
            <p>Review detections, triage queues, and response metrics.</p>
            <Link href="/services/sec-soc-as-a-service/">Explore SOC Automation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
