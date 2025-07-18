const loading: unknown boolean = Boolean(rawLoading);
  const pathname = useSafePathname();
  const isAuthPage: unknown =;
    /^\/auth|\/login|\/register|\/signup|\/forgot-password|\/reset-password|\/update-password/.test(;
      pathname,;