export async function enableDevToolsInStaging() {
  const enable =
    process.env.NODE_ENV !== 'production' ||
    import.meta.env.REACT_APP_DEVTOOLS === 'true';
  if (enable) {
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
