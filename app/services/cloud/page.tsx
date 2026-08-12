export const metadata = {
  title: "Cloud Infrastructure & Migration - Zion Tech Group",
  description: "AWS/GCP/Azure migration, FinOps, and managed cloud services. Optimize costs, improve reliability, and scale seamlessly.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud/
  }
};

const FEATURES = [
  "Multi-cloud architecture (AWS, GCP, Azure)",
  "Migration planning and execution",
  "Cost optimization (FinOps)",
  "24/7 infrastructure monitoring",
  "Disaster recovery and backup",
  "Container orchestration (Kubernetes, Docker)",
];

const BENEFITS = [
  "Reduce cloud spend by up to 35%",
  "Achieve 99.99% infrastructure uptime",
  "Scale resources automatically with demand",
  "Migrate with zero downtime",
  "Security and compliance built-in",
  "Full visibility into resource utilization",
];

const PRICING = [
  { tier: "Starter", price: "$799/mo", desc: "Basic cloud setup & monitoring" },
  { tier: "Growth", price: "$2,499/mo", desc: "Full managed cloud services" },
  { tier: "Enterprise", price: "Custom", desc: "Multi-region, multi-cloud" },
];

export default function CloudPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cloud Infrastructure &amp; Migration</h1>
        <p className="text-lg text-gray-300 mb-8">AWS/GCP/Azure migration, FinOps, and managed cloud services. Optimize costs, improve reliability, and scale seamlessly.</p>

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
