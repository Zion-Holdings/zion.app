import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CapitalAlias() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/fundraising');
  }, [router]);
  return null;
}