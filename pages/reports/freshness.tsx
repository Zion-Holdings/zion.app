import { useEffect } from 'react';

export default function FreshnessReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/freshness/index.html');
    }
  }, []);
  return null;
}