import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

export async function enableDevToolsInStaging() {

  // Only attempt to load in development, or if explicitly enabled via NEXT_PUBLIC_DEVTOOLS
  const isDev =
    (typeof import.meta !== 'undefined' &&
      (import.meta as any).env &&
      (import.meta as any).env.DEV) ||
    process.env.NEXT_PUBLIC_DEVTOOLS === 'true';
  if (isDev) {
    try {
      // The /* @vite-ignore */ comment might still be useful if we want to avoid
      // Vite trying to be too clever with this dynamic import even in dev.
      // await import(/* @vite-ignore */ 'react-devtools');
      // logInfo('DevTools enabled');
      logInfo('React DevTools import temporarily commented out for build troubleshooting.');
    } catch (err) {
      logErrorToProduction('Failed to load react-devtools (import is commented out)', { data: err });
    }
  }
}

export function highlightZeroHeightElements() {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      const all = document.querySelectorAll<HTMLElement>('*');
      all.forEach((el) => {
        if (el.offsetHeight === 0) {
          el.style.outline = '2px dashed red';
          el.title = 'Zero height – may be broken';
        }
      });
    });
  }
}
