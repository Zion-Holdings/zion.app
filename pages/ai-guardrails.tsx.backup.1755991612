import NextHead from 'next/head';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import Card from '../components/ui/Card';
import UIButton from '../components/ui/Button';
import { ArrowRight, Check as CheckIcon } from 'lucide-react';
import { innovativeAIServices } from '../data/innovative-ai-services';

export default function AIAgentsStudioPage() {
  const agentServices = innovativeAIServices.filter((s) =>
    ['AI Orchestration & Automation', 'AI & Cybersecurity', 'AI & Business Intelligence'].includes(s.category) ||
    ['ai-agent-orchestrator', 'ai-phone-agent', 'ai-sales-automation', 'ai-meeting-transcriber-pro'].includes(s.id)
  );

  return (
    <EnhancedFuturisticBackground intensity="high" colorScheme="neural" particleCount={160} animationSpeed={1.1}>
      <NextHead>
        <title>AI Agents Studio | Zion Tech Group</title>
        <meta name="description" content="Build and deploy production AI agents: orchestration, phone agents, sales automation, and transcription. Transparent pricing and fast setup." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-agents" />
      </NextHead>

      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Agents Studio</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Production-ready agentic systems with measurable ROI. Launch in days, not months.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentServices.map((svc) => (
              <Card key={svc.id} className="p-6 bg-gray-900/50 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                <div className="text-2xl font-semibold text-white mb-1">{svc.name}</div>
                <div className="text-gray-400 text-sm mb-4">{svc.tagline}</div>
                <div className="text-cyan-300 text-xl font-bold mb-3">{svc.price}<span className="text-gray-400 text-base">{svc.period}</span></div>
                <ul className="text-gray-300 text-sm space-y-1 mb-5">
                  {(svc.features || []).slice(0, 5).map((f) => (
                    <li key={f} className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-emerald-400 mt-0.5" /><span>{f}</span></li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <UIButton href={svc.link} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Learn More<ArrowRight className="w-4 h-4 ml-2" /></UIButton>
                  <UIButton href="/contact" variant="outline" className="flex-1 border-gray-600 text-gray-200">Talk to Expert</UIButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </EnhancedFuturisticBackground>
  );
}