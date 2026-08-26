import { } from 'next/navigation';

export const metadata = {
  title: "Real-time Event & Trending Aggregator - Zion Tech Group",
  description: "Streaming data platform: Flink/Redpanda backbone, windowed aggregation at sub-second latency, trend-detection anomaly alerts, opentelemetry distributed-tracing ",
  alternates: {
    canonical: `https://ziontechgroup.com/services/real-time-event--trending-aggregator-029af08b`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Real-time Event &amp; Trending Aggregator</h1>
        <p className="text-lg text-gray-300 mb-8">Streaming data platform: Flink/Redpanda backbone, windowed aggregation at sub-second latency, trend-detection anomaly alerts, opentelemetry distributed-tracing per event, dashboarding per team with live drill-through.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Flink + Redpanda backbone with sub-second windowed aggregation</li>
            <li>Trend-detection + anomaly-alert engine with statistical significance scoring</li>
            <li>Opentelemetry per event — correlate any aggregate back to source event in one click</li>
            <li>Live dashboard with drill-through per team with RBAC on views and rows</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Know what your product or your API are doing as they&#39;re happening, not the next morning</li>
            <li>Trend-detection alerting on spikes in errors or latency catches outages before customers call</li>
            <li>Per-event tracing means no more &#39;event-lost&#39; midnight firefight</li>
            <li>Time-limited dashboard views are the right way to share live data with stakeholders</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$2999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$9999/month</p>
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
