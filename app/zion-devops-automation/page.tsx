import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion DevOps Automation | Zion Tech Group',
  description: 'AI-powered DevOps automation platform for CI/CD pipeline optimization, infrastructure as code, and automated deployments.',
  alternates: { canonical: '/zion-devops-automation/' },
};

export default function Page() {
  return (
    <PageTemplate
      title="Zion DevOps Automation"
      description="AI-powered DevOps automation platform for CI/CD pipeline optimization, infrastructure as code, and automated deployments."
      actions={[
        { label: 'Get Started', href: '/contact', style: 'primary' },
        { label: 'View Pricing', href: '/pricing', style: 'secondary' },
      ]}
    >
      <div className="text-center py-16">
        <p className="text-slate-400">+1 302 464 0950 | kleber@ziontechgroup.com | 364 E Main St STE 1008, Middletown, DE 19709</p>
        <a href="/contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Free Consultation</a>
      </div>
    </PageTemplate>
  );
}
