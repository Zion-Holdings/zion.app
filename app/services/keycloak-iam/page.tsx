import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Keycloak Identity & Access Management | Zion Tech Group",
  description: "Full-featured open-source identity and access management (IAM) solution providing single sign-on (SSO), user federation, identity brokering, and multi-tenancy. Supports OAuth 2.0, OpenID Connect, and SAML 2.0 \u2014 a drop-in",
  openGraph: {
    title: "Keycloak Identity & Access Management | Zion Tech Group",
    description: "Full-featured open-source identity and access management (IAM) solution providing single sign-on (SSO), user federation, identity brokering, and multi-tenancy. Supports OAuth 2.0, OpenID Connect, and SAML 2.0 \u2014 a drop-in",
    url: "https://ziontechgroup.com/services/keycloak-iam/",
    type: 'website',
  },
  alternates: { canonical: "/services/keycloak-iam/" },
};

export default function KeycloakIamPage() {
  return (
    <StandardPage
      title="Keycloak Identity & Access Management"
      subtitle="Full-featured open-source identity and access management (IAM) solution providing single sign-on (SSO), user federation, identity brokering, and multi-tenancy. Supports OAuth 2.0, OpenID Connect, and SAML 2.0 \u2014 a drop-in"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Keycloak Identity & Access Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Full-featured open-source identity and access management (IAM) solution providing single sign-on (SSO), user federation, identity brokering, and multi-tenancy. Supports OAuth 2.0, OpenID Connect, and SAML 2.0 — a drop-in</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614110801) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
