'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '@/data/servicesData';

type Wave = {
  id: number;
  date: string;
  title: string;
  count: number;
  description: string;
  services: string[];
};

// Sample wave data - in production this would come from a data source
const recentWaves: Wave[] = [
  {
    id: 248,
    date: '2026-07-28',
    title: 'Wave 248: AI Infrastructure & DevOps',
    count: 15,
    description: 'LangChain, dbt, Zscaler, MOSTLY AI, W&B, GitHub Copilot, PagerDuty, Backstage, Triton, Arize, DeepL, Synthesia, Upkeep, Better Uptime, Cursor',
    services: ['ai-infrastructure-orchestrator', 'ai-devops-pipeline', 'ai-cloud-cost-analyzer', 'ai-deployment-automation', 'ai-monitoring-agent'],
  },
  {
    id: 247,
    date: '2026-07-27',
    title: 'Wave 247: AI Analytics & BI',
    count: 12,
    description: 'Advanced analytics, business intelligence, and data visualization tools',
    services: ['ai-business-intelligence-hub', 'ai-analytics-dashboard', 'ai-data-viz-generator', 'ai-reporting-automation', 'ai-kpi-tracker'],
  },
  {
    id: 246,
    date: '2026-07-26',
    title: 'Wave 246: AI Security & Compliance',
    count: 18,
    description: 'Security tools, compliance automation, and threat detection',
    services: ['ai-security-audit', 'ai-compliance-checker', 'ai-threat-detector', 'ai-vulnerability-scanner', 'ai-privacy-guard'],
  },
  {
    id: 245,
    date: '2026-07-25',
    title: 'Wave 245: AI Customer Experience',
    count: 14,
    description: 'Customer support, engagement, and experience optimization tools',
    services: ['ai-customer-support', 'ai-chatbot-builder', 'ai-email-responder', 'ai-survey-analyzer', 'ai-nps-tracker'],
  },
  {
    id: 244,
    date: '2026-07-24',
    title: 'Wave 244: AI Content & Media',
    count: 10,
    description: 'Content generation, media processing, and digital asset tools',
    services: ['ai-content-generator', 'ai-video-editor', 'ai-image-enhancer', 'ai-text-summarizer', 'ai-transcription-service'],
  },
];

// Get the most recent services from waves
const getFreshServices = (count: number = 8): Service[] => {
  const freshServiceIds = new Set<string>();
  
  // Collect service IDs from recent waves
  recentWaves.forEach(wave => {
    wave.services.forEach(id => freshServiceIds.add(id));
  });

  // Filter services that match the wave IDs
  return allServices.filter(s => freshServiceIds.has(s.id)).slice(0, count);
};

export default function ContentDiscovery({ maxItems = 8 }: { maxItems?: number }) {
  const [freshServices, setFreshServices] = useState<Service[]>([]);

  useEffect(() => {
    setFreshServices(getFreshServices(maxItems));
  }, [maxItems]);

  if (freshServices.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 border-t border-purple-500/20">
      <div className="container-page">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs text-emerald-400 font-medium">🌊 AI Agents • Live Updates</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Fresh Content & Services
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            AI agents continuously discover, build, and deploy new services. These were created or updated most recently.
          </p>
        </div>

        {/* Waves Timeline */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Recent Waves</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {recentWaves.slice(0, 4).map(wave => (
              <div key={wave.id} className="bg-slate-900/50 border border-slate-800/50 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌊</span>
                  <div>
                    <div className="text-sm font-semibold text-white">Wave {wave.id}</div>
                    <div className="text-xs text-slate-400">{wave.count} services • {wave.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fresh Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {freshServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group bg-slate-900/50 border border-slate-800/50 rounded-xl p-4 hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform">{service.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-purple-300 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <span className="text-xs text-slate-500 block mt-1">
                    {service.category} • ${service.pricing?.basic || 'Contact'}/mo
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/services/" 
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all text-sm"
          >
            View All {allServices.length}+ Services →
          </Link>
        </div>
      </div>
    </section>
  );
}