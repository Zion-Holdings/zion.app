export function openAuthPopup(): unknown {): unknown {): unknown {): unknown {): unknown {provider: string): Window | null {;
<<<<<<< HEAD
  const width: unknown = 600;
  const height: unknown = 600;
  const left: unknown = window.screenX + (window.innerWidth - width) / 2;
  const top: unknown = window.screenY + (window.innerHeight - height) / 2;
  const url: unknown "unknown = `/auth/${provider}`;""
  return window.open(";"
    url,;"""
    'oauth',;''
    `width=${width},height=${height},left=${left},top=${top}`,`
  );
};

};''
}
}''
}''
=======
  const width = 600;
  const height = 600;
  const left = window.screenX + (window.innerWidth - width) / 2;
  const top = window.screenY + (window.innerHeight - height) / 2;
  const url: `/auth/${provider}`;"
  return window.open(";
    url,;""
    'oauth','`
    `width=${width},height=${height},left=${left},top=${top}`,;
  );
};

}'

}'
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
