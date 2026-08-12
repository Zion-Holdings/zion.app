export const metadata = {
  title: "Networking & Infrastructure - Zion Tech Group",
  description: "SD-WAN, VPN, structured cabling, and Wi-Fi optimization. Enterprise networking solutions designed for performance and reliability.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/networking`
  }
};

const FEATURES = [
  "SD-WAN network design and deployment",
  "VPN and remote access solutions",
  "Structured cabling and Wi-Fi optimization",
  "Network security and firewall management",
  "Load balancing and traffic optimization",
  "Network monitoring and performance tuning",
];

const BENEFITS = [
  "Reduce latency by up to 60%",
  "Secure remote workforce connectivity",
  "Scalable architecture for any size organization",
  "Proactive monitoring with real-time alerts",
  "99.9% uptime guarantee",
  "Compliance-ready network design",
];

const PRICING = [
  { tier: "Small Office", price: "$899/mo", desc: "Up to 25 users" },
  { tier: "Mid-Market", price: "$2,299/mo", desc: "Up to 100 users" },
  { tier: "Enterprise", price: "Custom", desc: "Unlimited users, multi-site" },
];

export default function NetworkingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Networking &amp; Infrastructure</h1>
        <p className="text-lg text-gray-300 mb-8">SD-WAN, VPN, structured cabling, and Wi-Fi optimization. Enterprise networking solutions designed for performance and reliability.</p>

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
