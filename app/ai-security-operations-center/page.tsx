import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai Security Operations Center | Zion Tech Group",
  description: "Professional ai security operations center services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.",
  openGraph: {
    title: "Ai Security Operations Center | Zion Tech Group",
    description: "Professional ai security operations center services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.",
    url: "https://ziontechgroup.com/ai-security-operations-center/",
    type: 'website',
  },
  alternates: { canonical: "/ai-security-operations-center/" },
};

export default function AiSecurityOperationsCenterPage() {
  return (
    <StandardPage
      title="Ai Security Operations Center"
      subtitle="Professional ai security operations center services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Security Operations Center" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Professional ai security operations center services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
