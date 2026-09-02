import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'AI, IT, and automation insights, guides, and industry trends from Zion Tech Group.',
  openGraph: {
    title: 'Blog | Zion Tech Group',
    description: 'AI, IT, and automation insights, guides, and industry trends from Zion Tech Group.',
    url: 'https://ziontechgroup.com/blog/',
    type: 'website',
  },
  alternates: { canonical: '/blog/' },
};

interface BlogPost {
  slug: string;
  title: string;
}

export default function BlogPage() {
  return (
    <StandardPage
      title="Blog"
      subtitle="AI, IT, and automation insights, guides, and industry trends from Zion Tech Group."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Blog' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Latest posts</h2>
        <ul className="space-y-3">
          <li><Link href="/blog/ai-observability-security-and-governance/" className="text-purple-400 hover:underline">AI Observability: security and governance</Link></li>
          <li><Link href="/blog/cloud-cost-ai-optimizer-checklist-for-it-leaders/" className="text-purple-400 hover:underline">Cloud Cost AI Optimizer: checklist</Link></li>
          <li><Link href="/blog/ai-msp-security-compliance-implementation-playbook/" className="text-purple-400 hover:underline">AI MSP Security Compliance: playbook</Link></li>
          <li><Link href="/blog/cybersecurity-platform-msp-2026/" className="text-purple-400 hover:underline">Cybersecurity for MSPs</Link></li>
          <li><Link href="/blog/devsecops-pipeline-2026/" className="text-purple-400 hover:underline">DevSecOps Pipeline</Link></li>
          <li><Link href="/blog/ai-for-cybersecurity-operations-and-threat-hunting/" className="text-purple-400 hover:underline">AI for Cybersecurity Operations</Link></li>
        </ul>
      </div>
    </StandardPage>
  );
}
