import { http, HttpResponse } from 'msw'

const API_URL = '/auth/login' // Assuming login endpoint is /auth/login

export const handlers = [
  // Successful login
  http.post(API_URL, async ({ request }) => {
    const body = await request.json() as any;
    if (body.email === 'test@example.com' && body.password === 'password123') {
      return HttpResponse.json({
        token: 'mock-jwt-token',
        user: {
          id: 'user-123',
          email: 'test@example.com',
          displayName: 'Test User',
          userType: 'test',
          profileComplete: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      })
    } else if (body.email === 'fail@example.com') {
      // Failed login (401)
      return HttpResponse.json(
        { message: 'Incorrect email or password' },
        { status: 401 }
      )
    } else if (body.email === 'servererror@example.com') {
      // Generic server error
        return HttpResponse.json(
          { message: 'Internal Server Error' },
          { status: 500 }
        )
    }
    // Fallback for other emails or if password doesn't match the successful one
    return HttpResponse.json(
        { message: 'Unhandled mock scenario' },
        { status: 400 }
      )
  }),

  // Handler for marketplace products API
  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url);
    const scenario = url.searchParams.get('scenario');

    if (scenario === 'success') {
      return HttpResponse.json([
        { id: 'prod-1', title: 'Product 1', description: 'Desc 1', category: 'AI Models', price: 100, currency: 'USD', tags: [], author: { name: 'Auth1', id: 'a1' }, images: [], createdAt: new Date(Date.now() - 86400000 * 2).toISOString(), rating: 4.5, reviewCount: 10, aiScore: 92 },
        { id: 'prod-2', title: 'Product 2', description: 'Desc 2', category: 'AI Services', price: 200, currency: 'USD', tags: [], author: { name: 'Auth2', id: 'a2' }, images: [], createdAt: new Date(Date.now() - 86400000 * 1).toISOString(), rating: 4.7, reviewCount: 20, aiScore: 95 },
        { id: 'prod-3', title: 'Product 3', description: 'Desc 3', category: 'AI Models', price: 150, currency: 'USD', tags: [], author: { name: 'Auth3', id: 'a3' }, images: [], createdAt: new Date(Date.now() - 86400000 * 3).toISOString(), rating: 4.2, reviewCount: 5, aiScore: 88 },
      ]);
    }

    if (scenario === 'empty') {
      return HttpResponse.json([]);
    }

    if (scenario === 'invalidDate') {
      return HttpResponse.json([
        { id: 'prod-1', title: 'Product 1 Valid Date', description: 'Desc 1', category: 'AI Models', price: 100, currency: 'USD', tags: [], author: { name: 'Auth1', id: 'a1' }, images: [], createdAt: new Date().toISOString(), rating: 4.5, reviewCount: 10 },
        { id: 'prod-2', title: 'Product 2 Invalid Date', description: 'Desc 2', category: 'AI Services', price: 200, currency: 'USD', tags: [], author: { name: 'Auth2', id: 'a2' }, images: [], createdAt: 'invalid-date-string', rating: 4.7, reviewCount: 20 },
        { id: 'prod-3', title: 'Product 3 Missing Date', description: 'Desc 3', category: 'AI Models', price: 150, currency: 'USD', tags: [], author: { name: 'Auth3', id: 'a3' }, images: [], rating: 4.2, reviewCount: 5 },
      ]);
    }

    if (scenario === 'networkError') {
      return HttpResponse.error();
    }

    // Default to server error if no specific scenario matches, or keep the original behavior
    return HttpResponse.json(
      { error: 'Internal Server Error from MSW for /api/products' },
      { status: 500 }
    );
  }),
];
