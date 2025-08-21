import React from 'react';
import Head from 'next/head';
import { Brain, Cpu, Database, Network, Rocket, Phone, Mail, MapPin, Check, FlaskConical } from 'lucide-react';
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground';
import Button from '../components/ui/Button';
import ServiceAds from '../components/sections/ServiceAds';

export default function AIServicesPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const tracks = [
    { icon: <Brain className="w-6 h-6 text-cyan-400" />, title: 'LLM Applications', desc: 'Custom GPT-style apps, copilots, and autonomous agents integrated with your systems.' },
    { icon: <Database className="w-6 h-6 text-emerald-400" />, title: 'RAG & Vector Search', desc: 'Retrieval augmented generation with hybrid search, chunking, and evaluation frameworks.' },
    { icon: <Cpu className="w-6 h-6 text-purple-400" />, title: 'MLOps', desc: 'Model lifecycle, feature stores, experiment tracking, CI/CD for ML, model registries.' },
    { icon: <FlaskConical className="w-6 h-6 text-amber-400" />, title: 'AI for Research', desc: 'Knowledge graphs, literature mining, hypothesis generation and automated reviews.' },
  ];

  const packages = [
    { name: 'Prototype', price: '$6,900 fixed', items: ['Problem framing workshop', 'Clickable demo in 2 weeks', 'Data feasibility check', 'T-shirt sizing for scale'] },
    { name: 'Production', price: '$18,900 fixed', items: ['RAG pipeline + evals', 'Observability & guardrails', 'Cost/perf tuning', 'Rollout playbook'] },
    { name: 'Managed AI', price: 'From $3,500/month', items: ['SLA-backed ops', 'Drift monitoring', 'A/B and feedback loops', 'Quarterly roadmap review'] },
  ];

  const featuredAIAds = [
    {
      title: '🤖 AI Assistant Pro',
      description: 'Secure, branded copilot with RAG, handoff, and analytics to cut support tickets 30-50%.',
      price: 'Starting at $149/month',
      features: ['RAG over your docs', 'Slack/Teams channels', 'Human handoff', 'Conversation analytics'],
      link: 'https://ziontechgroup.com/ai-assistant',
      contactInfo
    },
    {
      title: '🧪 AI Evals & Observability',
      description: 'Ship reliable LLM features with regression testing, red-teaming, and live metrics.',
      price: 'Starting at $99/month',
      features: ['Dataset/version mgmt', 'Guardrail checks', 'Latency/cost KPIs', 'Prompt diffing'],
      link: 'https://ziontechgroup.com/ai-evals',
      contactInfo
    },
    {
      title: '🔗 Agentic RAG Platform',
      description: 'Production RAG with hybrid search, chunking strategies, and agentic tools.',
      price: 'Starting at $179/month',
      features: ['Hybrid vector+BM25', 'Chunking + citations', 'Toolformer-style agents', 'Eval suite'],
      link: 'https://ziontechgroup.com/agentic-rag',
      contactInfo
    },
    {
      title: '🛡️ AI Guardrails Suite',
      description: 'Policy enforcement, jailbreak detection, PII/PHI controls, and audit trails.',
      price: 'Starting at $199/month',
      features: ['Prompt/output policy engine', 'Jailbreak detection', 'PII/PHI redaction', 'Audit logs & alerts'],
      link: 'https://ziontechgroup.com/ai-guardrails',
      contactInfo
    }
  ];

  return (
            <QuantumHolographicMatrixBackground>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="LLM apps, RAG, MLOps, and AI research enablement with transparent pricing and measurable outcomes." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceAds heading="Featured AI Services" subheading="Production-ready offerings with transparent pricing." items={featuredAIAds} />
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">AI Services</h1>
          <p className="text-xl text-gray-300">From prototype to production, we build AI systems that are safe, observable, and cost-efficient.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tracks.map((t) => (
            <div key={t.title} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
              <div className="mb-4">{t.icon}</div>
              <h3 className="text-white font-semibold mb-2">{t.title}</h3>
              <p className="text-gray-400 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-400" /> <span>{i}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="flex items-center justify-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><span>{contactInfo.mobile}</span></div>
            <div className="flex items-center justify-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><span>{contactInfo.email}</span></div>
            <div className="flex items-center justify-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><span className="text-xs">{contactInfo.address}</span></div>
          </div>
          <div className="text-center">
            <Button href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Start Your AI Journey</Button>
          </div>
        </div>
      </div>
    </QuantumHolographicMatrixBackground>
  );
}

