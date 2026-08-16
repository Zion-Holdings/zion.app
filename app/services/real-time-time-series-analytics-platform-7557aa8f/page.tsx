
export const metadata = {
  title: "Real-Time Time-Series Analytics Platform - Zion Tech Group",
  description: "High-throughput real-time analytics for IoT, monitoring, and business metrics: stores, aggregates, and queries billions of events per day at <200ms p99 latency.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/real-time-time-series-analytics-platform-7557aa8f`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Real-Time Time-Series Analytics Platform</h1>
        <p className="text-lg text-gray-300 mb-8">High-throughput real-time analytics for IoT, monitoring, and business metrics: stores, aggregates, and queries billions of events per day at &lt;200ms p99 latency. Includes alert rules, anomaly detection, SQL + Python query engine, dashboards, and Grafana/PostgreSQL-compatible endpoints.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ingestion: 1 million+ events/second per cluster with exactly-once guarantees</li>
            <li>Down-sampling + retention policy: raw for 7 d, 1-minute roll-ups for 90 d, hourly for 3 y</li>
            <li>SQL query engine + Python SDK for time-series queries in one familiar language</li>
            <li>Alert rules: threshold, rate-of-change, compound condition — Slack, PagerDuty, Email, Webhook</li>
            <li>Grafana + PostgreSQL wire-protocol: connect existing dashboards in 2 minutes</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Query 10 billion time-series events in under 2 seconds — no pre-aggregation required</li>
            <li>P99 query latency &lt;200 ms means SLA dashboards feel instantaneous to ops teams</li>
            <li>Alert fatigue drops 60% vs dumb-threshold alerts because anomaly-detection rules adapt to seasonality</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$149/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$599/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
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
