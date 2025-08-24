import { useEffect } from 'react';

export default function UnusedExportsReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/maintenance/unused-exports/index.html');
    }
  }, []);
  return null;
}