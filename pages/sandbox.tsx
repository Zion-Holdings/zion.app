import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SandboxRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/devnet');
  }, [router]);
  return null;
}