import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Phishing Analyzer | Zion Tech Group",
  description: "Review URL and email signals to spot phishing indicators before clicking or forwarding.",
  openGraph: {
    title: "Phishing Analyzer | Zion Tech Group",
    description: "Review URL and email signals to spot phishing indicators before clicking or forwarding.",
    url: "https://ziontechgroup.com/docs/tools/phishing-analyzer/",
    type: 'website',
  },
  alternates: { canonical: "/docs/tools/phishing-analyzer/" },
};

export default function DocsToolsPhishingAnalyzerPage() {
  return (
    <StandardPage
      title="Phishing Analyzer"
      subtitle="Review URL and email signals to spot phishing indicators before clicking or forwarding."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Tools", href: "/docs/tools/" },
        { label: "Phishing Analyzer" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Review URL and email signals to spot phishing indicators before clicking or forwarding.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
