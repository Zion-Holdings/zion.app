import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';

const posts = [
  'ai-agentic-workflow-automation-reduce-manual-work-hours',
  'ai-ci-execution-and-ci-cd-ai-automation',
  'ai-computer-vision-quality-inspection',
  'ai-consulting-services-for-enterprise-it-in-2026',
  'ai-cost-optimization-for-it-operations-2026',
  'ai-financial-engineering-and-portfolio-automation-in-2026',
  'ai-it-cost-optimization-for-micro-saas',
  'ai-managed-services-and-outsourcing-for-latam-enterprises',
  'ai-observability-and-incident-response-for-modern-it-teams',
  'ai-outsourcing-vs-in-house-it-latam',
  'ai-outsourcing-vs-inhouse-it-teams-2026',
  'ai-partnership-models-for-latam-growth-in-2026',
  'ai-platform-engineering-2026-services-guide',
  'ai-platform-engineering-patterns-for-scale-in-2026',
  'ai-soc-automation-and-threat-detection-in-2026',
  'ai-support-automation-for-brazilian-companies-in-2026',
  'ai-text-to-sql-platforms-for-business-intelligence-in-2026',
  'ai-vendor-channel-partnership-model-for-latam',
  'ai-voice-and-multichannel-support-automation',
  'ai-voice-assistant-integration-for-business-communications-in-2026',
  'cyber-incident-response-retainer-ready-before-breach',
  'enterprise-ai-integration-roadmap-for-2026',
  'free-ai-tools-technology-companies-should-use-in-2026',
  'managed-ai-cloud-support-for-startups-and-enterprises-in-2026',
  'nebius-ai-cloud-partnership-model-for-latam',
  'nebius-latam-ai-cloud-partnership-guide',
  'nebius-latam-ai-partnership-opportunity-2026',
  'nebius-partnership-and-ai-vendor-co-selling-2026',
  'nebius-partnership-latam-expansion-guide',
  'platform-engineering-and-ai-observability-in-2026'
];

export const metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Insights on AI, IT operations, cloud, security, and enterprise automation.'
};

export default function BlogIndex() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <div className="container">
        <h1>Blog</h1>
        <p className="lead">Latest posts about AI, IT operations, cloud, security, and enterprise automation.</p>
        <div className="grid">
          {posts.map((slug) => (
            <Link key={slug} href={`/blog/${slug}/`} className="card">
              <h3>{slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</h3>
              <span>Read article →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
