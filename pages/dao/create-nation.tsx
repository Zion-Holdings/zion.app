import { useEffect } from 'react';

export default function RedirectCreateNation() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/nation-builder');
    }
  }, []);
  return null;
}