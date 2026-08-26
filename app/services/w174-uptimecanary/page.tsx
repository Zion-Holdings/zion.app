import { } from 'next/navigation';

export const metadata = {
  title: "UptimeCanary — Monitoring & Alerts - Zion Tech Group",
  description: "Simple uptime monitoring with HTTP checks, SSL monitoring, domain expiry alerts, and status pages. 1-minute intervals, 12 global regions, PagerDuty/Slack alerts",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-uptimecanary`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">UptimeCanary — Monitoring &amp; Alerts</h1>
        <p className="text-lg text-gray-300 mb-8">Simple uptime monitoring with HTTP checks, SSL monitoring, domain expiry alerts, and status pages. 1-minute intervals, 12 global regions, PagerDuty/Slack alerts.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>HTTP/HTTPS ping monitoring (1-min intervals)</li>
            <li>SSL certificate expiry monitoring</li>
            <li>Domain expiry alerts</li>
            <li>Public status page with branding</li>
            <li>12 global monitoring regions</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect downtime in under 60 seconds</li>
            <li>SSL/domain alerts prevent expiry surprises</li>
            <li>Status page builds customer trust</li>
            <li>12 regions for global accuracy</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$7/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$25/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$99/mo/month</p>
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
