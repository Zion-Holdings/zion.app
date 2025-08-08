import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LearnRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/academy');
  }, [router]);
  return null;
}