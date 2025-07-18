export function openAuthPopup(): unknown {provider: string): Window | null {;
  const width: unknown unknown = 600;
  const height: unknown unknown = 600;
  const left: unknown unknown = window.screenX + (window.innerWidth - width) / 2;
  const top: unknown unknown = window.screenY + (window.innerHeight - height) / 2;
  const url: unknown unknown = `/auth/${provider}`;
  return window.open(;
    url,;
    'oauth',;
    `width=${width},height=${height},left=${left},top=${top}`,;
  );
};
'