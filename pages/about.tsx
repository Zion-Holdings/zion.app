import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Zion Tech Group</title>
        <meta name="description" content="About Zion Tech Group: AI, micro SaaS, and enterprise IT innovators." />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">About Zion Tech Group</h1>
            <p className="text-gray-300 text-lg">We build real, outcome-oriented AI, micro SaaS, and enterprise IT solutions.</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400 mb-2">What we do</div>
              <div className="text-gray-200">200+ production-ready services across AI, DevOps, Security, Cloud, and Data.</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400 mb-2">How we deliver</div>
              <div className="text-gray-200">Template-driven deployments, SLAs, clear pricing, and measurable ROI.</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400 mb-2">Who we serve</div>
              <div className="text-gray-200">Startups to enterprises across healthcare, fintech, manufacturing, media, and public sector.</div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <ul className="text-gray-300 space-y-2">
                <li>Mobile: <a className="text-cyan-300" href="tel:+13024640950">+1 302 464 0950</a></li>
                <li>E-mail: <a className="text-purple-300" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
                <li>Address: <span className="text-gray-200">364 E Main St STE 1008 Middletown DE 19709</span></li>
                <li>Website: <a className="text-cyan-300" href="https://ziontechgroup.com">ziontechgroup.com</a></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <h2 className="text-2xl font-semibold mb-3">Get Started</h2>
              <p className="text-gray-300 mb-4">Book a consultation to map your roadmap to shipped outcomes.</p>
              <div className="flex gap-3">
                <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Talk to Sales</Button>
                <Button href="/pricing" variant="outline" className="border border-gray-600 text-gray-200">Pricing</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}