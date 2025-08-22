import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../ui/UltraFuturisticBackground';

interface ReferenceLink { name: string; href: string }

interface ServiceLandingProps {
  title: string;
  slug?: string;
  subtitle?: string;
  description: string;
  features?: string[];
  typicalBudget?: string;
  references?: ReferenceLink[];
  // Legacy optional fields used by older pages
  pricePerMonthUSD?: number;
  implementationWeeks?: string;
  roiNote?: string;
  industries?: string[];
  ctaHref?: string;
  canonical?: string;
}

export default function ServiceLanding({ title, slug, subtitle, description, features = [], typicalBudget, references = [], pricePerMonthUSD, implementationWeeks, roiNote, industries = [], ctaHref, canonical }: ServiceLandingProps) {
  const computedCanonical = canonical || (slug ? `https://ziontechgroup.com/${slug.replace(/^\/+/, '')}` : 'https://ziontechgroup.com');
  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content={subtitle || description} />
        <link rel="canonical" href={computedCanonical} />
        <meta property="og:title" content={`${title} | Zion Tech Group`} />
        <meta property="og:description" content={subtitle || description} />
        <meta property="og:url" content={computedCanonical} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">{title}</h1>
            {subtitle && <p className="text-gray-300 text-lg">{subtitle}</p>}
          </div>
          <p className="text-gray-300 leading-relaxed">{description}</p>

          {(pricePerMonthUSD !== undefined || implementationWeeks || roiNote) && (
            <div className="bg-black/40 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">At a Glance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-300">
                {pricePerMonthUSD !== undefined && (
                  <div>
                    <div className="text-sm text-gray-400">Starting at</div>
                    <div className="text-2xl font-bold">${pricePerMonthUSD.toLocaleString()}/month</div>
                  </div>
                )}
                {implementationWeeks && (
                  <div>
                    <div className="text-sm text-gray-400">Implementation</div>
                    <div className="text-lg font-medium">{implementationWeeks}</div>
                  </div>
                )}
                {roiNote && (
                  <div>
                    <div className="text-sm text-gray-400">Expected ROI</div>
                    <div className="text-lg font-medium">{roiNote}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {industries.length > 0 && (
            <div className="bg-black/40 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">Best For</h2>
              <div className="flex flex-wrap gap-2">
                {industries.map((i) => (
                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300 border border-white/10">{i}</span>
                ))}
              </div>
            </div>
          )}

          {features.length > 0 && (
            <div className="bg-black/40 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                {features.map((f) => (
                  <li key={f} className="list-disc list-inside">{f}</li>
                ))}
              </ul>
            </div>
          )}

          {(typicalBudget || references.length > 0) && (
            <div className="bg-black/40 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">Pricing & References</h2>
              {typicalBudget && (
                <div className="text-sm text-gray-400 mb-3">Typical SMB budget: {typicalBudget}</div>
              )}
              {references.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-cyan-300">
                  {references.map((r) => (
                    <li key={r.href}><a className="underline" href={r.href} target="_blank" rel="noopener noreferrer">{r.name}</a></li>
                  ))}
                </ul>
              )}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={ctaHref || '/contact'} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg">Contact Sales</a>
            <a href="/pricing" className="px-6 py-3 border border-gray-600 text-gray-200 rounded-lg">View Pricing</a>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}