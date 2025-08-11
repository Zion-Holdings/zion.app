import { useEffect } from 'react';

export default function InternalLinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/internal-links/index.html');
    }
  }, []);
  return null;
}