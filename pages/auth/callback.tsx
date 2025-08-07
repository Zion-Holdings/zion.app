import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    // Handle authentication callback
    const { code, error } = router.query;
    
    if (error) {
      console.error('Authentication error:', error);
      router.push('/auth/login');
      return;
    }

    if (code) {
      // Process the authorization code
      console.log('Authorization code received:', code);
      router.push('/dashboard');
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Authentication Callback - Zion</title>
      </Head>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Processing...</h1>
          <p className="text-gray-300">Please wait while we complete your authentication.</p>
        </div>
      </div>
    </>
  );
}
