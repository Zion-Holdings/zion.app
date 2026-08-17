export const metadata = {
  title: "IT Consulting & Digital Transformation - Zion Tech Group",
  description: "Architecture, roadmap, and digital transformation consulting. Strategic technology advisory for enterprise growth.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/consulting/
  }
};

const FEATURES = [
  "Technology architecture design",
  "Digital transformation roadmap",
  "Strategic vendor selection",
  "IT portfolio assessment",
  "Change management consulting",
  "Proof of concept development",
];

const BENEFITS = [
  "Align technology with business goals",
  "Accelerate time-to-market for initiatives",
  "Reduce technical debt and risk",
  "Make data-driven technology decisions",
  "Gain competitive advantage through innovation",
  "Future-proof your technology stack",
];

const PRICING = [
  { tier: "Strategy Workshop", price: "$2,500", desc: "1-day intensive session" },
  { tier: "Roadmap", price: "$7,500", desc: "30-day roadmap & plan" },
  { tier: "Transformation", price: "Custom", desc: "Full engagement" },
];

export default function ConsultingPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">IT Consulting &amp; Digital Transformation</h1>
        <p className="text-lg text-gray-300 mb-8">Architecture, roadmap, and digital transformation consulting. Strategic technology advisory for enterprise growth.</p>

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
    </PageWrapper>
  );
}
