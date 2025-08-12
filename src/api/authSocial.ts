export function openAuthPopup(provider: string): Window | null {
  const width = 600;
  const height = 600;
  const left = window.screenX + (window.innerWidth - width) / 2;
  const top = window.screenY + (window.innerHeight - height) / 2;
  const url = `/auth/${provider}`;
  return window.open(url, 'oauth', `width=${width},height=${height},left=${left},top=${top}`);
}
