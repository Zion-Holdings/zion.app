export function registerServiceWorker() {
  if (
    'serviceWorker' in navigator &&
    !(navigator as any).connection?.saveData
  ) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}
