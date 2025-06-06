export async function enableDevToolsInStaging() {
  // Only attempt to load in development, or if explicitly enabled via VITE_DEVTOOLS
  const enable = import.meta.env.DEV || import.meta.env.VITE_DEVTOOLS === 'true';
  if (enable) {
    try {
      // The /* @vite-ignore */ comment might still be useful if we want to avoid
      // Vite trying to be too clever with this dynamic import even in dev.
      // await import(/* @vite-ignore */ 'react-devtools');
      // console.log('DevTools enabled');
      console.log('React DevTools import temporarily commented out for build troubleshooting.');
    } catch (err) {
      console.error('Failed to load react-devtools (import is commented out)', err);
    }
  }
}
