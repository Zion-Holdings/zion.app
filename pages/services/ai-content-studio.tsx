import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PenLine, Youtube, FileText, Globe, CheckCircle, DollarSign } from 'lucide-react';

export default function AIContentStudioPage() {
  return (
    <>
      <Head>
        <title>AI Content Studio | Blog, Social, and Video Scripts</title>
        <meta name="description" content="Generate SEO articles, social posts, and video scripts with brand voice controls, approvals, and CMS integrations." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-content-studio" />
      </Head>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Content Studio</h1>
            <p className="mt-6 text-gray-300 text-lg">Plan, draft, and publish content across channels with approval workflows and analytics.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <FileText className="w-6 h-6" />, title: 'Long-form', desc: 'Brief-to-draft SEO articles with citations.' },
              { icon: <Globe className="w-6 h-6" />, title: 'Social & Multilingual', desc: 'Brand-safe social calendars and translations.' },
              { icon: <Youtube className="w-6 h-6" />, title: 'Video Scripts', desc: 'Hooks, outlines, teleprompter scripts.' },
              { icon: <PenLine className="w-6 h-6" />, title: 'Brand Voice', desc: 'Style guardrails and terminology consistency.' },
              { icon: <DollarSign className="w-6 h-6" />, title: 'ROI', desc: 'Track conversions and assisted revenue.' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Integrations', desc: 'WordPress, HubSpot, Notion, YouTube.' }
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800/70">
                <div className="text-pink-400 mb-3">{f.icon}</div>
                <div className="font-semibold text-white">{f.title}</div>
                <div className="text-gray-400 text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gray-900/70 border border-gray-800/70">
              <h2 className="text-2xl font-bold text-white mb-4">Pricing (avg. market)</h2>
              <div className="text-gray-300 space-y-3">
                <div>Starter: $39–$99/mo</div>
                <div>Professional: $129–$299/mo</div>
                <div>Teams/Agency: $300–$1,000+/mo</div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Benchmarks: <a className="text-cyan-400 hover:underline" href="https://www.jasper.ai/pricing" target="_blank" rel="noopener noreferrer">Jasper Pricing</a>, <a className="text-cyan-400 hover:underline" href="https://copy.ai/pricing" target="_blank" rel="noopener noreferrer">Copy.ai Pricing</a>, <a className="text-cyan-400 hover:underline" href="https://www.canva.com/pricing/" target="_blank" rel="noopener noreferrer">Canva Pricing</a>.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/70 border border-gray-800/70">
              <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Product launches and email campaigns</li>
                <li>Social repurposing of blogs and videos</li>
                <li>Multi-language website updates</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold">Book a Demo</Link>
            <Link href="/pricing" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700">See Pricing</Link>
            <a href="https://marketingplatform.google.com/about/analytics/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700">Measure ROI</a>
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