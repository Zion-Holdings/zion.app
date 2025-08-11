import { useEffect } from 'react';

export default function AiTrendsRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/ai-trends/index.html');
    }
  }, []);
  return null;
}