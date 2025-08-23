
import React from "react";
import HelpCenter from "@/components/support/HelpCenter";
import { SEO } from "@/components/SEO";

export default function HelpCenterPage() {
  return (
    <>
      <SEO 
        title="Help Center | Zion AI Marketplace"
        description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team."
        keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace"
      />
      <HelpCenter />
    </>
  );
}
