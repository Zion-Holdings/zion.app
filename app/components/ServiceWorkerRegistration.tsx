'use client';

import { useEffect, useState } from 'react';

type ServiceWorkerStatus =
  | 'unsupported'
  | 'registering'
  | 'registered'
  | 'failed';

export default function ServiceWorkerRegistration() {
  const [status, setStatus] = useState<ServiceWorkerStatus>('unsupported');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setStatus('unsupported');
      return;
    }
    if (!('serviceWorker' in navigator)) {
      setStatus('unsupported');
      return;
    }
    setStatus('registering');
    const swPath = '/sw.js';
    navigator.serviceWorker
      .register(swPath, { scope: '/' })
      .then(registration => {
        setStatus('registered');
        setError(null);
        if (navigator.serviceWorker.controller) {
          registration.update();
        }
      })
      .catch(err => {
        console.error('[ServiceWorkerRegistration] failed', err);
        setStatus('failed');
        setError(err?.message || 'unknown service worker error');
      });
  }, []);

  if (status === 'unsupported') return null;
  if (status === 'registered' || status === 'failed') return null;

  return null;
}
