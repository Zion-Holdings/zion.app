import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BenchmarkingRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/salary-insights');
  }, [router]);
  return null;
}