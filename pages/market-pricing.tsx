import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function MarketPricingPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Market Pricing & Competitor References | Zion Tech Group</title>
        <meta name="description" content="Transparent market pricing references and competitor links for AI, security, analytics, and cloud services." />
        <link rel="canonical" href="https://ziontechgroup.com/market-pricing" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Market Pricing & References</h1>
          <p className="text-slate-300">Below are easy-to-verify vendor references and typical pricing ranges to help you benchmark our offerings.</p>

          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl border border-sky-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">MLOps, Prompting & Evaluation</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Weights & Biases: <a className="text-cyan-400 underline" href={`https://wandb.ai/site/pricing`} target="_blank" rel="noopener noreferrer">wandb.ai/site/pricing</a></li>
                <li>Humanloop: <a className="text-cyan-400 underline" href={`https://humanloop.com/pricing`} target="_blank" rel="noopener noreferrer">humanloop.com/pricing</a></li>
                <li>Promptfoo: <a className="text-cyan-400 underline" href={`https://www.promptfoo.dev/pricing`} target="_blank" rel="noopener noreferrer">promptfoo.dev/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$800/month depending on test volume and team size.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">AI Guardrails & Safety</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>OpenAI Safety: <a className="text-cyan-400 underline" href={`https://openai.com/index/safety/`} target="_blank" rel="noopener noreferrer">openai.com/index/safety</a></li>
                <li>Anthropic RAI: <a className="text-cyan-400 underline" href={`https://www.anthropic.com/news`} target="_blank" rel="noopener noreferrer">anthropic.com/news</a> (policy updates)</li>
                <li>Guardrails libraries: <a className="text-cyan-400 underline" href={`https://github.com/shreyashankar/gpt-guardrails`} target="_blank" rel="noopener noreferrer">github.com/shreyashankar/gpt-guardrails</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $0–$500/month for hosted tools; internal policies recommended.</div>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">LLM & AI Platforms</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>OpenAI API pricing: <a className="text-cyan-400 underline" href={`https://openai.com/api/pricing`} target="_blank" rel="noopener noreferrer">openai.com/api/pricing</a></li>
                <li>Anthropic pricing: <a className="text-cyan-400 underline" href={`https://www.anthropic.com/pricing`} target="_blank" rel="noopener noreferrer">anthropic.com/pricing</a></li>
                <li>Langfuse (observability) pricing: <a className="text-cyan-400 underline" href={`https://langfuse.com/pricing`} target="_blank" rel="noopener noreferrer">langfuse.com/pricing</a> (community + paid tiers)</li>
                <li>OpenRouter model pricing: <a className="text-cyan-400 underline" href={`https://openrouter.ai/models`} target="_blank" rel="noopener noreferrer">openrouter.ai/models</a></li>
                <li>Vercel AI SDK pricing notes: <a className="text-cyan-400 underline" href={`https://vercel.com/pricing`} target="_blank" rel="noopener noreferrer">vercel.com/pricing</a> (edge/function costs)</li>
                <li>Groq API pricing: <a className="text-cyan-400 underline" href={`https://wow.groq.com/pricing`} target="_blank" rel="noopener noreferrer">wow.groq.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$2,000/month depending on traffic and model choice.</div>
            </div>

            {/* ... existing sections unchanged ... */}
          </div>

          {/* Added references for Affiliate & Partner Tools and Developer Analytics */}
          <div className="space-y-6">
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Affiliate & Partner Tools</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Tapfiliate: <a className="text-cyan-400 underline" href={`https://tapfiliate.com/pricing/`} target="_blank" rel="noopener noreferrer">tapfiliate.com/pricing</a></li>
                <li>PartnerStack: <a className="text-cyan-400 underline" href={`https://partnerstack.com/pricing`} target="_blank" rel="noopener noreferrer">partnerstack.com/pricing</a></li>
                <li>FirstPromoter: <a className="text-cyan-400 underline" href={`https://firstpromoter.com/pricing`} target="_blank" rel="noopener noreferrer">firstpromoter.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $49–$500/month depending on partners and payouts.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Developer Analytics</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Linear: <a className="text-cyan-400 underline" href={`https://linear.app/pricing`} target="_blank" rel="noopener noreferrer">linear.app/pricing</a></li>
                <li>GitHub: <a className="text-cyan-400 underline" href={`https://github.com/pricing`} target="_blank" rel="noopener noreferrer">github.com/pricing</a> (Actions & Seats)</li>
                <li>Grafana Cloud: <a className="text-cyan-400 underline" href={`https://grafana.com/products/cloud/pricing/`} target="_blank" rel="noopener noreferrer">grafana.com/products/cloud/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $0–$500/month depending on seats and volume.</div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}