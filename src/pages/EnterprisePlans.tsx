
import React from "react";
import { Header } from "@/components/Header";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterpriseStickyNav } from "@/components/enterprise/EnterpriseStickyNav";
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable";
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures";
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA";
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges";
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
import { SEO } from "@/components/SEO";

export default function EnterprisePlans() {
  return (
    <>
      <SEO 
        title="Enterprise Plans - Zion AI Marketplace"
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools."
      />
      <Header />
      <main className="min-h-screen bg-background">
        <EnterpriseHero />
        <EnterpriseStickyNav />
        <EnterprisePricingTable />
        <EnterpriseFeatures />
        <EnterpriseTestimonials />
        <EnterpriseTrustBadges />
        <EnterpriseCTA />
      </main>
    </>
  );
}
