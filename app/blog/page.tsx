import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on AI, automation, enterprise IT, and digital transformation from the Zion Tech Group team.',
  alternates: { canonical: '/blog/' },
};

export default function BlogIndexPage() {
  const POSTS = [
    { slug: '5-proven-ai-automation-strategies-for-enterprise-workflow-optimization', title: '5 Proven AI Automation Strategies for Enterprise Workflow Optimization' },
    { slug: 'ai-agent-frameworks-for-business-automation', title: 'AI Agent Frameworks for Business Automation' },
    { slug: 'ai-finops-and-cloud-cost-optimization-with-machine-learning', title: 'AI FinOps: Cloud Cost Optimization with Machine Learning' },
    { slug: 'ai-for-audit-and-compliance-automation', title: 'AI for Audit and Compliance Automation' },
    { slug: 'ai-for-compliance-and-regulatory-reporting', title: 'AI for Compliance and Regulatory Reporting' },
    { slug: 'ai-for-conversation-and-customer-analytics', title: 'AI for Conversation and Customer Analytics' },
    { slug: 'ai-for-customer-service-and-support-automation', title: 'AI for Customer Service and Support Automation' },
    { slug: 'ai-for-cybersecurity-operations-and-threat-hunting', title: 'AI for Cybersecurity Operations and Threat Hunting' },
    { slug: 'ai-for-data-engineering-and-pipeline-automation', title: 'AI for Data Engineering and Pipeline Automation' },
    { slug: 'ai-for-devops-and-incident-response', title: 'AI for DevOps and Incident Response' },
    { slug: 'ai-for-it-operations-and-observability', title: 'AI for IT Operations and Observability' },
    { slug: 'ai-for-managed-it-and-enterprise-support', title: 'AI for Managed IT and Enterprise Support' },
    { slug: 'ai-for-network-operations-and-telecom-automation', title: 'AI for Network Operations and Telecom Automation' },
    { slug: 'ai-for-project-management-and-delivery', title: 'AI for Project Management and Delivery' },
    { slug: 'ai-for-quality-assurance-and-testing', title: 'AI for Quality Assurance and Testing' },
    { slug: 'ai-for-revenue-operations-and-business-intelligence', title: 'AI for Revenue Operations and Business Intelligence' },
    { slug: 'ai-for-sales-automation-and-crm-intelligence', title: 'AI for Sales Automation and CRM Intelligence' },
    { slug: 'ai-for-security-operations-and-compliance', title: 'AI for Security Operations and Compliance' },
    { slug: 'ai-for-service-desk-and-support-automation', title: 'AI for Service Desk and Support Automation' },
    { slug: 'ai-predictive-maintenance-for-infrastructure', title: 'AI Predictive Maintenance for Infrastructure' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Insights on AI, automation, enterprise IT, and digital transformation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="glass-card group hover:border-purple-500/40 transition-colors block"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                {post.title}
              </h3>
              <span className="text-purple-400 text-sm inline-flex items-center gap-1">
                Read more <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  
      <Footer />
    </div>);
}
