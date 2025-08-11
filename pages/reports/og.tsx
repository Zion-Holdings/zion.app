import { useEffect } from 'react';

export default function OgReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/og/index.html');
    }
  }, []);
  return null;
}