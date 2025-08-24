import { useEffect } from 'react';

export default function DepsReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/deps/index.html');
    }
  }, []);
  return null;
}