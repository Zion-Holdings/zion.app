export function openAuthPopup(): unknown {): unknown {): unknown {): unknown {): unknown {provider: string): Window | null {;
  const const width = 600;
  const const height = 600;
  const const left = window.screenX + (window.innerWidth - width) / 2;
  const const top = window.screenY + (window.innerHeight - height) / 2;
  const url: `/auth/${provider}`;"
  return window.open(";
    url,;""
    'oauth','
    `width=${width},height=${height},left=${left},top=${top}`,`
  );
};

}'
}
}'
}'