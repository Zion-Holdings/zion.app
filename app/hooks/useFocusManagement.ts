'use client';

import { useEffect } from 'react';

export function useFocusManagement() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const FOCUS_STORAGE_KEY = 'zion:last-focused-id';

    const getTargetFromHash = () => {
      const hash = window.location.hash;
      if (!hash) return null;
      const id = hash.replace(/^#/, '');
      const candidate = document.getElementById(id);
      if (candidate && typeof candidate.focus === 'function') return candidate;
      return null;
    };

    const tryFocus = (element: HTMLElement | null) => {
      if (!element) return false;
      try {
        element.focus({ preventScroll: true });
        return true;
      } catch {
        return false;
      }
    };

    const focusHashTarget = () => {
      const target = getTargetFromHash();
      if (target) {
        tryFocus(target);
      }
    };

    const persistFocusedElement = () => {
      const active = document.activeElement as HTMLElement | null;
      if (!active) return;
      const id = active.id || active.getAttribute('aria-describedby');
      if (id) {
        try {
          sessionStorage.setItem(FOCUS_STORAGE_KEY, id);
        } catch {
          // ignore storage errors
        }
      }
    };

    const restoreFocusedElement = () => {
      try {
        const id = sessionStorage.getItem(FOCUS_STORAGE_KEY);
        if (!id) return;
        const target = document.getElementById(id) || document.querySelector(`[aria-describedby="${id}"]`);
        if (target && typeof (target as HTMLElement).focus === 'function') {
          (target as HTMLElement).focus({ preventScroll: true });
        }
      } catch {
        // ignore restoration errors
      }
    };

    const controller = new AbortController();

    const handleHashChange = () => {
      window.setTimeout(focusHashTarget, 0);
    };

    const handlePopState = () => {
      restoreFocusedElement();
    };

    const handleClick = (event: Event) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      persistFocusedElement();
    };

    const timer = window.setTimeout(() => {
      if (window.location.hash) {
        focusHashTarget();
      }
    }, 0);

    window.addEventListener('hashchange', handleHashChange, { signal: controller.signal });
    window.addEventListener('popstate', handlePopState, { signal: controller.signal });
    window.addEventListener('click', handleClick, { signal: controller.signal });

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, []);
}
