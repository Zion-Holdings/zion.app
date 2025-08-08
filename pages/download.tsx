import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DownloadRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/mobile-app');
  }, [router]);
  return null;
}