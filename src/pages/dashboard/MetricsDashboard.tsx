import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExportPanel } from "@/components/analytics/ExportPanel";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
import AdminLayout from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/ProtectedRoute";

interface MetricsDashboardProps {
  adminView?: boolean;
}

export default function MetricsDashboard({ adminView = false }: MetricsDashboardProps) {
  const [internalOnly, setInternalOnly] = useState(adminView);

  const { data: marketplace } = useQuery({
    queryKey: ['marketplace-metrics'],
    queryFn: async () => {
      const now = new Date();
      const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      const jobs24h = await supabase
        .from('jobs')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', dayAgo.toISOString());
      const jobs7d = await supabase
        .from('jobs')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', weekAgo.toISOString());
      const jobsTotal = await supabase
        .from('jobs')
        .select('*', { count: 'exact', head: true });
      const talentTotal = await supabase
        .from('talent_profiles')
        .select('*', { count: 'exact', head: true });

      return {
        jobs24h: jobs24h.count || 0,
        jobs7d: jobs7d.count || 0,
        jobsTotal: jobsTotal.count || 0,
        talent: talentTotal.count || 0,
      };
    },
    refetchInterval: 30000,
  });

  const { data: token } = useQuery({
    queryKey: ['token-metrics'],
    queryFn: async () => {
      const supply = await supabase
        .from('wallets')
        .select('balance', { count: 'exact' });
      const activeWallets = await supabase
        .from('wallets')
        .select('*', { count: 'exact', head: true });
      const volume = await supabase
        .from('token_transactions')
        .select('amount')
        .gte('created_at', new Date(Date.now() - 24*60*60*1000).toISOString());
      const totalVolume = volume.data?.reduce((t: number, v: any) => t + (v.amount || 0), 0) || 0;

      return {
        supply: supply.data?.reduce((t:number,c:any)=>t+(c.balance||0),0) || 0,
        activeWallets: activeWallets.count || 0,
        volume: totalVolume,
      };
    },
    refetchInterval: 30000,
  });

  const content = (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <main className="flex-1 p-6 md:p-8 container mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Zion Metrics</h1>
            <p className="text-zion-slate-light">Real-time protocol KPIs</p>
          </div>
          {adminView && (
            <Button variant="outline" onClick={() => setInternalOnly(!internalOnly)}>
              {internalOnly ? 'Public View' : 'Internal View'}
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Marketplace</h3>
              <p className="text-zion-slate-light">Jobs posted 24h/7d/total: {marketplace?.jobs24h} / {marketplace?.jobs7d} / {marketplace?.jobsTotal}</p>
              <p className="text-zion-slate-light">Talent onboarded: {marketplace?.talent}</p>
            </CardContent>
          </Card>
          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Token</h3>
              <p className="text-zion-slate-light">Circulating supply: {token?.supply}</p>
              <p className="text-zion-slate-light">Active wallets: {token?.activeWallets}</p>
              <p className="text-zion-slate-light">24h volume: {token?.volume}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6">
          <AnalyticsChart
            title="Jobs Posted"
            data={[]}
            dataKeys={['jobs']}
          />
        </div>

        <ExportPanel />
      </main>
    </div>
  );

  if (adminView) {
    return (
      <ProtectedRoute adminOnly>
        <AdminLayout>{content}</AdminLayout>
      </ProtectedRoute>
    );
  }

  return <ProtectedRoute>{content}</ProtectedRoute>;
}
