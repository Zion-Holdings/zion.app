import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Terraform Infrastructure-as-Code | Zion Tech Group",
  description: "Terraform is the industry-standard infrastructure-as-code (IaC) tool used by millions of engineers to declaratively provision and manage cloud infrastructure across AWS, Azure, GCP, and 3,000+ other providers. Instead of",
  openGraph: {
    title: "Terraform Infrastructure-as-Code | Zion Tech Group",
    description: "Terraform is the industry-standard infrastructure-as-code (IaC) tool used by millions of engineers to declaratively provision and manage cloud infrastructure across AWS, Azure, GCP, and 3,000+ other providers. Instead of",
    url: "https://ziontechgroup.com/services/terraform/",
    type: 'website',
  },
  alternates: { canonical: "/services/terraform/" },
};

export default function TerraformPage() {
  return (
    <StandardPage
      title="Terraform Infrastructure-as-Code"
      subtitle="Terraform is the industry-standard infrastructure-as-code (IaC) tool used by millions of engineers to declaratively provision and manage cloud infrastructure across AWS, Azure, GCP, and 3,000+ other providers. Instead of"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Terraform Infrastructure-as-Code" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Terraform is the industry-standard infrastructure-as-code (IaC) tool used by millions of engineers to declaratively provision and manage cloud infrastructure across AWS, Azure, GCP, and 3,000+ other providers. Instead of</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607203243) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
