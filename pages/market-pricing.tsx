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
              <h2 className="text-2xl font-semibold mb-2">LLM & AI Platforms</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>OpenAI API pricing: <a className="text-cyan-400 underline" href={`https://openai.com/api/pricing`} target="_blank" rel="noopener noreferrer">openai.com/api/pricing</a></li>
                <li>Anthropic pricing: <a className="text-cyan-400 underline" href={`https://www.anthropic.com/pricing`} target="_blank" rel="noopener noreferrer">anthropic.com/pricing</a></li>
                <li>Langfuse (observability) pricing: <a className="text-cyan-400 underline" href={`https://langfuse.com/pricing`} target="_blank" rel="noopener noreferrer">langfuse.com/pricing</a> (community + paid tiers)</li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$2,000/month depending on traffic and model choice.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Security & Compliance</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Wiz pricing overview: <a className="text-cyan-400 underline" href={`https://www.wiz.io/pricing`} target="_blank" rel="noopener noreferrer">wiz.io/pricing</a></li>
                <li>Prisma Cloud: <a className="text-cyan-400 underline" href={`https://www.paloaltonetworks.com/prisma/cloud/pricing`} target="_blank" rel="noopener noreferrer">paloaltonetworks.com/prisma/cloud/pricing</a></li>
                <li>HashiCorp Vault: <a className="text-cyan-400 underline" href={`https://www.hashicorp.com/products/vault/pricing`} target="_blank" rel="noopener noreferrer">hashicorp.com/products/vault/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $200–$5,000/month based on scale and compliance scope.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Data & Analytics</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Snowflake pricing: <a className="text-cyan-400 underline" href={`https://www.snowflake.com/pricing/`} target="_blank" rel="noopener noreferrer">snowflake.com/pricing</a></li>
                <li>BigQuery pricing: <a className="text-cyan-400 underline" href={`https://cloud.google.com/bigquery/pricing`} target="_blank" rel="noopener noreferrer">cloud.google.com/bigquery/pricing</a></li>
                <li>Databricks: <a className="text-cyan-400 underline" href={`https://www.databricks.com/product/pricing`} target="_blank" rel="noopener noreferrer">databricks.com/product/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$3,000/month depending on storage, queries, and concurrency.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Cloud & Edge</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>AWS pricing calculator: <a className="text-cyan-400 underline" href={`https://calculator.aws`} target="_blank" rel="noopener noreferrer">calculator.aws</a></li>
                <li>Azure pricing: <a className="text-cyan-400 underline" href={`https://azure.microsoft.com/pricing`} target="_blank" rel="noopener noreferrer">azure.microsoft.com/pricing</a></li>
                <li>Cloudflare plans: <a className="text-cyan-400 underline" href={`https://www.cloudflare.com/plans/`} target="_blank" rel="noopener noreferrer">cloudflare.com/plans</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $200–$10,000/month depending on traffic and workloads.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Contact Center & Voice AI</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Twilio: <a className="text-cyan-400 underline" href={`https://www.twilio.com/pricing`} target="_blank" rel="noopener noreferrer">twilio.com/pricing</a></li>
                <li>Deepgram: <a className="text-cyan-400 underline" href={`https://deepgram.com/pricing`} target="_blank" rel="noopener noreferrer">deepgram.com/pricing</a></li>
                <li>ElevenLabs: <a className="text-cyan-400 underline" href={`https://elevenlabs.io/pricing`} target="_blank" rel="noopener noreferrer">elevenlabs.io/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$1,500/month by minutes, languages, and concurrency.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Email Deliverability & Warmup</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Google Postmaster Tools: <a className="text-cyan-400 underline" href={`https://postmaster.google.com`} target="_blank" rel="noopener noreferrer">postmaster.google.com</a></li>
                <li>Mailgun pricing: <a className="text-cyan-400 underline" href={`https://www.mailgun.com/pricing/`} target="_blank" rel="noopener noreferrer">mailgun.com/pricing</a></li>
                <li>SendGrid pricing: <a className="text-cyan-400 underline" href={`https://sendgrid.com/pricing/`} target="_blank" rel="noopener noreferrer">sendgrid.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$300/month for warmup and monitoring; ESP fees separate.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Product Analytics & Personalization</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Amplitude pricing: <a className="text-cyan-400 underline" href={`https://amplitude.com/pricing`} target="_blank" rel="noopener noreferrer">amplitude.com/pricing</a></li>
                <li>Mixpanel pricing: <a className="text-cyan-400 underline" href={`https://mixpanel.com/pricing/`} target="_blank" rel="noopener noreferrer">mixpanel.com/pricing</a></li>
                <li>Mutiny personalization: <a className="text-cyan-400 underline" href={`https://www.mutinyhq.com/product`} target="_blank" rel="noopener noreferrer">mutinyhq.com/product</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$1,500/month depending on MAUs and features.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Vector Search & Retrieval</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Pinecone pricing: <a className="text-cyan-400 underline" href={`https://www.pinecone.io/pricing/`} target="_blank" rel="noopener noreferrer">pinecone.io/pricing</a></li>
                <li>Weaviate Cloud: <a className="text-cyan-400 underline" href={`https://weaviate.io/pricing`} target="_blank" rel="noopener noreferrer">weaviate.io/pricing</a></li>
                <li>Elastic Search pricing: <a className="text-cyan-400 underline" href={`https://www.elastic.co/pricing`} target="_blank" rel="noopener noreferrer">elastic.co/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $50–$1,000/month depending on index size and QPS.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">API Security & Edge</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Cloudflare plans: <a className="text-cyan-400 underline" href={`https://www.cloudflare.com/plans/`} target="_blank" rel="noopener noreferrer">cloudflare.com/plans</a></li>
                <li>Fastly pricing: <a className="text-cyan-400 underline" href={`https://www.fastly.com/pricing`} target="_blank" rel="noopener noreferrer">fastly.com/pricing</a></li>
                <li>Salt Security overview: <a className="text-cyan-400 underline" href={`https://salt.security`} target="_blank" rel="noopener noreferrer">salt.security</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$2,000/month based on traffic and protections.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-slate-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Privacy, PII & DSAR</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Skyflow pricing: <a className="text-cyan-400 underline" href={`https://www.skyflow.com/pricing`} target="_blank" rel="noopener noreferrer">skyflow.com/pricing</a></li>
                <li>VGS pricing: <a className="text-cyan-400 underline" href={`https://www.verygoodsecurity.com/pricing`} target="_blank" rel="noopener noreferrer">verygoodsecurity.com/pricing</a></li>
                <li>Transcend: <a className="text-cyan-400 underline" href={`https://transcend.io/product/`} target="_blank" rel="noopener noreferrer">transcend.io/product</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$2,000/month by data volume and systems.</div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Identity & SSO/SCIM</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Auth0 pricing: <a className="text-cyan-400 underline" href={`https://auth0.com/pricing`} target="_blank" rel="noopener noreferrer">auth0.com/pricing</a></li>
                <li>WorkOS pricing: <a className="text-cyan-400 underline" href={`https://workos.com/pricing`} target="_blank" rel="noopener noreferrer">workos.com/pricing</a></li>
                <li>Okta pricing: <a className="text-cyan-400 underline" href={`https://www.okta.com/pricing/`} target="_blank" rel="noopener noreferrer">okta.com/pricing</a></li>
              </ul>
              <div className="text-sm text-slate-400 mt-3">Typical SMB budgets: $100–$1,500/month depending on MAUs and features.</div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

