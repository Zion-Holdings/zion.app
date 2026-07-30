import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Retail & E-Commerce | Zion Tech Group',
  description: 'AI product recommendations, inventory optimization, customer behavior analytics, and e-commerce automation for retailers and online stores.',
  keywords: 'retail AI, e-commerce AI, product recommendations, inventory optimization, customer analytics, retail automation',
  alternates: { canonical: '/industries/retail-ecommerce' },
};

const SERVICES = [
  {
    title: 'AI Product Recommendation Engine',
    slug: '/services/recommendation-engine',
    description: 'AI-powered personalized product recommendations that increase conversions by 20-40%. Real-time suggestions based on browsing behavior and purchase history.',
    icon: '🎯',
    category: 'ai',
    ROI: '40% conversion boost'
  },
  {
    title: 'Inventory Optimization AI',
    slug: '/services/inventory-optimization',
    description: 'AI-driven inventory management with demand forecasting, stock level optimization, and automated reorder points. Reduce stockouts by 60% and overstock by 40%.',
    icon: '📦',
    category: 'ai',
    ROI: '60% stockout reduction'
  },
  {
    title: 'Customer Behavior Analytics',
    slug: '/services/customer-behavior-analytics',
    description: 'AI-powered customer journey analytics, churn prediction, and lifetime value modeling. Understand what drives customer loyalty and revenue.',
    icon: '📊',
    category: 'data',
    ROI: 'Predictive insights'
  },
  {
    title: 'AI Pricing Optimization',
    slug: '/services/ai-pricing-optimization',
    description: 'Dynamic pricing AI that adjusts prices in real-time based on demand, competition, and inventory. Increase margins by 5-15% with intelligent pricing.',
    icon: '💰',
    category: 'ai',
    ROI: '15% margin gain'
  },
  {
    title: 'Visual Search & AI Product Tagging',
    slug: '/services/visual-search',
    description: 'AI-powered visual search and automatic product tagging. Customers search with images, and products are tagged automatically with AI vision.',
    icon: '🔍',
    category: 'ai',
    ROI: 'Instant tagging'
  },
  {
    title: 'AI Customer Service for E-Commerce',
    slug: '/services/ai-customer-service',
    description: 'AI chatbots, order tracking, and automated support for e-commerce. Reduce support tickets by 70% with intelligent customer service automation.',
    icon: '🤖',
    category: 'ai',
    ROI: '70% ticket reduction'
  },
];

export default function RetailEcommercePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-900/30 border border-sky-500/30 text-sky-300 text-sm mb-6">
              <span className="text-green-400">●</span> AI-DRIVEN RETAIL
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Retail & E-Commerce
              </span>{' '}
              <span className="text-white">AI Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI product recommendations, inventory optimization, customer analytics, and e-commerce automation 
              for retailers and online stores. Drive sales, reduce waste, and improve customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact" className="btn-primary text-lg px-10 py-4">
                ⚡ Get Sales Boost Analysis →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse Retail Services
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-1">40%</div>
                <div className="text-sm text-slate-400">Conversion Boost</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-1">60%</div>
                <div className="text-sm text-slate-400">Stockout Reduction</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-sky-400 mb-1">70%</div>
                <div className="text-sm text-slate-400">Ticket Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                AI-Powered Retail Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Increase sales, reduce inventory waste, and improve customer experience with AI agents working 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-sky-500/40 transition-all"
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-sky-500 hover:to-cyan-500 transition-all"
            >
              View All Retail Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              AI-Driven Sales Growth
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free e-commerce AI audit from our AI agents. Discover how AI can increase your sales 
            and reduce operational costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Retail Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}