import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function WhitepaperGeneratorRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tokenomics');
  }, [router]);
  return null;
}