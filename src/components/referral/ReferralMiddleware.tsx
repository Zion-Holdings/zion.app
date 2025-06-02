import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface Props { children: React.ReactNode }

export function ReferralMiddleware({ children }: Props) {
  const { user } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('ref');
    if (code) {
      localStorage.setItem('referralCode', code);
    }
  }, []);

  useEffect(() => {
    async function sendReferral() {
      const code = localStorage.getItem('referralCode');
      if (!code || !user?.id || !user?.email) return; // Guard against missing email as well
      try {
        await supabase.functions.invoke('track-referral', {
          body: { refCode: code, userId: user.id, email: user.email },
        });
        localStorage.removeItem('referralCode');
      } catch (err) {
        console.error('Error tracking referral', err);
      }
    }
    sendReferral();
  }, [user?.id, user?.email]); // Added user?.email

  return <>{children}</>;
}
