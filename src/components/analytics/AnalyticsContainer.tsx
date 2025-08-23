import React, { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

interface AnalyticsContainerProps {
  children: React.ReactNode;
}

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  
  // Check if user is admin (using either role or userType)
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin';
  
  useEffect(() => {
    if (!isLoading) {
      // If not authenticated, redirect
      if (!isAuthenticated) {
        router.push('/login?from=/analytics');
        return;
      }
      
      // If not admin, redirect
      if (!isAdmin) {
        router.push('/unauthorized');
        return;
      }
    }
  }, [isAuthenticated, isAdmin, isLoading, router]);
  
  // If still loading auth status, show loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    );
  }
  
  // If not authenticated or not admin, show loading while redirecting
  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">Redirecting...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO
        title="Analytics Dashboard"
        description="Track user behavior, page views, and conversion rates to improve your platform performance"
        noindex
      />
      <main className="flex-1 p-6 md:p-8 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-zion-slate-light">
            Track user behavior, page views, and conversion rates
          </p>
        </div>
        {children}
      </main>
    </div>
  );
}
