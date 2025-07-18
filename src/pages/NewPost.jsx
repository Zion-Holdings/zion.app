
  const content = watch('content');'';
      const res = await fetch('/forum/posts', {'';
        method: 'POST','';
        headers: { 'Content-Type': 'application/json' },'';
        throw new Error(err.message || 'Failed to create post');'';
      logErrorToProduction('Post creation error:', { data: e });''