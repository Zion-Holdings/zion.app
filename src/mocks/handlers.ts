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

  // Handler for marketplace products API - simulates an error
  http.get('/api/marketplace/products', ({ request, params, cookies }) => {
    return HttpResponse.json(
      { error: 'Internal Server Error from MSW' },
      { status: 500 }
    );
  }),
]
