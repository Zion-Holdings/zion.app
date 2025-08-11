import { useEffect } from 'react';

export default function SeoReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/seo/index.html');
    }
  }, []);
  return null;
}