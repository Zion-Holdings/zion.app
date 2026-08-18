import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'AI Computer Vision for Quality Inspection | Zion Tech Group',
  description: 'AI computer vision quality inspection systems that detect defects, measure tolerances, and automate pass/fail decisions on production lines using edge AI.',
  alternates: {
    canonical: 'https://ziontechgroup.com/blog/ai-computer-vision-quality-inspection/',
  },
};

export default function BlogPostPage() {
  return (
    <PageTemplate
      title="AI Computer Vision for Quality Inspection"
      description="AI computer vision quality inspection systems that detect defects, measure tolerances, and automate pass/fail decisions on production lines using edge AI."
      canonical="https://ziontechgroup.com/blog/ai-computer-vision-quality-inspection/"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog/' },
        { label: 'AI Computer Vision for Quality Inspection', href: '/blog/ai-computer-vision-quality-inspection' },
      ]}
      layout="hero"
      category="Manufacturing"
      heroIcon="🔍"
      showBottomCta={false}
    >
      <div className="prose prose-slate prose-invert max-w-none">
        <p className="text-lg text-slate-300">
          In modern manufacturing, quality control is the single biggest bottleneck for
          throughput. Traditional rule-based machine vision systems require extensive
          calibration, can't adapt to new defect types, and generate high false-positive
          rates. AI-powered computer vision transforms this dynamic entirely.
        </p>

        <h2>Why AI Computer Vision?</h2>
        <p>
          Conventional machine vision works on hand-coded rules: "if pixel intensity
          drops below X in region Y, flag as defective." AI computer vision learns to
          recognize patterns directly from training data, handling variations in lighting,
          angle, surface finish, and defect morphology that would break rule-based systems.
        </p>

        <h2>Key Capabilities</h2>
        <ul>
          <li><strong>Defect detection</strong> — Surface scratches, dents, discoloration, and missing components</li>
          <li><strong>Dimensional measurement</strong> — Real-time tolerance verification with micron-level precision</li>
          <li><strong>Classification</strong> — Sort products by grade, type, or defect severity</li>
          <li><strong>Anomaly detection</strong> — Identify novel defects not seen during training</li>
          <li><strong>Edge deployment</strong> — Run inference on edge devices without cloud connectivity</li>
        </ul>

        <h2>Deployment Architecture</h2>
        <p>
          AI quality inspection systems are deployed on edge gateways at the production
          line. Cameras feed live video streams to a GPU inference engine running a
          model trained on thousands of labeled defect samples. Results are streamed to
          a central dashboard for real-time monitoring and line stoppage triggers.
        </p>

        <h2>Measurable Impact</h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">95%</div>
            <p className="text-slate-400 text-sm">Defect detection accuracy</p>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">80%</div>
            <p className="text-slate-400 text-sm">Reduction in false positives</p>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">10ms</div>
            <p className="text-slate-400 text-sm">Per-image inference latency</p>
          </div>
        </div>

        <h2>Industries We Serve</h2>
        <p>
          Automotive assembly, electronics PCB inspection, pharmaceutical packaging,
          food &amp; beverage production, metal fabrication, and consumer goods
          manufacturing.
        </p>

        <div className="mt-12 glass-card p-6">
          <h3 className="text-xl font-bold text-white mb-2">Ready to automate quality inspection?</h3>
          <p className="text-slate-300 mb-4">
            Start with a free AI readiness audit to identify the top 3 workflows worth automating in your organization.
          </p>
          <Link href="/free-ai-readiness-audit/" className="btn-primary inline-block">Run Free AI Readiness Audit</Link>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>
            Related: <Link href="/services/ai-computer-vision/" className="text-purple-400 hover:underline">AI Computer Vision Services</Link>
            {' | '} <Link href="/services/ai-manufacturing/" className="text-purple-400 hover:underline">AI for Manufacturing</Link>
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
