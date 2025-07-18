</div>;
    );
  };
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return null; // Redirect handled by useRouter;
  };