import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [router.asPath]); // Using router.asPath to trigger on any URL change

  return null;
}
