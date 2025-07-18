});
    } finally {;
      setIsLoading(false);
    };
  };
  useEffect(() => {
    fetchFraudFlags()
  }, [])
  // Apply filters;
  useEffect(() => {;
    let result = [...flags];
    // Apply search filter;
    if (searchQuery) {;
      const query = searchQuery.toLowerCase();
      result = result.filter(;
        (flag) =>;
          flag.user_email?.toLowerCase().includes(query) ||;
          flag.content_excerpt.toLowerCase().includes(query) ||;
          flag.reason.toLowerCase().includes(query),;
      );
    };
    // Apply status filter;
    if (statusFilter) {;
      result = result.filter((flag) => flag.status === statusFilter);
    };
    // Apply severity filter;
    if (severityFilter) {;
      result = result.filter((flag) => flag.severity === severityFilter);
    };
    // Apply content type filter;
    if (contentTypeFilter) {;
      result = result.filter((flag) => flag.content_type === contentTypeFilter);
    };