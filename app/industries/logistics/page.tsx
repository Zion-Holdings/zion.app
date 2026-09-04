// app/industries/logistics/page.tsx - Logistics & Supply Chain AI Solutions
'use client';

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { Truck, Route, Package, BarChart3, Globe, Clock, ArrowLeftIcon } from 'lucide-react';

export const metadata = {
  title: 'Logistics AI Solutions | Supply Chain Optimization & Route Planning | Zion Tech Group',
  description: 'AI-powered logistics solutions for supply chain visibility, route optimization, warehouse automation, and demand forecasting. Increase efficiency and reduce costs.',
  keywords: 'logistics AI, supply chain AI, route optimization, warehouse automation, demand forecasting, fleet management',
  alternates: {
    canonical: 'https://ziontechgroup.com/industries/logistics',
  },
};

const LOGISTICS_SERVICES = [
  {
    id: 'route-optimization-ai',
    title: 'AI Route Optimization Platform',
    desc: 'Real-time route optimization with traffic, weather, and demand data. Reduce delivery times by 35% and fuel costs by 20%.',
    price: 'From $3,999/mo',
    metrics: '35% faster delivery',
    icon: '🗺️'
  },
  {
    id: 'supply-chain-visibility-platform',
    title: 'Supply Chain Visibility Platform',
    desc: 'End-to-end tracking with predictive analytics. Monitor shipments, inventory, and suppliers in real time.',
    price: 'From $5,999/mo',
    metrics: '40% visibility gain',
    icon: '👁️'
  },
  {
    id: 'demand-forecasting-ai',
    title: 'AI Demand Forecasting Engine',
    desc: 'Machine learning models predict demand with 95% accuracy. Optimize inventory and reduce stockouts by 50%.',
    price: 'From $4,499/mo',
    metrics: '95% accuracy',
    icon: '📈'
  },
  {
    id: 'warehouse-automation-ai',
    title: 'AI Warehouse Automation System',
    desc: 'Smart inventory management, automated picking, and optimized storage layout. Increase warehouse efficiency by 40%.',
    price: 'From $6,999/mo',
    metrics: '40% efficiency gain',
    icon: '🏭'
  },
  {
    id: 'fleet-management-ai',
    title: 'AI Fleet Management Platform',
    desc: 'Predictive maintenance, driver behavior analytics, and fuel optimization. Reduce fleet costs by 25%.',
    price: 'From $2,999/mo',
    metrics: '25% cost reduction',
    icon: '🚛'
  },
  {
    id: 'logistics-risk-analytics',
    title: 'Supply Chain Risk Analytics',
    desc: 'Identify potential disruptions from weather, geopolitical events, and supplier risks. Get early warnings and mitigation strategies.',
    price: 'From $4,999/mo',
    metrics: '60% risk reduction',
    icon: '⚠️'
  },
];

export default function LogisticsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group - Logistics AI Solutions',
          description: 'Enterprise AI solutions for Logistics & Supply Chain sectors including route optimization, demand forecasting, warehouse automation, and risk analytics.',
          url: 'https://ziontechgroup.com/industries/logistics',
          industry: 'Logistics',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            countryName: 'USA',
          },
          sameAs: ['https://ziontechgroup.com/industries/logistics'],
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        {/* Breadcrumb */}
        <div className="container-page py-4">
          <nav className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-300">Logistics</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900/20" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl" />

          <div className="container-page relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Truck className="w-4 h-4" /> AI-Powered Logistics
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Supply Chain Excellence
                </span>{' '}
                <span className="text-white">with AI</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Optimize routes, predict demand, and gain end-to-end visibility across your supply chain. 
                Reduce costs by 25% while improving delivery times and customer satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/configurator/"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Get Your Custom Proposal
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  View All Logistics Services
                </Link>
              </div>

              <div className="flex justify-center">
                <a href="tel:+130****0950" className="text-slate-400 hover:text-slate-300">
                  ☎ +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 px-4">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
                Logistics Impact
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Proven results across retail, e-commerce, manufacturing, and 3PL providers.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
                <div className="text-slate-400 text-sm">Faster Delivery</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
                <div className="text-slate-400 text-sm">Stockout Reduction</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">25%</div>
                <div className="text-slate-400 text-sm">Cost Reduction</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-slate-400 text-sm">Visibility Gain</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-slate-950/50">
          <div className="container-page">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
              Logistics AI Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOGISTICS_SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group glass-card flex flex-col h-full hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-2xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-base mb-1 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-2 line-clamp-2">{service.desc}</p>
                      <div className="text-xs text-blue-400 font-semibold mb-3">
                        {service.metrics}
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <span className="text-purple-300 text-sm font-medium">
                      {service.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-green-400">
                Logistics AI Benefits
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Route className="w-5 h-5 text-blue-400" />
                  Optimized Routes
                </h3>
                <p className="text-slate-400 text-sm">
                  Real-time route optimization reduces delivery times and fuel costs.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-400" />
                  Full Visibility
                </h3>
                <p className="text-slate-400 text-sm">
                  Track shipments, inventory, and suppliers across the entire supply chain.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  On-Time Delivery
                </h3>
                <p className="text-slate-400 text-sm">
                  Predict delays and proactively manage customer expectations.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5 text-amber-400" />
                  Inventory Optimization
                </h3>
                <p className="text-slate-400 text-sm">
                  AI demand forecasting reduces stockouts and excess inventory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
          <div className="container-page text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Schedule a free consultation to discover how our AI solutions can transform 
              your logistics operations and deliver measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/kleber-ziontechgroup"
                className="btn-primary text-lg px-8 py-4"
              >
                Book Free Consultation
              </Link>
              <Link
                href="mailto:kleber@ziontechgroup.com"
                className="btn-secondary text-lg px-8 py-4"
              >
                Email: kleber@ziontechgroup.com
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}