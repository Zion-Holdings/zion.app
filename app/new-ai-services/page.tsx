'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NewAiServicesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/services/');
  }, [router]);
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950">
      <p className="text-slate-400">Redirecting to <a href="/services/" className="text-purple-300 hover:text-purple-200">services</a>…</p>
    </main>
  );
}
