import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Insights on AI, IT, automation, and enterprise delivery from Zion Tech Group.',
  openGraph: {
    title: 'Blog | Zion Tech Group',
    description: 'Insights on AI, IT, automation, and enterprise delivery.',
    url: 'https://ziontechgroup.com/blog/',
    type: 'website',
  },
  alternates: { canonical: '/blog/' },
};

type Post = {
  slug: string;
  title: string;
  category: string;
  summary: string;
};

const POSTS: Post[] = [
  { slug: '5g-solutions-2026', title: '5G Solutions 2026', category: 'Infrastructure', summary: 'Service, architecture, and security guidance for 5G-enabled AI systems.' },
  { slug: 'ai-3d-asset-generator-2026', title: 'AI 3D Asset Generator 2026', category: 'AI', summary: 'Production patterns for AI-generated 3D assets with review workflows and governance.' },
  { slug: 'ai-accessibility-auditor-2026', title: 'AI Accessibility Auditor 2026', category: 'AI', summary: 'Automated accessibility checks and remediation patterns for web and mobile interfaces.' },
  { slug: 'ai-agent-safety-evaluation-2026', title: 'AI Agent Safety Evaluation 2026', category: 'AI', summary: 'Evaluation frameworks for agent reliability, guardrails, and failure recovery.' },
  { slug: 'micro-saas-ai-social-media-manager-2026', title: 'Micro SaaS AI Social Media Manager 2026', category: 'Growth', summary: 'Repeatable content scheduling and performance patterns for managed social programs.' },
];

const ALL_POSTS: Post[] = [
  { slug: 'cloud-finops-2026', title: 'Cloud FinOps 2026', category: 'Cloud', summary: 'Practical cost governance, allocation, and anomaly response for cloud accounts.' },
  { slug: 'brand-voice-guardian-2026', title: 'Brand Voice Guardian 2026', category: 'Growth', summary: 'Governed brand-voice automation that scales content without drifting tone.' },
  { slug: 'enterprise-ai-intelligence-hub-executive-guide', title: 'Enterprise AI Intelligence Hub: Executive Guide', category: 'AI', summary: 'Executive roadmap for centralized AI insights, governance, and operational model.' },
  { slug: 'endpoint-management-case-study', title: 'Endpoint Management: Case Study', category: 'IT', summary: 'Real engagement outcomes from endpoint standardization and policy automation.' },
  { slug: 'smart-contract-audit-policy-and-compliance', title: 'Smart Contract Audit: Policy and Compliance', category: 'Security', summary: 'Audit workflows, evidence capture, and control mapping for contract automation.' },
  { slug: 'microsaas-expense-tracker-deployment-patterns', title: 'Micro SaaS Expense Tracker: Deployment Patterns', category: 'Micro-SaaS', summary: 'Deployment patterns for a recurring billing and expense-tracking workflow.' },
  { slug: 'network-infrastructure-architecture-overview', title: 'Network Infrastructure: Architecture Overview', category: 'Infrastructure', summary: 'Secure baseline architecture for cloud-connected networks and SD-WAN patterns.' },
  { slug: 'data-warehouse-modernization-2026', title: 'Data Warehouse Modernization 2026', category: 'Data', summary: 'Migration playbook for warehouse modernization with governance and observability.' },
  { slug: 'api-management-gateway-architecture-overview', title: 'API Management Gateway: Architecture Overview', category: 'Integration', summary: 'Gateway architecture for internal and external API delivery with policy enforcement.' },
  { slug: 'micro-saas-ai-translation-engine-2026', title: 'Micro SaaS AI Translation Engine 2026', category: 'Micro-SaaS', summary: 'Production patterns for translation pipelines with terminology and quality gates.' },
  { slug: 'cloud-cost-optimization-checklist-2026', title: 'Cloud Cost Optimization Checklist 2026', category: 'Cloud', summary: 'Actionable checklist for cost reduction without reliability or compliance regression.' },
  { slug: 'ai-agentic-workflows-starter-template', title: 'AI Agentic Workflows: Starter Template', category: 'AI', summary: 'Starter template for orchestrating multi-step agent workflows with fallbacks.' },
  { slug: 'chaos-engineering-roi-and-cost-model', title: 'Chaos Engineering: ROI and Cost Model', category: 'Reliability', summary: 'ROI model for controlled failure experiments and reliability investment.' },
  { slug: 'etl-pipeline-optimization-2026', title: 'ETL Pipeline Optimization 2026', category: 'Data', summary: 'Optimization patterns for data pipelines, retries, and observability.' },
  { slug: 'api-management-gateway-automation-roadmap', title: 'API Management Gateway: Automation Roadmap', category: 'Integration', summary: 'Automation roadmap for API policies, quotas, and lifecycle management.' },
  { slug: 'enterprise-ai-intelligence-hub-starter-template', title: 'Enterprise AI Intelligence Hub: Starter Template', category: 'AI', summary: 'Starter template for enterprise AI ingestion, governance, and delivery workflows.' },
  { slug: 'ai-email-intelligence-starter-template', title: 'AI Email Intelligence: Starter Template', category: 'AI', summary: 'Starter template for AI-assisted triage, drafting, and compliance-aware routing.' },
  { slug: 'automated-ai-reporting-architecture-overview', title: 'Automated AI Reporting: Architecture Overview', category: 'AI', summary: 'Architecture for automated report generation with validation and governance.' },
  { slug: '5g-solutions-operations-handbook', title: '5G Solutions: Operations Handbook', category: 'Infrastructure', summary: 'Operations runbook for 5G-integrated AI services and incident response.' },
  { slug: 'ai-bdr-sdr-policy-and-compliance', title: 'AI BDR SDR: Policy and Compliance', category: 'Growth', summary: 'Policy and compliance controls for AI-assisted outbound programs.' },
  { slug: 'aiops-anomaly-detection-2026', title: 'AIOps Anomaly Detection 2026', category: 'AI', summary: 'Anomaly detection patterns for operational data with alert tuning and triage.' },
  { slug: 'enterprise-ai-intelligence-hub-implementation-playbook', title: 'Enterprise AI Intelligence Hub: Implementation Playbook', category: 'AI', summary: 'Implementation playbook for enterprise AI hubs with ownership and metrics.' },
  { slug: 'ai-api-gateway-roi-and-cost-model', title: 'AI API Gateway: ROI and Cost Model', category: 'Integration', summary: 'ROI model for AI API gateway adoption with latency and throughput assumptions.' },
  { slug: 'ai-msp-security-compliance-executive-guide', title: 'AI MSP Security Compliance: Executive Guide', category: 'Security', summary: 'Executive guidance for MSP security compliance programs with audit evidence.' },
  { slug: 'ai-data-backup-2026', title: 'AI Data Backup 2026', category: 'Data', summary: 'Backup automation patterns for AI datasets, models, and experiment artifacts.' },
  { slug: 'cyber-threat-intelligence-operations-handbook', title: 'Cyber Threat Intelligence: Operations Handbook', category: 'Security', summary: 'Operations handbook for threat intake, enrichment, and action workflow.' },
  { slug: 'ai-bom-procurement-architecture-overview', title: 'AI BOM Procurement: Architecture Overview', category: 'Procurement', summary: 'Architecture for AI BOM intake, vendor evaluation, and contract tracking.' },
  { slug: 'ai-customer-support-pro-2026', title: 'AI Customer Support Pro 2026', category: 'Support', summary: 'Enterprise support assistant patterns with escalation and compliance.' },
  { slug: 'ai-development-acceleration-2026', title: 'AI Development Acceleration 2026', category: 'Engineering', summary: 'Development acceleration patterns with coding assistants and review automation.' },
];

function groupByCategory(items: Post[]) {
  return items.reduce<Record<string, Post[]>>((acc, post) => {
    acc[post.category] = acc[post.category] || [];
    acc[post.category].push(post);
    return acc;
  }, {});
}

export default function BlogIndexPage() {
  const posts = [...POSTS, ...ALL_POSTS];
  const grouped = groupByCategory(posts);

  return (
    <StandardPage
      title="Blog"
      subtitle="Insights on AI, IT, automation, and enterprise delivery."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Blog' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-6xl mx-auto">
        {Object.entries(grouped).map(([category, items]) => (
          <section key={category} className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-3">{category}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}/`} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40">
                  <h3 className="text-white font-semibold mb-1">{post.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{post.summary}</p>
                  <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Read more →</span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </StandardPage>
  );
}
