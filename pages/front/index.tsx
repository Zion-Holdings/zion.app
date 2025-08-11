import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FrontIndexRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/main/front');
  }, [router]);
  return null;
}