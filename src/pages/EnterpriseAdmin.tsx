
import React from "react";
import { Header } from "@/components/Header";
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router"; // Changed to named import
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function EnterpriseAdmin() {
  const { user } = useAuth();
  
  // Check if user has enterprise admin role
  const isEnterpriseAdmin = user?.role === "enterprise_admin";
  
  if (!isEnterpriseAdmin) {
    return // Use router.push('/unauthorized') or redirect in getServerSideProps;
  }

  return (
    <ProtectedRoute>
      <SEO 
        title="Enterprise Admin - Zion AI Marketplace"
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace."
      />
      <Header />
      <main className="min-h-screen bg-background">
        <AdminDashboard />
      </main>
    </ProtectedRoute>
  );
}
