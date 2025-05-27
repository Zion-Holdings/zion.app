export async function loginUser(email: string, password: string) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json().catch(() => ({}));
  return { res, data };
}

export async function registerUser(name: string, email: string, password: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json().catch(() => ({}));
  return { res, data };
}
