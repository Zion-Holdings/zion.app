import type { Metadata } from 'next';
import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';

const posts = [
  {
    slug: '5-proven-ai-automation-strategies-for-enterprise-workflow-optimization',
    title: '5 Proven AI Automation Strategies for Enterprise Workflow Optimization',
    topics: ['AI', 'Automation', 'Enterprise'],
    intent: 'optimize enterprise workflows with AI automation',
  },
  {
    slug: 'ai-agentic-workflow-automation-reduce-manual-work-hours',
    title: 'Agentic Workflow Automation to Reduce Manual Work Hours',
    topics: ['AI', 'Automation', 'Productivity'],
    intent: 'reduce manual work with agentic workflow automation',
  },
  {
    slug: 'ai-aiops-instant-response-and-remediation-workflows-for-it-leaders',
    title: 'AIOps: Instant Response and Remediation Workflows for IT Leaders',
    topics: ['AIOps', 'IT', 'Operations'],
    intent: 'instant incident response and remediation for IT teams',
  },
  {
    slug: 'ai-anti-fraud-and-payment-intelligence-for-fintech-in-2026',
    title: 'Anti-Fraud and Payment Intelligence for Fintech in 2026',
    topics: ['Security', 'Fraud', 'Fintech'],
    intent: 'anti-fraud and payment intelligence for fintech',
  },
  {
    slug: 'ai-automation-and-low-code-for-brazilian-enterprises-in-2026',
    title: 'AI Automation and Low-Code for Brazilian Enterprises in 2026',
    topics: ['Automation', 'Low-Code', 'Enterprise'],
    intent: 'AI automation and low-code for enterprise Brazil',
  },
  {
    slug: 'ai-chatbot-builder',
    title: 'AI Chatbot Builder for Support and Sales',
    topics: ['AI', 'Chatbots', 'Automation'],
    intent: 'build AI chatbots for support and sales',
  },
  {
    slug: 'ai-chatops-and-agentic-support-automation-in-2026',
    title: 'ChatOps and Agentic Support Automation in 2026',
    topics: ['Support', 'Automation', 'AI'],
    intent: 'ChatOps and agentic support automation',
  },
  {
    slug: 'ai-client-retention-tactics-for-it-and-ai-services-companies-in-2026',
    title: 'Client Retention Tactics for IT and AI Services Companies',
    topics: ['Growth', 'Sales', 'AI'],
    intent: 'client retention tactics for IT and AI services companies',
  },
  {
    slug: 'ai-computer-vision-quality-inspection',
    title: 'Computer Vision for Quality Inspection',
    topics: ['Computer Vision', 'AI', 'Manufacturing'],
    intent: 'computer vision quality inspection for manufacturing',
  },
  {
    slug: 'ai-consulting-services-for-enterprise-it-in-2026',
    title: 'AI Consulting Services for Enterprise IT in 2026',
    topics: ['Consulting', 'AI', 'Enterprise'],
    intent: 'AI consulting services for enterprise IT',
  },
  {
    slug: 'ai-contract-review-and-legal-operations-automation-2026',
    title: 'Contract Review and Legal Operations Automation',
    topics: ['Legal', 'Automation', 'AI'],
    intent: 'contract review and legal operations automation',
  },
  {
    slug: 'ai-cost-optimization-for-it-operations-2026',
    title: 'AI Cost Optimization for IT Operations in 2026',
    topics: ['Cloud', 'FinOps', 'IT'],
    intent: 'AI cost optimization for IT operations',
  },
  {
    slug: 'ai-customer-success-churn-prevention-guide-saas',
    title: 'Customer Success and Churn Prevention Guide for SaaS',
    topics: ['SaaS', 'Retention', 'AI'],
    intent: 'customer success and churn prevention guidance for SaaS',
  },
  {
    slug: 'ai-cybersecurity-operations-for-msp',
    title: 'Cybersecurity Operations for MSPs',
    topics: ['Security', 'MSP', 'AI'],
    intent: 'cybersecurity operations for MSPs',
  },
  {
    slug: 'ai-data-pipeline-lakehouse-platform-engineering-in-2026',
    title: 'Data Pipeline and Lakehouse Platform Engineering in 2026',
    topics: ['Data', 'Platform', 'AI'],
    intent: 'data pipeline and lakehouse platform engineering',
  },
  {
    slug: 'ai-document-processing',
    title: 'AI Document Processing for Operations',
    topics: ['AI', 'Documents', 'Automation'],
    intent: 'AI document processing for operations teams',
  },
  {
    slug: 'ai-email-outreach-automation-for-msps-2026',
    title: 'Email Outreach Automation for MSPs in 2026',
    topics: ['Outreach', 'Email', 'Automation'],
    intent: 'email outreach automation for MSPs',
  },
  {
    slug: 'ai-financial-engineering-and-portfolio-automation-in-2026',
    title: 'Financial Engineering and Portfolio Automation in 2026',
    topics: ['Finance', 'Automation', 'AI'],
    intent: 'financial engineering and portfolio automation',
  },
  {
    slug: 'ai-first-customer-success-and-renewal-intelligence-in-2026',
    title: 'Customer Success and Renewal Intelligence in 2026',
    topics: ['SaaS', 'Renewal', 'AI'],
    intent: 'customer success and renewal intelligence',
  },
  {
    slug: 'ai-first-security-operations-and-soc-automation-in-2026',
    title: 'Security Operations and SOC Automation in 2026',
    topics: ['SOC', 'Security', 'AI'],
    intent: 'security operations and SOC automation',
  },
  {
    slug: 'ai-insurance-claims',
    title: 'AI Insurance Claims and Damage Intelligence',
    topics: ['Insurance', 'AI', 'Claims'],
    intent: 'AI insurance claims and damage intelligence',
  },
  {
    slug: 'ai-knowledge-base-rag-platform',
    title: 'AI Knowledge Base and RAG Platform',
    topics: ['AI', 'RAG', 'Enterprise'],
    intent: 'AI knowledge base and RAG platform for enterprise',
  },
  {
    slug: 'ai-meeting-intelligence-minutes-and-actions',
    title: 'AI Meeting Intelligence: Minutes and Action Items',
    topics: ['AI', 'Productivity', 'Meetings'],
    intent: 'AI meeting intelligence and auto action items',
  },
  {
    slug: 'ai-observability',
    title: 'AI Observability for Engineering Teams',
    topics: ['Observability', 'AI', 'IT'],
    intent: 'AI observability for engineering teams',
  },
  {
    slug: 'ai-observability-aiops',
    title: 'AI Observability and AIOps Platform',
    topics: ['AIOps', 'Observability', 'AI'],
    intent: 'AI observability and AIops platform',
  },
  {
    slug: 'ai-predictive-analytics',
    title: 'Predictive Analytics for Revenue and Risk',
    topics: ['Analytics', 'AI', 'Predictive'],
    intent: 'predictive analytics for revenue and risk',
  },
  {
    slug: 'ai-supply-chain-optimization',
    title: 'AI Supply Chain Optimization',
    topics: ['Supply Chain', 'AI', 'Logistics'],
    intent: 'AI supply chain optimization and logistics intelligence',
  },
  {
    slug: 'managed-ai-services',
    title: 'Managed AI Services for Operations',
    topics: ['Managed Services', 'AI', 'Operations'],
    intent: 'managed AI services for operations teams',
  },
  {
    slug: 'managed-it-services',
    title: 'Managed IT Services and Support',
    topics: ['Managed Services', 'IT', 'Support'],
    intent: 'managed IT services and support',
  },
  {
    slug: 'ai-anti-fraud-and-payment-intelligence',
    title: 'Anti-Fraud and Payment Intelligence Services',
    topics: ['Security', 'Fraud', 'Fintech'],
    intent: 'anti-fraud and payment intelligence services',
  },
];

export const metadata: Metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Guides on AI, automation, IT operations, cloud, security, growth, and enterprise implementation from Zion Tech Group.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  const featured = [posts[0], posts[4], posts[9]];
  const latest = [
    posts[1],
    posts[5],
    posts[12],
    posts[19],
    posts[16],
    posts[11],
  ];

  return (
    <PageTemplate
      title="Blog"
      description="Practical guides on AI, IT operations, cloud, security, and growth—written for decision-makers who want implementation, not slides."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
      ]}
      layout="hero"
      heroIcon="📝"
      actions={[
        { label: 'Browse All Posts', href: '/blog', style: 'primary' },
      ]}
      showBottomCta={false}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="glass-card group hover:border-purple-500/50 transition-all"
            >
              <div className="text-xs font-semibold text-purple-300 mb-2">
                Featured
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200">
                {post.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {post.intent}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[11px] font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700 px-2 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Latest Posts</h2>
          <span className="text-xs text-slate-500">
            {posts.length} topics
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="glass-card group hover:border-purple-500/40 transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.topics.slice(0, 2).map((topic) => (
                  <span
                    key={topic}
                    className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-200">
                {post.title}
              </h3>
              <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                {post.intent}
              </p>
              <span className="text-xs text-purple-400 font-medium">
                Read article →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Want a custom post based on your environment?
            </h2>
            <p className="text-slate-400 mb-4 max-w-2xl">
              Tell us your stack, goals, and constraints. We can generate a tailored implementation playbook from this catalog as a starting point.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">
                Request a custom playbook
              </Link>
              <Link href="/services/" className="btn-secondary">
                Browse services instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
