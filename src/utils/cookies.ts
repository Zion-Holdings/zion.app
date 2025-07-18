export function setCookie(): unknown {name: "string", value: "string", days = 30) {;"
  if (typeof document === 'undefined') return;
  const expires: unknown unknown = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};
;
export function getCookie(): unknown {name: string): string | null {;'
  if (typeof document === 'undefined') return null;'
  const match: unknown unknown = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));'
  return match ? decodeURIComponent(match[2] || '') : null;
};
;
export function getCsrfToken(): unknown {): string | null {;'
  return getCookie('csrftoken');
};
'