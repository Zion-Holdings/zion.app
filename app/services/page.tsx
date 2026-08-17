import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Managed IT, AI automation, cybersecurity, cloud, and consulting services from Zion Tech Group. Enterprise-grade solutions with SLA guarantees.',
  alternates: { canonical: '/services/' },
};

const SERVICES = [
  { title: 'Managed IT', slug: 'managed-it', desc: '24/7 monitoring, helpdesk, and endpoint management with 99.9% uptime SLA.', icon: '🖥️', more: 'Proactive IT support, patch management, network infrastructure, SLA guarantees, and cybersecurity integration.' },
  { title: 'Cybersecurity', slug: 'cybersecurity', desc: 'SOC, threat detection, vulnerability management, and compliance automation.', icon: '🛡️', more: 'Penetration testing, security awareness training, incident response, SOC 2 and ISO 27001 compliance.' },
  { title: 'Cloud', slug: 'cloud', desc: 'AWS/GCP/Azure migration, FinOps, and managed cloud infrastructure.', icon: '☁️', more: 'Multi-cloud architecture, cost optimization, disaster recovery, container orchestration, and 24/7 monitoring.' },
  { title: 'AI Automation', slug: 'ai-automation', desc: 'LLM integration, RAG, and agentic workflow automation.', icon: '🤖', more: 'Process automation, document processing, email automation, task scheduling, and intelligent decision-making.' },
  { title: 'Networking', slug: 'networking', desc: 'SD-WAN, VPN, structured cabling, and Wi-Fi optimization.', icon: '🔌', more: 'Enterprise networking, remote access solutions, load balancing, network security, and performance tuning.' },
  { title: 'Consulting', slug: 'consulting', desc: 'Architecture, roadmap, and digital transformation strategy.', icon: '📊', more: 'Technology advisory, digital transformation roadmap, vendor selection, and change management.' },
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h1>
        <p className="text-slate-400 text-lg max-w-2xl">Enterprise IT, AI, and cybersecurity services built for performance and compliance. We offer end-to-end solutions from infrastructure to artificial intelligence.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}/`} className="glass-card group hover:border-purple-500/40 transition-colors block">
            <span className="text-3xl mb-3 block">{s.icon}</span>
            <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">{s.title}</h3>
            <p className="text-slate-400 text-sm mb-2">{s.desc}</p>
            <p className="text-slate-500 text-xs">{s.more}</p>
            <span className="text-purple-400 text-xs mt-3 inline-block">Learn more →</span>
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
}
