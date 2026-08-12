import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Solutions for Retail & E-Commerce | Zion Tech Group',
  description: 'AI-powered retail solutions: product recommendations, demand forecasting, inventory automation, visual quality control, and customer insights.',
  alternates: { canonical: '/industries/retail/' },
};

const useCases = [
  {
    title: 'Product Recommendations',
    desc: 'AI-powered real-time personalization to boost conversion rates and basket size across web, mobile, and in-store kiosks.',
    features: ['Real-time inference engine', 'Behavioral tracking', 'A/B testing', 'Multi-touch attribution'],
  },
  {
    title: 'Demand Forecasting',
    desc: 'Predict demand with machine learning to optimize inventory, reduce waste, and align promotions to actual buying cycles.',
    features: ['Time-series ML', 'Seasonal modeling', 'Promotion impact analysis', 'Supply chain integration'],
  },
  {
    title: 'Visual Quality Control',
    desc: 'Computer vision inspection on production lines to catch defects early, reducing returns and brand risk.',
    features: ['Edge inference', 'Defect classification', 'Confidence scoring', 'Automated alerts'],
  },
  {
    title: 'Inventory Automation',
    desc: 'Smart stock replenishment that reacts to sales velocity, seasonality, and supplier lead times.',
    features: ['Auto-replenishment', 'Supplier ML modeling', 'Multi-location pooling', 'Waste reduction'],
  },
];

const successMetrics = [
  { value: '23%', label: 'Lift in conversion rate' },
  { value: '31%', label: 'Reduction in stockouts' },
  { value: '18%', label: 'Drop in inventory holding cost' },
  { value: '40%', label: 'Reduction in returns due to defects' },
];

export default function RetailIndustryPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
              Industry • Retail & E-Commerce
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-3">
              AI That Sells — For Retailers and E-Commerce Brands
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              From hyper-personalized shopping journeys to computer-vision quality control on
              the factory floor, Zion Tech Group delivers the data and AI infrastructure that
              modern retailers need to win online and in-store.
            </p>
          </div>

          {/* Success metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {successMetrics.map((m) => (
              <div key={m.label} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">{m.value}</div>
                <div className="text-xs text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Use cases */}
          <div className="space-y-10">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-3">{uc.title}</h2>
                <p className="text-slate-300 mb-4">{uc.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  {uc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-400">
                      <span className="text-purple-400">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Retail Operations?</h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Book a free AI readiness assessment and discover how we can boost your bottom line
              in 90 days or less.
            </p>
            <Link
              href="https://calendly.com/kleber-ziontechgroup"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition"
            >
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
