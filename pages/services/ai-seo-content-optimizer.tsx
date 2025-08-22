import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, Sparkles, BarChart3, CheckCircle, DollarSign, Globe } from 'lucide-react';

export default function AISEOContentOptimizerPage() {
  return (
    <>
      <Head>
        <title>AI SEO Content Optimizer | Keyword, Outline, and On-Page AI</title>
        <meta name="description" content="Boost organic traffic with AI-driven keyword research, outlines, on-page recommendations, and competitor analysis." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-seo-content-optimizer" />
      </Head>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">AI SEO Content Optimizer</h1>
            <p className="mt-6 text-gray-300 text-lg">Plan, generate, and optimize SEO content with AI. Actionable on-page recommendations and SERP insights.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Search className="w-6 h-6" />, title: 'Keyword Discovery', desc: 'Topic clustering, intent, and difficulty.' },
              { icon: <Sparkles className="w-6 h-6" />, title: 'AI Drafts', desc: 'Outlines and drafts that match search intent.' },
              { icon: <BarChart3 className="w-6 h-6" />, title: 'On-Page Audits', desc: 'Entities, headings, links, and readability.' },
              { icon: <Globe className="w-6 h-6" />, title: 'International SEO', desc: 'Multilingual content and hreflang guidance.' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Integrations', desc: 'WordPress, Webflow, Shopify publishing.' },
              { icon: <DollarSign className="w-6 h-6" />, title: 'ROI Tracking', desc: 'Traffic and revenue attribution.' }
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800/70">
                <div className="text-cyan-400 mb-3">{f.icon}</div>
                <div className="font-semibold text-white">{f.title}</div>
                <div className="text-gray-400 text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gray-900/70 border border-gray-800/70">
              <h2 className="text-2xl font-bold text-white mb-4">Pricing (avg. market)</h2>
              <div className="text-gray-300 space-y-3">
                <div>Starter: $49–$99/mo</div>
                <div>Professional: $149–$299/mo</div>
                <div>Agency: $400–$1,000+/mo</div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Benchmarks: <a className="text-cyan-400 hover:underline" href="https://www.surferseo.com/pricing/" target="_blank" rel="noopener noreferrer">Surfer SEO Pricing</a>, <a className="text-cyan-400 hover:underline" href="https://www.clearscope.io/pricing" target="_blank" rel="noopener noreferrer">Clearscope Pricing</a>, <a className="text-cyan-400 hover:underline" href="https://semrush.com/prices/" target="_blank" rel="noopener noreferrer">SEMrush Pricing</a>.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/70 border border-gray-800/70">
              <h2 className="text-2xl font-bold text-white mb-4">Results</h2>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Faster content velocity and higher topical authority</li>
                <li>Improved rankings through entity-rich content</li>
                <li>Reduced research and editing time</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-600 text-white font-semibold">Start Now</Link>
            <Link href="/pricing" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700">Compare Plans</Link>
            <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700">Google SEO guide</a>
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