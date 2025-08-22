import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Search, ArrowRight, Rocket, Filter, DollarSign } from 'lucide-react';
import { realMarketServices } from '../data/real-market-services';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { marketValidatedServices } from '../data/market-validated-services';

export default function MicroSaaSPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 24;

  const allServices = useMemo(() => {
    const combined = [
      ...realMarketServices,
      ...enhancedRealMicroSaasServices,
      ...marketValidatedServices,
    ].map((s) => ({
      id: (s as any).id,
      name: (s as any).name,
      tagline: (s as any).tagline,
      price: (s as any).price,
      period: (s as any).period,
      description: (s as any).description,
      features: (s as any).features || [],
      icon: (s as any).icon || '✨',
      color: (s as any).color || 'from-cyan-600 to-blue-700',
      textColor: (s as any).textColor || 'text-cyan-300',
      link: (s as any).link || `/${(s as any).id}`,
      category: (s as any).category || 'General',
      popular: !!(s as any).popular,
    }));

    // Deduplicate by id
    const byId = new Map<string, any>();
    for (const svc of combined) {
      if (!byId.has(svc.id)) byId.set(svc.id, svc);
    }
    return Array.from(byId.values());
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allServices;
    return allServices.filter((s) =>
      s.name.toLowerCase().includes(q) ||
      (s.tagline || '').toLowerCase().includes(q) ||
      (s.category || '').toLowerCase().includes(q)
    );
  }, [allServices, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <Head>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Explore real, production-ready micro SaaS services with transparent pricing and instant value." />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      <section className="pt-28 pb-10 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 mr-2" /> Micro SaaS Catalog
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Real Micro SaaS Services</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">Hand-picked services with fast setup, clear value, and market-aligned pricing.</p>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                placeholder="Search by name, category, or use case..."
                className="w-full pl-12 pr-4 py-3 bg-gray-900/80 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx % 6) * 0.05 }}
                className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-gray-800/70 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r ${s.color}`}>
                    <span className="text-lg">{s.icon}</span>
                  </div>
                  {s.popular && (
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">Popular</span>
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{s.name}</h3>
                <div className="text-sm text-gray-400 mb-3">{s.tagline}</div>
                <div className="text-sm text-cyan-300 font-medium flex items-center gap-1">
                  <DollarSign className="w-4 h-4" /> {s.price}<span className="text-gray-400">{s.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {s.features.slice(0, 3).map((f: string) => (
                    <li key={f} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400" /><span>{f}</span></li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link href={s.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 rounded-lg bg-gray-900/70 border border-gray-800 text-gray-300 hover:border-cyan-500/30"
              disabled={page === 1}
            >
              Previous
            </button>
            <div className="text-gray-400 text-sm">Page {page} of {pageCount}</div>
            <button
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              className="px-4 py-2 rounded-lg bg-gray-900/70 border border-gray-800 text-gray-300 hover:border-cyan-500/30"
              disabled={page === pageCount}
            >
              Next
            </button>
          </div>

          <div className="mt-10 text-center">
            <Link href="/market-pricing" className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/15">
              <Filter className="w-4 h-4 mr-2" /> See Market Pricing References
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

