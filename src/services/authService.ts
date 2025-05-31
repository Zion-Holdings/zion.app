const API_URL = import.meta.env.VITE_API_URL || '';

export async function loginUser(email: string, password: string): Promise<{ res: Response, data: any }> {
  const MAX_RETRIES = 3;
  let attempt = 0;
  let currentDelay = 1000; // Initial delay 1s

  while (attempt < MAX_RETRIES) {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      // If fetch is successful (response received, even if it's an HTTP error),
      // process the response and return. Do not retry.
      const data = await res.json().catch(() => ({})); // Keep existing error handling for .json()
      console.log('Login API Response Status:', res.status);
      console.log('Login API Response Body:', data);
      return { res, data };

    } catch (error) {
      attempt++;
      console.warn(`Login attempt ${attempt} failed with network error. Retrying in ${currentDelay}ms...`, error);
      if (attempt >= MAX_RETRIES) {
        console.error('Login failed after multiple retries due to network error.', error);
        const errorPayload = { error: 'Network error. Please try again later.' };
        return {
          res: new Response(JSON.stringify(errorPayload), {
            status: 503,
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'application/json'}
          }),
          data: errorPayload
        };
      }
      await new Promise(resolve => setTimeout(resolve, currentDelay));
      currentDelay *= 2; // Exponential backoff
    }
  }

  // This part should ideally not be reached if MAX_RETRIES > 0,
  // but as a fallback for an unexpected loop exit.
  console.error('Exited login retry loop unexpectedly.');
  const fallbackErrorPayload = { error: "Login failed, max retries reached or unexpected error." };
  return {
     res: new Response(JSON.stringify(fallbackErrorPayload), {
       status: 0, // Using 0 or another distinct status for "should not happen" cases
       statusText: 'Client Fallback Error',
       headers: { 'Content-Type': 'application/json' }
     }),
     data: fallbackErrorPayload
  };
}

export async function registerUser(name: string, email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json().catch(() => ({}));
  console.log('Register API Response Status:', res.status);
  console.log('Register API Response Body:', data);
  return { res, data };
}
