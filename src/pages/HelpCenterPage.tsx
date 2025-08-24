
import React from "react";
import HelpCenter from "@/components/support/HelpCenter";
import { SEO } from "@/components/SEO";

export default function HelpCenterPage() {
  return (
    <>
      <SEO 
        title="Help Center | Zion Tech Group"
        description="Find answers to common questions about using the Zion Tech Group platform. Browse help articles or contact our support team."
        keywords="help center, support, FAQ, tutorial, guide, Zion Tech Group"
        canonical="https://ziontechgroup.com/help"
      />
      <HelpCenter />
    </>
  );
}
