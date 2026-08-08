import { } from 'next/navigation';

export const metadata = {
  title: "Full-Stack Observability Platform - Zion Tech Group",
  description: "Unified logs, metrics, traces, and distributed tracing with AI-powered anomaly detection and automated root-cause analysis for microservices.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/observability-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Full-Stack Observability Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Unified logs, metrics, traces, and distributed tracing with AI-powered anomaly detection and automated root-cause analysis for microservices.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Log aggregation &amp; full-text search (ELK-compatible)</li>
            <li>Metrics collection &amp; dashboards (Prometheus/Grafana)</li>
            <li>Distributed tracing (OpenTelemetry)</li>
            <li>AI-driven anomaly detection &amp; alerting</li>
            <li>SLO/SLI tracking &amp; error budget burn rate</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce MTTR by 65%</li>
            <li>Proactive issue detection before customers notice</li>
            <li>Unified view across clouds &amp; on-prem</li>
            <li>Data-driven reliability engineering</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$1199</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$3299</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://calendly.com/kleber-ziontechgroup/consultation" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
