import { useEffect } from 'react';

export default function PerformanceReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/performance/index.html');
    }
  }, []);
  return null;
}