import React from 'react';
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures";
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges";
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable";
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA";

export default function Enterprise() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Enterprise Solutions - Zion Tech Group" 
        description="Enterprise-grade AI and tech solutions for large organizations. Scale your operations with Zion Tech Group's comprehensive marketplace."
        keywords="enterprise, AI solutions, tech marketplace, large organizations, Zion Tech Group"
        canonical="https://ziontechgroup.com/enterprise"
      />

      <EnterpriseHero />
      <EnterpriseFeatures />
      <EnterpriseTrustBadges />
      <EnterprisePricingTable />
      <EnterpriseTestimonials />
      <EnterpriseCTA />

      <Footer />
    </div>
  );
}