import { useEffect } from 'react';

export default function ImagesReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/images/unused.html');
    }
  }, []);
  return null;
}