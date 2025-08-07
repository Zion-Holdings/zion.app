  // Define public routes that don'''
    '/'''
    '/about'''
    '/contact'''
    '/blog'''
    '/services'''
    '/products'''
    '/talent'''
    '/auth'''
    '/auth/callback'''
    '/404'''
    '/api'''
    request.nextUrl.pathname.startsWith(route + '/''')
    request.nextUrl.pathname.startsWith('/blog/''')
    request.nextUrl.pathname.startsWith('/category/''')
    request.nextUrl.pathname.startsWith('/chat-content/''')
    request.nextUrl.pathname.startsWith('/services/''')
  // Only redirect unauthenticated users if they'''
    url.pathname = '/auth'''
  if (user && request.nextUrl.pathname.startsWith('/auth') && !request.nextUrl.pathname.startsWith('/auth/callback''')
    url.pathname = '/'''
    '/((?!_next/static|_next/image|favicon.ico|public|auth/callback).*)'''