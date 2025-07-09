import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

export async function enableDevToolsInStaging() {

  // Only attempt to load in development, or if explicitly enabled via NEXT_PUBLIC_DEVTOOLS
  const isDev =
    (typeof import.meta !== 'undefined' &&
      (import.meta as any).env &&
      ((import.meta as any).env.DEV || (import.meta as any).env.REACT_APP_DEVTOOLS === 'true')) ||
    process.env.NEXT_PUBLIC_DEVTOOLS === 'true';
  if (isDev) {
    try {
      await import(/* @vite-ignore */ 'react-devtools');
      logInfo('DevTools enabled');
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
