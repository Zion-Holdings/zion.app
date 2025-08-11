import { useEffect } from 'react';

export default function DocsLinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/docs-links/index.html');
    }
  }, []);
  return null;
}