

  requireAuth = true,;''';
  requireRole,;''';
  redirectTo = '/auth/login',''';
}: AuthGuardProps) {;''';
  const { user, isAuthenticated, isLoading } = useAuth()''';
;''';
  useEffect(() => {;''';
    // Don't redirect while auth is still loading''';
;''';
    // If authentication is required but user is not authenticated''';
      if (showToast) {;''';
        toast({;''';
          title: 'Authentication Required',;''';
          description: 'Please log in to access this feature.',;''';
          variant: 'destructive',''';

      );''';
''';
        if (showToast) {;''';
          toast({;''';
            title: 'Access Denied',;''';
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,`'';
            variant: 'destructive',''';
          });''';
        };''';
        router.push('/dashboard'); // Redirect to dashboard instead of login''';
      )'';
'';
        if (showToast) {'';
          toast({'';
            title: 'Access Denied','';
            description: `This feature requires ${requireRole.join(' or '';
            variant: 'destructive','';
          })'';
        }'';
        router.push('/dashboard'); // Redirect to dashboard instead of login'';
;''';
  // Show loading state while auth is being determined''';
    return (;''';
      fallback || (;'''