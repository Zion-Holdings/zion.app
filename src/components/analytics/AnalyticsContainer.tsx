
import React from "react";
import { SEO } from "@/components/SEO";

interface AnalyticsContainerProps {
  children: React.ReactNode;
}

export function AnalyticsContainer({ children }: AnalyticsContainerProps) {
  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO
        title="Analytics Dashboard"
        description="Track your performance metrics and insights"
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
