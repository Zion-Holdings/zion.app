import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'DevSecOps Pipeline Automation | Zion Tech Group',
  description:
    'How DevSecOps pipeline automation transforms security from a bottleneck into a competitive advantage — integrating security scanning, compliance validation, and threat detection directly into CI/CD workflows.',
  alternates: { canonical: '/blog/devsecops-pipeline-automation/' },
};

const gates = [
  'Static Application Security Testing (SAST) at commit time',
  'Dynamic Application Security Testing (DAST) in staging environments',
  'Software Composition Analysis for dependency vulnerabilities',
  'Container image scanning before deployment',
  'Infrastructure-as-Code security validation',
  'Secrets detection and prevention in source code',
  'Compliance-as-Code for automated policy enforcement',
];

export default function DevsecopsPipelineAutomationPage() {
  return (
    <StandardPage
      title="DevSecOps Pipeline Automation"
      subtitle="How DevSecOps pipeline automation transforms security from a bottleneck into a competitive advantage."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog/' },
        { label: 'DevSecOps Pipeline Automation' },
      ]}
      actions={[
        { label: 'Talk to security', href: '/contact/', style: 'primary' },
        { label: 'More posts', href: '/blog/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl mx-auto space-y-6 text-slate-300 text-sm leading-relaxed">
        <p>
          Modern software delivery demands that security be embedded throughout the
          development lifecycle, not bolted on at the end. DevSecOps pipeline automation
          weaves security checks into every stage of CI/CD.
        </p>
        <p>
          This guide walks through the architecture of an automated DevSecOps pipeline,
          from code commit through production deployment, with security gates at each stage.
        </p>
        <ul className="space-y-3">
          {gates.map((gate) => (
            <li key={gate} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              {gate}
            </li>
          ))}
        </ul>
      </div>
    </StandardPage>
  );
}
