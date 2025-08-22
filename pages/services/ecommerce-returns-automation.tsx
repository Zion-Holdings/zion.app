import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Truck, RefreshCcw, FileText, CheckCircle, DollarSign, BarChart3 } from 'lucide-react';

export default function EcommerceReturnsAutomationPage() {
  return (
    <>
      <Head>
        <title>E-commerce Returns Automation | Labels, Workflows, Analytics</title>
        <meta name="description" content="Automate returns with branded portals, label generation, RMA workflows, and analytics. Reduce costs and boost customer satisfaction." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ecommerce-returns-automation" />
      </Head>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">E-commerce Returns Automation</h1>
            <p className="mt-6 text-gray-300 text-lg">Automate RMAs, generate labels, sync with Shopify/WooCommerce, and track return reasons to cut costs and improve CX.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <RefreshCcw className="w-6 h-6" />, title: 'Self-Service Portal', desc: 'Brandable return portal with policy rules.' },
              { icon: <Truck className="w-6 h-6" />, title: 'Label Generation', desc: 'Auto-generate UPS/USPS/FedEx labels.' },
              { icon: <FileText className="w-6 h-6" />, title: 'RMA Workflows', desc: 'Approvals, exchanges, store-credit flows.' },
              { icon: <BarChart3 className="w-6 h-6" />, title: 'Analytics', desc: 'Reason codes, product trends, refund SLAs.' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Fraud Controls', desc: 'Serials, photos, exclusions, blacklists.' },
              { icon: <DollarSign className="w-6 h-6" />, title: 'Cost Controls', desc: 'Smart restocking fees, shipping rules.' }
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800/70">
                <div className="text-emerald-400 mb-3">{f.icon}</div>
                <div className="font-semibold text-white">{f.title}</div>
                <div className="text-gray-400 text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gray-900/70 border border-gray-800/70">
              <h2 className="text-2xl font-bold text-white mb-4">Integrations</h2>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Shopify, WooCommerce, BigCommerce</li>
                <li>Shippo, EasyPost, ShipStation</li>
                <li>Zendesk, Gorgias, Intercom</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/70 border border-gray-800/70">
              <h2 className="text-2xl font-bold text-white mb-4">Pricing (avg. market)</h2>
              <div className="text-gray-300 space-y-3">
                <div>Starter: $100–$300/mo + label fees</div>
                <div>Growth: $400–$900/mo + usage</div>
                <div>Enterprise: Custom with SLAs</div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Benchmarks: <a className="text-cyan-400 hover:underline" href="https://www.returns.com/pricing" target="_blank" rel="noopener noreferrer">Returns.com Pricing</a>, <a className="text-cyan-400 hover:underline" href="https://www.loopreturns.com/pricing" target="_blank" rel="noopener noreferrer">Loop Returns Pricing</a>, <a className="text-cyan-400 hover:underline" href="https://www.shippo.com/pricing/" target="_blank" rel="noopener noreferrer">Shippo Pricing</a>.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold">Request Demo</Link>
            <Link href="/pricing" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700">Compare Pricing</Link>
            <a href="https://www.shopify.com/retail/returns-management" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700">Returns best practices</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 text-sm text-gray-400">
          <div>Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</div>
        </div>
      </section>
    </>
  );
}