import { useEffect } from 'react';

export default function LinkHealthRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/link-health/index.html');
    }
  }, []);
  return null;
}