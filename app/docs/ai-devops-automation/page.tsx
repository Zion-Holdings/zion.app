import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI DevOps Automation | Zion Tech Group",
  description: "Accelerate delivery with AI-driven CI/CD, infrastructure automation, and release risk assessment.",
  openGraph: {
    title: "AI DevOps Automation | Zion Tech Group",
    description: "Accelerate delivery with AI-driven CI/CD, infrastructure automation, and release risk assessment.",
    url: "https://ziontechgroup.com/docs/ai-devops-automation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-devops-automation/" },
};

export default function DocsAiDevopsAutomationPage() {
  return (
    <StandardPage
      title="AI DevOps Automation"
      subtitle="Accelerate delivery with AI-driven CI/CD, infrastructure automation, and release risk assessment."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Devops Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Accelerate delivery with AI-driven CI/CD, infrastructure automation, and release risk assessment.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
