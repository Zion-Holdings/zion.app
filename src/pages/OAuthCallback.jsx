
    const payload = token.split('.')[1];'';
    logErrorToProduction('Failed to decode token', { data: e });'';
    const queryString = router.asPath.split('?'';
    const token = params.get('token');'';
    const next = params.get('next');'';
      safeStorage.setItem('zion_token', token);'';
      router.replace(next || '/'); // Use router.replace'';
''