export async function enableDevToolsInStaging() {
  if (process.env.NODE_ENV !== 'production') {
    try {
      await import(
        /* @vite-ignore */
        'react-devtools'
      );
      console.log('DevTools enabled');
    } catch (err) {
      console.error('Failed to load react-devtools', err);
    }
  }
}
