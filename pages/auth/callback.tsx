import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { supabase } from '../../utils/supabase/client';

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Auth callback error:', error);
        router.push('/auth?error=auth_failed');
        return;
      }

      if (data.session) {
        // Successful authentication
        router.push('/');
      } else {
        // No session found
        router.push('/auth');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
      <Head>
        <title>Authenticating - Zion</title>
      </Head>
      
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Authenticating...
        </h2>
        <p className="text-gray-300 mt-2">Please wait while we complete your sign-in.</p>
      </div>
    </div>
  );
};

export default AuthCallback;
