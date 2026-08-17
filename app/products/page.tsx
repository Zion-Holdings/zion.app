// app/products/page.tsx — Products & Platforms
'use client';
import Link from 'next/link';
import { allServices } from '@/data/servicesData';
import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Products & Platforms | Zion Tech Group',
  description: 'Six product families, 307+ AI services, 110+ IT infrastructure services — structured into AI, IT, Cloud, Security, Data, and Automation.',
  alternates: { canonical: '/products/' },
};

const PRODUCTS: readonly {
  key: string;
  title: string;
  desc: string;
  emoji: string;
  count: number;
  cta: string;
  bullets: readonly string[];
}[] = [
  {
    key: 'ai',
    title: 'AI & Machine Learning',
    desc: 'Generative AI, autonomous agents, computer vision, RAG platforms, LLM orchestration, and enterprise copilots.',
    emoji: '🤖',
    count: 307,
    cta: '/services?category=ai',
    bullets: [
      'Enterprise AI Copilots & Assistants',
      'Autonomous Agents & Workflow Orchestration',
      'RAG & Knowledge Systems',
      'Computer Vision & Multimodal AI',
      'AI Governance & Responsible AI',
      'Foundation Model Custom Training',
    ],
  },
  {
    key: 'it',
    title: 'IT Infrastructure',
    desc: 'DevOps, DevSecOps, API platforms, site reliability engineering, and infrastructure-as-code tooling.',
    emoji: '🔧',
    count: 110,
    cta: '/services?category=it',
    bullets: [
      'CI/CD & Automated Deployments',
      'API Gateway & Rate-Limiting',
      'Infrastructure as Code (IaC)',
      'Edge Computing & IoT Infrastructure',
      'Zero-Trust Network Architecture',
      'Backup & Disaster Recovery',
    ],
  },
  {
    key: 'cloud',
    title: 'Cloud & DevOps',
    desc: 'Multi-cloud migration, managed Kubernetes, serverless platforms, and 24/7 cloud operations.',
    emoji: '☁️',
    count: 68,
    cta: '/services?category=cloud',
    bullets: [
      'Multi-Cloud Migration',
      'Managed Kubernetes & Containers',
      'Serverless & Event-Driven Architecture',
      'Cost Optimisation & FinOps',
      'Cloud Security Posture Management',
      'DRaaS & High Availability',
    ],
  },
  {
    key: 'security',
    title: 'Cybersecurity',
    desc: 'Threat detection, SIEM, SOAR, compliance automation, identity management, and zero-trust controls.',
    emoji: '🛡',
    count: 49,
    cta: '/services?category=security',
    bullets: [
      'SIEM, SOAR & XDR',
      'AI-Powered Threat Detection',
      'Compliance Automation (FedRAMP, SOC 2, GDPR)',
      'Identity & Access Management (IAM)',
      'Zero-Trust Architecture',
      'Penetration Testing & Red Teaming',
    ],
  },
  {
    key: 'data',
    title: 'Data & Analytics',
    desc: 'Enterprise BI, predictive analytics, data lakes, real-time streaming, and self-serve analytics tools.',
    emoji: '📊',
    count: 39,
    cta: '/services?category=data',
    bullets: [
      'Executive BI Dashboards',
      'Predictive ML Forecasting',
      'Data Lake & Lakehouse Architecture',
      'Embedded Analytics & SDKs',
      'Semantic Layer & Metric Governance',
      'Self-Serve SQL Builder',
    ],
  },
  {
    key: 'automation',
    title: 'Process Automation',
    desc: 'RPA, intelligent document processing, workflow orchestration, and hyper-automation playbooks.',
    emoji: '⚡',
    count: 29,
    cta: '/services?category=automation',
    bullets: [
      'RPA + AI Agent Orchestration',
      'Intelligent Document Processing (IDP)',
      'Workflow Orchestration (low-code)',
      'Finance & HR Process Automation',
      'Customer-Service Automation',
      'Supply-Chain Event Automation',
    ],
  },
];

export default function ProductsPage() {
  return (
    <PageTemplate
      title="Products & Platforms"
      description={`Six product families, ${PRODUCTS.reduce((s, p) => s + p.count, 0).toLocaleString()} services — structured into AI, IT, Cloud, Security, Data, and Automation. Pick a family to drill into the full service catalog.`}
      category="Product Catalog"
      heroIcon="📦"
      actions={[
        { label: 'Browse All Services', href: '/services', style: 'secondary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
      ]}
      layout="hero"
      showBottomCta={true}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <Link key={p.key} href={p.cta} className="glass-card group">
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h2 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition">{p.title}</h2>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
              <ul className="space-y-1.5 mb-6 flex-1">
                {p.bullets.map((b, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>{b}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
                <span className="text-slate-400 text-sm">
                  {p.count.toLocaleString()} service{p.count > 1 ? 's' : ''}
                </span>
                <span className="text-purple-400 text-xs font-semibold group-hover:translate-x-1 transition-transform">
                  Browse →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}