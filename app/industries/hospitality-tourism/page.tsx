import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Hospitality & Tourism | Zion Tech Group',
  description: 'AI-powered automation for hotels, resorts, restaurants, and travel companies. Optimize guest experiences, reduce costs, and increase revenue with hospitality AI solutions.',
  keywords: 'hospitality AI, tourism AI, hotel automation, guest experience AI, travel industry AI, hospitality technology, restaurant AI, booking optimization',
  alternates: { canonical: '/industries/hospitality-tourism' },
};

const SERVICES = [
  {
    title: 'AI Guest Experience Platform',
    slug: '/services/ai-guest-experience-platform',
    description: 'Personalized guest journey automation with real-time recommendations, concierge AI, and sentiment analysis. Increase guest satisfaction scores by 35% with predictive service delivery.',
    icon: '🏨',
    category: 'ai',
    ROI: '35% satisfaction increase'
  },
  {
    title: 'Dynamic Pricing & Revenue Optimization',
    slug: '/services/dynamic-pricing-ai',
    description: 'AI-powered pricing algorithms that adjust room rates, package prices, and services in real-time based on demand, seasonality, and competitor pricing. Boost revenue by up to 25%.',
    icon: '💰',
    category: 'ai',
    ROI: '25% revenue increase'
  },
  {
    title: 'AI-Powered Booking & Reservation System',
    slug: '/services/ai-booking-system',
    description: 'Intelligent reservation management with automated upselling, preference tracking, and waitlist optimization. Reduce no-shows by 40% and increase direct bookings.',
    icon: '📅',
    category: 'automation',
    ROI: '40% no-show reduction'
  },
  {
    title: 'Restaurant Order Prediction & Inventory',
    slug: '/services/ai-restaurant-inventory',
    description: 'Predict order volumes, manage inventory, and automate purchasing decisions for restaurants and catering businesses. Reduce food waste by 30% with AI demand forecasting.',
    icon: '🍽️',
    category: 'ai',
    ROI: '30% waste reduction'
  },
  {
    title: 'AI Customer Review & Reputation Management',
    slug: '/services/ai-reputation-management',
    description: 'Automated review monitoring, sentiment analysis, and response generation across all platforms. Improve online reputation scores by 50% with proactive reputation management.',
    icon: '⭐',
    category: 'ai',
    ROI: '50% reputation improvement'
  },
  {
    title: 'Travel Recommendation Engine',
    slug: '/services/ai-travel-recommendations',
    description: 'AI-powered activity suggestions, itinerary building, and local experience matching. Increase ancillary revenue by 45% through personalized upselling.',
    icon: '✈️',
    category: 'ai',
    ROI: '45% ancillary revenue'
  },
];

export default function HospitalityTourismPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-300 text-sm mb-6">
              <span className="text-green-400">●</span> AI-HOSPITALITY INDUSTRY SOLUTIONS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
                Hospitality & Tourism AI
              </span>{' '}
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI-powered automation for hotels, resorts, restaurants, and travel companies. 
              Optimize guest experiences, reduce costs, and increase revenue with hospitality AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">
                ⚡ Get Revenue Assessment →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse Hospitality Services
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-fuchsia-400 mb-1">35%</div>
                <div className="text-sm text-slate-400">Guest Satisfaction Increase</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-1">25%</div>
                <div className="text-sm text-slate-400">Revenue Boost</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-1">40%</div>
                <div className="text-sm text-slate-400">No-Show Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Solutions */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                AI-Powered Hospitality Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Transform your hospitality business with AI automation for guest experience, revenue optimization, 
              operational efficiency, and personalized service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-fuchsia-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="text-xs text-cyan-400 font-medium">{service.ROI}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-fuchsia-500 hover:to-violet-500 transition-all"
            >
              View All Hospitality Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ROI & Benefits Section */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Hospitality AI Benefits
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our AI solutions deliver measurable results across guest experience, revenue, 
              and operational efficiency for hospitality businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold text-white mb-2">Revenue Growth</h3>
              <p className="text-slate-400 text-sm">Dynamic pricing and upselling automation increase revenue by 20-35%</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Guest Loyalty</h3>
              <p className="text-slate-400 text-sm">Personalized experiences boost repeat bookings by 40%</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Efficiency</h3>
              <p className="text-slate-400 text-sm">Automate routine tasks, reduce staff workload by 30%</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-white mb-2">Cost Savings</h3>
              <p className="text-slate-400 text-sm">Reduce operational costs by 25% with AI optimization</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/configurator"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              ⚡ Get Your Free Revenue Assessment →
            </Link>
            <p className="text-slate-500 text-xs mt-2">Takes 2 minutes · No signup required</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Transform Your Hospitality Business
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free AI-powered hospitality assessment and customized solution recommendations. 
            Our autonomous AI agents analyze your business and deliver a roadmap to growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+130****0950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}