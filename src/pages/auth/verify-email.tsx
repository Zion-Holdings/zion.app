import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client'
import { useRouter } from 'next/router // Changed from useNavigate';
import { logErrorToProduction } from '@/utils/productionLogger'
import { AuthLayout } from '@/layout'
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
'
const VerifyEmailPage = () => {;
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>(;
    'verifying','
  );
  const [message, setMessage] = useState('Verifying your email...');
  const router = useRouter(); // Changed from navigate'
;
  useEffect(() => {;
    const confirmVerification = async () => {'
      try {;
        if (!supabase) throw new Error('Supabase client not initialized');
        // Supabase client automatically handles session from URL fragment or cookie after redirect;
        // We need to ensure a session is active, which implies Supabase confirmed the email.'
        const {;
          data: "{ session "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;"
          error: sessionError,;