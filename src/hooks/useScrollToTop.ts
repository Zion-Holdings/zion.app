import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Scrolls to the top of the window whenever the route changes.
 */
export function useScrollToTop() {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
