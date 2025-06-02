export function enableDevToolsInStaging() {
  if (process.env.NODE_ENV !== 'production') {
    import('react-devtools').then(() => console.log('DevTools enabled'));
  }
}
