import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function BuildRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/roadmap');
  }, [router]);
  return null;
}