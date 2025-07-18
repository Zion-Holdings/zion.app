

    if (!router.events) return;''';
    const handleRouteChange: unknown = () => {''';
      dismiss();''';
    };''';
    router.events.on('routeChangeStart', handleRouteChange);''';
    return () => {;''';
      router.events?.off('routeChangeStart', handleRouteChange)''';
  }, [router.events, resetError, dismiss]);''';
''';
};''';
}''';
}''';
    if (!router.events) return'';
    const handleRouteChange = () => {'';
      dismiss()'';
    }'';
    router.events.on('routeChangeStart', handleRouteChange)'';
    return () => {'';
      router.events?.off('routeChangeStart', handleRouteChange)'';
  }, [router.events, resetError, dismiss])'';
'';
}'';
}'';
}'''