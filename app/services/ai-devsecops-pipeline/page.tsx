import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI DevSecOps Pipeline Service | Zion Tech Group",
  description: "Integrate security scanning, compliance checks, and vulnerability detection directly into your CI/CD pipeline with AI-powered automation and real-time policy enforcement.",
  openGraph: {
    title: "AI DevSecOps Pipeline Service | Zion Tech Group",
    description: "Integrate security scanning, compliance checks, and vulnerability detection directly into your CI/CD pipeline with AI-powered automation and real-time policy enforcement.",
    url: "https://ziontechgroup.com/services/ai-devsecops-pipeline/",
    type: 'website',
  },
  alternates: { canonical: "/services/ai-devsecops-pipeline/" },
};

export default function ServicesAiDevsecopsPipelinePage() {
  return (
    <StandardPage
      title="AI DevSecOps Pipeline Service"
      subtitle="Integrate security scanning, compliance checks, and vulnerability detection directly into your CI/CD pipeline with AI-powered automation and real-time policy enforcement."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Ai Devsecops Pipeline" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Integrate security scanning, compliance checks, and vulnerability detection directly into your CI/CD pipeline with AI-powered automation and real-time policy enforcement.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
