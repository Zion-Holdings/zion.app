import { } from 'next/navigation';

export const metadata = {
  title: "Real-Time Trending Analytics - Zion Tech Group",
  description: "Real-time windowed aggregation engine: 1-minute tumbling and hopping windows per dimension, per-interval top-K ranking, out-of-norm alerting, sigma deviation triggering, and curated drill-down with ro",
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-realtime-trending-analytics`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Real-Time Trending Analytics</h1>
        <p className="text-lg text-gray-300 mb-8">Real-time windowed aggregation engine: 1-minute tumbling and hopping windows per dimension, per-interval top-K ranking, out-of-norm alerting, sigma deviation triggering, and curated drill-down with root-cause dimension linking per window.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Continuous per-interval Top-K aggregation on grouped dimensions with configurable window size</li>
            <li>Out-of-norm score per dimension — automatically explains what changed since last window</li>
            <li>Sigma-deviation alerting on every time-series window per threshold per metric</li>
            <li>Curated drill-down per spike — root-cause dimension linked from the alert context</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect trend anomalies in real-time rather than reviewing spreadsheets every Monday</li>
            <li>Per-window drill-down from alert to root event takes a single click and under a second</li>
            <li>Same query runs live on the stream — no reshape scripts or stored procedures needed</li>
            <li>GPU-ready windowed frame enables 60 frames per second dashboard refresh on large datasets</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$5999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$17999</p>
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
