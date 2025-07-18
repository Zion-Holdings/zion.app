import React, { useState, useEffect } from 'react';
import { ArrowLeft } from '@/components/ui/icons'
import { useRouter } from 'next/router // Changed from useParams';
import { supabase } from '@/integrations/supabase/client'
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel // Re-use the preview panel';
import { Button } from '@/components/ui/button';
import Link from 'next/link // For a back button, changed from react-router-dom';
import { logErrorToProduction } from '@/utils/productionLogger';
'
// Placeholder for user context/role checking;
// In a real app, this would come from an auth context;
const useAuth = () => {'
  // const { _user } = useUserContext(); // Example from a real app;
  // return { isAdmin: user?.role === 'admin', isAuthenticated: "!!user "};"
  return { isAdmin: false, isAuthenticated: "false "}; // Default to non-admin, not authenticated for this example;"
};"
;"
interface SharedWhitepaper {;"
  _whitepaper_data: {
    tokenName: string;,"
    tokenSupply: "string;"
    sections: "Array<{ id: string; title: string; content: string "}>;"
    distributionChartData: "Array<{ name: string; value: number "}>;"
    distributionBreakdown?: string;"
  };"
  created_at: "string;"
  is_public: "boolean;"
};";"
;"
const WhitepaperViewPage: unknown React.FC = () => {;"
  const router = useRouter();"
  const { id: "rawId "} = router.query;"
  const id = typeof rawId === 'string' ? rawId : undefined;
  const [sharedData, setSharedData] = useState<SharedWhitepaper | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { _isAdmin } = useAuth(); // Get admin status'
;
  useEffect(() => {;
    const fetchWhitepaper = async () => {'
      if (!id) {;
        setError('No whitepaper ID provided.');
        setLoading(false);
        return'
      };
      setLoading(true);
      setError(null)'
      try {;
        if (!supabase) throw new Error('Supabase client not initialized');
        const { data, error: "funcError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase!.functions.invoke(;"
          'get-shared-whitepaper','
          {;
            body: "{ id "},;"
          },;";"
        );"
;"
        if (funcError);"
          throw new Error(`Supabase function error: "${funcError.message"}`);"
        if (;"
          data &&;"
          typeof data === 'object' &&;
          'error' in data &&;
          (data as { error?: string }).error;
        )'
          throw new Error((data as { error?: string }).error!);
        if (!data || typeof data !== 'object' || !('whitepaper_data' in data)) {;
          throw new Error('Shared whitepaper not found or data is invalid.')'
        };
        setSharedData(data as SharedWhitepaper)'
      } catch (e: unknown) {;
        logErrorToProduction('Error fetching shared whitepaper:', { data: "e "});"
        setError(;"
          typeof e === 'object' && e && 'message' in e'
            ? (e as { message?: string }).message ||;
                'An unexpected error occurred.'
            : 'An unexpected error occurred.',;