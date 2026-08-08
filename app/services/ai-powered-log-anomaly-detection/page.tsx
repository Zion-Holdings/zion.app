import { } from 'next/navigation';

export const metadata = {
  title: "AI-Powered Log Anomaly Detection - Zion Tech Group",
  description: "Automatically detect unusual patterns, spikes, and errors in logs using unsupervised ML; reduce alert fatigue and surface issues before they cause outages.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-powered-log-anomaly-detection`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI-Powered Log Anomaly Detection</h1>
        <p className="text-lg text-gray-300 mb-8">Automatically detect unusual patterns, spikes, and errors in logs using unsupervised ML; reduce alert fatigue and surface issues before they cause outages.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Unsupervised clustering of log events</li>
            <li>Real-time anomaly scoring per time-series</li>
            <li>Seamless integration with ELK/Prometheus</li>
            <li>Alert suppression &amp; correlation</li>
            <li>Root-cause hinting via pattern matching</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect incidents 30+ minutes before monitoring</li>
            <li>Reduce false positive alerts by 80%</li>
            <li>Shorten MTTR with actionable insights</li>
            <li>Discover silent failures &amp; edge cases</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$299</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$699</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1899</p>
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
