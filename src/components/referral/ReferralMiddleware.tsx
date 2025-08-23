import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import {logErrorToProduction} from '@/utils/productionLogger';


interface Props { children: React.ReactNode }

export function ReferralMiddleware({ children }: Props) {
  const { user } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('ref');
    if (code) {
      safeStorage.setItem('referralCode', code);
    }
  }, []);

  useEffect(() => {
    async function sendReferral() {
      const code = safeStorage.getItem('referralCode');
      if (!code || !user?.id) return;
      try {
        await supabase.functions.invoke('track-referral', {
          body: { refCode: code, userId: user.id, email: user.email },
        });
        safeStorage.removeItem('referralCode');
      } catch (err) {
        logErrorToProduction('Error tracking referral', { data: err });
      }
    }
    sendReferral();
  }, [user?.id]);

  return <>{children}</>;
}
