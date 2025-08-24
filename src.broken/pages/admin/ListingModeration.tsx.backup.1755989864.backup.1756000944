import { useEffect, useState } from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { ModerationLog } from '@/types/moderation';
import { FlaggedListingsTable } from '@/components/admin/moderation/FlaggedListingsTable';
import AdminLayout from '@/components/admin/AdminLayout';
import { toast } from '@/hooks/use-toast';

export default function ListingModeration() {
  const [logs, setLogs] = useState<ModerationLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLogs = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('moderation_logs')
      .select('*')
      .eq('status', 'pending_review')
      .order('created_at', { ascending: false });
    if (!error) {
      setLogs(data || []);
    } else {
      toast({ title: 'Error', description: 'Failed to load moderation logs', variant: 'destructive' });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleAction = async (id: string, action: 'approved' | 'rejected') => {
    const { error } = await supabase
      .from('moderation_logs')
      .update({ status: action, reviewed_at: new Date().toISOString() })
      .eq('id', id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to update log', variant: 'destructive' });
    } else {
      toast({ title: 'Updated', description: `Listing ${action}` });
      fetchLogs();
    }
  };

  return (
    <AdminLayout>
      <SEO title="Listing Moderation" description="Moderate product and service listings" />
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Listing Moderation</h1>
        <Card>
          <CardContent className="p-0">
            <FlaggedListingsTable logs={logs} isLoading={isLoading} onAction={handleAction} />
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
