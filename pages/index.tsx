import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function HomePage() {
  const pageTitle = 'Zion Tech Group — AI, Quantum, and Micro SAAS Solutions';
  const pageDescription = 'Transform your business with AI, quantum, and micro SAAS. Explore our services, pricing, and solutions built to scale.';

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} />
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-text-cyan-purple">
              Build the Future with Zion Tech Group
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300">
              AI-powered platforms, quantum-ready architectures, and market-ready micro SAAS. We turn bold ideas into production-grade systems.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                Explore Services
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur animated-border">
              <h3 className="text-xl font-bold">AI Systems</h3>
              <p className="mt-2 text-gray-300">Autonomous agents, vector search, and real-time analytics for decision intelligence.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur animated-border">
              <h3 className="text-xl font-bold">Micro SAAS</h3>
              <p className="mt-2 text-gray-300">Composable products with fast go-to-market, usage-based pricing, and robust APIs.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur animated-border">
              <h3 className="text-xl font-bold">Enterprise Platforms</h3>
              <p className="mt-2 text-gray-300">Cloud, security, and automation patterns to scale with reliability and compliance.</p>
            </div>
          </div>

          <div className="mt-16 p-6 rounded-lg bg-white/5 backdrop-blur animated-border">
            <h3 className="text-xl font-bold">New: Q4 2029 Additions</h3>
            <p className="mt-2 text-gray-300">Explore our latest offerings including Kubernetes Cost Anomaly Guard, AI Sales Sequence Personalizer, and Postgres Performance Tuner.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/services/kubernetes-cost-anomaly-guard" className="px-4 py-2 rounded-md bg-white text-black text-sm font-semibold hover:bg-gray-200">K8s Cost Guard</Link>
              <Link href="/services/ai-sales-sequence-personalizer" className="px-4 py-2 rounded-md bg-white text-black text-sm font-semibold hover:bg-gray-200">Sales Personalizer</Link>
              <Link href="/services/postgres-performance-tuner" className="px-4 py-2 rounded-md bg-white text-black text-sm font-semibold hover:bg-gray-200">Postgres Tuner</Link>
              <Link href="/services-advertising" className="px-4 py-2 rounded-md border border-white/30 text-white text-sm font-semibold hover:bg-white/10">See All New</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
