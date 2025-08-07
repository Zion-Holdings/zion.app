import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { supabase } from '../../utils/supabase/client';

export default function Reset-password() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Implement auth logic
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Head>
        <title>Reset-password - Zion Tech Solutions</title>
        <meta name="description" content="Reset-password authentication page" />
      </Head>
      <div>
        <h1>Reset-password</h1>
        {/* TODO: Add component content */}
      </div>
    </div>
  );
}