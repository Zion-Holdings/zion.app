'use client';
import { ZionProvider, useJobs } from '@zion/sdk/react';

function Jobs() {
  const { data, loading, error } = useJobs();
  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data, null, 2)}</pre>;
}

export default function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_ZION_API_URL || 'https://api.zion.example';
  return (
    <main style={{ padding: 24 }}>
      <h1>Zion Next.js Starter</h1>
      <ZionProvider options={{ baseUrl }}>
        <Jobs />
      </ZionProvider>
    </main>
  );
}