
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function EnterpriseBilling() {
  const { user } = useAuth();
  const router = useRouter();
  
  // Check if user has billing permissions
  const hasBillingAccess = user?.role === "enterprise_admin" || 
                          (user?.userType === 'admin');
  
  if (!hasBillingAccess) {
    if (typeof window !== 'undefined') {
      router.push('/unauthorized');
    }
    return null;
  }

  return (
    <ProtectedRoute>
      <SEO 
        title="Enterprise Billing - Zion AI Marketplace"
        description="Manage your subscription, view invoice history, and download billing statements."
      />
      <Header />
      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
      <Footer />
    </ProtectedRoute>
  );
}
