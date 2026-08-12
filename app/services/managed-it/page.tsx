import { SmartServiceCard } from '@/components/SmartServiceCard';

export const metadata = {
  title: "Managed IT Services - Zion Tech Group",
  description: "24/7 monitoring, helpdesk, and endpoint management. Proactive IT support with SLA guarantees and cybersecurity integration.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/managed-it/`
  }
};

const FEATURES = [
  "24/7 monitoring and alerting",
  "Helpdesk and user support",
  "Endpoint management and security",
  "Patch management and updates",
  "SLA guarantees with 99.9% uptime",
  "Network infrastructure management",
];

const BENEFITS = [
  "Reduce IT costs by up to 40%",
  "Proactive issue detection and resolution",
  "Focus on your core business, not IT",
  "Access to enterprise-grade expertise",
  "Scalable support that grows with you",
  "Compliance-ready infrastructure",
];

const PRICING = [
  { tier: "Essential", price: "$499/mo", desc: "Up to 10 endpoints" },
  { tier: "Professional", price: "$1,299/mo", desc: "Up to 50 endpoints" },
  { tier: "Enterprise", price: "Custom", desc: "Unlimited endpoints" },
];

export default function ManagedITPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Managed IT Services</h1>
        <p className="text-lg text-gray-300 mb-8">24/7 monitoring, helpdesk, and endpoint management. Proactive IT support with SLA guarantees and cybersecurity integration.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {FEATURES.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            {BENEFITS.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRICING.map((p) => (
              <div key={p.tier} className="bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{p.tier}</h3>
                <p className="text-2xl font-bold mb-2">{p.price}</p>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
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
