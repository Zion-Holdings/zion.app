import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function MarketPricingPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const pricing = [
    { area: 'AI APIs (LLMs)', range: '$5 - $5000+/mo', refs: [
      { name: 'OpenAI Pricing', url: 'https://openai.com/api/pricing' },
      { name: 'Anthropic Pricing', url: 'https://www.anthropic.com/pricing' }
    ]},
    { area: 'Vector DB', range: '$0 - $2000+/mo', refs: [
      { name: 'Pinecone Pricing', url: 'https://www.pinecone.io/pricing/' },
      { name: 'Weaviate Pricing', url: 'https://weaviate.io/pricing' }
    ]},
    { area: 'Hosting (Jamstack/SSR)', range: '$0 - $2000+/mo', refs: [
      { name: 'Vercel Pricing', url: 'https://vercel.com/pricing' },
      { name: 'Netlify Pricing', url: 'https://www.netlify.com/pricing/' }
    ]},
    { area: 'CDN & Security', range: '$0 - $5000+/mo', refs: [
      { name: 'Cloudflare Plans', url: 'https://www.cloudflare.com/plans/' }
    ]},
    { area: 'Monitoring & APM', range: '$20 - $5000+/mo', refs: [
      { name: 'Datadog Pricing', url: 'https://www.datadoghq.com/pricing/' },
      { name: 'Sentry Pricing', url: 'https://sentry.io/pricing/' }
    ]},
    { area: 'Email & SMS', range: '$15 - $2000+/mo', refs: [
      { name: 'SendGrid Pricing', url: 'https://sendgrid.com/pricing/' },
      { name: 'Twilio Pricing', url: 'https://www.twilio.com/pricing' }
    ]},
    { area: 'Payments', range: '2.9% + 30¢/txn typical', refs: [
      { name: 'Stripe Pricing', url: 'https://stripe.com/pricing' }
    ]},
    { area: 'Auth & Identity', range: '$0 - $1500+/mo', refs: [
      { name: 'Auth0 Pricing', url: 'https://auth0.com/pricing' },
      { name: 'Clerk Pricing', url: 'https://clerk.com/pricing' }
    ]}
  ];

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Market Pricing | Zion Tech Group</title>
        <meta name="description" content="Average market prices for AI, cloud, DevOps, and SaaS tooling with references." />
        <link rel="canonical" href="https://ziontechgroup.com/market-pricing" />
      </Head>

      <div className="container mx-auto px-4 py-16 text-white">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Market Pricing</h1>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">Transparent reference ranges to scope budgets. Actual pricing varies by usage, seats, regions, and add-ons. We benchmark providers and optimize for ROI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div key={p.area} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">Category</div>
              <h2 className="text-xl font-semibold text-white mb-1">{p.area}</h2>
              <div className="text-gray-100 font-bold mb-3">{p.range}</div>
              <div className="text-sm text-gray-400 mb-2">References</div>
              <ul className="space-y-1">
                {p.refs.map((r) => (
                  <li key={r.url}><a href={r.url} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">{r.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-black/40 border border-gray-700/60">
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p className="text-gray-300">Call {contact.mobile} • Email <a className="text-purple-300" href={`mailto:${contact.email}`}>{contact.email}</a> • Visit us at {contact.address}</p>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}