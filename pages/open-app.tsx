import { useEffect } from 'react';

const tryOpenApp = (scheme: string, fallback: string) => {
  const now = Date.now();
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = scheme;
  document.body.appendChild(iframe);
  setTimeout(() => {
    const elapsed = Date.now() - now;
    if (elapsed < 1500) {
      window.location.href = fallback;
    }
    document.body.removeChild(iframe);
  }, 1000);
};

export default function OpenApp() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scheme = params.get('scheme') || 'zion://open';
    const fallback = params.get('fallback') || '/mobile-app';
    tryOpenApp(scheme, fallback);
  }, []);
  return null;
}