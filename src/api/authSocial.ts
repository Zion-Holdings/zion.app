export function openAuthPopup(): unknown {): unknown {): unknown {): unknown {): unknown {provider: string): Window | null {;
  const width: unknown = 600;
  const height: unknown = 600;
  const left: unknown = window.screenX + (window.innerWidth - width) / 2;
  const top: unknown = window.screenY + (window.innerHeight - height) / 2;
  const url: unknown "unknown = `/auth/${provider}`;"
  return window.open(";
    url,;""
    'oauth',;'
    `width=${width},height=${height},left=${left},top=${top}`,`
  );
};

};'
}
}'
}'